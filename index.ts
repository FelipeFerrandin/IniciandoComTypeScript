const input1 = document.getElementById("input1") as HTMLInputElement;
const input2 = document.getElementById("input2") as HTMLInputElement;
const buttonSomar = document.getElementById("somar")!;


function somar(primeiroValor: number, segundoValor: number) {
    return primeiroValor + segundoValor
}

buttonSomar.addEventListener("click", () => {
    console.log(somar(Number(input1.value), Number(input2.value)))
})
