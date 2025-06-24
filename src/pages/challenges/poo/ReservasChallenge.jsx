import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function ReservasChallenge() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">🧠 Code Challenge: Sistema de Reservas</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">📝 Descripción del reto</h2>
        <p className="mb-4">
          Diseña un sistema básico de reservas con clases como <code>Reserva</code> e interfaces como <code>Reservable</code>. La clase debe permitir registrar una reserva y mostrar la información.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🧭 Enfoque de solución</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Crear una interfaz <code>Reservable</code> con métodos como <code>reservar()</code> y <code>cancelar()</code>.</li>
          <li>Implementar la interfaz en una clase <code>ReservaHotel</code>.</li>
          <li>Simular una reserva con atributos básicos.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">💻 Implementación en Java</h2>
        <SyntaxHighlighter language="java" style={oneLight} className="rounded-md text-sm">
          {`interface Reservable {
  void reservar(String cliente);
  void cancelar();
}

class ReservaHotel implements Reservable {
  private String cliente;
  private boolean activa = false;

  public void reservar(String cliente) {
    this.cliente = cliente;
    this.activa = true;
    System.out.println("Reserva confirmada para " + cliente);
  }

  public void cancelar() {
    this.activa = false;
    System.out.println("Reserva cancelada.");
  }

  public boolean estaActiva() {
    return activa;
  }

  public static void main(String[] args) {
    ReservaHotel reserva = new ReservaHotel();
    reserva.reservar("María");
    System.out.println("¿Activa? " + reserva.estaActiva());
    reserva.cancelar();
  }
}`}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🔍 Explicación del código</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>La interfaz define el contrato para cualquier clase que implemente reservas.</li>
          <li>La clase concreta implementa la lógica de negocio.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">🚀 Posibles mejoras</h2>
        <ul className="list-disc pl-5">
          <li>Agregar fechas de entrada y salida.</li>
          <li>Incluir tipos de habitación y validaciones adicionales.</li>
        </ul>
      </section>
    </div>
  );
}
