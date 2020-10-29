// Generated from ../GraphG.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var GraphGListener = require('./GraphGListener').GraphGListener;
var grammarFileName = "GraphG.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\fI\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0007\u0002\u0016\n\u0002\f",
    "\u0002\u000e\u0002\u0019\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0006\u0003\u001f\n\u0003\r\u0003\u000e\u0003 \u0003\u0003",
    "\u0006\u0003$\n\u0003\r\u0003\u000e\u0003%\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t=\n\t\u0003",
    "\n\u0003\n\u0005\nA\n\n\u0003\n\u0003\n\u0005\nE\n\n\u0003\n\u0003\n",
    "\u0003\n\u0002\u0002\u000b\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0002\u0003\u0003\u0002\u0007\b\u0002E\u0002\u0017\u0003\u0002\u0002",
    "\u0002\u0004\u001c\u0003\u0002\u0002\u0002\u0006\'\u0003\u0002\u0002",
    "\u0002\b+\u0003\u0002\u0002\u0002\n-\u0003\u0002\u0002\u0002\f/\u0003",
    "\u0002\u0002\u0002\u000e5\u0003\u0002\u0002\u0002\u0010<\u0003\u0002",
    "\u0002\u0002\u0012>\u0003\u0002\u0002\u0002\u0014\u0016\u0005\u0004",
    "\u0003\u0002\u0015\u0014\u0003\u0002\u0002\u0002\u0016\u0019\u0003\u0002",
    "\u0002\u0002\u0017\u0015\u0003\u0002\u0002\u0002\u0017\u0018\u0003\u0002",
    "\u0002\u0002\u0018\u001a\u0003\u0002\u0002\u0002\u0019\u0017\u0003\u0002",
    "\u0002\u0002\u001a\u001b\u0007\u0002\u0002\u0003\u001b\u0003\u0003\u0002",
    "\u0002\u0002\u001c\u001e\u0005\u0006\u0004\u0002\u001d\u001f\u0005\f",
    "\u0007\u0002\u001e\u001d\u0003\u0002\u0002\u0002\u001f \u0003\u0002",
    "\u0002\u0002 \u001e\u0003\u0002\u0002\u0002 !\u0003\u0002\u0002\u0002",
    "!#\u0003\u0002\u0002\u0002\"$\u0005\u0012\n\u0002#\"\u0003\u0002\u0002",
    "\u0002$%\u0003\u0002\u0002\u0002%#\u0003\u0002\u0002\u0002%&\u0003\u0002",
    "\u0002\u0002&\u0005\u0003\u0002\u0002\u0002\'(\u0007\u0003\u0002\u0002",
    "()\u0005\b\u0005\u0002)*\u0007\u0004\u0002\u0002*\u0007\u0003\u0002",
    "\u0002\u0002+,\u0007\u000b\u0002\u0002,\t\u0003\u0002\u0002\u0002-.",
    "\u0007\u000b\u0002\u0002.\u000b\u0003\u0002\u0002\u0002/0\u0005\b\u0005",
    "\u000201\u0007\u0005\u0002\u000212\u0007\u0006\u0002\u000223\u0005\n",
    "\u0006\u000234\u0007\u0006\u0002\u00024\r\u0003\u0002\u0002\u000256",
    "\t\u0002\u0002\u00026\u000f\u0003\u0002\u0002\u00027=\u0007\t\u0002",
    "\u000289\u0007\n\u0002\u00029:\u0005\b\u0005\u0002:;\u0007\n\u0002\u0002",
    ";=\u0003\u0002\u0002\u0002<7\u0003\u0002\u0002\u0002<8\u0003\u0002\u0002",
    "\u0002=\u0011\u0003\u0002\u0002\u0002>@\u0005\n\u0006\u0002?A\u0005",
    "\u000e\b\u0002@?\u0003\u0002\u0002\u0002@A\u0003\u0002\u0002\u0002A",
    "B\u0003\u0002\u0002\u0002BD\u0005\u0010\t\u0002CE\u0005\u000e\b\u0002",
    "DC\u0003\u0002\u0002\u0002DE\u0003\u0002\u0002\u0002EF\u0003\u0002\u0002",
    "\u0002FG\u0005\n\u0006\u0002G\u0013\u0003\u0002\u0002\u0002\b\u0017",
    " %<@D"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'graph '", "':'", "'='", "'\"'", "'<'", "'>'", 
                     "'--'", "'-'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      "ALFANUM", "WS" ];

var ruleNames =  [ "prog", "graph", "graph_nome", "nome", "label", "declaracao", 
                   "direcao", "aresta", "relacao" ];

function GraphGParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

GraphGParser.prototype = Object.create(antlr4.Parser.prototype);
GraphGParser.prototype.constructor = GraphGParser;

