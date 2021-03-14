class UserAccount {
    public name: string; //Publica
    protected age: number; // Só consegue ver a sendo a classe que herda

    static create(name: string, age: number) {
        return new UserAccount(name, age);
    }

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    logDetails(): void {
        console.log(`O jogador ${this.name} tem ${this.age} anos.`)
    }

}

class CharAccount extends UserAccount {
    private _nickname: string; //Privada
    private readonly _level: number; // Apenas leitura

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age);
        this._nickname = nickname;
        this._level = level;
    }

    logChardetails(): CharAccount {
        console.log(`O jogador ${this.name} tem ${this.age} e tem um personagem ${this._nickname} e level ${this._level}`)
        return this;
    }


    get level(): number {
        return this._level;
    }

    set nickname(value: string) {
        this._nickname = value;
    }
}

abstract class TesteClasseAbstrata {
    public name: string; //Publica
    protected age: number; // Só consegue ver a sendo a classe que herda

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    logTeste(): void {
        console.log("Teste")
    }
}

class TesteClasseAbstrataExtends extends TesteClasseAbstrata{ //Classe abstrata so pode ser extendida e não instanciada
    constructor(name: string, age: number) {
        super(name, age);
    }

    logTeste() {
        super.logTeste();
    }
}

console.log(UserAccount.create("Felipe", 19))
console.log(new CharAccount("Felipe", 19, "FelipeFerrandin", 1000))
console.log(new CharAccount("Felipe", 19, "FelipeFerrandin", 1000).logChardetails().logDetails())
const felipe = new CharAccount("Felipe", 19, "FelipeFerrandin", 1000)
console.log(felipe.level);
console.log(felipe.nickname = "FelipeFerrandin2")
