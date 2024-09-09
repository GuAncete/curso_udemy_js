/*
const pessoal = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

console.log(pessoal.nome);
console.log(pessoal.sobrenome);

*/

/*

function criaPessoa(nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa2 = criaPessoa('Maria', 'Ancete', 32);
const pessoa3 = criaPessoa('João', 'Gazola', 23);
const pessoa4 = criaPessoa('Junior', 'Fachini', 42);
const pessoa5 = criaPessoa('Pedro', 'Natal', 12);

console.log(pessoa1.nome, pessoa2.nome);

*/

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    },

    mostraIdade(){
        console.log(`Minha idade é ${this.idade}`)
    },

    incrementaIdade(){
        this.idade++;
    }

};

pessoa1.fala();
pessoa1.mostraIdade();
pessoa1.incrementaIdade();
pessoa1.mostraIdade();