Object.defineProperty(GraphGParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

GraphGParser.EOF = antlr4.Token.EOF;
GraphGParser.T__0 = 1;
GraphGParser.T__1 = 2;
GraphGParser.T__2 = 3;
GraphGParser.T__3 = 4;
GraphGParser.T__4 = 5;
GraphGParser.T__5 = 6;
GraphGParser.T__6 = 7;
GraphGParser.T__7 = 8;
GraphGParser.ALFANUM = 9;
GraphGParser.WS = 10;

GraphGParser.RULE_prog = 0;
GraphGParser.RULE_graph = 1;
GraphGParser.RULE_graph_nome = 2;
GraphGParser.RULE_nome = 3;
GraphGParser.RULE_label = 4;
GraphGParser.RULE_declaracao = 5;
GraphGParser.RULE_direcao = 6;
GraphGParser.RULE_aresta = 7;
GraphGParser.RULE_relacao = 8;


function ProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GraphGParser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.EOF = function() {
    return this.getToken(GraphGParser.EOF, 0);
};

ProgContext.prototype.graph = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(GraphContext);
    } else {
        return this.getTypedRuleContext(GraphContext,i);
    }
};

ProgContext.prototype.enterRule = function(listener) {
    if(listener instanceof GraphGListener ) {
        listener.enterProg(this);
	}
};

ProgContext.prototype.exitRule = function(listener) {
    if(listener instanceof GraphGListener ) {
        listener.exitProg(this);
	}
};




GraphGParser.ProgContext = ProgContext;

GraphGParser.prototype.prog = function() {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, GraphGParser.RULE_prog);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 21;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===GraphGParser.T__0) {
            this.state = 18;
            this.graph();
            this.state = 23;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 24;
        this.match(GraphGParser.EOF);
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
};


function GraphContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GraphGParser.RULE_graph;
    return this;
}

GraphContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GraphContext.prototype.constructor = GraphContext;

GraphContext.prototype.graph_nome = function() {
    return this.getTypedRuleContext(Graph_nomeContext,0);
};

GraphContext.prototype.declaracao = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DeclaracaoContext);
    } else {
        return this.getTypedRuleContext(DeclaracaoContext,i);
    }
};

GraphContext.prototype.relacao = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(RelacaoContext);
    } else {
        return this.getTypedRuleContext(RelacaoContext,i);
    }
};

GraphContext.prototype.enterRule = function(listener) {
    if(listener instanceof GraphGListener ) {
        listener.enterGraph(this);
	}
};

GraphContext.prototype.exitRule = function(listener) {
    if(listener instanceof GraphGListener ) {
        listener.exitGraph(this);
	}
};




GraphGParser.GraphContext = GraphContext;

GraphGParser.prototype.graph = function() {

    var localctx = new GraphContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, GraphGParser.RULE_graph);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 26;
        this.graph_nome();
        this.state = 28; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 27;
        		this.declaracao();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 30; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        this.state = 33; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 32;
            this.relacao();
            this.state = 35; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===GraphGParser.ALFANUM);
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
};


function Graph_nomeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GraphGParser.RULE_graph_nome;
    return this;
}

Graph_nomeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Graph_nomeContext.prototype.constructor = Graph_nomeContext;

Graph_nomeContext.prototype.nome = function() {
    return this.getTypedRuleContext(NomeContext,0);
};

Graph_nomeContext.prototype.enterRule = function(listener) {
    if(listener instanceof GraphGListener ) {
        listener.enterGraph_nome(this);
	}
};

Graph_nomeContext.prototype.exitRule = function(listener) {
    if(listener instanceof GraphGListener ) {
        listener.exitGraph_nome(this);
	}
};




GraphGParser.Graph_nomeContext = Graph_nomeContext;

GraphGParser.prototype.graph_nome = function() {

    var localctx = new Graph_nomeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, GraphGParser.RULE_graph_nome);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 37;
        this.match(GraphGParser.T__0);
        this.state = 38;
        this.nome();
        this.state = 39;
        this.match(GraphGParser.T__1);
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
};


function NomeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GraphGParser.RULE_nome;
    return this;
}

NomeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NomeContext.prototype.constructor = NomeContext;

NomeContext.prototype.ALFANUM = function() {
    return this.getToken(GraphGParser.ALFANUM, 0);
};

NomeContext.prototype.enterRule = function(listener) {
    if(listener instanceof GraphGListener ) {
        listener.enterNome(this);
	}
};

NomeContext.prototype.exitRule = function(listener) {
    if(listener instanceof GraphGListener ) {
        listener.exitNome(this);
	}
};




GraphGParser.NomeContext = NomeContext;

GraphGParser.prototype.nome = function() {

    var localctx = new NomeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, GraphGParser.RULE_nome);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 41;
        this.match(GraphGParser.ALFANUM);
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
};


function LabelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GraphGParser.RULE_label;
    return this;
}

LabelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabelContext.prototype.constructor = LabelContext;

LabelContext.prototype.ALFANUM = function() {
    return this.getToken(GraphGParser.ALFANUM, 0);
};

LabelContext.prototype.enterRule = function(listener) {
    if(listener instanceof GraphGListener ) {
        listener.enterLabel(this);
	}
};

