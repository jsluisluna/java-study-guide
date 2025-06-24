import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function BinarySearchChallenge() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">🧠 Code Challenge: Búsqueda binaria</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">📝 Descripción del reto</h2>
        <p className="mb-4">
          Implementa el algoritmo de búsqueda binaria para encontrar un número dentro de un arreglo ordenado.
          Retorna el índice del número si existe o -1 si no se encuentra.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🧭 Enfoque de solución</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Usar punteros <code>inicio</code> y <code>fin</code> para recorrer el arreglo.</li>
          <li>Comparar con el valor medio y ajustar los límites.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">💻 Implementación en Java</h2>
        <SyntaxHighlighter language="java" style={oneLight} className="rounded-md text-sm">
          {`public class BinarySearch {
  public static int buscar(int[] nums, int objetivo) {
    int inicio = 0, fin = nums.length - 1;

    while (inicio <= fin) {
      int medio = (inicio + fin) / 2;
      if (nums[medio] == objetivo) return medio;
      else if (nums[medio] < objetivo) inicio = medio + 1;
      else fin = medio - 1;
    }

    return -1;
  }

  public static void main(String[] args) {
    int[] nums = {1, 3, 5, 7, 9, 11};
    System.out.println(buscar(nums, 7));  // 3
    System.out.println(buscar(nums, 4));  // -1
  }
}`}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🔍 Explicación del código</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Calculamos el índice medio con cada iteración.</li>
          <li>Si es menor que el objetivo, buscamos en la mitad derecha.</li>
          <li>Si es mayor, buscamos en la mitad izquierda.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">🚀 Posibles mejoras</h2>
        <ul className="list-disc pl-5">
          <li>Evitar overflow con <code>inicio + (fin - inicio) / 2</code>.</li>
          <li>Implementar búsqueda binaria recursiva.</li>
        </ul>
      </section>
    </div>
  );
}
