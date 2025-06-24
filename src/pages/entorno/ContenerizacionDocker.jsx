import React from "react";

export function ContenerizacionDocker() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">🐳 Contenerización con Docker</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🎯 Objetivo</h2>
        <p>
          Comprender qué es Docker, cómo funciona la contenerización, cómo crear
          imágenes para aplicaciones Java y cómo ejecutar contenedores de forma
          local o en entornos de despliegue.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">📦 ¿Qué es Docker?</h2>
        <p>
          Docker es una plataforma que permite empaquetar aplicaciones y sus
          dependencias en contenedores ligeros, portables y aislados. Estos
          contenedores se ejecutan de forma consistente en distintos entornos.
        </p>
        <p>
          Cada contenedor se basa en una imagen que define todo lo necesario
          para ejecutar una app, como el sistema base, binarios y configuración.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🧱 Conceptos clave</h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>Imagen</strong>: plantilla inmutable que describe cómo
            construir un contenedor.
          </li>
          <li>
            <strong>Contenedor</strong>: instancia en ejecución de una imagen.
          </li>
          <li>
            <strong>Dockerfile</strong>: script que indica cómo construir una
            imagen paso a paso.
          </li>
          <li>
            <strong>Docker Hub</strong>: repositorio público donde puedes
            almacenar y descargar imágenes.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          📄 Ejemplo de Dockerfile para app Java
        </h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
          {`# Imagen base
FROM openjdk:17-jdk-slim

# Directorio de trabajo
WORKDIR /app

# Copiar el .jar generado
COPY target/mi-aplicacion.jar app.jar

# Puerto expuesto
EXPOSE 8080

# Comando de inicio
ENTRYPOINT ["java", "-jar", "app.jar"]`}
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🧪 Comandos básicos de Docker
        </h2>
        <ul className="list-disc pl-5">
          <li>
            <code>docker build -t mi-app .</code>: construye una imagen desde un
            Dockerfile.
          </li>
          <li>
            <code>docker images</code>: lista las imágenes locales.
          </li>
          <li>
            <code>docker run -p 8080:8080 mi-app</code>: ejecuta un contenedor y
            mapea el puerto.
          </li>
          <li>
            <code>docker ps</code>: muestra los contenedores en ejecución.
          </li>
          <li>
            <code>docker stop &lt;id&gt;</code>: detiene un contenedor.
          </li>
          <li>
            <code>docker rmi mi-app</code>: elimina una imagen.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">✅ Buenas prácticas</h2>
        <ul className="list-disc pl-5">
          <li>Utiliza imágenes base livianas (como Alpine o slim).</li>
          <li>
            Evita copiar archivos innecesarios con <code>.dockerignore</code>.
          </li>
          <li>
            No uses <code>latest</code> en producción; etiqueta las versiones.
          </li>
          <li>
            Usa variables de entorno y archivos <code>.env</code> para
            configuración.
          </li>
          <li>
            Automatiza el build con CI/CD (GitHub Actions, GitLab CI, etc.).
          </li>
        </ul>
      </section>
    </div>
  );
}

export default ContenerizacionDocker;
