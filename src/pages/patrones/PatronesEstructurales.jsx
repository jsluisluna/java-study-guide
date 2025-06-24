import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function PatronesEstructurales() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        🏛️ Patrones de Diseño Estructurales
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🎯 Objetivo</h2>
        <p>
          Los patrones estructurales definen cómo las clases y objetos se
          componen para formar estructuras más grandes y flexibles, promoviendo
          el uso eficiente de la herencia y composición.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🔸 Adapter</h2>
        <p>
          Permite que interfaces incompatibles cooperen entre sí al actuar como
          un puente entre ellas. Es útil cuando se quiere reutilizar una clase
          existente cuya interfaz no coincide con la esperada.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`interface EnchufeEuropeo {
  void conectar();
}

class EnchufeAmericano {
  public void plugIn() {
    System.out.println("Conectado con enchufe americano");
  }
}

class Adaptador implements EnchufeEuropeo {
  private EnchufeAmericano americano;

  public Adaptador(EnchufeAmericano a) {
    americano = a;
  }

  public void conectar() {
    americano.plugIn();
  }
}`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🔸 Decorator</h2>
        <p>
          Permite añadir responsabilidades adicionales a un objeto de forma
          dinámica, sin alterar su estructura. Es una alternativa flexible a la
          herencia.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`interface Notificador {
  void enviar();
}

class NotificacionBasica implements Notificador {
  public void enviar() {
    System.out.println("Notificación básica enviada");
  }
}

class NotificadorEmail implements Notificador {
  private Notificador wrappee;
  public NotificadorEmail(Notificador n) {
    wrappee = n;
  }
  public void enviar() {
    wrappee.enviar();
    System.out.println("Enviando también por Email");
  }
}`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🔸 Composite</h2>
        <p>
          Permite tratar objetos individuales y composiciones de objetos de
          manera uniforme. Es útil para representar jerarquías de árbol como
          estructuras de archivos o menús.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`interface Componente {
  void mostrar();
}

class Archivo implements Componente {
  private String nombre;
  public Archivo(String n) { nombre = n; }
  public void mostrar() {
    System.out.println(nombre);
  }
}

class Carpeta implements Componente {
  private String nombre;
  private List<Componente> hijos = new ArrayList<>();

  public Carpeta(String n) { nombre = n; }
  public void agregar(Componente c) {
    hijos.add(c);
  }
  public void mostrar() {
    System.out.println("Carpeta: " + nombre);
    for (Componente c : hijos) {
      c.mostrar();
    }
  }
}`}{" "}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">🔸 Proxy</h2>
        <p>
          Proporciona un sustituto o representante de otro objeto para controlar
          el acceso a él, añadir seguridad o administrar recursos.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`interface Servicio {
  void operar();
}

class ServicioReal implements Servicio {
  public void operar() {
    System.out.println("Operación real ejecutada");
  }
}

class ServicioProxy implements Servicio {
  private ServicioReal real;

  public void operar() {
    if (real == null) {
      real = new ServicioReal();
    }
    System.out.println("Control de acceso");
    real.operar();
  }
}`}{" "}
        </SyntaxHighlighter>
      </section>
    </div>
  );
}

export default PatronesEstructurales;
