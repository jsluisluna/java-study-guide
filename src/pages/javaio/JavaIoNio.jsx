import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function JavaIoNio() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">📂 Java IO y NIO</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🔸 Java IO Clásico</h2>
        <p className="mb-4">
          Java IO se basa en flujos de entrada y salida (
          <code>InputStream</code> / <code>OutputStream</code> para binarios,
          <code>Reader</code> / <code>Writer</code> para texto).
        </p>
        <p className="mb-2 font-medium">
          Ejemplo: leer un archivo con BufferedReader
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`try (BufferedReader reader = new BufferedReader(new FileReader("archivo.txt"))) {
  String linea;
  while ((linea = reader.readLine()) != null) {
    System.out.println(linea);
  }
}`}{" "}
        </SyntaxHighlighter>

        <p className="mt-4 font-medium">Ejemplo: escribir con PrintWriter</p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`try (PrintWriter writer = new PrintWriter("salida.txt")) {
  writer.println("Hola mundo");
}`}{" "}
        </SyntaxHighlighter>

        <p className="mt-4">
          ⚠️ Es importante cerrar los streams, por eso se recomienda usar
          try-with-resources.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🔸 Java NIO (New IO)</h2>
        <p className="mb-4">
          Introducido en Java 7 con el paquete <code>java.nio.file</code>, NIO
          proporciona una API moderna y más eficiente para trabajar con
          archivos.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">
          ✔️ Lectura de archivos con Files
        </h3>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`List<String> lineas = Files.readAllLines(Paths.get("archivo.txt"));
lineas.forEach(System.out::println);`}{" "}
        </SyntaxHighlighter>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          ✔️ Escritura con StandardOpenOption
        </h3>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`Files.write(
  Paths.get("archivo.txt"),
  Arrays.asList("línea 1", "línea 2"),
  StandardOpenOption.CREATE,
  StandardOpenOption.APPEND
);`}{" "}
        </SyntaxHighlighter>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          ✔️ Verificar existencia o atributos
        </h3>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`Path ruta = Paths.get("archivo.txt");
if (Files.exists(ruta)) {
  System.out.println("Tamaño: " + Files.size(ruta));
}`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          🔸 WatchService: Monitor de archivos
        </h2>
        <p className="mb-4">
          Permite escuchar eventos como creación, modificación o eliminación de
          archivos en un directorio.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`WatchService watcher = FileSystems.getDefault().newWatchService();
Path dir = Paths.get("./");
dir.register(watcher, StandardWatchEventKinds.ENTRY_CREATE);

WatchKey key = watcher.take();
for (WatchEvent<?> event : key.pollEvents()) {
  System.out.println("Archivo creado: " + event.context());
}`}{" "}
        </SyntaxHighlighter>
        <p className="mt-4">
          Ideal para sincronización de archivos, logs, o tareas reactivas con
          carpetas.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          🧪 Preguntas comunes en entrevistas
        </h2>
        <ul className="list-disc pl-5">
          <li>¿Diferencias entre IO y NIO?</li>
          <li>¿Cómo leer un archivo eficientemente en Java?</li>
          <li>¿Qué es try-with-resources?</li>
          <li>¿Cómo detectar cambios en una carpeta?</li>
        </ul>
      </section>
    </div>
  );
}
