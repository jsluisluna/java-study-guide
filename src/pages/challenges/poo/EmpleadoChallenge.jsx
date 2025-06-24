import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function EmpleadoChallenge() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">🧠 Code Challenge: Clase Empleado con Reglas</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">📝 Descripción del reto</h2>
        <p className="mb-4">
          Implementa una clase <code>Empleado</code> con nombre, salario y cargo. Debe incluir validaciones como salario mínimo y métodos para obtener el salario anual.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🧭 Enfoque de solución</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Usar atributos privados para nombre, cargo y salario.</li>
          <li>Validar que el salario no sea menor a un mínimo establecido.</li>
          <li>Agregar método para calcular el salario anual.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">💻 Implementación en Java</h2>
        <SyntaxHighlighter language="java" style={oneLight} className="rounded-md text-sm">
          {`public class Empleado {
  private String nombre;
  private String cargo;
  private double salario;
  private static final double SALARIO_MINIMO = 1000;

  public Empleado(String nombre, String cargo, double salario) {
    this.nombre = nombre;
    this.cargo = cargo;
    setSalario(salario);
  }

  public void setSalario(double salario) {
    if (salario >= SALARIO_MINIMO) {
      this.salario = salario;
    } else {
      throw new IllegalArgumentException("Salario por debajo del mínimo permitido.");
    }
  }

  public double getSalarioAnual() {
    return salario * 12;
  }

  public String getCargo() {
    return cargo;
  }

  public static void main(String[] args) {
    Empleado emp = new Empleado("Luis", "Analista", 1500);
    System.out.println(emp.getSalarioAnual()); // 18000.0
  }
}`}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🔍 Explicación del código</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Validamos el salario con un método <code>set</code> personalizado.</li>
          <li>Encapsulamos los atributos y usamos constantes para reglas de negocio.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">🚀 Posibles mejoras</h2>
        <ul className="list-disc pl-5">
          <li>Agregar bonificaciones según el cargo.</li>
          <li>Implementar jerarquía de empleados usando herencia.</li>
        </ul>
      </section>
    </div>
  );
}
