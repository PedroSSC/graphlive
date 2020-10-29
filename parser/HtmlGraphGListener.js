var antlr4 = require('../antlr4/index');
var GraphGLexer = require('../parser/GraphGLexer');
var GraphGParser = require('../parser/GraphGParser');
const { ConsoleErrorListener } = require('../antlr4/error/ErrorListener');
var GraphGListener = require('../parser/GraphGListener').GraphGListener;

HtmlGraphGListener = function () {
    GraphGListener.call(this);
    this.value = [];
    this.dir = 0;
    this.arestas = 0;

    this.qtNodes = 0;
    this.graus = [];
    this.labels = [];
    this.strSaida = "";
    this.adjacencia = [];
    this.listaArestas = [];

    console.log(this)
    return this;
    
}

HtmlGraphGListener.prototype = Object.create(GraphGListener.prototype);
HtmlGraphGListener.prototype.constructor = HtmlGraphGListener;

/*

O parser percorre toda a arvore da esquerda para direita.
Todo nó tem duas execuções que podem conter algoritmos: entrada e saída;

Processo:
    Entra em um nó (execução de algoritmo);
    Repete em todos os nós filhos recursivamente (se houver);
    Retorna do ultimo filho (se houver);
    Sai do nó (execução de algoritmo);


Os nós são determinados pela gramática:
    Entra Graph;

        Entra Graph_nome;

            Entra Nome;
            Sai Nome;

        Sai Graph_nome;

        Entra Declaracao;

            Entra Nome;
            Sai Nome;

            Entra Label;
            Sai Label;

        Sai Declaracao;

        Entra Relacao;

            Entra Label;
            Sai Label;

            Entra Direcao;
            Sai Direcao;

            Entra Aresta;
            Sai Aresta;

            Entra Direcao;
            Sai Direcao;

            Entra Label;
            Sai Label;
            
        Sai Relacao;

    Sai Graph;

*/

// Enter a parse tree produced by GraphGParser#prog.
HtmlGraphGListener.prototype.enterProg = function(ctx) {

    ctx.dir = 0;
    ctx.arestas = 0;
    ctx.vertices = [];

    ctx.qtNodes = 0;
    ctx.graus = [];
    ctx.labels = [];
    ctx.adjacencia = [];
    ctx.listaArestas = [];
};


//Algoritmo na entrada do nó Graph para contar o numero de nós declarados;
HtmlGraphGListener.prototype.enterGraph = function(ctx) {
    this.qtNodes = 0;

    ctx.temDir = 0;
    
    for(var c=0; c<ctx.children.length; c++){
        if(ctx.children[c] instanceof GraphGParser.GraphGParser.RelacaoContext){
            for(var i=0; i<ctx.children.length; i++){
                if(ctx.children[c].children[i] instanceof GraphGParser.GraphGParser.DirecaoContext){
                    ctx.temDir ++;
                }
            }
        }
    }
};

// Algoritmo na saida do nó Declaracao para criar um array com todos os nós declarados;
HtmlGraphGListener.prototype.exitDeclaracao = function(ctx) {
        var dataLabel = [];
    for(var i=0; i<ctx.children.length; i++){
        if(ctx.children[i] instanceof GraphGParser.GraphGParser.NomeContext){       
            
            var dataset = {'node':ctx.children[i].getText(), 'grau':0}
            this.graus.push(dataset);
            this.qtNodes ++;
            dataLabel.push(ctx.children[i].getText());

            // var dataset = {'node':ctx.children[i].getText(), 'adjacencias': aux=[]}
            // this.adjacencia.push(dataset)

        }
        
        if(ctx.children[i] instanceof GraphGParser.GraphGParser.LabelContext){
            dataLabel.push(ctx.children[i].getText())
        }
    }

    this.labels.push(dataLabel);

    
};

// Algoritmo na saida do nó Direcao, identifica se o nó é direcionado atribuindo o valor de 1;
HtmlGraphGListener.prototype.exitDirecao = function(ctx) {

    if(!ctx.getText == ''){
        ctx.dir = 1;
    }
};

