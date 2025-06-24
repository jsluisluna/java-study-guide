import React from "react";

export function ObservabilidadWatchdogSplunk() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        🔍 Observabilidad con Watchdog y Splunk
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🎯 Objetivo</h2>
        <p>
          Entender el rol de la observabilidad en sistemas modernos y cómo
          herramientas como Watchdog (monitoring) y Splunk (logs y trazas)
          permiten detectar, analizar y responder a incidentes de forma
          proactiva.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          📈 ¿Qué es observabilidad?
        </h2>
        <p>
          La observabilidad es la capacidad de entender lo que ocurre dentro de
          un sistema distribuidos a partir de sus salidas externas. Incluye
          métricas, logs y trazas.
        </p>
        <ul className="list-disc pl-5">
          <li>
            <strong>Métricas:</strong> datos numéricos sobre el comportamiento
            del sistema.
          </li>
          <li>
            <strong>Logs:</strong> eventos registrados durante la ejecución.
          </li>
          <li>
            <strong>Traces:</strong> seguimiento de solicitudes entre servicios.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🐾 Watchdog</h2>
        <p>
          Watchdog (o similares como Prometheus/Grafana) es una herramienta de
          monitoreo que recolecta métricas del sistema y genera alertas con base
          en umbrales definidos.
        </p>
        <ul className="list-disc pl-5">
          <li>Monitoreo de CPU, RAM, uso de disco y tráfico de red.</li>
          <li>Alertas personalizadas por degradación o caída de servicios.</li>
          <li>Dashboards de visualización en tiempo real.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">📊 Splunk</h2>
        <p>
          Splunk es una plataforma para análisis de datos de máquina. Permite
          recolectar, indexar y visualizar logs en tiempo real desde múltiples
          fuentes.
        </p>
        <ul className="list-disc pl-5">
          <li>Búsquedas en tiempo real con lenguaje de consulta SPL.</li>
          <li>Detección de patrones inusuales y correlación de eventos.</li>
          <li>Dashboards interactivos para DevOps y seguridad.</li>
          <li>Integración con alertas, scripts y herramientas externas.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          ✅ Buenas prácticas de observabilidad
        </h2>
        <ul className="list-disc pl-5">
          <li>
            Registrar eventos relevantes en cada servicio con contexto (usuario,
            request ID, etc.).
          </li>
          <li>
            Unificar logs y trazas con formatos estándar (JSON, OpenTelemetry).
          </li>
          <li>Correlacionar errores con métricas para diagnosticar rápido.</li>
          <li>Monitorear no solo fallos, sino también tendencias anómalas.</li>
          <li>
            Incluir observabilidad desde el diseño, no como un añadido
            posterior.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default ObservabilidadWatchdogSplunk;
