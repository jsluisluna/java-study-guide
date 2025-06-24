import React from "react";

export function CacheDatosRedis() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">⚡ Caché de Datos con Redis</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🎯 Objetivo</h2>
        <p>
          Entender qué es Redis, cómo se utiliza como sistema de caché en
          aplicaciones Java y cómo aplicar patrones comunes para mejorar el
          rendimiento y la escalabilidad en arquitecturas modernas.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">📦 ¿Qué es Redis?</h2>
        <p>
          Redis (REmote DIctionary Server) es una base de datos en memoria, de
          estructura clave-valor, extremadamente rápida y ampliamente adoptada
          para operaciones de lectura/escritura de baja latencia. Redis es
          single-threaded pero muy eficiente gracias a su diseño basado en
          estructuras de datos.
        </p>
        <p>Puede actuar como:</p>
        <ul className="list-disc pl-5">
          <li>
            Caché de capa intermedia entre la app y la base de datos principal.
          </li>
          <li>Almacenamiento temporal de tokens o sesiones.</li>
          <li>Cola de mensajes ligera (listas o Pub/Sub).</li>
          <li>Motor de ranking y contadores en tiempo real.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">💡 Casos de uso típicos</h2>
        <ul className="list-disc pl-5">
          <li>
            Cachear resultados de consultas frecuentes y costosas a la base de
            datos.
          </li>
          <li>Almacenar sesiones de usuario y tokens de autenticación.</li>
          <li>
            Implementar rate limiting para evitar abuso de endpoints públicos.
          </li>
          <li>Sincronizar datos en tiempo real entre microservicios.</li>
          <li>Mantener rankings o conteos en dashboards analíticos.</li>
        </ul>
        <p>
          Redis es ideal cuando se necesita acceso ultrarrápido, operaciones
          atómicas y almacenamiento de datos efímeros o volátiles.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          ⚙️ Configuración básica con Spring Boot
        </h2>
        <p>
          Dependencias necesarias en <code>pom.xml</code>:
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
          {`<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>`}
        </pre>
        <p>
          Propiedades mínimas en <code>application.properties</code>:
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
          {`spring.redis.host=localhost
spring.redis.port=6379
spring.cache.type=redis`}
        </pre>
        <p>
          Ejemplo con anotación <code>@Cacheable</code>:
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
          {`@Cacheable("productos")
public Producto obtenerProductoPorId(Long id) {
  // simulación de consulta costosa a base de datos
  return repositorio.findById(id).orElseThrow();
}`}{" "}
        </pre>
        <p>
          También puedes usar <code>@CachePut</code> y <code>@CacheEvict</code>{" "}
          para actualizar o eliminar caché según el caso.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          📌 Tipos de estructuras de datos
        </h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>String</strong>: para valores simples (tokens, JSON, flags).
          </li>
          <li>
            <strong>Hash</strong>: para agrupar campos por clave (objeto
            serializado).
          </li>
          <li>
            <strong>List</strong>: para colas FIFO.
          </li>
          <li>
            <strong>Set / Sorted Set</strong>: para valores únicos y rankings.
          </li>
          <li>
            <strong>Stream</strong>: para procesar flujos de datos como logs.
          </li>
        </ul>
        <p>
          Redis soporta operaciones atómicas y scripts Lua para lógica compleja
          en un solo paso.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">✅ Buenas prácticas</h2>
        <ul className="list-disc pl-5">
          <li>Establecer TTL (tiempo de vida) para evitar caché obsoleta.</li>
          <li>
            Evitar guardar grandes cantidades de datos binarios o documentos
            grandes.
          </li>
          <li>
            Usar claves con prefijos para agrupar datos y evitar colisiones.
          </li>
          <li>
            Configurar políticas de eliminación (eviction) como LRU o LFU.
          </li>
          <li>Monitorear el uso de memoria y número de claves activas.</li>
          <li>No confiar en Redis como almacenamiento permanente.</li>
        </ul>
      </section>
    </div>
  );
}

export default CacheDatosRedis;
