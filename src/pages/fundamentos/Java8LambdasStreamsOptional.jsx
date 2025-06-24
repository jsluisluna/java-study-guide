import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function Java8LambdasStreamsOptional() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        ⚙️ Java 8+: Lambdas, Streams, Optional y Functional Interfaces
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🔹 Lambdas</h2>
        <p className="mb-4">
          Las expresiones lambda permiten escribir implementaciones de
          interfaces funcionales de forma concisa. Se introdujeron para
          facilitar la programación funcional.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`// Forma tradicional con clase anónima
Runnable r1 = new Runnable() {
  public void run() {
    System.out.println("Hola mundo");
  }
};

// Usando lambda
Runnable r2 = () -> System.out.println("Hola mundo");`}{" "}
        </SyntaxHighlighter>
        <p className="mt-4">
          Las lambdas también se pueden usar con colecciones y métodos
          funcionales:
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`List<Integer> numeros = Arrays.asList(1, 2, 3, 4);
numeros.forEach(n -> System.out.println(n * 2));`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          🔹 Functional Interfaces
        </h2>
        <p className="mb-4">
          Son interfaces con un solo método abstracto. Se anotan con{" "}
          <code>@FunctionalInterface</code>. Java incluye varias:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>Predicate&lt;T&gt;</strong>: recibe un argumento, devuelve
            boolean. Ej: verificar si un nombre es largo.
          </li>
          <li>
            <strong>Function&lt;T,R&gt;</strong>: transforma un tipo en otro.
            Ej: de String a Integer.
          </li>
          <li>
            <strong>Consumer&lt;T&gt;</strong>: consume un valor, no retorna.
            Ej: imprimir un valor.
          </li>
          <li>
            <strong>Supplier&lt;T&gt;</strong>: no recibe argumentos, retorna un
            valor. Ej: generar un número aleatorio.
          </li>
        </ul>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`Predicate<String> esLargo = s -> s.length() > 5;
Function<String, Integer> longitud = String::length;
Consumer<String> imprimir = System.out::println;
Supplier<Double> aleatorio = () -> Math.random();`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🔹 Streams</h2>
        <p className="mb-4">
          Un <strong>Stream</strong> es una secuencia de elementos que se puede
          procesar de forma funcional. Sus operaciones pueden ser:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>Intermedias</strong>: devuelven otro stream y permiten
            encadenamiento.
          </li>
          <li>
            <strong>Terminales</strong>: cierran el stream y devuelven un
            resultado o efecto colateral.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Operaciones Intermedias
        </h3>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>filter</strong>: filtra elementos según una condición.
          </li>
          <li>
            <strong>map</strong>: transforma cada elemento del stream.
          </li>
          <li>
            <strong>sorted</strong>: ordena los elementos (por defecto o usando
            un Comparator).
          </li>
          <li>
            <strong>distinct</strong>: elimina duplicados.
          </li>
          <li>
            <strong>limit</strong>: limita el número de elementos procesados.
          </li>
          <li>
            <strong>skip</strong>: omite los primeros N elementos.
          </li>
        </ul>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`List<String> nombres = Arrays.asList("Ana", "Pedro", "Lucía", "Pedro");

List<String> filtrados = nombres.stream()
  .filter(n -> n.length() > 4)
  .map(String::toUpperCase)
  .distinct()
  .sorted()
  .collect(Collectors.toList());`}{" "}
        </SyntaxHighlighter>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Operaciones Terminales
        </h3>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>collect</strong>: transforma el stream en una colección u
            otro resultado.
          </li>
          <li>
            <strong>forEach</strong>: aplica una acción a cada elemento.
          </li>
          <li>
            <strong>reduce</strong>: combina los elementos en uno solo (ej:
            suma, concatenación).
          </li>
          <li>
            <strong>count</strong>: devuelve la cantidad de elementos.
          </li>
          <li>
            <strong>anyMatch / allMatch / noneMatch</strong>: evalúan
            condiciones sobre el stream.
          </li>
          <li>
            <strong>findFirst / findAny</strong>: obtienen un elemento si
            existe.
          </li>
        </ul>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`List<Integer> numeros = Arrays.asList(1, 2, 3, 4, 5);

long pares = numeros.stream()
  .filter(n -> n % 2 == 0)
  .count();

boolean hayMayores = numeros.stream()
  .anyMatch(n -> n > 4);

int suma = numeros.stream()
  .reduce(0, Integer::sum);

numeros.stream().forEach(System.out::println);`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🔹 Optional</h2>
        <p className="mb-4">
          <code>Optional</code> es un contenedor para valores que pueden o no
          estar presentes. Útil para evitar <code>NullPointerException</code>.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`Optional<String> nombre = Optional.of("Luis");
nombre.ifPresent(System.out::println); // imprime Luis

Optional<String> vacio = Optional.empty();
System.out.println(vacio.orElse("Desconocido"));`}{" "}
        </SyntaxHighlighter>
        <p className="mt-4">Uso avanzado:</p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`Optional<String> resultado = Optional.of("  dato  ")
  .map(String::trim)
  .filter(s -> s.length() > 0);

String valor = resultado.orElseThrow(() -> new RuntimeException("Sin valor válido"));`}{" "}
        </SyntaxHighlighter>
      </section>
    </div>
  );
}
