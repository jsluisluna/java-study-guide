import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function ModificadoresDeAcceso() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        🔐 Modificadores de Acceso en Java
      </h1>

      <section className="mb-10">
        <p className="mb-4">
          Los <strong>modificadores de acceso</strong> en Java determinan la
          visibilidad de clases, atributos, constructores y métodos desde otras
          clases. Controlar adecuadamente el acceso permite proteger el estado
          interno de los objetos y promover una arquitectura robusta y
          mantenible.
        </p>

        <table className="w-full table-auto border border-gray-300 mb-6">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">Modificador</th>
              <th className="border px-4 py-2 text-left">Misma Clase</th>
              <th className="border px-4 py-2 text-left">Mismo Paquete</th>
              <th className="border px-4 py-2 text-left">Subclases</th>
              <th className="border px-4 py-2 text-left">Otros</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2 font-medium">public</td>
              <td className="border px-4 py-2">✔</td>
              <td className="border px-4 py-2">✔</td>
              <td className="border px-4 py-2">✔</td>
              <td className="border px-4 py-2">✔</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-medium">protected</td>
              <td className="border px-4 py-2">✔</td>
              <td className="border px-4 py-2">✔</td>
              <td className="border px-4 py-2">✔</td>
              <td className="border px-4 py-2">✘</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-medium">
                default (sin modificador)
              </td>
              <td className="border px-4 py-2">✔</td>
              <td className="border px-4 py-2">✔</td>
              <td className="border px-4 py-2">✘</td>
              <td className="border px-4 py-2">✘</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-medium">private</td>
              <td className="border px-4 py-2">✔</td>
              <td className="border px-4 py-2">✘</td>
              <td className="border px-4 py-2">✘</td>
              <td className="border px-4 py-2">✘</td>
            </tr>
          </tbody>
        </table>

        <p className="mb-4">
          👉 <strong>Resumen:</strong> Usa <code>private</code> para encapsular
          completamente, <code>protected</code> para permitir herencia segura, y{" "}
          <code>public</code> con precaución cuando un miembro debe ser visible
          universalmente. El acceso <em>default</em> permite visibilidad sólo
          dentro del mismo paquete.
        </p>

        <p className="mb-4">Ejemplo de uso:</p>

        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`public class Empleado {
  public String nombre;
  protected double salario;
  String departamento; // default (package-private)
  private String contrasena;

  public void trabajar() {
    System.out.println(nombre + " está trabajando en " + departamento);
  }

  private void verContrasena() {
    System.out.println("Contraseña: " + contrasena);
  }
}`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          ⚙️ Otros modificadores importantes: <code>static</code>,{" "}
          <code>final</code>, <code>abstract</code>
        </h2>

        <p className="mb-4">
          <strong>static</strong>: indica que el miembro pertenece a la clase y
          no a las instancias. Puede usarse en variables, métodos o bloques de
          inicialización.
        </p>

        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`public class Utilidades {
  public static int contador = 0;

  public static void incrementar() {
    contador++;
  }
}`}{" "}
        </SyntaxHighlighter>

        <p className="mb-4">
          <strong>final</strong>: puede aplicarse a:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>Variables:</strong> su valor no puede cambiar una vez
            asignado.
          </li>
          <li>
            <strong>Clases:</strong> no se pueden extender (heredar).
          </li>
          <li>
            <strong>Métodos:</strong> no se pueden sobrescribir en subclases.
          </li>
        </ul>

        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`public final class Constante {
  public static final double PI = 3.1416;

  public final void mostrar() {
    System.out.println("Este método no puede sobrescribirse.");
  }
}`}{" "}
        </SyntaxHighlighter>

        <p className="mb-4">
          <strong>abstract</strong>: se usa en clases y métodos que no tienen
          implementación completa. Obliga a que las subclases implementen el
          comportamiento.
        </p>

        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`public abstract class Animal {
  public abstract void hacerSonido();
}

public class Perro extends Animal {
  @Override
  public void hacerSonido() {
    System.out.println("Guau guau");
  }
}`}{" "}
        </SyntaxHighlighter>
      </section>
    </div>
  );
}
