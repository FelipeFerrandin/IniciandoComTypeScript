interface IGame {
    title: string;
    description : string;
    readonly genre: string;
    plataform? : string[];
    getSimilars? : (title: string) => void;
}

const bf5Impl: IGame ={
    title : "Battlefield V",
    description: "Jogo da segunda guera mundial",
    genre:"Ação",
    // plataform : ["Ps4","Ps5","PC","XboxOne","XboxSeriesX"],
    getSimilars : title =>{
        console.log(`Jogos similares à ${title}, CodWW2`)
    }
}

console.log(bf5Impl.getSimilars!(bf5Impl.title));


interface IDLC extends IGame{
    originalGame : IGame;
    newContent: string[];
}

const leftBehint: IDLC ={
    title : "Battlefield V",
    description: "Jogo da segunda guera mundial",
    genre:"Ação",
    originalGame : bf5Impl,
    newContent: ['armas','veiculos'],
}

console.log(leftBehint);

class CreateGame implements IGame{
    description: string;
    readonly genre: string;
    title: string;

    constructor(description: string, genre: string, title: string) {
        this.description = description;
        this.genre = genre;
        this.title = title;
    }
}
