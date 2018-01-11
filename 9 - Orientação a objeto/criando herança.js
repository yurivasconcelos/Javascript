// define a classe Pessoa
function Pessoa() {}

Pessoa.prototype.caminhar = function(){
  alert ('Estou Caminhando!');
};
Pessoa.prototype.dizOi = function(){
  alert ('Oi!');
};



//Herança Maneira 1 - 
Estudante.prototype = Object.create(Pessoa.prototype);


//Herança Maneira 2 -

// define a classe  Estudante
function Estudante() {
  // Chama o método pai
  Pessoa.call(this);
}

// herda de Pessoa
Estudante.prototype = new Pessoa();

// corrige o ponteiro construtor, que aponta para Pessoa
Estudante.prototype.constructor = Estudante;
 
// adiciona o método dizOi
Estudante.prototype.dizOi = function(){
  alert('Oi, eu sou estudante');
}

// adiciona o método dizTchau 
Estudante.prototype.dizTchau = function(){
  alert('tchau');
}

var estudante1 = new Estudante();
estudante1.dizOi();
estudante1.caminhar();
estudante1.dizTchau();

// checa a herança
alert(estudante1 instanceof Pessoa); // true 
alert(estudante1 instanceof Estudante); // true