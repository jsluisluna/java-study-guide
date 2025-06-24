import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function PatronesCreacionales() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        🏗️ Patrones de Diseño Creacionales
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🎯 Objetivo</h2>
        <p>
          Los patrones creacionales proporcionan mecanismos para crear objetos
          que aumentan la flexibilidad y reutilización del código existente.
          Permiten separar el proceso de creación de objetos del sistema que los
          utiliza.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🔹 Singleton</h2>
        <p>
          Asegura que una clase tenga una única instancia y proporciona un punto
          global de acceso a ella. Útil para gestionar recursos compartidos como
          conexiones a base de datos o configuración global.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`public class ConexionDB {
  private static ConexionDB instancia;

  private ConexionDB() {}

  public static ConexionDB getInstancia() {
    if (instancia == null) {
      instancia = new ConexionDB();
    }
    return instancia;
  }
}`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🔹 Factory Method</h2>
        <p>
          Permite a las subclases decidir qué tipo de objeto instanciar. Se basa
          en definir una interfaz de creación, delegando a las subclases la
          implementación concreta.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`interface Transporte {
  void entregar();
}

class Camion implements Transporte {
  public void entregar() {
    System.out.println("Entregado por camión");
  }
}

abstract class Logistica {
  abstract Transporte crearTransporte();
}

class LogisticaTerrestre extends Logistica {
  Transporte crearTransporte() {
    return new Camion();
  }
}`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🔹 Abstract Factory</h2>
        <p>
          Proporciona una interfaz para crear familias de objetos relacionados
          sin especificar sus clases concretas. Es útil cuando se requiere
          consistencia entre objetos creados juntos.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`interface Boton {
  void render();
}

class BotonWindows implements Boton {
  public void render() { System.out.println("Botón estilo Windows"); }
}

class BotonMac implements Boton {
  public void render() { System.out.println("Botón estilo Mac"); }
}

interface GUIFactory {
  Boton crearBoton();
}

class WindowsFactory implements GUIFactory {
  public Boton crearBoton() { return new BotonWindows(); }
}`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🔹 Builder</h2>
        <p>
          Separa la construcción de un objeto complejo de su representación. Es
          ideal cuando un objeto requiere muchos pasos o parámetros para su
          creación.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`class Pizza {
  private String masa;
  private String salsa;
  private String topping;

  public static class Builder {
    private String masa;
    private String salsa;
    private String topping;

    public Builder setMasa(String m) {
      masa = m; return this;
    }
    public Builder setSalsa(String s) {
      salsa = s; return this;
    }
    public Builder setTopping(String t) {
      topping = t; return this;
    }
    public Pizza build() {
      Pizza p = new Pizza();
      p.masa = this.masa;
      p.salsa = this.salsa;
      p.topping = this.topping;
      return p;
    }
  }
}`}{" "}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">🔹 Prototype</h2>
        <p>
          Permite crear nuevos objetos copiando una instancia existente. Útil
          cuando la creación de objetos es costosa o compleja.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`class Documento implements Cloneable {
  private String contenido;

  public Documento(String contenido) {
    this.contenido = contenido;
  }

  public Documento clone() throws CloneNotSupportedException {
    return (Documento) super.clone();
  }
}`}{" "}
        </SyntaxHighlighter>
      </section>
    </div>
  );
}

export default PatronesCreacionales;
