// Generated from ../GraphG.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\fC\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\f\u0006\f9\n\f\r\f\u000e\f:\u0003",
    "\r\u0006\r>\n\r\r\r\u000e\r?\u0003\r\u0003\r\u0002\u0002\u000e\u0003",
    "\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011",
    "\n\u0013\u0002\u0015\u0002\u0017\u000b\u0019\f\u0003\u0002\u0005\u0004",
    "\u0002C\\c|\u0003\u00022;\u0005\u0002\u000b\f\u000f\u000f\"\"\u0002",
    "D\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002",
    "\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002",
    "\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002",
    "\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002",
    "\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002",
    "\u0002\u0003\u001b\u0003\u0002\u0002\u0002\u0005\"\u0003\u0002\u0002",
    "\u0002\u0007$\u0003\u0002\u0002\u0002\t&\u0003\u0002\u0002\u0002\u000b",
    "(\u0003\u0002\u0002\u0002\r*\u0003\u0002\u0002\u0002\u000f,\u0003\u0002",
    "\u0002\u0002\u0011/\u0003\u0002\u0002\u0002\u00131\u0003\u0002\u0002",
    "\u0002\u00153\u0003\u0002\u0002\u0002\u00178\u0003\u0002\u0002\u0002",
    "\u0019=\u0003\u0002\u0002\u0002\u001b\u001c\u0007i\u0002\u0002\u001c",
    "\u001d\u0007t\u0002\u0002\u001d\u001e\u0007c\u0002\u0002\u001e\u001f",
    "\u0007r\u0002\u0002\u001f \u0007j\u0002\u0002 !\u0007\"\u0002\u0002",
    "!\u0004\u0003\u0002\u0002\u0002\"#\u0007<\u0002\u0002#\u0006\u0003\u0002",
    "\u0002\u0002$%\u0007?\u0002\u0002%\b\u0003\u0002\u0002\u0002&\'\u0007",
    "$\u0002\u0002\'\n\u0003\u0002\u0002\u0002()\u0007>\u0002\u0002)\f\u0003",
    "\u0002\u0002\u0002*+\u0007@\u0002\u0002+\u000e\u0003\u0002\u0002\u0002",
    ",-\u0007/\u0002\u0002-.\u0007/\u0002\u0002.\u0010\u0003\u0002\u0002",
    "\u0002/0\u0007/\u0002\u00020\u0012\u0003\u0002\u0002\u000212\t\u0002",
    "\u0002\u00022\u0014\u0003\u0002\u0002\u000234\t\u0003\u0002\u00024\u0016",
    "\u0003\u0002\u0002\u000259\u0005\u0013\n\u000269\u0005\u0015\u000b\u0002",
    "79\u0007a\u0002\u000285\u0003\u0002\u0002\u000286\u0003\u0002\u0002",
    "\u000287\u0003\u0002\u0002\u00029:\u0003\u0002\u0002\u0002:8\u0003\u0002",
    "\u0002\u0002:;\u0003\u0002\u0002\u0002;\u0018\u0003\u0002\u0002\u0002",
    "<>\t\u0004\u0002\u0002=<\u0003\u0002\u0002\u0002>?\u0003\u0002\u0002",
    "\u0002?=\u0003\u0002\u0002\u0002?@\u0003\u0002\u0002\u0002@A\u0003\u0002",
    "\u0002\u0002AB\b\r\u0002\u0002B\u001a\u0003\u0002\u0002\u0002\u0006",
    "\u00028:?\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function GraphGLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

GraphGLexer.prototype = Object.create(antlr4.Lexer.prototype);
GraphGLexer.prototype.constructor = GraphGLexer;

Object.defineProperty(GraphGLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

GraphGLexer.EOF = antlr4.Token.EOF;
GraphGLexer.T__0 = 1;
GraphGLexer.T__1 = 2;
GraphGLexer.T__2 = 3;
GraphGLexer.T__3 = 4;
GraphGLexer.T__4 = 5;
GraphGLexer.T__5 = 6;
GraphGLexer.T__6 = 7;
GraphGLexer.T__7 = 8;
GraphGLexer.ALFANUM = 9;
GraphGLexer.WS = 10;

GraphGLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

GraphGLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

GraphGLexer.prototype.literalNames = [ null, "'graph '", "':'", "'='", "'\"'", 
                                       "'<'", "'>'", "'--'", "'-'" ];

GraphGLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                        null, null, null, "ALFANUM", "WS" ];

GraphGLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                    "T__5", "T__6", "T__7", "LETRA", "DIGITO", 
                                    "ALFANUM", "WS" ];

GraphGLexer.prototype.grammarFileName = "GraphG.g4";



exports.GraphGLexer = GraphGLexer;

