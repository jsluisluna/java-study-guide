import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function HerenciaPolimorfismo() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        Herencia, Polimorfismo, Encapsulamiento y Abstracción
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🔁 Herencia</h2>
        <p className="mb-4">
          La herencia es un principio fundamental de la programación orientada a
          objetos (OOP) que permite crear nuevas clases basadas en clases
          existentes. Mediante la herencia, una clase hija (o subclase) adquiere
          los atributos y comportamientos (métodos) de una clase padre (o
          superclase), permitiendo reutilizar código y establecer una jerarquía
          lógica entre las clases.
        </p>
        <p className="mb-4">
          Java admite herencia simple (una sola clase base por subclase). El uso
          de <code>extends</code> permite implementar este comportamiento.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`class Animal {
  void hacerSonido() {
    System.out.println("Hace un sonido");
  }
}

class Perro extends Animal {
  void hacerSonido() {
    System.out.println("Guau guau");
  }
}`}{" "}
        </SyntaxHighlighter>
        <p className="mt-4">
          En este ejemplo, <code>Perro</code> hereda de <code>Animal</code> y
          sobrescribe su método <code>hacerSonido</code>. La subclase puede
          también agregar nuevos métodos o atributos.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🎭 Polimorfismo</h2>
        <p className="mb-4">
          El polimorfismo permite que una misma operación se comporte de
          distintas maneras según el objeto que la invoque. En Java existen dos
          formas principales:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Polimorfismo en tiempo de compilación</strong> (sobrecarga
            de métodos)
          </li>
          <li>
            <strong>Polimorfismo en tiempo de ejecución</strong> (sobrescritura
            de métodos)
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Sobrecarga de métodos (compile-time)
        </h3>
        <p className="mb-4">
          Consiste en definir varios métodos con el mismo nombre pero diferentes
          parámetros dentro de una misma clase. El compilador decide cuál método
          llamar en función de los argumentos.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`class Calculadora {
  int sumar(int a, int b) {
    return a + b;
  }

  double sumar(double a, double b) {
    return a + b;
  }

  int sumar(int a, int b, int c) {
    return a + b + c;
  }
}`}{" "}
        </SyntaxHighlighter>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Sobrescritura de métodos (runtime)
        </h3>
        <p className="mb-4">
          Ocurre cuando una subclase proporciona su propia implementación de un
          método definido en su clase padre. Esto permite que el comportamiento
          sea determinado dinámicamente durante la ejecución.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`class Animal {
  void hablar() {
    System.out.println("El animal hace un sonido");
  }
}

class Gato extends Animal {
  void hablar() {
    System.out.println("Miau");
  }
}

class Demo {
  public static void main(String[] args) {
    Animal miAnimal = new Gato();
    miAnimal.hablar(); // Miau
  }
}`}{" "}
        </SyntaxHighlighter>
        <p className="mt-4">
          Aquí, el método <code>hablar()</code> se invoca desde una referencia
          de tipo <code>Animal</code> pero ejecuta la implementación de{" "}
          <code>Gato</code> gracias al polimorfismo dinámico.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🔒 Encapsulamiento</h2>
        <p className="mb-4">
          El encapsulamiento consiste en restringir el acceso directo a ciertos
          componentes de un objeto, generalmente haciendo que sus atributos sean{" "}
          <code>private</code> y exponiéndolos mediante métodos públicos{" "}
          <code>get</code> y <code>set</code>.
        </p>
        <p className="mb-4">
          Esto mejora la seguridad, evita modificaciones indebidas y permite
          controlar el acceso a los datos.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`class Persona {
  private String nombre;

  public String getNombre() {
    return nombre;
  }

  public void setNombre(String nombre) {
    this.nombre = nombre;
  }
}`}{" "}
        </SyntaxHighlighter>
        <p className="mt-4">
          Aquí el atributo <code>nombre</code> está encapsulado y sólo se puede
          acceder de forma controlada mediante los métodos públicos definidos.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">🌫️ Abstracción</h2>
        <p className="mb-4">
          La abstracción se enfoca en ocultar la implementación interna de una
          funcionalidad, mostrando solo la interfaz pública necesaria. Permite
          definir contratos de comportamiento y promover un diseño desacoplado.
        </p>
        <p className="mb-4">
          En Java, se puede lograr abstracción a través de:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Clases abstractas (usando <code>abstract</code>)
          </li>
          <li>Interfaces (con métodos abstractos por defecto)</li>
        </ul>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`abstract class Figura {
  abstract double calcularArea();
}

class Circulo extends Figura {
  double radio;
  Circulo(double radio) {
    this.radio = radio;
  }

  double calcularArea() {
    return Math.PI * radio * radio;
  }
}`}{" "}
        </SyntaxHighlighter>
        <p className="mt-4">
          Aquí, <code>Figura</code> es una clase abstracta con un método que
          debe ser implementado por las subclases. Promueve una estructura común
          sin definir detalles.
        </p>
      </section>
    </div>
  );
}
