//Interfaces
//definições

interface IGame {
    title: string;
}

interface IDLC {
    extra: string;
}

//intersection / extends
interface IGameCollection extends GameT, DLCT {

}

// implements
class CreateCollectionImpl implements IGameCollection {
    extra: string;
    title: string;

    constructor(extra: string, title: string) {
        this.extra = extra;
        this.title = title;
    }
}


// declarar funcoes
interface IgetSililars {
    (title: string): void;
}

// ---------------Diferencas----------------

//Não permite declarar tipos primitivos

// interface Interface extends number {}

//Não respeita quantidade
interface ITuple {
    0: number;
    1: number;
}

[1,2,3] as ITuple;

//Pode ter multiplas declarações e ele faz o merge e junta interfaces com o mesmo nome

interface IJquery {
    a: string
}
interface IJquery {
    b: string
}

const jqueryImpl : IJquery ={
    a: "Teste1",
    b: "Teste2",
}


//vantagens : quando estiver criando libs prefira interfaces, pq são mais extensiveis
//Criando objetos/classes (POO)


