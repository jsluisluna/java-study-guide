import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function TwoSumChallenge() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">🧠 Code Challenge: Two Sum</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">📝 Descripción del reto</h2>
        <p className="mb-4">
          Dado un arreglo de enteros y un número objetivo, retorna los índices de los dos números cuya suma sea igual al objetivo.
          Se asume que hay exactamente una solución y no puedes usar el mismo elemento dos veces.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🧭 Enfoque de solución</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Usar un <code>HashMap</code> para almacenar cada número y su índice.</li>
          <li>Por cada número, calcular el complemento necesario para llegar al objetivo.</li>
          <li>Verificar si ese complemento ya existe en el mapa.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">💻 Implementación en Java</h2>
        <SyntaxHighlighter language="java" style={oneLight} className="rounded-md text-sm">
          {`import java.util.HashMap;

public class TwoSum {
  public static int[] encontrarIndices(int[] nums, int objetivo) {
    HashMap<Integer, Integer> mapa = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
      int complemento = objetivo - nums[i];
      if (mapa.containsKey(complemento)) {
        return new int[] { mapa.get(complemento), i };
      }
      mapa.put(nums[i], i);
    }
    return null;
  }

  public static void main(String[] args) {
    int[] resultado = encontrarIndices(new int[]{2, 7, 11, 15}, 9);
    System.out.println("[" + resultado[0] + ", " + resultado[1] + "]"); // [0, 1]
  }
}`}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🔍 Explicación del código</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>El mapa guarda los valores ya recorridos y su índice.</li>
          <li>Calculamos el complemento necesario en cada paso.</li>
          <li>Si ya existe en el mapa, retornamos sus índices.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">🚀 Posibles mejoras</h2>
        <ul className="list-disc pl-5">
          <li>Extender para múltiples soluciones.</li>
          <li>Retornar los valores en lugar de los índices.</li>
        </ul>
      </section>
    </div>
  );
}
