import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function FibonacciChallenge() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">🧠 Code Challenge: Secuencia de Fibonacci</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">📝 Descripción del reto</h2>
        <p className="mb-4">
          Escribe dos funciones en Java que calculen el enésimo número de la secuencia de
          Fibonacci: una usando recursión y otra usando iteración.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🧭 Enfoque de solución</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>La versión recursiva es simple pero ineficiente.</li>
          <li>La versión iterativa es más eficiente en tiempo y memoria.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">💻 Implementación en Java</h2>
        <SyntaxHighlighter language="java" style={oneLight} className="rounded-md text-sm">
          {`public class Fibonacci {

  public static int fibRecursivo(int n) {
    if (n <= 1) return n;
    return fibRecursivo(n - 1) + fibRecursivo(n - 2);
  }

  public static int fibIterativo(int n) {
    if (n <= 1) return n;
    int a = 0, b = 1;
    for (int i = 2; i <= n; i++) {
      int temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }

  public static void main(String[] args) {
    System.out.println(fibRecursivo(6)); // 8
    System.out.println(fibIterativo(6)); // 8
  }
}`}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🔍 Explicación del código</h2>
        <ul className="list-disc pl-5 mb-4">
          <li><code>fibRecursivo</code>: llama recursivamente n-1 y n-2.</li>
          <li><code>fibIterativo</code>: usa una variable temporal para avanzar paso a paso.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">🚀 Posibles mejoras</h2>
        <ul className="list-disc pl-5">
          <li>Memorizar resultados en la versión recursiva.</li>
          <li>Usar `BigInteger` para manejar números grandes.</li>
        </ul>
      </section>
    </div>
  );
}
