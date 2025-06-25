import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function Generics() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">🔣 Generics en Java</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">¿Qué son los Generics?</h2>
        <p className="mb-4">
          Los <strong>Generics</strong> permiten escribir código flexible y
          reutilizable al trabajar con tipos sin necesidad de definirlos
          explícitamente hasta el momento de uso. Previenen errores de tipo en
          tiempo de compilación y eliminan la necesidad de hacer casting manual.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`List<String> lista = new ArrayList<>();
lista.add("Hola");
String saludo = lista.get(0); // No es necesario hacer cast`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          🔧 Clases y métodos genéricos
        </h2>
        <p className="mb-4">
          Puedes declarar clases y métodos que funcionan con múltiples tipos de
          datos:
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`class Caja<T> {
  private T contenido;
  public void setContenido(T contenido) {
    this.contenido = contenido;
  }
  public T getContenido() {
    return contenido;
  }
}

Caja<String> cajaTexto = new Caja<>();
cajaTexto.setContenido("Hola");
String texto = cajaTexto.getContenido();`}{" "}
        </SyntaxHighlighter>

        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`public <T> void imprimirArray(T[] array) {
  for (T elemento : array) {
    System.out.println(elemento);
  }
}`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          📐 Wildcards y bounded types
        </h2>
        <p className="mb-4">
          Las <strong>wildcards</strong> (comodines) permiten mayor flexibilidad
          al trabajar con subtipos o supertipos genéricos:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <code>&lt;?&gt;</code>: cualquier tipo
          </li>
          <li>
            <code>&lt;? extends T&gt;</code>: un subtipo de T (lectura segura)
          </li>
          <li>
            <code>&lt;? super T&gt;</code>: un supertipo de T (escritura segura)
          </li>
        </ul>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`public void imprimirLista(List<?> lista) {
  for (Object obj : lista) {
    System.out.println(obj);
  }
}

public void procesarNumeros(List<? extends Number> numeros) {
  for (Number n : numeros) {
    System.out.println(n.doubleValue());
  }
}

public void agregarEnteros(List<? super Integer> enteros) {
  enteros.add(42);
}`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          💡 Uso de Generics en colecciones
        </h2>
        <p className="mb-4">
          Todas las colecciones de Java utilizan generics para garantizar
          seguridad de tipos. Esto evita errores en tiempo de ejecución:
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`Map<String, Integer> edades = new HashMap<>();
edades.put("Ana", 30);
edades.put("Luis", 25);
int edadAna = edades.get("Ana");`}{" "}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">🧪 Ejercicios comunes</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>
            Crear una clase genérica que almacene dos elementos de tipos
            diferentes
          </li>
          <li>
            Implementar un método genérico que devuelva el máximo entre tres
            elementos
          </li>
          <li>Usar wildcards para copiar elementos entre listas</li>
        </ul>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`class Par<K, V> {
  K clave;
  V valor;
  public Par(K clave, V valor) {
    this.clave = clave;
    this.valor = valor;
  }
  public K getClave() { return clave; }
  public V getValor() { return valor; }
}`}{" "}
        </SyntaxHighlighter>
      </section>
    </div>
  );
}
