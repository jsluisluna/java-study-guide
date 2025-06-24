import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function PolimorfismoFigurasChallenge() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">🧠 Code Challenge: Herencia y Polimorfismo con Figuras</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">📝 Descripción del reto</h2>
        <p className="mb-4">
          Crea una jerarquía de clases para representar figuras geométricas como <code>Circulo</code> y <code>Rectangulo</code>. Usa herencia y polimorfismo para calcular el área.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🧭 Enfoque de solución</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Clase abstracta <code>Figura</code> con método abstracto <code>area()</code>.</li>
          <li>Subclases concretas implementan el cálculo específico.</li>
          <li>Demostrar polimorfismo con arreglo de figuras.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">💻 Implementación en Java</h2>
        <SyntaxHighlighter language="java" style={oneLight} className="rounded-md text-sm">
          {`abstract class Figura {
  public abstract double area();
}

class Circulo extends Figura {
  private double radio;
  public Circulo(double radio) {
    this.radio = radio;
  }
  public double area() {
    return Math.PI * radio * radio;
  }
}

class Rectangulo extends Figura {
  private double ancho, alto;
  public Rectangulo(double ancho, double alto) {
    this.ancho = ancho;
    this.alto = alto;
  }
  public double area() {
    return ancho * alto;
  }
}

public class Main {
  public static void main(String[] args) {
    Figura[] figuras = {
      new Circulo(2),
      new Rectangulo(3, 4)
    };

    for (Figura f : figuras) {
      System.out.println("Área: " + f.area());
    }
  }
}`}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🔍 Explicación del código</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Se define una clase abstracta que impone una estructura común.</li>
          <li>Las subclases especializan el comportamiento.</li>
          <li>El uso de referencias genéricas permite el polimorfismo.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">🚀 Posibles mejoras</h2>
        <ul className="list-disc pl-5">
          <li>Agregar una clase <code>Triangulo</code>.</li>
          <li>Usar interfaces como <code>Dibujable</code> para imprimir.</li>
        </ul>
      </section>
    </div>
  );
}
