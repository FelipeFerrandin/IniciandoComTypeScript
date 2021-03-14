//type voce cria um tipo // type alias
type Uid = string | number;

// o | quer dizer que o parametro pode ser de dois tipos number ou string
function logDetails(uid: string | number, item: string) {
    console.log(uid, item)
}

//Usando tipo personalizado
function logDetails1(uid: Uid, item: string) {
    console.log(uid, item)
}

//Usando tipo personalizado
function logDetails2(uid: Uid, item: string) {
    console.log(uid, item)
}

type Plataform = 'Windows' | "Mac" | "Linux";
function logPlataform(plataform: Plataform){
    console.log(plataform)
}
//Ele da erro dizendo que naquele tipo não possui o "Teste"
// logPlataform("Teste")
logPlataform("Windows")


console.log(logDetails(21421, "Teste"));
console.log(logDetails("21421", "Teste"));