// Algoritmo na saida do nó Relacao funciona em três etapas:
//  * A primeira encontra o nó visitado no array de nós declarados e aumenta seu grau, pois existe uma aresta ligando a ele;
//  * A segunda cria uma váriavel local do nó que indica uma aresta;
//  * A terceira identifica se as arestas são direcionadas, identificadas por < ou >.
// Na linguagem do GraphVis, ou todo o grafo é direcional ou não é, ou seja, se o contador for maior que 0, todo o grafo sera considerado direcionado.
// Nesta função, o valor dir indica quantas setas existem, e guarda o valor para cada nó de relacionamento;

HtmlGraphGListener.prototype.exitRelacao = function(ctx) {

    //Variavel dir guarda quantidade de direcionais nesse nó de relacionamento;
    ctx.arestas = 1
    var saida = '';
    var temNome = 0;
    var vlNode = 0;

    var idAresta = this.listaArestas.length+1;


    for(var i=0; i<ctx.children.length; i++){
        if(ctx.children[i] instanceof GraphGParser.GraphGParser.LabelContext){
            for(var c=0; c<this.labels.length; c++){
                if(ctx.children[i].getText() == this.labels[c][0]){
                    saida +=this.labels[c][1];
                }
            }


            
            for(var g=0; g<this.graus.length; g++){
                if(this.graus[g]['node'] == ctx.children[i].getText()){
                    this.graus[g]['grau'] ++;
                }
            }
        }



        if(ctx.children[i] instanceof GraphGParser.GraphGParser.DirecaoContext){
            ctx.relacao += ctx.children[i].getText();
        }


        if(ctx.children[i] instanceof GraphGParser.GraphGParser.ArestaContext){


            if(ctx.parentCtx.temDir == 0){
                saida += '--'
            }
            if(ctx.parentCtx.temDir > 0){
                saida += '->'
            }
            for(var c=0; c<ctx.children[i].children.length; c++){
                if(ctx.children[i].children[c] instanceof GraphGParser.GraphGParser.NomeContext){
                    temNome ++;
                    vlNode = ctx.children[i].children[c].getText();

                    ctx.label = ctx.children[i].children[c].getText();
                }
            }
        }


    }



    // if(temNome > 0){

    //     saida += '[label = '+vlNode+']\n';
    // }

    ctx.strSaida = saida;
    this.listaArestas.push("a"+idAresta)

    if(ctx.parentCtx.temDir == 0){
        label = "";
        ctx.relacionamento += getLabels(this.labels, ctx.no1) + "--" + getLabels(this.labels, ctx.no2);
        if(ctx.label !== ""){
            ctx.relacionamento += "[label = \"a"+idAresta+": "+ctx.label+"\"]"
            label = ctx.label;
        }else{
            ctx.relacionamento += "[label = \"a"+idAresta+"\"]"
            label = '0';
        }



        this.adjacencia.push([ctx.no1, label, ctx.no2, "a"+idAresta])
        this.adjacencia.push([ctx.no2, label, ctx.no1, "a"+idAresta])



    }

    if(ctx.parentCtx.temDir > 0){
        label = "";
        ctx.relacionamento += getLabels(this.labels, ctx.no1) + "->" + getLabels(this.labels, ctx.no2);
        if(ctx.label !== ""){
            ctx.relacionamento += "[label = \"a"+idAresta+": "+ctx.label+"\"]"
            label = ctx.label;
        }else{
            ctx.relacionamento += "[label = \"a"+idAresta+"\"]"
            label = '0';
        }

        this.adjacencia.push([ctx.no1, label, ctx.no2, "a"+idAresta])
        if(ctx.relacao == "<>"){
            ctx.relacionamento += "[dir = both]"

            this.adjacencia.push([ctx.no2, label, ctx.no1, "a"+idAresta])
        }
    }



};

