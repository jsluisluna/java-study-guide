import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function ProgramacionReactiva() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        ⚡ Programación Reactiva con Spring: Mono y Flux
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          🌐 ¿Qué es la Programación Reactiva?
        </h2>
        <p className="mb-4">
          La programación reactiva es un paradigma de desarrollo orientado a la
          manipulación asíncrona y no bloqueante de flujos de datos. Se basa en
          el patrón de diseño <strong>Observer</strong> y en el concepto de{" "}
          <strong>flujos de datos</strong> que pueden ser transformados,
          combinados y gestionados a lo largo del tiempo.
        </p>
        <p className="mb-4">
          En lugar de ejecutar operaciones de manera secuencial y bloquear el
          hilo hasta obtener resultados, en la programación reactiva las
          operaciones <strong>reaccionan</strong> cuando los datos están
          disponibles. Esto permite construir aplicaciones más{" "}
          <strong>eficientes</strong> y <strong>escalables</strong>,
          especialmente útiles en sistemas altamente concurrentes.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">🚀 Beneficios</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>Asincronía no bloqueante:</strong> libera recursos mientras
            se espera una operación I/O (como acceso a base de datos o servicios
            externos).
          </li>
          <li>
            <strong>Alta escalabilidad:</strong> permite manejar miles de
            solicitudes concurrentes con pocos hilos.
          </li>
          <li>
            <strong>Composición fluida:</strong> los flujos de datos se pueden
            transformar, combinar, filtrar, retrasar, etc., de forma
            declarativa.
          </li>
          <li>
            <strong>Manejo unificado de errores:</strong> se pueden capturar
            errores como parte del flujo sin necesidad de bloques try-catch
            tradicionales.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          💡 Casos de uso ideales
        </h3>
        <ul className="list-disc pl-5 mb-4">
          <li>
            Aplicaciones que realizan múltiples llamadas a APIs externas o bases
            de datos en paralelo.
          </li>
          <li>
            Servicios de streaming de datos o sistemas de mensajería (como
            WebSocket o Kafka).
          </li>
          <li>
            Microservicios que requieren eficiencia bajo alta carga o número de
            conexiones.
          </li>
          <li>
            Dashboards de monitoreo en tiempo real o interfaces web con datos
            dinámicos.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          📦 Mono: Flujo Reactivo de un Solo Elemento
        </h2>

        <p className="mb-4">
          <code>Mono&lt;T&gt;</code> es un tipo reactivo proporcionado por el
          proyecto <strong>Project Reactor</strong> (el motor subyacente en
          Spring WebFlux) que representa una fuente que puede emitir{" "}
          <strong>cero o un valor</strong>, o un error. Es la alternativa
          reactiva a los tipos como <code>Optional&lt;T&gt;</code> o{" "}
          <code>Future&lt;T&gt;</code>.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          🔧 ¿Cómo funciona Mono?
        </h3>
        <p className="mb-4">
          Un <code>Mono</code> puede representar:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>Un valor disponible de inmediato.</li>
          <li>
            Un valor que se producirá más adelante (por ejemplo, al terminar una
            operación I/O).
          </li>
          <li>La ausencia de valor (completado sin datos).</li>
          <li>Un error que interrumpe el flujo.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          📘 Ejemplo: obtener un usuario por ID
        </h3>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`@GetMapping("/user/{id}")
public Mono<ResponseEntity<User>> getUser(@PathVariable String id) {
  return userRepository.findById(id)
    .map(user -> ResponseEntity.ok(user))
    .defaultIfEmpty(ResponseEntity.notFound().build());
}`}
        </SyntaxHighlighter>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          🔗 Operadores comunes en Mono
        </h3>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <code>map()</code>: transforma el valor emitido.
          </li>
          <li>
            <code>flatMap()</code>: encadena Monos (útil para llamadas
            anidadas).
          </li>
          <li>
            <code>filter()</code>: filtra con una condición.
          </li>
          <li>
            <code>defaultIfEmpty()</code>: define un valor por defecto si no se
            emite nada.
          </li>
          <li>
            <code>onErrorResume()</code>: permite manejar errores de forma
            elegante.
          </li>
        </ul>

        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`public Mono<String> processValue(String input) {
  return Mono.just(input)
    .filter(str -> !str.isEmpty())
    .map(String::toUpperCase)
    .switchIfEmpty(Mono.error(new IllegalArgumentException("Cadena vacía")));
}`}
        </SyntaxHighlighter>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          🧠 Casos de uso típicos para Mono
        </h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Obtener un único registro de una base de datos.</li>
          <li>Guardar o actualizar un objeto (y devolverlo).</li>
          <li>
            Encadenar operaciones condicionales (por ejemplo: validaciones).
          </li>
          <li>Modelar endpoints REST con respuestas individuales.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          🔁 Flux: Flujo de Múltiples Elementos
        </h2>

        <p className="mb-4">
          <code>Flux&lt;T&gt;</code> representa una secuencia reactiva de{" "}
          <strong>0 a N elementos</strong>. Puede emitir múltiples valores,
          completarse exitosamente, o terminar con un error. Es comparable a
          trabajar con un <code>Stream&lt;T&gt;</code>, pero de manera
          asíncrona, no bloqueante y con control de errores incorporado.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          ⚙️ ¿Cómo se comporta un Flux?
        </h3>
        <p className="mb-4">
          Un <code>Flux</code> puede:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>Emitir 0, 1 o muchos elementos.</li>
          <li>
            Emitir un error (como <code>onError</code>).
          </li>
          <li>
            Finalizar su emisión (<code>onComplete</code>).
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          📘 Ejemplo básico: devolver todos los usuarios
        </h3>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`@GetMapping("/users")
public Flux<User> getAllUsers() {
  return userRepository.findAll();
}`}
        </SyntaxHighlighter>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          🔧 Operadores clave de Flux
        </h3>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <code>map()</code>: transforma cada elemento del flujo.
          </li>
          <li>
            <code>filter()</code>: filtra elementos por una condición.
          </li>
          <li>
            <code>take(n)</code>: limita el número de elementos emitidos.
          </li>
          <li>
            <code>collectList()</code>: convierte un <code>Flux</code> en un{" "}
            <code>Mono&lt;List&lt;T&gt;&gt;</code>.
          </li>
          <li>
            <code>delayElements(Duration)</code>: retrasa cada elemento (útil
            para simular flujos temporales).
          </li>
        </ul>

        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`Flux<String> nombres = Flux.just("Ana", "Luis", "Pedro", "Marta");

nombres
  .filter(nombre -> nombre.length() > 4)
  .map(String::toUpperCase)
  .collectList()
  .subscribe(System.out::println);`}
        </SyntaxHighlighter>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          🧠 Casos de uso comunes para Flux
        </h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Listar registros desde una base de datos o API.</li>
          <li>
            Emitir secuencias periódicas de datos (sensores, métricas,
            notificaciones).
          </li>
          <li>
            Procesar flujos grandes con operadores reactivos (filtrar, agrupar,
            combinar).
          </li>
          <li>Transmitir datos en tiempo real mediante WebFlux o WebSocket.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          📡 Ejemplo con flujo simulado
        </h3>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`Flux.interval(Duration.ofSeconds(1))
  .take(5)
  .subscribe(i -> System.out.println("Valor: " + i));`}
        </SyntaxHighlighter>
        <p className="mt-4">
          Este flujo emite cinco valores secuenciales con un segundo de
          intervalo entre cada uno.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          📥 Reactive Streams: Fundamento de la Programación Reactiva
        </h2>

        <p className="mb-4">
          <strong>Reactive Streams</strong> es una especificación estándar
          introducida en Java 9 (paquete <code>java.util.concurrent.Flow</code>)
          que define un modelo común para manejar flujos de datos de forma
          asíncrona, no bloqueante y con soporte para{" "}
          <strong>backpressure</strong> (presión de retroceso).
        </p>

        <p className="mb-4">
          Esta especificación fue impulsada por empresas como Netflix, Lightbend
          y Pivotal para estandarizar cómo deben interactuar los componentes
          productores y consumidores en entornos altamente concurrentes.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          🔁 Interfaces clave de Reactive Streams
        </h3>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <code>Publisher&lt;T&gt;</code>: emite elementos.
          </li>
          <li>
            <code>Subscriber&lt;T&gt;</code>: consume elementos emitidos por el{" "}
            <code>Publisher</code>.
          </li>
          <li>
            <code>Subscription</code>: representa el vínculo entre Publisher y
            Subscriber, permitiendo el control del flujo.
          </li>
          <li>
            <code>Processor&lt;T, R&gt;</code>: actúa como puente: es tanto{" "}
            <code>Subscriber</code> como <code>Publisher</code>.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          🌐 ¿Qué es backpressure?
        </h3>
        <p className="mb-4">
          Es un mecanismo para evitar la sobrecarga del consumidor cuando el
          productor genera datos más rápido de lo que se pueden procesar. El
          consumidor puede solicitar explícitamente cuántos elementos desea (
          <code>request(n)</code>) y suspender la emisión hasta estar listo.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          🔌 Project Reactor y Spring WebFlux
        </h3>
        <p className="mb-4">
          En Spring WebFlux, <code>Mono</code> y <code>Flux</code> implementan
          la interfaz <code>Publisher</code> de Reactive Streams. Esto significa
          que puedes:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            Integrarte con cualquier librería que siga Reactive Streams (como
            Akka Streams, RxJava 2+ o Kafka Reactor).
          </li>
          <li>
            Aprovechar <strong>operadores declarativos</strong> para transformar
            flujos y controlar errores.
          </li>
          <li>
            Manejar miles de conexiones concurrentes en un número reducido de
            hilos.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          ⚙️ Ejemplo técnico: implementación personalizada
        </h3>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`public class CustomPublisher implements Publisher<String> {
  @Override
  public void subscribe(Subscriber<? super String> subscriber) {
    subscriber.onSubscribe(new Subscription() {
      private boolean completed = false;

      @Override
      public void request(long n) {
        if (!completed) {
          subscriber.onNext("Hola desde Reactive Streams!");
          subscriber.onComplete();
          completed = true;
        }
      }

      @Override
      public void cancel() {
        completed = true;
      }
    });
  }
}`}
        </SyntaxHighlighter>

        <p className="mt-4">
          Este ejemplo muestra un <code>Publisher</code> personalizado que emite
          un único valor al suscriptor. La lógica <code>request(n)</code>{" "}
          permite aplicar backpressure.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          💡 Buenas prácticas y consideraciones
        </h2>
        <ul className="list-disc pl-5 mb-4">
          <li>
            Evita usar <code>block()</code> ya que rompe el modelo no
            bloqueante.
          </li>
          <li>
            Combina <code>Mono</code> y <code>Flux</code> con controladores{" "}
            <code>@RestController</code> para APIs reactivas.
          </li>
          <li>
            Maneja correctamente los errores usando <code>onErrorResume()</code>{" "}
            o <code>onErrorReturn()</code>.
          </li>
          <li>
            Considera backpressure para controlar la velocidad de emisión.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          🧪 Ejercicios comunes en entrevistas
        </h2>
        <ul className="list-disc pl-5 mb-4">
          <li>
            Usar <code>Flux</code> para filtrar y transformar una lista de
            objetos.
          </li>
          <li>
            Combinar múltiples <code>Mono</code> con <code>zip()</code> o{" "}
            <code>flatMap()</code>.
          </li>
          <li>
            Simular operaciones asíncronas con <code>Mono.delay()</code> o{" "}
            <code>Flux.interval()</code>.
          </li>
        </ul>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`Flux<String> nombres = Flux.just("Ana", "Luis", "Pedro", "Ana");
nombres
  .distinct()
  .filter(nombre -> nombre.length() > 3)
  .map(String::toUpperCase)
  .subscribe(System.out::println);`}
        </SyntaxHighlighter>
      </section>
    </div>
  );
}
