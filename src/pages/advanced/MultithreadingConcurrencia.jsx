import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function MultithreadingConcurrencia() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        🧵 Multithreading y Concurrencia en Java
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🔸 Thread vs Runnable</h2>
        <p className="mb-4">
          Java permite ejecutar múltiples tareas en paralelo mediante hilos
          (threads). Existen dos formas clásicas:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>Extender la clase Thread:</strong>
          </li>
        </ul>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`class MiHilo extends Thread {
  public void run() {
    System.out.println("Desde un hilo extendido");
  }
}

new MiHilo().start();`}{" "}
        </SyntaxHighlighter>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>Implementar Runnable:</strong> más flexible, permite heredar
            de otras clases
          </li>
        </ul>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`class Tarea implements Runnable {
  public void run() {
    System.out.println("Desde Runnable");
  }
}

new Thread(new Tarea()).start();`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          🔸 ExecutorService, Callable y Future
        </h2>
        <p className="mb-4">
          <code>ExecutorService</code> permite gestionar un grupo de hilos y
          tareas con más control:
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`ExecutorService executor = Executors.newFixedThreadPool(2);
executor.submit(() -> System.out.println("Tarea ejecutada"));
executor.shutdown();`}{" "}
        </SyntaxHighlighter>
        <p className="mt-4 mb-2">
          <strong>Callable</strong> permite retornar valores y{" "}
          <strong>Future</strong> recuperarlos:
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`Callable<Integer> tarea = () -> 10 + 20;
Future<Integer> resultado = executor.submit(tarea);
System.out.println("Resultado: " + resultado.get());`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          🔸 synchronized, volatile, Locks, Semáforos
        </h2>
        <p className="mb-4">Para evitar condiciones de carrera, Java ofrece:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>synchronized:</strong> evita acceso simultáneo a bloques
            críticos
          </li>
          <li>
            <strong>volatile:</strong> garantiza visibilidad entre hilos de una
            variable
          </li>
        </ul>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`private int contador = 0;

public synchronized void incrementar() {
  contador++;
}`}{" "}
        </SyntaxHighlighter>

        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>ReentrantLock:</strong> alternativa más controlada a
            synchronized
          </li>
          <li>
            <strong>Semaphore:</strong> controla número de hilos que acceden a
            un recurso
          </li>
        </ul>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`Lock lock = new ReentrantLock();
lock.lock();
try {
  // Sección crítica
} finally {
  lock.unlock();
}`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🔸 CompletableFuture</h2>
        <p className="mb-4">
          Permite programación asíncrona fluida, encadenar tareas y manejar
          errores:
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`CompletableFuture.supplyAsync(() -> "Hola")
  .thenApply(s -> s + " mundo")
  .thenAccept(System.out::println);`}{" "}
        </SyntaxHighlighter>
        <p className="mt-4">Puedes combinar múltiples tareas:</p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`CompletableFuture<Integer> suma = CompletableFuture.supplyAsync(() -> 5)
  .thenCombine(CompletableFuture.supplyAsync(() -> 10), Integer::sum);

System.out.println(suma.get());`}{" "}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          🧪 Ejercicios comunes de entrevista
        </h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Problema productor-consumidor usando `wait()` y `notify()`</li>
          <li>
            Descargar múltiples archivos en paralelo con `ExecutorService`
          </li>
          <li>
            Simular transferencias bancarias entre cuentas concurrentemente
          </li>
        </ul>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`class Banco {
  private int saldo = 100;

  public synchronized void transferir(Banco destino, int monto) {
    if (saldo >= monto) {
      saldo -= monto;
      destino.saldo += monto;
    }
  }
}`}{" "}
        </SyntaxHighlighter>
      </section>
    </div>
  );
}
