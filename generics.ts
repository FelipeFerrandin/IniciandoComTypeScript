// S state;
// T type;
// K key;
// V value;
// E element;

//Tambem pode limitar seu generico onde voce pode definir que pode ser de um tipo ou de outro mas nao todos os tipos
// function useState<S extends string| number>(){
//
// }

function useState<S>(){
    let state : S;

    function getState(){
        return state;
    }

    function setState(newState : S){
        state = newState;
    }

    return {getState, setState}
}

const newState = useState<string>(); // O generics é pareceido com o any mas a diferenca é quando o tipo é setado pela primeira vez ele nunca muda em tempo de execucao
newState.setState("Teste");
console.log(newState.getState());

// newState.setState(123); // Vai dar erro pq eu ja setei o tipo <string>
