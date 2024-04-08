let n1 = document.querySelector("#n1")
let n2 = document.querySelector("#n2")
let resultado2= 0

let resultado1 = document.querySelector("#resultado")

function calculadoraSoma() {
    let n1 = Number(document.getElementById('n1').value);
    let n2 = Number(document.getElementById('n2').value);

    resultado2 =resultado2+n1+n2

    resultado1.innerHTML = `Resultado: ${resultado2}`
}
