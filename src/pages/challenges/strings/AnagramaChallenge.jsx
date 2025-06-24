import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function AnagramaChallenge() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">🧠 Code Challenge: ¿Es un anagrama?</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">📝 Descripción del reto</h2>
        <p className="mb-4">
          Escribe una función en Java que determine si dos cadenas son anagramas entre sí.
          Un anagrama es una palabra o frase formada reorganizando las letras de otra,
          usando exactamente las mismas letras una sola vez.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🧭 Enfoque de solución</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Eliminar espacios y convertir ambas cadenas a minúsculas.</li>
          <li>Ordenar los caracteres de ambas cadenas.</li>
          <li>Comparar si las cadenas ordenadas son iguales.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">💻 Implementación en Java</h2>
        <SyntaxHighlighter language="java" style={oneLight} className="rounded-md text-sm">
          {`import java.util.Arrays;

public class Anagrama {
  public static boolean sonAnagramas(String s1, String s2) {
    String limpio1 = s1.replaceAll("\\s", "").toLowerCase();
    String limpio2 = s2.replaceAll("\\s", "").toLowerCase();

    char[] a1 = limpio1.toCharArray();
    char[] a2 = limpio2.toCharArray();
    Arrays.sort(a1);
    Arrays.sort(a2);

    return Arrays.equals(a1, a2);
  }

  public static void main(String[] args) {
    System.out.println(sonAnagramas("Roma", "Amor")); // true
    System.out.println(sonAnagramas("Hola", "Halo")); // false
  }
}`}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🔍 Explicación del código</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Eliminamos espacios con <code>replaceAll</code>.</li>
          <li>Usamos <code>Arrays.sort</code> para ordenar los caracteres.</li>
          <li>Comparamos los arreglos con <code>Arrays.equals</code>.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">🚀 Posibles mejoras</h2>
        <ul className="list-disc pl-5">
          <li>Ignorar acentos o signos de puntuación.</li>
          <li>Optimizar usando conteo de caracteres en lugar de ordenar.</li>
        </ul>
      </section>
    </div>
  );
}
