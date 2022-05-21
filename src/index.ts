let arreglo1: number[] = new Array(6);
let arreglo2: number[] = new Array(6);
let indice1, indice2: number;

for (indice1 = 0; indice1 < 6; indice1++) {
  arreglo1[indice1] = Number(
    prompt(
      `Ingrese el número que va en la posición ${indice1} del primer arreglo`
    )
  );
  console.log(
    `El número ingresado en la posición ${indice1} es: ${arreglo1[indice1]}`
  );
}
for (indice2 = 0; indice2 < 6; indice2++) {
  arreglo2[indice2] = Number(
    prompt(`Ingrese el número que va en la posición ${indice2}`)
  );
  console.log(
    `El número ingresado en la posición ${indice2} es: ${arreglo2[indice2]} del segundo arreglo`
  );
}

function suma(arreglo1: number[], arreglo2: number[]): number[] {
  let resultado: number[] = [];
  for (let i = 0; i < arreglo1.length; i++) {
    resultado[i] = arreglo1[i] + arreglo2[i];
  }
  return resultado;
}

if (arreglo1.length === arreglo2.length) {
  // si los arreglos tienen la misma longitud
  console.log(suma(arreglo1, arreglo2));
} else {
  console.log("Error");
} // si no tienen la misma
