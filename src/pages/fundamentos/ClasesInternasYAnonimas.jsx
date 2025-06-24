import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function ClasesInternasYAnonimas() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        Clases Internas, Anónimas y Estáticas
      </h1>

      <section className="mb-10">
        <p className="mb-4">
          En Java, las <strong>clases internas</strong> son clases definidas
          dentro de otra clase. Se utilizan comúnmente para agrupar lógicamente
          clases que solo se usan en un contexto específico, mejorar la
          encapsulación y facilitar el acceso a miembros privados de la clase
          externa.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">
          🏠 Clases Internas No Estáticas (Inner Classes)
        </h2>
        <p className="mb-4">
          Una <strong>clase interna no estática</strong> puede acceder
          directamente a miembros de instancia de la clase externa.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`class Casa {
  private String direccion = "Av. Principal 123";

  class Puerta {
    void abrir() {
      System.out.println("Abriendo puerta de la casa en " + direccion);
    }
  }
}`}{" "}
        </SyntaxHighlighter>
        <p className="mt-4">Uso:</p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`Casa casa = new Casa();
Casa.Puerta puerta = casa.new Puerta();
puerta.abrir();`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">
          📦 Clases Internas Estáticas (Static Nested Classes)
        </h2>
        <p className="mb-4">
          Una <strong>clase interna estática</strong> no puede acceder
          directamente a los miembros de instancia de la clase externa. Se
          comporta más como una clase top-level anidada dentro de otra.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`class Computadora {
  static class Procesador {
    void describir() {
      System.out.println("Procesador de 3.2GHz");
    }
  }
}`}{" "}
        </SyntaxHighlighter>
        <p className="mt-4">Uso:</p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`Computadora.Procesador cpu = new Computadora.Procesador();
cpu.describir();`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🎭 Clases Anónimas</h2>
        <p className="mb-4">
          Una <strong>clase anónima</strong> es una clase sin nombre que se
          define e instancia al mismo tiempo. Se usa para sobrescribir métodos o
          implementar interfaces de manera rápida, especialmente en callbacks o
          eventos.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`Runnable tarea = new Runnable() {
  @Override
  public void run() {
    System.out.println("Ejecutando tarea...");
  }
};
tarea.run();`}{" "}
        </SyntaxHighlighter>
        <p className="mt-4">También se puede usar con clases abstractas:</p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`abstract class Animal {
  abstract void hablar();
}

Animal gato = new Animal() {
  void hablar() {
    System.out.println("Miau");
  }
};
gato.hablar();`}{" "}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">✅ Cuándo usar cada una</h2>
        <ul className="list-disc pl-6">
          <li>
            <strong>Clases internas:</strong> cuando una clase depende
            fuertemente del contexto de la clase externa.
          </li>
          <li>
            <strong>Clases estáticas anidadas:</strong> cuando la relación es
            lógica, pero no se requiere acceso al estado de la clase externa.
          </li>
          <li>
            <strong>Clases anónimas:</strong> para implementar rápidamente una
            clase de una sola vez, especialmente en programación
            funcional/eventos.
          </li>
        </ul>
      </section>
    </div>
  );
}
