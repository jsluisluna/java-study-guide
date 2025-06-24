import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function PalindromoChallenge() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">🧠 Code Challenge: ¿Es un palíndromo?</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">📝 Descripción del reto</h2>
        <p className="mb-4">
          Escribe una función en Java que determine si una palabra o frase es un
          <strong> palíndromo</strong>. Un palíndromo es una cadena que se lee igual de
          izquierda a derecha que de derecha a izquierda, ignorando espacios,
          puntuación y mayúsculas.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🧭 Enfoque de solución</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Eliminar todos los caracteres que no sean letras o números.</li>
          <li>Convertir la cadena a minúsculas.</li>
          <li>Comparar la cadena con su versión invertida.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">💻 Implementación en Java</h2>
        <SyntaxHighlighter language="java" style={oneLight} className="rounded-md text-sm">
          {`public class Palindromo {
  public static boolean esPalindromo(String texto) {
    String limpio = texto.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
    String invertido = new StringBuilder(limpio).reverse().toString();
    return limpio.equals(invertido);
  }

  public static void main(String[] args) {
    System.out.println(esPalindromo("Anita lava la tina")); // true
    System.out.println(esPalindromo("Java mola")); // false
  }
}`}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🔍 Explicación del código</h2>
        <ul className="list-disc pl-5 mb-4">
          <li><code>replaceAll</code>: elimina espacios, signos y caracteres no alfanuméricos.</li>
          <li><code>toLowerCase</code>: convierte todo a minúsculas para comparar sin distinción de mayúsculas.</li>
          <li><code>StringBuilder.reverse()</code>: invierte la cadena para verificar si coincide.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">🚀 Posibles mejoras</h2>
        <ul className="list-disc pl-5">
          <li>Optimizar la comparación sin construir la cadena invertida completa.</li>
          <li>Permitir evaluación en múltiples idiomas con normalización de caracteres.</li>
        </ul>
      </section>
    </div>
  );
}
