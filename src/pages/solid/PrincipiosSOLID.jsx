import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function PrincipiosSOLID() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">📐 Principios SOLID</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🎯 Objetivo</h2>
        <p>
          Comprender los cinco principios SOLID de diseño orientado a objetos
          que promueven código más limpio, mantenible y escalable. Estos
          principios son frecuentemente evaluados en entrevistas técnicas para
          medir la calidad del diseño y la comprensión de buenas prácticas de
          arquitectura.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🧩 S — Principio de Responsabilidad Única (SRP)
        </h2>
        <p>
          El principio de responsabilidad única establece que una clase debe
          tener una y solo una razón para cambiar, lo que significa que debe
          encargarse de una única tarea o funcionalidad dentro del sistema. Si
          una clase tiene múltiples razones para cambiar (por ejemplo, lógica de
          negocio y lógica de persistencia), se vuelve más difícil de mantener,
          testear y extender.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`// ✅ Correcto: separación de responsabilidades
class ReportGenerator {
  public String generateReport() {
    return "Contenido del reporte";
  }
}

class ReportSaver {
  public void saveToFile(String content) {
    // guardar en disco
  }
}`}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🔌 O — Principio de Abierto/Cerrado (OCP)
        </h2>
        <p>
          Este principio indica que las entidades de software (clases, módulos,
          funciones) deben estar abiertas para su extensión pero cerradas para
          su modificación. Esto significa que el comportamiento de una clase se
          puede extender sin modificar su código fuente original, lo cual ayuda
          a evitar errores y facilita la evolución del sistema.
        </p>
        <p>
          Una forma común de cumplir este principio es a través del uso de
          interfaces y herencia o composición.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`interface CalculadoraArea {
  double calcularArea();
}

class Circulo implements CalculadoraArea {
  private double radio;
  public Circulo(double r) { this.radio = r; }
  public double calcularArea() { return Math.PI * radio * radio; }
}

class Cuadrado implements CalculadoraArea {
  private double lado;
  public Cuadrado(double l) { this.lado = l; }
  public double calcularArea() { return lado * lado; }
}`}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🔁 L — Principio de Sustitución de Liskov (LSP)
        </h2>
        <p>
          Establece que los objetos de una clase derivada deben poder reemplazar
          objetos de su clase base sin alterar la corrección del programa. Es
          decir, cualquier instancia de una subclase debe comportarse como su
          superclase sin introducir errores o comportamientos inesperados.
        </p>
        <p>
          Violaciones a este principio ocurren cuando una subclase sobreescribe
          un método de forma que cambia la semántica esperada o lanza
          excepciones que su clase base no contempla.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`class Vehiculo {
  public void encender() {
    System.out.println("Vehículo encendido");
  }
}

class Auto extends Vehiculo {
  public void encender() {
    System.out.println("Auto encendido");
  }
}`}
        </SyntaxHighlighter>
        <p className="mt-2">
          El código que utilice la clase <code>Vehiculo</code> debe seguir
          funcionando correctamente si se le pasa una instancia de{" "}
          <code>Auto</code>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          📞 I — Principio de Segregación de Interfaces (ISP)
        </h2>
        <p>
          Este principio establece que los clientes no deben estar obligados a
          depender de interfaces que no utilizan. Es preferible tener varias
          interfaces pequeñas y específicas en lugar de una sola interfaz
          general con muchos métodos.
        </p>
        <p>
          Esto ayuda a reducir el acoplamiento y mejora la claridad, manteniendo
          las clases dependientes solamente de lo que realmente necesitan.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`interface Imprimible {
  void imprimir();
}

interface Escaneable {
  void escanear();
}

class Multifuncional implements Imprimible, Escaneable {
  public void imprimir() { System.out.println("Imprimiendo..."); }
  public void escanear() { System.out.println("Escaneando..."); }
}`}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          🏗️ D — Principio de Inversión de Dependencias (DIP)
        </h2>
        <p>
          Este principio señala que los módulos de alto nivel no deben depender
          de módulos de bajo nivel, sino que ambos deben depender de
          abstracciones. Además, las abstracciones no deben depender de los
          detalles, sino que los detalles deben depender de las abstracciones.
        </p>
        <p>
          La inversión de dependencias reduce el acoplamiento entre componentes
          y permite mayor flexibilidad y capacidad de testeo mediante el uso de
          interfaces.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`interface Motor {
  void encender();
}

class MotorGasolina implements Motor {
  public void encender() {
    System.out.println("Motor de gasolina encendido");
  }
}

class Auto {
  private Motor motor;
  public Auto(Motor m) { this.motor = m; }
  public void arrancar() { motor.encender(); }
}`}
        </SyntaxHighlighter>
      </section>
    </div>
  );
}

export default PrincipiosSOLID;
