// Generated from Statement.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import StatementVisitor from './StatementVisitor.js';

const serializedATN = [4,1,13,58,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,4,0,12,8,0,11,0,12,0,13,1,0,1,0,1,1,1,1,1,1,1,1,1,1,3,1,23,8,1,1,2,1,
2,1,2,1,2,3,2,29,8,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,
1,4,3,4,45,8,4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,53,8,4,10,4,12,4,56,9,4,1,4,0,
1,8,5,0,2,4,6,8,0,3,1,0,1,2,1,0,5,6,1,0,7,8,60,0,11,1,0,0,0,2,22,1,0,0,0,
4,24,1,0,0,0,6,32,1,0,0,0,8,44,1,0,0,0,10,12,3,2,1,0,11,10,1,0,0,0,12,13,
1,0,0,0,13,11,1,0,0,0,13,14,1,0,0,0,14,15,1,0,0,0,15,16,5,0,0,1,16,1,1,0,
0,0,17,23,3,4,2,0,18,23,3,6,3,0,19,20,3,8,4,0,20,21,5,3,0,0,21,23,1,0,0,
0,22,17,1,0,0,0,22,18,1,0,0,0,22,19,1,0,0,0,23,3,1,0,0,0,24,25,7,0,0,0,25,
28,5,11,0,0,26,27,5,4,0,0,27,29,3,8,4,0,28,26,1,0,0,0,28,29,1,0,0,0,29,30,
1,0,0,0,30,31,5,3,0,0,31,5,1,0,0,0,32,33,5,11,0,0,33,34,5,4,0,0,34,35,3,
8,4,0,35,36,5,3,0,0,36,7,1,0,0,0,37,38,6,4,-1,0,38,39,5,9,0,0,39,40,3,8,
4,0,40,41,5,10,0,0,41,45,1,0,0,0,42,45,5,11,0,0,43,45,5,12,0,0,44,37,1,0,
0,0,44,42,1,0,0,0,44,43,1,0,0,0,45,54,1,0,0,0,46,47,10,5,0,0,47,48,7,1,0,
0,48,53,3,8,4,6,49,50,10,4,0,0,50,51,7,2,0,0,51,53,3,8,4,5,52,46,1,0,0,0,
52,49,1,0,0,0,53,56,1,0,0,0,54,52,1,0,0,0,54,55,1,0,0,0,55,9,1,0,0,0,56,
54,1,0,0,0,6,13,22,28,44,52,54];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class StatementParser extends antlr4.Parser {

    static grammarFileName = "Statement.g4";
    static literalNames = [ null, "'let'", "'var'", "';'", "'='", "'*'", 
                            "'/'", "'+'", "'-'", "'('", "')'" ];
    static symbolicNames = [ null, "LET", "VAR", "PUNTOYCOMA", "IGUAL", 
                             "MULTIPLICACION", "DIVISION", "SUMA", "RESTA", 
                             "PARENTESIS_IZQ", "PARENTESIS_DER", "IDENTIFICADOR", 
                             "NUMERO", "ESPACIOS" ];
    static ruleNames = [ "programa", "sentencia", "declaracion", "asignacion", 
                         "expresion" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = StatementParser.ruleNames;
        this.literalNames = StatementParser.literalNames;
        this.symbolicNames = StatementParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 4:
    	    		return this.expresion_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expresion_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 5);
    		case 1:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, StatementParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 11; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 10;
	            this.sentencia();
	            this.state = 13; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 6662) !== 0));
	        this.state = 15;
	        this.match(StatementParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, StatementParser.RULE_sentencia);
	    try {
	        this.state = 22;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 17;
	            this.declaracion();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 18;
	            this.asignacion();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 19;
	            this.expresion(0);
	            this.state = 20;
	            this.match(StatementParser.PUNTOYCOMA);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, StatementParser.RULE_declaracion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        _la = this._input.LA(1);
	        if(!(_la===1 || _la===2)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 25;
	        this.match(StatementParser.IDENTIFICADOR);
	        this.state = 28;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 26;
	            this.match(StatementParser.IGUAL);
	            this.state = 27;
	            this.expresion(0);
	        }

	        this.state = 30;
	        this.match(StatementParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, StatementParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.match(StatementParser.IDENTIFICADOR);
	        this.state = 33;
	        this.match(StatementParser.IGUAL);
	        this.state = 34;
	        this.expresion(0);
	        this.state = 35;
	        this.match(StatementParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expresion(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpresionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 8;
	    this.enterRecursionRule(localctx, 8, StatementParser.RULE_expresion, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            localctx = new ParentesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 38;
	            this.match(StatementParser.PARENTESIS_IZQ);
	            this.state = 39;
	            this.expresion(0);
	            this.state = 40;
	            this.match(StatementParser.PARENTESIS_DER);
	            break;
	        case 11:
	            localctx = new VariableContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 42;
	            this.match(StatementParser.IDENTIFICADOR);
	            break;
	        case 12:
	            localctx = new NumeroContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 43;
	            this.match(StatementParser.NUMERO);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 54;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 52;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MultiplicarDividirContext(this, new ExpresionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, StatementParser.RULE_expresion);
	                    this.state = 46;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 47;
	                    localctx.operador = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===5 || _la===6)) {
	                        localctx.operador = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 48;
	                    this.expresion(6);
	                    break;

	                case 2:
	                    localctx = new SumarRestarContext(this, new ExpresionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, StatementParser.RULE_expresion);
	                    this.state = 49;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 50;
	                    localctx.operador = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===7 || _la===8)) {
	                        localctx.operador = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 51;
	                    this.expresion(5);
	                    break;

	                } 
	            }
	            this.state = 56;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

StatementParser.EOF = antlr4.Token.EOF;
StatementParser.LET = 1;
StatementParser.VAR = 2;
StatementParser.PUNTOYCOMA = 3;
StatementParser.IGUAL = 4;
StatementParser.MULTIPLICACION = 5;
StatementParser.DIVISION = 6;
StatementParser.SUMA = 7;
StatementParser.RESTA = 8;
StatementParser.PARENTESIS_IZQ = 9;
StatementParser.PARENTESIS_DER = 10;
StatementParser.IDENTIFICADOR = 11;
StatementParser.NUMERO = 12;
StatementParser.ESPACIOS = 13;

StatementParser.RULE_programa = 0;
StatementParser.RULE_sentencia = 1;
StatementParser.RULE_declaracion = 2;
StatementParser.RULE_asignacion = 3;
StatementParser.RULE_expresion = 4;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StatementParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(StatementParser.EOF, 0);
	};

	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof StatementVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StatementParser.RULE_sentencia;
    }

	declaracion() {
	    return this.getTypedRuleContext(DeclaracionContext,0);
	};

	asignacion() {
	    return this.getTypedRuleContext(AsignacionContext,0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	PUNTOYCOMA() {
	    return this.getToken(StatementParser.PUNTOYCOMA, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof StatementVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StatementParser.RULE_declaracion;
    }

	IDENTIFICADOR() {
	    return this.getToken(StatementParser.IDENTIFICADOR, 0);
	};

	PUNTOYCOMA() {
	    return this.getToken(StatementParser.PUNTOYCOMA, 0);
	};

	LET() {
	    return this.getToken(StatementParser.LET, 0);
	};

	VAR() {
	    return this.getToken(StatementParser.VAR, 0);
	};

	IGUAL() {
	    return this.getToken(StatementParser.IGUAL, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof StatementVisitor ) {
	        return visitor.visitDeclaracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StatementParser.RULE_asignacion;
    }

	IDENTIFICADOR() {
	    return this.getToken(StatementParser.IDENTIFICADOR, 0);
	};

	IGUAL() {
	    return this.getToken(StatementParser.IGUAL, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	PUNTOYCOMA() {
	    return this.getToken(StatementParser.PUNTOYCOMA, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof StatementVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = StatementParser.RULE_expresion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class NumeroContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMERO() {
	    return this.getToken(StatementParser.NUMERO, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof StatementVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

StatementParser.NumeroContext = NumeroContext;

class VariableContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IDENTIFICADOR() {
	    return this.getToken(StatementParser.IDENTIFICADOR, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof StatementVisitor ) {
	        return visitor.visitVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

StatementParser.VariableContext = VariableContext;

class SumarRestarContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        this.operador = null;;
        super.copyFrom(ctx);
    }

	expresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpresionContext);
	    } else {
	        return this.getTypedRuleContext(ExpresionContext,i);
	    }
	};

	SUMA() {
	    return this.getToken(StatementParser.SUMA, 0);
	};

	RESTA() {
	    return this.getToken(StatementParser.RESTA, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof StatementVisitor ) {
	        return visitor.visitSumarRestar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

StatementParser.SumarRestarContext = SumarRestarContext;

class ParentesisContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	PARENTESIS_IZQ() {
	    return this.getToken(StatementParser.PARENTESIS_IZQ, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	PARENTESIS_DER() {
	    return this.getToken(StatementParser.PARENTESIS_DER, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof StatementVisitor ) {
	        return visitor.visitParentesis(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

StatementParser.ParentesisContext = ParentesisContext;

class MultiplicarDividirContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        this.operador = null;;
        super.copyFrom(ctx);
    }

	expresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpresionContext);
	    } else {
	        return this.getTypedRuleContext(ExpresionContext,i);
	    }
	};

	MULTIPLICACION() {
	    return this.getToken(StatementParser.MULTIPLICACION, 0);
	};

	DIVISION() {
	    return this.getToken(StatementParser.DIVISION, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof StatementVisitor ) {
	        return visitor.visitMultiplicarDividir(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

StatementParser.MultiplicarDividirContext = MultiplicarDividirContext;


StatementParser.ProgramaContext = ProgramaContext; 
StatementParser.SentenciaContext = SentenciaContext; 
StatementParser.DeclaracionContext = DeclaracionContext; 
StatementParser.AsignacionContext = AsignacionContext; 
StatementParser.ExpresionContext = ExpresionContext; 