//Algorimo na saida do nó Graph, que verifica os filhos que sejam do tipo relação, buscando e contando os valores de arestas e de direcionais.
HtmlGraphGListener.prototype.exitGraph = function(ctx) {

    //Variavel dir guarda a quantidade de direcionais em todo o grafo;
    var cont = ctx.children.length;
    var saida = "";
    ctx.dir = 0;
    ctx.arestas = 0;
    for(var i=0; i<cont; i++){
        if(ctx.children[i] instanceof GraphGParser.GraphGParser.RelacaoContext){
            //ctx.relacao += ctx.children[i].getText()
            saida += ctx.children[i].getText()+"\n";
            //console.log(ctx.children[i].getText()+"\n")


            //ctx.arestas += ctx.children[i].arestas;
            for(var c=0; c<ctx.children[i].children.length; c++){
                if(ctx.children[i].children[c] instanceof GraphGParser.GraphGParser.DirecaoContext){                
                    ctx.dir += ctx.children[i].children[c].dir;
                }
            }
            
        }
    }

    ctx.strSaida = saida;
    //console.log(ctx.relacao)




};

// Algoritmo de fim de execução;
// Busca os resultados guardados na saida do nó Graph para o retrono da função;
HtmlGraphGListener.prototype.exitProg = function(ctx) {

    var geral = ctx.children;
    var qtDir = 0;
    var qtArestas = 0;
    var saida = "";
    var nome = "";

    for(var i=0; i<geral.length; i++){
        if(geral[i] instanceof GraphGParser.GraphGParser.GraphContext){
            qtArestas += geral[i].arestas;
            qtDir = geral[i].dir;
            for(var c=0; c<geral[i].children.length; c++){
                
                if(geral[i].children[c] instanceof GraphGParser.GraphGParser.Graph_nomeContext){
                    nome = geral[i].children[c].children[1].getText()
                }
            }


            for(var c=0; c< geral[i].children.length; c++){
                if(geral[i].children[c] instanceof GraphGParser.GraphGParser.RelacaoContext){
                    saida += geral[i].children[c].relacionamento+'\n ';
                }
            }
        }
    }
    
    this.dir = qtDir;
    this.arestas = qtArestas;
    if(qtDir > 0){
        saida = 'digraph '+nome+' {\n rankdir=LR; \n size="8";\n '+ saida
    }
    if(qtDir == 0){
        saida = 'graph '+nome+' {\n rankdir=LR; \n size="8";\n '+ saida
    }
    saida += '\n}'
    this.value.push(saida);

};


//Os códigos a seguir são gerados automaticamente pelo ANTLR4, estão separadas para os nós que ainda não foram utilizados;

// Enter a parse tree produced by GraphGParser#graph_nome.
HtmlGraphGListener.prototype.enterGraph_nome = function(ctx) {
    
};

// Exit a parse tree produced by GraphGParser#graph_nome.
HtmlGraphGListener.prototype.exitGraph_nome = function(ctx) {
    };


// Enter a parse tree produced by GraphGParser#nome.
HtmlGraphGListener.prototype.enterNome = function(ctx) {
    
    
};

// Exit a parse tree produced by GraphGParser#nome.
HtmlGraphGListener.prototype.exitNome = function(ctx) {
    };


// Enter a parse tree produced by GraphGParser#label.
HtmlGraphGListener.prototype.enterLabel = function(ctx) {
};

// Exit a parse tree produced by GraphGParser#label.
HtmlGraphGListener.prototype.exitLabel = function(ctx) {
    };


// Enter a parse tree produced by GraphGParser#declaracao.
HtmlGraphGListener.prototype.enterDeclaracao = function(ctx) {

};



// Enter a parse tree produced by GraphGParser#direcao.
HtmlGraphGListener.prototype.enterDirecao = function(ctx) {
};




// Enter a parse tree produced by GraphGParser#aresta.
HtmlGraphGListener.prototype.enterAresta = function(ctx) {
};

// Exit a parse tree produced by GraphGParser#aresta.
HtmlGraphGListener.prototype.exitAresta = function(ctx) {
    ctx.value = ctx.getText();
};


HtmlGraphGListener.prototype.enterRelacao = function(ctx) {
    ctx.no1 = "";
    ctx.no2 = "";
    ctx.relacao = "";
    ctx.label = "";

    ctx.relacionamento = "";
    
    
    ctx.no1 = ctx.children[0].getText();
    ctx.no2 = ctx.children[ctx.children.length-1].getText();
};



function getLabels(size, no){
    for(var i=0; i<size.length; i++){
        if(size[i][0] == no){
            return size[i][1]
        }
    }
}



exports.HtmlGraphGListener = HtmlGraphGListener;