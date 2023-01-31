let numero1 = parseInt(
    prompt("Ingrese el primer numero"));
let numero2 = parseInt(
    prompt("Ingrese el segundo numero"));
let numero3 = parseInt(
    prompt("Ingrese el tercer numero"));
  



if (numero1 === numero2 && numero2 === numero3) {
    document.write("<h3>" + "Todos los numeros son iguales" + "</h3>");
} else {
    let numeros = [numero1, numero2, numero3];
    numeros.sort((a, b) => b - a);
    document.write(numeros);

    numeros.sort((a, b) => a - b);
    document.write("<br>" + numeros);
}
    


        
    