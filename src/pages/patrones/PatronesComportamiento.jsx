import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function PatronesComportamiento() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        🤝 Patrones de Diseño de Comportamiento
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🎯 Objetivo</h2>
        <p>
          Los patrones de comportamiento se enfocan en cómo los objetos
          interactúan entre sí y cómo se distribuyen las responsabilidades.
          Ayudan a mejorar la comunicación y coordinación entre componentes del
          sistema.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🔸 Strategy</h2>
        <p>
          Permite definir una familia de algoritmos, encapsularlos y hacerlos
          intercambiables en tiempo de ejecución. El cliente elige el algoritmo
          a usar sin modificar su código.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`interface EstrategiaPago {
  void pagar(double monto);
}

class PagoPaypal implements EstrategiaPago {
  public void pagar(double monto) {
    System.out.println("Pagando con PayPal: " + monto);
  }
}

class Carrito {
  private EstrategiaPago estrategia;
  public void setEstrategia(EstrategiaPago e) {
    estrategia = e;
  }
  public void checkout(double total) {
    estrategia.pagar(total);
  }
}`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🔸 Observer</h2>
        <p>
          Permite que múltiples objetos (observadores) se mantengan
          sincronizados con otro objeto (sujeto) que cambia su estado. Es útil
          en sistemas de eventos o notificaciones.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`interface Observador {
  void actualizar(String mensaje);
}

class Usuario implements Observador {
  private String nombre;
  public Usuario(String n) { nombre = n; }
  public void actualizar(String mensaje) {
    System.out.println(nombre + " recibió: " + mensaje);
  }
}

class Canal {
  private List<Observador> subs = new ArrayList<>();
  public void suscribir(Observador o) {
    subs.add(o);
  }
  public void nuevoVideo(String titulo) {
    for (Observador o : subs) {
      o.actualizar("Nuevo video: " + titulo);
    }
  }
}`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🔸 Command</h2>
        <p>
          Encapsula una petición como un objeto, permitiendo parametrizar
          clientes con diferentes solicitudes y soportar operaciones como
          deshacer o colas de comandos.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`interface Comando {
  void ejecutar();
}

class Luz {
  public void encender() {
    System.out.println("Luz encendida");
  }
}

class EncenderLuz implements Comando {
  private Luz luz;
  public EncenderLuz(Luz l) { luz = l; }
  public void ejecutar() {
    luz.encender();
  }
}

class ControlRemoto {
  private Comando comando;
  public void setComando(Comando c) { comando = c; }
  public void presionarBoton() { comando.ejecutar(); }
}`}{" "}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          🔸 Chain of Responsibility
        </h2>
        <p>
          Permite pasar solicitudes a lo largo de una cadena de manejadores
          hasta que alguno las procese. Es útil para estructuras jerárquicas o
          procesamiento flexible de eventos.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`abstract class Manejador {
  protected Manejador siguiente;
  public void establecerSiguiente(Manejador s) { siguiente = s; }
  public abstract void manejar(String solicitud);
}

class SoporteBasico extends Manejador {
  public void manejar(String solicitud) {
    if (solicitud.equals("básico")) {
      System.out.println("Resuelto por Soporte Básico");
    } else if (siguiente != null) {
      siguiente.manejar(solicitud);
    }
  }
}`}{" "}
        </SyntaxHighlighter>
      </section>
    </div>
  );
}

export default PatronesComportamiento;
