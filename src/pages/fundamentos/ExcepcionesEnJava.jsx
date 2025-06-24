import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function ExcepcionesEnJava() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">🧨 Excepciones en Java</h1>

      <section className="mb-10">
        <p className="mb-4">
          En Java, las excepciones son eventos que interrumpen el flujo normal
          de ejecución de un programa. Existen dos grandes categorías:
        </p>

        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>Checked Exceptions:</strong> Son verificadas en tiempo de
            compilación. Debes capturarlas o declararlas con <code>throws</code>
            . Ejemplo: <code>IOException</code>, <code>SQLException</code>.
          </li>
          <li>
            <strong>Unchecked Exceptions:</strong> Son subclases de{" "}
            <code>RuntimeException</code>. No es obligatorio capturarlas.
            Ejemplo: <code>NullPointerException</code>,{" "}
            <code>ArrayIndexOutOfBoundsException</code>.
          </li>
        </ul>

        <p className="mb-4">Ejemplo de manejo de una excepción:</p>

        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`try {
  int resultado = 10 / 0;
} catch (ArithmeticException e) {
  System.out.println("No se puede dividir entre cero: " + e.getMessage());
} finally {
  System.out.println("Este bloque se ejecuta siempre.");
}`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          🔧 Declaración y propagación
        </h2>
        <p className="mb-4">
          Puedes propagar una excepción con <code>throws</code> o lanzarla
          directamente con <code>throw</code>:
        </p>

        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`public void leerArchivo(String ruta) throws IOException {
  BufferedReader lector = new BufferedReader(new FileReader(ruta));
  // ...
}`}{" "}
        </SyntaxHighlighter>

        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm mt-4"
        >
          {`public void validarEdad(int edad) {
  if (edad < 0) {
    throw new IllegalArgumentException("Edad inválida");
  }
}`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">👍 Buenas prácticas</h2>
        <ul className="list-disc pl-5">
          <li>No uses excepciones para control de flujo normal.</li>
          <li>
            Prefiere excepciones específicas en lugar de <code>Exception</code>.
          </li>
          <li>Incluye mensajes útiles en las excepciones lanzadas.</li>
          <li>
            Evita capturar <code>Throwable</code> a menos que tengas una razón
            muy fuerte.
          </li>
        </ul>
      </section>
    </div>
  );
}
