import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function Java11To21Features() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        🚀 Java 11–21: Novedades Clave
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🔹 var (Java 10)</h2>
        <p className="mb-4">
          Introducido en Java 10, <code>var</code> permite inferencia de tipo
          para variables locales. Aunque el tipo se infiere, sigue siendo
          fuertemente tipado y no puede usarse para atributos de clase ni
          parámetros de métodos.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`var lista = List.of("uno", "dos", "tres"); // List<String>
var contador = 5;                   // int
var mapa = new HashMap<String, Integer>();`}{" "}
        </SyntaxHighlighter>
        <p className="mt-4">
          ⚠️ <strong>Limitación:</strong> Solo se puede usar dentro de métodos.
          No se permite para atributos de clase.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🔹 Records (Java 14+)</h2>
        <p className="mb-4">
          Los <strong>records</strong> son clases inmutables que encapsulan
          datos. Java genera automáticamente:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>Constructor</li>
          <li>Getters (con el mismo nombre del campo)</li>
          <li>toString()</li>
          <li>equals() y hashCode()</li>
        </ul>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`public record Persona(String nombre, int edad) {}

Persona p = new Persona("Ana", 30);
System.out.println(p.nombre()); // Ana`}{" "}
        </SyntaxHighlighter>
        <p className="mt-4">
          Ideal para estructuras DTO y clases de solo lectura.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          🔹 Pattern Matching for instanceof (Java 16)
        </h2>
        <p className="mb-4">
          Facilita trabajar con tipos después de verificar con{" "}
          <code>instanceof</code>. Elimina la necesidad de castear
          explícitamente.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`Object obj = "Hola mundo";
if (obj instanceof String s) {
  System.out.println(s.toUpperCase());
}`}{" "}
        </SyntaxHighlighter>
        <p className="mt-4">
          💡 <strong>Nota:</strong> La variable <code>s</code> solo está
          disponible dentro del bloque <code>if</code>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          🔹 Sealed Classes (Java 17)
        </h2>
        <p className="mb-4">
          Permiten controlar qué clases pueden extender una clase o implementar
          una interfaz. Se usan con <code>permits</code> para definir las
          subclases autorizadas.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`public sealed class Figura permits Circulo, Rectangulo {}

final class Circulo extends Figura {}
final class Rectangulo extends Figura {}`}{" "}
        </SyntaxHighlighter>
        <p className="mt-4">
          También se pueden usar con <code>non-sealed</code> (permite subclases
          abiertas) o <code>sealed</code> (para heredar restricciones).
        </p>
      </section>
    </div>
  );
}
