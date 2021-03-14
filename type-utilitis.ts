type Todo = {
    title: string;
    description: string;
    completed: boolean
}

const todo: Readonly<Todo> = { //Define todas as propriedades do objeto que foi criado como readonly apenas inves de colocar propriedade por propriedade
    title: "Assistir curso de Vue.js",
    description: "Terminar o curso",
    completed: false,
}

console.log(todo);

//Partial coloca em todas as propriedades o ? para não precisar necessarimente passar todas as propriedades quando estiver editando
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) { //Como o objeto é apesas readOnly é necessario criar outro se necessario alterar
    return {...todo, ...fieldsToUpdate};
}

const todo2: Todo = updateTodo(todo, {completed: true});

//Pick
type TodoPreview = Pick<Todo, "title" | "completed"> // O pick pega dentro daquele objeto determinadas propriedades;
const todo3 : TodoPreview = {
    title: "Assistir curso de Vue.js",
    completed: true,
}

//Omit faz o inverso do pick

type TodoPreview2 = Omit<Todo, "description"> // O pick pega dentro daquele objeto determinadas propriedades e remove;
const todo4 : TodoPreview2 = {
    title: "Assistir curso de Vue.js",
    completed: true,
}