LabelContext.prototype.exitRule = function(listener) {
    if(listener instanceof GraphGListener ) {
        listener.exitLabel(this);
	}
};




GraphGParser.LabelContext = LabelContext;

GraphGParser.prototype.label = function() {

    var localctx = new LabelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, GraphGParser.RULE_label);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 43;
        this.match(GraphGParser.ALFANUM);
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
};


function DeclaracaoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GraphGParser.RULE_declaracao;
    return this;
}

DeclaracaoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclaracaoContext.prototype.constructor = DeclaracaoContext;

DeclaracaoContext.prototype.nome = function() {
    return this.getTypedRuleContext(NomeContext,0);
};

DeclaracaoContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

DeclaracaoContext.prototype.enterRule = function(listener) {
    if(listener instanceof GraphGListener ) {
        listener.enterDeclaracao(this);
	}
};

DeclaracaoContext.prototype.exitRule = function(listener) {
    if(listener instanceof GraphGListener ) {
        listener.exitDeclaracao(this);
	}
};




GraphGParser.DeclaracaoContext = DeclaracaoContext;

GraphGParser.prototype.declaracao = function() {

    var localctx = new DeclaracaoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, GraphGParser.RULE_declaracao);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 45;
        this.nome();
        this.state = 46;
        this.match(GraphGParser.T__2);
        this.state = 47;
        this.match(GraphGParser.T__3);
        this.state = 48;
        this.label();
        this.state = 49;
        this.match(GraphGParser.T__3);
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
};


function DirecaoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GraphGParser.RULE_direcao;
    return this;
}

DirecaoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DirecaoContext.prototype.constructor = DirecaoContext;


DirecaoContext.prototype.enterRule = function(listener) {
    if(listener instanceof GraphGListener ) {
        listener.enterDirecao(this);
	}
};

DirecaoContext.prototype.exitRule = function(listener) {
    if(listener instanceof GraphGListener ) {
        listener.exitDirecao(this);
	}
};




GraphGParser.DirecaoContext = DirecaoContext;

GraphGParser.prototype.direcao = function() {

    var localctx = new DirecaoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, GraphGParser.RULE_direcao);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 51;
        _la = this._input.LA(1);
        if(!(_la===GraphGParser.T__4 || _la===GraphGParser.T__5)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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
};


function ArestaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GraphGParser.RULE_aresta;
    return this;
}

ArestaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArestaContext.prototype.constructor = ArestaContext;

ArestaContext.prototype.nome = function() {
    return this.getTypedRuleContext(NomeContext,0);
};

ArestaContext.prototype.enterRule = function(listener) {
    if(listener instanceof GraphGListener ) {
        listener.enterAresta(this);
	}
};

ArestaContext.prototype.exitRule = function(listener) {
    if(listener instanceof GraphGListener ) {
        listener.exitAresta(this);
	}
};




GraphGParser.ArestaContext = ArestaContext;

GraphGParser.prototype.aresta = function() {

    var localctx = new ArestaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, GraphGParser.RULE_aresta);
    try {
        this.state = 58;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case GraphGParser.T__6:
            this.enterOuterAlt(localctx, 1);
            this.state = 53;
            this.match(GraphGParser.T__6);
            break;
        case GraphGParser.T__7:
            this.enterOuterAlt(localctx, 2);
            this.state = 54;
            this.match(GraphGParser.T__7);
            this.state = 55;
            this.nome();
            this.state = 56;
            this.match(GraphGParser.T__7);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
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
};


function RelacaoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GraphGParser.RULE_relacao;
    return this;
}

RelacaoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RelacaoContext.prototype.constructor = RelacaoContext;

RelacaoContext.prototype.label = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LabelContext);
    } else {
        return this.getTypedRuleContext(LabelContext,i);
    }
};

RelacaoContext.prototype.aresta = function() {
    return this.getTypedRuleContext(ArestaContext,0);
};

RelacaoContext.prototype.direcao = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DirecaoContext);
    } else {
        return this.getTypedRuleContext(DirecaoContext,i);
    }
};

RelacaoContext.prototype.enterRule = function(listener) {
    if(listener instanceof GraphGListener ) {
        listener.enterRelacao(this);
	}
};

RelacaoContext.prototype.exitRule = function(listener) {
    if(listener instanceof GraphGListener ) {
        listener.exitRelacao(this);
	}
};




GraphGParser.RelacaoContext = RelacaoContext;

GraphGParser.prototype.relacao = function() {

    var localctx = new RelacaoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, GraphGParser.RULE_relacao);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 60;
        this.label();
        this.state = 62;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===GraphGParser.T__4 || _la===GraphGParser.T__5) {
            this.state = 61;
            this.direcao();
        }

        this.state = 64;
        this.aresta();
        this.state = 66;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===GraphGParser.T__4 || _la===GraphGParser.T__5) {
            this.state = 65;
            this.direcao();
        }

        this.state = 68;
        this.label();
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
};


exports.GraphGParser = GraphGParser;
