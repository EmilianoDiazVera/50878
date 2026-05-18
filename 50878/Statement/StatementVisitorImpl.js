import StatementVisitor from './StatementVisitor.js';

import StatementParser from './StatementParser.js';

class StatementVisitorImpl
extends StatementVisitor {

    constructor() {

        super();

        this.memoria = {};
    }

    // =====================================
    // PROGRAMA
    // =====================================

    visitPrograma(ctx) {

        ctx.sentencia().forEach(sent => {

            this.visit(sent);
        });
    }

    // =====================================
    // DECLARACION
    // =====================================

    visitDeclaracion(ctx) {

        const nombre =
            ctx.IDENTIFICADOR()
               .getText();

        if (ctx.expresion()) {

            const valor =
                this.visit(
                    ctx.expresion()
                );

            this.memoria[nombre] =
                valor;
        }

        console.log(
            `Declaración: ${nombre}`
        );
    }

    // =====================================
    // ASIGNACION
    // =====================================

    visitAsignacion(ctx) {

        const nombre =
            ctx.IDENTIFICADOR()
               .getText();

        const valor =
            this.visit(
                ctx.expresion()
            );

        this.memoria[nombre] =
            valor;

        console.log(
            `${nombre} = ${valor}`
        );
    }

    // =====================================
    // MULTIPLICACION / DIVISION
    // =====================================

    visitMultiplicarDividir(ctx) {

        const izquierda =
            this.visit(
                ctx.expresion(0)
            );

        const derecha =
            this.visit(
                ctx.expresion(1)
            );

        if (
            ctx.operador.text === '*'
        ) {

            return izquierda * derecha;
        }

        return izquierda / derecha;
    }

    // =====================================
    // SUMA / RESTA
    // =====================================

    visitSumarRestar(ctx) {

        const izquierda =
            this.visit(
                ctx.expresion(0)
            );

        const derecha =
            this.visit(
                ctx.expresion(1)
            );

        if (
            ctx.operador.text === '+'
        ) {

            return izquierda + derecha;
        }

        return izquierda - derecha;
    }

    // =====================================
    // VARIABLE
    // =====================================

    visitVariable(ctx) {

        const nombre =
            ctx.IDENTIFICADOR()
               .getText();

        return this.memoria[nombre]
            !== undefined
            ? this.memoria[nombre]
            : 0;
    }

    // =====================================
    // NUMERO
    // =====================================

    visitNumero(ctx) {

        return Number(
            ctx.NUMERO().getText()
        );
    }

    // =====================================
    // PARENTESIS
    // =====================================

    visitParentesis(ctx) {

        return this.visit(
            ctx.expresion()
        );
    }
}

export default StatementVisitorImpl;