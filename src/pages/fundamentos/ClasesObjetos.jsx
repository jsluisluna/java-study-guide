import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function ClasesObjetos() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        🏗️ Clases, Objetos, Constructores y Métodos en Java
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">📦 ¿Qué es una clase?</h2>
        <p className="mb-4">
          Una clase en Java es una plantilla o molde que describe el
          comportamiento (métodos) y el estado (atributos) que sus objetos
          pueden tener. Se considera la unidad fundamental de la programación
          orientada a objetos.
        </p>
        <p className="mb-4">
          Las clases pueden tener distintos{" "}
          <strong>modificadores de acceso</strong> como <code>public</code>,{" "}
          <code>default</code> (sin modificador) o <code>final</code>. Por
          ejemplo:
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`public class Persona {
  String nombre;
  int edad;

  void saludar() {
    System.out.println("Hola, mi nombre es " + nombre);
  }
}`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">👤 ¿Qué es un objeto?</h2>
        <p className="mb-4">
          Un objeto es una instancia de una clase. Es un ente en tiempo de
          ejecución que contiene valores específicos para sus atributos y puede
          ejecutar métodos definidos por su clase.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`Persona p = new Persona();
p.nombre = "Luis";
p.edad = 30;
p.saludar();`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🏗️ Constructores</h2>
        <p className="mb-4">
          Los constructores son métodos especiales que se ejecutan al crear una
          instancia de la clase. Pueden recibir parámetros para inicializar
          atributos.
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>Constructor por defecto:</strong> No tiene parámetros.
          </li>
          <li>
            <strong>Constructor personalizado:</strong> Acepta parámetros para
            inicializar atributos.
          </li>
          <li>
            <strong>Sobre carga de constructores:</strong> Puedes definir
            múltiples constructores con diferentes firmas para cubrir diferentes
            escenarios de inicialización.
          </li>
        </ul>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`public class Persona {
  String nombre;
  int edad;

  // Constructor por defecto
  public Persona() {
    this.nombre = "Sin nombre";
    this.edad = 0;
  }

  // Constructor personalizado
  public Persona(String nombre, int edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  void saludar() {
    System.out.println("Hola, soy " + nombre);
  }
}`}{" "}
        </SyntaxHighlighter>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm mt-2"
        >
          {`Persona p1 = new Persona("Ana", 28);
p1.saludar();

Persona p2 = new Persona();
p2.saludar();`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🛠️ Métodos</h2>
        <p className="mb-4">
          Los métodos son bloques de código que definen el comportamiento de los
          objetos. Se pueden clasificar en:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>Métodos de instancia:</strong> Requieren una instancia del
            objeto para ser llamados.
          </li>
          <li>
            <strong>
              Métodos estáticos (<code>static</code>):
            </strong>{" "}
            Se pueden llamar sin instanciar la clase.
          </li>
        </ul>
        <p className="mb-4">
          También es común utilizar <strong>modificadores de acceso</strong>{" "}
          para controlar la visibilidad de los métodos:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <code>public</code>: accesible desde cualquier parte del programa
          </li>
          <li>
            <code>private</code>: accesible solo dentro de la clase
          </li>
          <li>
            <code>protected</code>: accesible en la misma clase, subclases o
            mismo paquete
          </li>
        </ul>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`public class Calculadora {
  public int sumar(int a, int b) {
    return a + b;
  }

  private void logOperacion(String operacion) {
    System.out.println("Ejecutando: " + operacion);
  }

  static int restar(int a, int b) {
    return a - b;
  }
}`}{" "}
        </SyntaxHighlighter>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm mt-2"
        >
          {`Calculadora c = new Calculadora();
System.out.println(c.sumar(5, 3));      // método de instancia
System.out.println(Calculadora.restar(5, 3)); // método estático`}{" "}
        </SyntaxHighlighter>
      </section>
    </div>
  );
}
