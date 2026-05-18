import StatementVisitor from './StatementVisitor.js';

class TraductorStatement extends StatementVisitor {

    // =====================================
    // PROGRAMA
    // =====================================

    visitPrograma(ctx) {

        return ctx.sentencia()
                  .map(s => this.visit(s))
                  .join('\n');
    }

    // =====================================
    // DECLARACION
    // =====================================

    visitDeclaracion(ctx) {

        const nombre =
            ctx.IDENTIFICADOR()
               .getText();

        if (ctx.expresion()) {

            return `let ${nombre} = ${this.visit(ctx.expresion())};`;
        }

        return `let ${nombre};`;
    }

    // =====================================
    // ASIGNACION
    // =====================================

    visitAsignacion(ctx) {

        return `${ctx.IDENTIFICADOR().getText()}
                = ${this.visit(ctx.expresion())};`;
    }

    // =====================================
    // MULTIPLICACION / DIVISION
    // =====================================

    visitMultiplicarDividir(ctx) {

        return `${this.visit(ctx.expresion(0))}
                ${ctx.operador.text}
                ${this.visit(ctx.expresion(1))}`;
    }

    // =====================================
    // SUMA / RESTA
    // =====================================

    visitSumarRestar(ctx) {

        return `${this.visit(ctx.expresion(0))}
                ${ctx.operador.text}
                ${this.visit(ctx.expresion(1))}`;
    }

    // =====================================
    // VARIABLE
    // =====================================

    visitVariable(ctx) {

        return ctx.IDENTIFICADOR()
                  .getText();
    }

    // =====================================
    // NUMERO
    // =====================================

    visitNumero(ctx) {

        return ctx.NUMERO()
                  .getText();
    }

    // =====================================
    // PARENTESIS
    // =====================================

    visitParentesis(ctx) {

        return `(${this.visit(ctx.expresion())})`;
    }
}

export default TraductorStatement;