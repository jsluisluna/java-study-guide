import React from "react";

export function MensajeriaEventosKafka() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        🛰️ Mensajería y Eventos con Apache Kafka
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🎯 Objetivo</h2>
        <p>
          Comprender los conceptos fundamentales de Apache Kafka, cómo se
          utiliza para manejar flujos de datos y eventos en tiempo real, cómo se
          integra con aplicaciones Java y casos de uso típicos en entornos
          empresariales.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          📦 ¿Qué es Apache Kafka?
        </h2>
        <p>
          Apache Kafka es una plataforma distribuida de mensajería basada en el
          modelo publicación-suscripción. Fue diseñada para permitir el
          procesamiento eficiente y confiable de grandes volúmenes de eventos en
          tiempo real.
        </p>
        <p>
          Kafka se utiliza para desacoplar productores y consumidores,
          garantizar persistencia, y escalar horizontalmente la ingesta y
          consumo de datos.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">📌 Casos de uso comunes</h2>
        <ul className="list-disc pl-5">
          <li>
            📊 Registro y monitoreo de actividad de usuario (user tracking).
          </li>
          <li>💳 Procesamiento de eventos financieros o de transacciones.</li>
          <li>📦 Comunicación entre microservicios de forma asincrónica.</li>
          <li>
            🛒 Actualización de inventario y sincronización de catálogos en
            e-commerce.
          </li>
          <li>
            🧪 Integración con sistemas de análisis en tiempo real y aprendizaje
            automático.
          </li>
        </ul>
        <p>
          Kafka es especialmente útil cuando se requiere tolerancia a fallos,
          retención configurable y alto rendimiento para eventos distribuidos.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🧱 Conceptos clave</h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>Broker</strong>: nodo del clúster que almacena y entrega
            mensajes.
          </li>
          <li>
            <strong>Topic</strong>: canal lógico donde los productores publican
            y los consumidores leen mensajes.
          </li>
          <li>
            <strong>Producer</strong>: componente que publica eventos en un
            topic.
          </li>
          <li>
            <strong>Consumer</strong>: componente que se suscribe a uno o más
            topics.
          </li>
          <li>
            <strong>Partition</strong>: unidad de paralelismo de un topic,
            permite escalar el procesamiento.
          </li>
          <li>
            <strong>Offset</strong>: número secuencial que indica la posición de
            un mensaje dentro de una partición.
          </li>
          <li>
            <strong>Consumer Group</strong>: conjunto de consumidores que
            colaboran para procesar mensajes de un topic en paralelo.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          📄 Ejemplo de configuración con Spring Boot
        </h2>
        <p>
          Dependencias en <code>pom.xml</code>:
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
          {`<dependency>
  <groupId>org.springframework.kafka</groupId>
  <artifactId>spring-kafka</artifactId>
</dependency>`}
        </pre>
        <p>Productor simple:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
          {`@Service
public class KafkaProducer {
  private final KafkaTemplate<String, String> kafkaTemplate;

  public KafkaProducer(KafkaTemplate<String, String> kafkaTemplate) {
    this.kafkaTemplate = kafkaTemplate;
  }

  public void enviar(String mensaje) {
    kafkaTemplate.send("mi-topico", mensaje);
  }
}`}{" "}
        </pre>
        <p>Consumidor simple:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
          {`@KafkaListener(topics = "mi-topico", groupId = "grupo1")
public void recibir(String mensaje) {
  System.out.println("Mensaje recibido: " + mensaje);
}`}{" "}
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">✅ Buenas prácticas</h2>
        <ul className="list-disc pl-5">
          <li>
            Usar <strong>grupos de consumidores</strong> para balancear carga
            horizontalmente.
          </li>
          <li>
            Evitar lógica compleja o bloqueante dentro de los{" "}
            <code>@KafkaListener</code>.
          </li>
          <li>
            Controlar la retención de mensajes según los requisitos del negocio.
          </li>
          <li>Validar y versionar esquemas con Avro o JSON Schema.</li>
          <li>
            Usar claves en los mensajes para mantener el orden dentro de una
            partición.
          </li>
          <li>
            Monitorear lag de consumidores para detectar retrasos en el consumo.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default MensajeriaEventosKafka;
