grammar Statement;

// ======================================================
// REGLAS SINTACTICAS
// ======================================================

programa
    : sentencia+ EOF
    ;

// ------------------------------------------------------

sentencia
    : declaracion
    | asignacion
    | consola
    | hacerMientras
    | expresion PUNTOYCOMA
    ;

// ------------------------------------------------------

declaracion
    : (LET | VAR)
      IDENTIFICADOR
      (IGUAL expresion)?
      PUNTOYCOMA
    ;

// ------------------------------------------------------

asignacion
    : IDENTIFICADOR
      IGUAL
      expresion
      PUNTOYCOMA
    ;

// ------------------------------------------------------

consola
    : CONSOLE
      PUNTO
      LOG
      PARENTESIS_IZQ
      expresion
      PARENTESIS_DER
      PUNTOYCOMA
    ;

// ------------------------------------------------------

hacerMientras
    : DO
      bloque
      WHILE
      PARENTESIS_IZQ
      expresion
      PARENTESIS_DER
      PUNTOYCOMA
    ;

// ------------------------------------------------------

bloque
    : LLAVE_IZQ
      sentencia*
      LLAVE_DER
    ;

// ------------------------------------------------------

expresion

    : expresion
      operador=(MULTIPLICACION | DIVISION)
      expresion
      # MultiplicarDividir

    | expresion
      operador=(SUMA | RESTA)
      expresion
      # SumarRestar

    | expresion
      operador=(MENOR | MAYOR | MENORIGUAL | MAYORIGUAL | IGUALIGUAL | DIFERENTE)
      expresion
      # Comparacion

    | PARENTESIS_IZQ
      expresion
      PARENTESIS_DER
      # Parentesis

    | IDENTIFICADOR
      # Variable

    | NUMERO
      # Numero
    ;

// ======================================================
// TOKENS
// ======================================================

// ------------------------------------------------------
// PALABRAS RESERVADAS
// ------------------------------------------------------

LET : 'let';

VAR : 'var';

DO : 'do';

WHILE : 'while';

CONSOLE : 'console';

LOG : 'log';

// ------------------------------------------------------
// SIMBOLOS
// ------------------------------------------------------

PUNTOYCOMA : ';';

PUNTO : '.';

IGUAL : '=';

IGUALIGUAL : '==';

DIFERENTE : '!=';

MENOR : '<';

MAYOR : '>';

MENORIGUAL : '<=';

MAYORIGUAL : '>=';

MULTIPLICACION : '*';

DIVISION : '/';

SUMA : '+';

RESTA : '-';

PARENTESIS_IZQ : '(';

PARENTESIS_DER : ')';

LLAVE_IZQ : '{';

LLAVE_DER : '}';

// ------------------------------------------------------
// IDENTIFICADORES
// ------------------------------------------------------

IDENTIFICADOR
    : [a-zA-Z_][a-zA-Z_0-9]*
    ;

// ------------------------------------------------------
// NUMEROS
// ------------------------------------------------------

NUMERO
    : [0-9]+
    ;

// ------------------------------------------------------
// ESPACIOS
// ------------------------------------------------------

ESPACIOS
    : [ \t\r\n]+ -> skip
    ;