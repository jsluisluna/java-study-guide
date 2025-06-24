import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function InterfacesVsClasesAbstractas() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        Interfaces vs Clases Abstractas
      </h1>

      <section className="mb-10">
        <p className="mb-4">
          En Java, tanto las <strong>interfaces</strong> como las{" "}
          <strong>clases abstractas</strong> se utilizan para lograr{" "}
          <em>abstracción</em>. Sin embargo, presentan diferencias clave en su
          propósito, uso y sintaxis. Esta sección analiza en profundidad ambos
          conceptos, cuándo utilizarlos y sus implicaciones.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🧩 Interfaces</h2>
        <p className="mb-4">
          Una <strong>interface</strong> define un contrato que una clase debe
          cumplir. Por defecto, sus métodos son <code>public</code> y{" "}
          <code>abstract</code>. A partir de Java 8, puede tener{" "}
          <code>default</code> y <code>static</code> methods, y desde Java 9
          también <code>private</code> methods.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`interface Vehiculo {
  void arrancar();
  default void frenar() {
    System.out.println("Frenando vehículo...");
  }
}`}{" "}
        </SyntaxHighlighter>
        <p className="mt-4">
          Una clase que implemente una interfaz debe proporcionar una
          implementación de sus métodos abstractos:
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`class Coche implements Vehiculo {
  public void arrancar() {
    System.out.println("El coche arranca");
  }
}`}{" "}
        </SyntaxHighlighter>
        <p className="mt-4">➕ Ventajas:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Permite múltiples implementaciones (Java admite herencia múltiple de
            interfaces)
          </li>
          <li>
            Promueve la separación entre la definición y la implementación
          </li>
          <li>
            Más flexible para definir capacidades (por ejemplo:{" "}
            <code>Comparable</code>, <code>Serializable</code>)
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🏛️ Clases Abstractas</h2>
        <p className="mb-4">
          Una <strong>clase abstracta</strong> puede tener métodos abstractos
          (sin cuerpo) y concretos (con implementación). Sirve como base común
          para varias subclases y puede definir atributos y constructores.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`abstract class Animal {
  String nombre;
  
  Animal(String nombre) {
    this.nombre = nombre;
  }

  abstract void hacerSonido();

  void describir() {
    System.out.println("Soy un animal llamado " + nombre);
  }
}`}{" "}
        </SyntaxHighlighter>
        <p className="mt-4">
          Una subclase concreta debe implementar todos los métodos abstractos:
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`class Perro extends Animal {
  Perro(String nombre) {
    super(nombre);
  }

  void hacerSonido() {
    System.out.println("Guau guau");
  }
}`}{" "}
        </SyntaxHighlighter>
        <p className="mt-4">➕ Ventajas:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Permite definir comportamiento común y atributos compartidos</li>
          <li>Puede tener estado (atributos y constructores)</li>
          <li>Útil cuando se desea controlar parcialmente la implementación</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">⚖️ Comparación Clave</h2>
        <table className="w-full table-auto border border-gray-300 mb-6">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">Característica</th>
              <th className="border px-4 py-2 text-left">Interface</th>
              <th className="border px-4 py-2 text-left">Clase Abstracta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Herencia múltiple</td>
              <td className="border px-4 py-2">Sí</td>
              <td className="border px-4 py-2">No</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Constructores</td>
              <td className="border px-4 py-2">No</td>
              <td className="border px-4 py-2">Sí</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Métodos con cuerpo</td>
              <td className="border px-4 py-2">
                Desde Java 8 (default/static)
              </td>
              <td className="border px-4 py-2">Sí</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Campos/atributos</td>
              <td className="border px-4 py-2">
                Solo constantes (<code>public static final</code>)
              </td>
              <td className="border px-4 py-2">Cualquier atributo</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Accesibilidad</td>
              <td className="border px-4 py-2">Siempre pública</td>
              <td className="border px-4 py-2">
                Puede tener protected/private
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          En resumen, utiliza interfaces para definir comportamientos que pueden
          ser implementados por clases no relacionadas y clases abstractas
          cuando quieras compartir código base entre clases estrechamente
          relacionadas.
        </p>
      </section>
    </div>
  );
}
