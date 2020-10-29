// Generated from ../GraphG.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by GraphGParser.
function GraphGListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

GraphGListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
GraphGListener.prototype.constructor = GraphGListener;

// Enter a parse tree produced by GraphGParser#prog.
GraphGListener.prototype.enterProg = function(ctx) {
};

// Exit a parse tree produced by GraphGParser#prog.
GraphGListener.prototype.exitProg = function(ctx) {
};


// Enter a parse tree produced by GraphGParser#graph.
GraphGListener.prototype.enterGraph = function(ctx) {
};

// Exit a parse tree produced by GraphGParser#graph.
GraphGListener.prototype.exitGraph = function(ctx) {
};


// Enter a parse tree produced by GraphGParser#graph_nome.
GraphGListener.prototype.enterGraph_nome = function(ctx) {
};

// Exit a parse tree produced by GraphGParser#graph_nome.
GraphGListener.prototype.exitGraph_nome = function(ctx) {
};


// Enter a parse tree produced by GraphGParser#nome.
GraphGListener.prototype.enterNome = function(ctx) {
};

// Exit a parse tree produced by GraphGParser#nome.
GraphGListener.prototype.exitNome = function(ctx) {
};


// Enter a parse tree produced by GraphGParser#label.
GraphGListener.prototype.enterLabel = function(ctx) {
};

// Exit a parse tree produced by GraphGParser#label.
GraphGListener.prototype.exitLabel = function(ctx) {
};


// Enter a parse tree produced by GraphGParser#declaracao.
GraphGListener.prototype.enterDeclaracao = function(ctx) {
};

// Exit a parse tree produced by GraphGParser#declaracao.
GraphGListener.prototype.exitDeclaracao = function(ctx) {
};


// Enter a parse tree produced by GraphGParser#direcao.
GraphGListener.prototype.enterDirecao = function(ctx) {
};

// Exit a parse tree produced by GraphGParser#direcao.
GraphGListener.prototype.exitDirecao = function(ctx) {
};


// Enter a parse tree produced by GraphGParser#aresta.
GraphGListener.prototype.enterAresta = function(ctx) {
};

// Exit a parse tree produced by GraphGParser#aresta.
GraphGListener.prototype.exitAresta = function(ctx) {
};


// Enter a parse tree produced by GraphGParser#relacao.
GraphGListener.prototype.enterRelacao = function(ctx) {
};

// Exit a parse tree produced by GraphGParser#relacao.
GraphGListener.prototype.exitRelacao = function(ctx) {
};



exports.GraphGListener = GraphGListener;