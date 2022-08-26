
let valorInicial
let valorAlerta

do{
    valorInicial = Number(prompt("ingrese un valor a decrementar"))
    valorAlerta = Number(prompt("ingrese un valor alerta"))
} while(valorInicial < valorAlerta)

/*
while(valorInicial > 0){
    console.log(`el valor actual es: ${valorInicial}`)
    if(valorInicial == valorAlerta){
        console.log(`se alcanzo el valor de alerta: ${valorInicial}`)
    }
    valorInicial = valorInicial - 1
}
console.log("el valor llego a cero")
*/


for(let i=valorInicial; i>0; i--){
    console.log(`el valor actual es: ${i}`)
    if(i == valorAlerta){
        console.log(`se alcanzo el valor de alerta: ${i}`)
    }
}

console.log("el valor llego a cero")
