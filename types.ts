//boolean (true/false)
let isOpen: boolean;
isOpen = true;

//string ('foo', "foo", `foo`)
let text: string
text = "Teste";
text = 'Teste2';
text = `Teste3`;

//number (int, float, hex, binary)
let numero: number;
numero = 20.3

//array (type[], Array<type>)
let array: number[]
array = [1, 2, 3];

let array2: Array<number>;
array2 = [1, 2, 4]

//tuple
let title: [number, string]
title = [1, "Teste"];

//ENUM
enum Colors {
    white = "#ffff",
    black = "#0000",
}

//Vazio (void)
function testeVoid(): void {
    console.log("Void")
}

//never
function error() : never{
    throw new Error();
}

//Object
let car : object;
car = {
    teste: "Teste",
}


//Inferencia de tipos
const typeInferenceString = "";



