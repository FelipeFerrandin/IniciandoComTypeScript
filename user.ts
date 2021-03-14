//AccountInfo
//ChartInfo
//PlayerInfo


type AccountInfo = {
    id: number;
    name: string;
    email?: string;
}

const account: AccountInfo = {
    id: 123,
    name: "Felipe"
}

type CharInfo = {
    nickName: string;
    level: number;
}

const chart : CharInfo = {
    nickName: "FelipeFerrandin",
    level: 1000,
}

//Intersection junta os dois tipos e transforma em um só
type PlayerInfo = AccountInfo & CharInfo


const player : PlayerInfo = {
    id: 123,
    name: "Felipe",
    email:"teste@teste.com",
    nickName: "FelipeFerrandin",
    level: 1000,
}
