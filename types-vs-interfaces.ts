//Type alias

//definições

type GameT = {
    title: string;
}

type DLCT = {
    extra: string;
}

//intersection

type GameCollectionT = GameT & DLCT;

// implements

class CreateCollectionT implements GameCollectionT {
    extra: string;
    title: string;

    constructor(extra: string, title: string) {
        this.extra = extra;
        this.title = title;
    }
}

// declarar funcoes
type getSililarsT = (title: string) => void;


// ---------------Diferencas----------------

//Permite declarar tipos primitivos

type IDT = string | number;

//Pode declarar tuplas normalmente

type TupleT = [number, string];
const tuple: TupleT = [1, "Felipe"];
[1, "Tuple"] as TupleT;


//Apenas uma declaracao por escopo

// type JqueryT = { a: string };
// type JqueryT = { b: string };


//mais recomendado na maioria das vezes
