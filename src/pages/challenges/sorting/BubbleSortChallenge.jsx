import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function BubbleSortChallenge() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">🧠 Code Challenge: Bubble Sort</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">📝 Descripción del reto</h2>
        <p className="mb-4">
          Implementa el algoritmo de ordenamiento burbuja (<strong>Bubble Sort</strong>) para ordenar un arreglo de números enteros en orden ascendente.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🧭 Enfoque de solución</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Recorrer el arreglo varias veces comparando elementos adyacentes.</li>
          <li>Intercambiar si el orden es incorrecto.</li>
          <li>Detener si no se realizaron intercambios en una pasada.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">💻 Implementación en Java</h2>
        <SyntaxHighlighter language="java" style={oneLight} className="rounded-md text-sm">
          {`import java.util.Arrays;

public class BubbleSort {
  public static void ordenar(int[] arr) {
    boolean cambiado;
    do {
      cambiado = false;
      for (int i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          int temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          cambiado = true;
        }
      }
    } while (cambiado);
  }

  public static void main(String[] args) {
    int[] numeros = {5, 3, 8, 4, 2};
    ordenar(numeros);
    System.out.println(Arrays.toString(numeros)); // [2, 3, 4, 5, 8]
  }
}`}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🔍 Explicación del código</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>El bucle continúa hasta que no haya intercambios.</li>
          <li>Se compara cada elemento con su vecino derecho.</li>
          <li>Se intercambian si están en el orden incorrecto.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">🚀 Posibles mejoras</h2>
        <ul className="list-disc pl-5">
          <li>Reducir el rango del bucle en cada iteración.</li>
          <li>Comparar rendimiento con QuickSort o MergeSort.</li>
        </ul>
      </section>
    </div>
  );
}
