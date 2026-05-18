import fs from 'fs';
import antlr4 from 'antlr4';
import StatementLexer from './StatementLexer.js';
import StatementParser from './StatementParser.js';
import StatementVisitorImpl from './StatementVisitorImpl.js';
import StatementTranslatorImpl from './StatementTranslatorImpl.js';
 
// 1. Leer el archivo de entrada
const input = fs.readFileSync('input.txt', 'utf8');
 
// 2. Crear el stream de caracteres
const chars = new antlr4.InputStream(input);
 
// 3. Lexer: convierte caracteres en tokens
const lexer = new StatementLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
 
// 4. Parser: construye el árbol sintáctico
const parser = new StatementParser(tokens);
parser.buildParseTrees = true;
 
// ============ MANEJO DE ERRORES ============
const erroresLexicos = [];
const erroresSintacticos = [];
 
// Listener para errores del LEXER (caracteres no reconocidos)
lexer.removeErrorListeners();
lexer.addErrorListener({
    syntaxError: (recognizer, offendingSymbol, line, column, msg) => {
        erroresLexicos.push({ linea: line, columna: column, mensaje: msg });
    }
});
 
// Listener para errores del PARSER (estructura inválida)
parser.removeErrorListeners();
parser.addErrorListener({
    syntaxError: (recognizer, offendingSymbol, line, column, msg) => {
        erroresSintacticos.push({ linea: line, columna: column, mensaje: msg });
    },
    reportAmbiguity: () => {},
    reportAttemptingFullContext: () => {},
    reportContextSensitivity: () => {}
});
 
// 5. Construir el árbol (esto dispara los listeners si hay errores)
const tree = parser.programa();
 
// ============ REPORTE DE RESULTADO ============
const totalErrores = erroresLexicos.length + erroresSintacticos.length;
 
console.log('═══════════════════════════════════════════════════');
console.log('  ANÁLISIS DEL CÓDIGO FUENTE');
console.log('═══════════════════════════════════════════════════');
 
if (totalErrores === 0) {
    console.log('✅ EL CÓDIGO ES CORRECTO');
    console.log('   No se encontraron errores léxicos ni sintácticos.');
    console.log('═══════════════════════════════════════════════════\n');
} else {
    console.log(`❌ EL CÓDIGO TIENE ${totalErrores} ERROR(ES)`);
    console.log(`   Léxicos:     ${erroresLexicos.length}`);
    console.log(`   Sintácticos: ${erroresSintacticos.length}`);
    console.log('═══════════════════════════════════════════════════\n');
 
    if (erroresLexicos.length > 0) {
        console.log('🔤 ERRORES LÉXICOS (caracteres no reconocidos):');
        console.log('---------------------------------------------------');
        erroresLexicos.forEach((e, i) => {
            console.log(`   ${i + 1}. Línea ${e.linea}, columna ${e.columna}`);
            console.log(`      → ${e.mensaje}`);
        });
        console.log();
    }
 
    if (erroresSintacticos.length > 0) {
        console.log('📝 ERRORES SINTÁCTICOS (estructura inválida):');
        console.log('---------------------------------------------------');
        erroresSintacticos.forEach((e, i) => {
            console.log(`   ${i + 1}. Línea ${e.linea}, columna ${e.columna}`);
            console.log(`      → ${e.mensaje}`);
        });
        console.log();
    }
 
    console.log('⛔ El programa NO se ejecutará por contener errores.');
    process.exit(1);
}
 
// ============ SI NO HAY ERRORES, CONTINUAR ============
 
// 6. Imprimir el árbol sintáctico
console.log('--- Árbol sintáctico ---');
console.log(tree.toStringTree(parser.ruleNames, parser));
console.log();
 
// 7. Traducir el programa a JavaScript
console.log('--- Traducción a JavaScript ---');
const translator = new StatementTranslatorImpl();
console.log(translator.visit(tree));
console.log();
 
// 8. Ejecutar el programa con el visitor intérprete
console.log('--- Ejecutando programa ---');
const visitor = new StatementVisitorImpl();
try {
    visitor.visit(tree);
    console.log('--- Estado final de variables ---');
    console.log(visitor.memoria);
    console.log('--- Fin del programa ---');
} catch (err) {
    console.log();
    console.error('═══════════════════════════════════════════════════');
    console.error(`⚠️  ERROR EN TIEMPO DE EJECUCIÓN`);
    console.error(`   ${err.message}`);
    console.error('═══════════════════════════════════════════════════');
    process.exit(1);
}
