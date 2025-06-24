import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function FrecuenciaPalabrasChallenge() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">🧠 Code Challenge: Frecuencia de palabras</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">📝 Descripción del reto</h2>
        <p className="mb-4">
          Escribe una función que reciba un texto y cuente cuántas veces aparece cada palabra,
          ignorando mayúsculas y puntuación.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🧭 Enfoque de solución</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Eliminar signos de puntuación y convertir a minúsculas.</li>
          <li>Dividir el texto en palabras usando <code>split</code>.</li>
          <li>Usar un <code>HashMap</code> para contar cada palabra.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">💻 Implementación en Java</h2>
        <SyntaxHighlighter language="java" style={oneLight} className="rounded-md text-sm">
          {`import java.util.HashMap;

public class FrecuenciaPalabras {
  public static HashMap<String, Integer> contarPalabras(String texto) {
    texto = texto.replaceAll("[^a-zA-Z ]", "").toLowerCase();
    String[] palabras = texto.split("\\s+");
    HashMap<String, Integer> mapa = new HashMap<>();

    for (String palabra : palabras) {
      mapa.put(palabra, mapa.getOrDefault(palabra, 0) + 1);
    }

    return mapa;
  }

  public static void main(String[] args) {
    String texto = "Hola mundo hola Java mundo!";
    System.out.println(contarPalabras(texto));
  }
}`}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🔍 Explicación del código</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Limpiamos el texto con <code>replaceAll</code>.</li>
          <li>Usamos <code>split</code> para separar palabras.</li>
          <li>Utilizamos <code>getOrDefault</code> para contar eficientemente.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">🚀 Posibles mejoras</h2>
        <ul className="list-disc pl-5">
          <li>Ordenar las palabras por frecuencia descendente.</li>
          <li>Ignorar palabras muy comunes como "el", "la", etc.</li>
        </ul>
      </section>
    </div>
  );
}
