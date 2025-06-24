import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function TiposDeDatos() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">🔢 Tipos de Datos en Java</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">📌 Tipos Primitivos</h2>
        <p className="mb-4">
          Java cuenta con 8 tipos de datos primitivos que se utilizan para
          almacenar valores simples. Son más eficientes en memoria y rendimiento
          que los objetos.
        </p>
        <div className="overflow-auto">
          <table className="w-full text-sm text-left border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Tipo</th>
                <th className="border px-4 py-2">Descripción</th>
                <th className="border px-4 py-2">Tamaño</th>
                <th className="border px-4 py-2">Valor por defecto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">byte</td>
                <td className="border px-4 py-2">Entero de 8 bits</td>
                <td className="border px-4 py-2">1 byte</td>
                <td className="border px-4 py-2">0</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">short</td>
                <td className="border px-4 py-2">Entero de 16 bits</td>
                <td className="border px-4 py-2">2 bytes</td>
                <td className="border px-4 py-2">0</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">int</td>
                <td className="border px-4 py-2">Entero de 32 bits</td>
                <td className="border px-4 py-2">4 bytes</td>
                <td className="border px-4 py-2">0</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">long</td>
                <td className="border px-4 py-2">Entero de 64 bits</td>
                <td className="border px-4 py-2">8 bytes</td>
                <td className="border px-4 py-2">0L</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">float</td>
                <td className="border px-4 py-2">Número decimal de 32 bits</td>
                <td className="border px-4 py-2">4 bytes</td>
                <td className="border px-4 py-2">0.0f</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">double</td>
                <td className="border px-4 py-2">Número decimal de 64 bits</td>
                <td className="border px-4 py-2">8 bytes</td>
                <td className="border px-4 py-2">0.0d</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">char</td>
                <td className="border px-4 py-2">Carácter Unicode</td>
                <td className="border px-4 py-2">2 bytes</td>
                <td className="border px-4 py-2">'\u0000'</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">boolean</td>
                <td className="border px-4 py-2">Verdadero o falso</td>
                <td className="border px-4 py-2">1 bit*</td>
                <td className="border px-4 py-2">false</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs mt-2">
          * En la JVM, un <code>boolean</code> se representa internamente con al
          menos 1 byte.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🧪 Ejemplo de uso</h2>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`int edad = 25;
boolean esMayorDeEdad = edad >= 18;
char inicial = 'J';
double temperatura = 36.6;
System.out.println(esMayorDeEdad);`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          🧱 Wrappers y Conversiones
        </h2>
        <p className="mb-4">
          En Java, los tipos primitivos no son objetos. Sin embargo, existen
          clases contenedoras (wrapper classes) que permiten tratar los tipos
          primitivos como objetos. Estas clases permiten almacenar valores en
          colecciones, aplicar métodos utilitarios y trabajar con genéricos.
        </p>

        <ul className="list-disc pl-5 mb-4">
          <li>
            <code>byte</code> → <code>Byte</code>
          </li>
          <li>
            <code>short</code> → <code>Short</code>
          </li>
          <li>
            <code>int</code> → <code>Integer</code>
          </li>
          <li>
            <code>long</code> → <code>Long</code>
          </li>
          <li>
            <code>float</code> → <code>Float</code>
          </li>
          <li>
            <code>double</code> → <code>Double</code>
          </li>
          <li>
            <code>char</code> → <code>Character</code>
          </li>
          <li>
            <code>boolean</code> → <code>Boolean</code>
          </li>
        </ul>

        <p className="mb-4">
          Cada clase wrapper provee métodos estáticos como:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <code>parseXxx(String)</code>: convierte texto a tipo primitivo
          </li>
          <li>
            <code>valueOf(String)</code>: convierte texto a tipo wrapper
          </li>
          <li>
            <code>toString()</code>: convierte el valor a texto
          </li>
          <li>
            Constantes como <code>MAX_VALUE</code>, <code>MIN_VALUE</code>
          </li>
        </ul>

        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`int numero = Integer.parseInt("123");      // texto → primitivo
Integer obj = Integer.valueOf("456");        // texto → wrapper
String texto = obj.toString();               // wrapper → texto
int max = Integer.MAX_VALUE;`}{" "}
        </SyntaxHighlighter>

        <p className="mt-4">
          Estas clases son útiles especialmente cuando se requiere almacenar
          valores en estructuras como <code>List</code> o <code>Map</code> que
          no permiten tipos primitivos directamente.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          🔄 Autoboxing y Unboxing
        </h2>
        <p className="mb-4">
          Java permite convertir automáticamente tipos primitivos a objetos
          wrapper y viceversa. Esto es especialmente útil cuando trabajamos con
          APIs que requieren objetos.
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>Autoboxing:</strong> Conversión automática de primitivo a
            objeto wrapper.
          </li>
          <li>
            <strong>Unboxing:</strong> Conversión automática de objeto wrapper a
            tipo primitivo.
          </li>
        </ul>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`Integer numero = 10;       // autoboxing (int → Integer)
int suma = numero + 5;      // unboxing (Integer → int)

List<Integer> lista = new ArrayList<>();
lista.add(20);              // autoboxing
int valor = lista.get(0);   // unboxing`}{" "}
        </SyntaxHighlighter>
        <p className="mt-4">
          ⚠️ Aunque es cómodo, el uso intensivo de boxing/unboxing puede afectar
          el rendimiento si no se controla adecuadamente (por ejemplo, en bucles
          intensivos).
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          🔁 Casting y Conversiones
        </h2>
        <p className="mb-4">
          El <strong>casting</strong> se refiere a convertir un tipo de dato a
          otro explícitamente. Java lo permite cuando los tipos son compatibles,
          pero puede implicar pérdida de precisión o errores en tiempo de
          ejecución.
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>Upcasting:</strong> Conversión implícita de un tipo más
            específico a uno más general (ej. de <code>int</code> a{" "}
            <code>long</code>).
          </li>
          <li>
            <strong>Downcasting:</strong> Conversión explícita de un tipo
            general a uno específico (ej. de <code>double</code> a{" "}
            <code>int</code>).
          </li>
        </ul>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`double decimal = 10.75;
int entero = (int) decimal;    // 10 (pierde decimales)

long largo = 1000L;
int pequeño = (int) largo;     // correcto si cabe en int

int edad = 30;
long edadLarga = edad;         // conversión implícita (upcasting)`}{" "}
        </SyntaxHighlighter>
        <p className="mt-4">
          ⚠️ Recomendación: siempre verifica si la conversión puede producir
          resultados inesperados, sobre todo al trabajar con límites de tipo (
          <code>MAX_VALUE</code>, <code>MIN_VALUE</code>).
        </p>
      </section>
    </div>
  );
}
