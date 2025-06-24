import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function Colecciones() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">📚 Colecciones en Java</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          🔁 Interfaces principales: List, Set, Map, Queue
        </h2>
        <p className="mb-4">
          Java Collections Framework proporciona interfaces y clases concretas
          para trabajar con estructuras de datos comunes. Aquí se explican sus
          características clave:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>List:</strong> Colección ordenada que permite duplicados y
            admite elementos <code>null</code>. Ideal cuando se necesita
            mantener el orden de inserción y acceder a elementos por índice.
            Implementaciones comunes: <code>ArrayList</code>,{" "}
            <code>LinkedList</code>.
          </li>
          <li>
            <strong>Set:</strong> Colección que no permite duplicados. Algunas
            implementaciones permiten <code>null</code> (ej.{" "}
            <code>HashSet</code>). Es útil cuando se desea garantizar unicidad.
            Implementaciones: <code>HashSet</code> (sin orden),{" "}
            <code>TreeSet</code> (ordenado), <code>LinkedHashSet</code>{" "}
            (mantiene orden de inserción).
          </li>
          <li>
            <strong>Map:</strong> Estructura que almacena pares clave-valor. No
            permite claves duplicadas, pero puede sobrescribir el valor asociado
            a una clave. Algunas implementaciones permiten claves y valores{" "}
            <code>null</code>. Implementaciones: <code>HashMap</code>,{" "}
            <code>TreeMap</code>, <code>LinkedHashMap</code>.
          </li>
          <li>
            <strong>Queue:</strong> Estructura FIFO (First-In-First-Out).
            Algunas variantes actúan como colas de prioridad. Útil en
            procesamiento de tareas o sistemas de mensajería. Implementaciones:{" "}
            <code>PriorityQueue</code>, <code>ArrayDeque</code>.
          </li>
        </ul>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`List<String> nombres = new ArrayList<>();
nombres.add("Ana");
nombres.add("Luis");
nombres.add("Ana"); // Permitido

Set<String> unico = new HashSet<>();
unico.add("Ana");
unico.add("Luis");
unico.add("Ana"); // Ignorado por duplicado

Map<Integer, String> mapa = new HashMap<>();
mapa.put(1, "Uno");
mapa.put(2, "Dos");
mapa.put(1, "Reemplazo"); // Reemplaza valor clave 1`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          📊 Diferencias entre implementaciones
        </h2>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <code>HashMap</code>: acceso rápido, sin orden garantizado. Permite
            una clave <code>null</code> y múltiples valores <code>null</code>.
          </li>
          <li>
            <code>TreeMap</code>: mantiene claves ordenadas según{" "}
            <code>Comparable</code> o <code>Comparator</code>. No permite claves{" "}
            <code>null</code>.
          </li>
          <li>
            <code>LinkedHashMap</code>: mantiene orden de inserción. Permite una
            clave <code>null</code>.
          </li>
          <li>
            <code>HashSet</code>: sin orden garantizado, permite un{" "}
            <code>null</code>. Basado internamente en <code>HashMap</code>.
          </li>
          <li>
            <code>TreeSet</code>: mantiene orden natural o por comparador. No
            permite <code>null</code> si se usa comparación natural.
          </li>
          <li>
            <code>ArrayDeque</code>: cola sin límite de tamaño, más rápida que{" "}
            <code>Stack</code> o <code>LinkedList</code> para pilas y colas.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          🔡 Ordenamiento: Comparable y Comparator
        </h2>
        <p className="mb-4">Para ordenar objetos personalizados:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>Comparable:</strong> implementa <code>compareTo()</code>.
            Define un orden natural interno para la clase.
          </li>
          <li>
            <strong>Comparator:</strong> define reglas de comparación externas
            usando <code>compare()</code>. Útil para ordenamientos múltiples.
          </li>
        </ul>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`class Persona implements Comparable<Persona> {
  String nombre;
  int edad;
  public Persona(String nombre, int edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  public int compareTo(Persona otra) {
    return this.edad - otra.edad;
  }
}

Collections.sort(listaDePersonas); // Por edad
Collections.sort(listaDePersonas, Comparator.comparing(p -> p.nombre)); // Por nombre`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          🧪 Ejercicios frecuentes en entrevistas
        </h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Eliminar duplicados de una lista</li>
          <li>
            Contar frecuencia de palabras con <code>Map</code>
          </li>
          <li>
            Simular una cola de procesos con <code>Queue</code>
          </li>
          <li>Ordenar una lista de objetos por múltiples atributos</li>
        </ul>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`List<String> palabras = Arrays.asList("java", "code", "java", "dev");
Map<String, Integer> frecuencia = new HashMap<>();
for (String palabra : palabras) {
  frecuencia.put(palabra, frecuencia.getOrDefault(palabra, 0) + 1);
}`}{" "}
        </SyntaxHighlighter>
      </section>
    </div>
  );
}
