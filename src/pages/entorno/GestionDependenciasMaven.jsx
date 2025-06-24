import React from "react";

export function GestionDependenciasMaven() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        📦 Gestión de Dependencias con Maven
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🎯 Objetivo</h2>
        <p>
          Comprender qué es Maven, cómo se estructura un proyecto, cómo se
          gestionan sus dependencias y cómo se construyen aplicaciones Java
          modernas usando esta herramienta ampliamente adoptada en la industria.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">📘 ¿Qué es Maven?</h2>
        <p>
          Maven es una herramienta de automatización para compilación,
          empaquetado y gestión del ciclo de vida de aplicaciones Java. Utiliza
          un enfoque declarativo basado en XML mediante el archivo{" "}
          <code>pom.xml</code> (Project Object Model).
        </p>
        <p>Sus principales beneficios incluyen:</p>
        <ul className="list-disc pl-5">
          <li>
            Gestión automática de dependencias desde repositorios centrales.
          </li>
          <li>Estandarización de estructura de proyectos.</li>
          <li>
            Integración con herramientas de testing, análisis, cobertura y
            despliegue.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          📂 Estructura de un proyecto Maven
        </h2>
        <p>
          La estructura típica de carpetas que Maven impone facilita el
          mantenimiento y comprensión del proyecto:
        </p>
        <ul className="list-disc pl-5">
          <li>
            <code>src/main/java</code>: contiene el código fuente de la
            aplicación.
          </li>
          <li>
            <code>src/main/resources</code>: recursos como archivos{" "}
            <code>.properties</code> o <code>.xml</code>.
          </li>
          <li>
            <code>src/test/java</code>: clases de pruebas unitarias y de
            integración.
          </li>
          <li>
            <code>pom.xml</code>: archivo principal donde se configuran
            dependencias, plugins, perfiles, propiedades y más.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🔗 Dependencias y repositorios
        </h2>
        <p>
          Maven permite declarar dependencias externas que serán descargadas
          automáticamente desde repositorios como Maven Central. Cada
          dependencia se define con tres elementos clave:
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
          {`<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-web</artifactId>
  <version>3.1.0</version>
</dependency>`}
        </pre>
        <p>
          Las dependencias pueden tener un <code>scope</code> como:
        </p>
        <ul className="list-disc pl-5">
          <li>
            <code>compile</code>: disponible en compilación y ejecución (por
            defecto).
          </li>
          <li>
            <code>provided</code>: presente en compilación pero no en ejecución
            (por ejemplo, en servidores de aplicaciones).
          </li>
          <li>
            <code>runtime</code>: necesaria solo en tiempo de ejecución.
          </li>
          <li>
            <code>test</code>: disponible solo para pruebas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          ⚙️ Ciclo de vida de Maven
        </h2>
        <p>Maven define fases estándar para construir un proyecto:</p>
        <ul className="list-disc pl-5">
          <li>
            <code>validate</code>: verifica que el proyecto es válido y toda la
            información esté disponible.
          </li>
          <li>
            <code>compile</code>: compila el código fuente.
          </li>
          <li>
            <code>test</code>: ejecuta las pruebas unitarias.
          </li>
          <li>
            <code>package</code>: empaqueta el proyecto en un <code>.jar</code>{" "}
            o <code>.war</code>.
          </li>
          <li>
            <code>verify</code>: verifica los criterios de calidad.
          </li>
          <li>
            <code>install</code>: instala el artefacto en el repositorio local.
          </li>
          <li>
            <code>deploy</code>: publica el artefacto en un repositorio remoto
            compartido.
          </li>
        </ul>
        <p>
          También se utilizan combinaciones como <code>mvn clean install</code>{" "}
          para limpiar el proyecto y construir desde cero.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🔌 Plugins comunes en Maven
        </h2>
        <ul className="list-disc pl-5">
          <li>
            <code>maven-compiler-plugin</code>: controla la versión del
            compilador Java.
          </li>
          <li>
            <code>maven-surefire-plugin</code>: ejecuta pruebas unitarias.
          </li>
          <li>
            <code>maven-failsafe-plugin</code>: para pruebas de integración.
          </li>
          <li>
            <code>spring-boot-maven-plugin</code>: permite empaquetar y ejecutar
            apps Spring Boot.
          </li>
          <li>
            <code>maven-dependency-plugin</code>: analiza dependencias e incluye
            recursos.
          </li>
        </ul>
        <p>
          Los plugins pueden configurarse dentro del bloque{" "}
          <code>&lt;build&gt;</code> en el <code>pom.xml</code>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          ✅ Buenas prácticas con Maven
        </h2>
        <ul className="list-disc pl-5">
          <li>
            Evitar duplicación de dependencias en submódulos usando{" "}
            <code>&lt;dependencyManagement&gt;</code>.
          </li>
          <li>
            Definir propiedades como <code>&lt;java.version&gt;</code> o{" "}
            <code>&lt;spring.version&gt;</code> para mantener consistencia.
          </li>
          <li>
            No versionar carpetas generadas (<code>target/</code>,{" "}
            <code>.mvn/</code>).
          </li>
          <li>
            Separar configuraciones por entorno usando perfiles (
            <code>&lt;profiles&gt;</code>).
          </li>
          <li>
            Revisar periódicamente actualizaciones de dependencias con plugins
            como <code>versions-maven-plugin</code>.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default GestionDependenciasMaven;
