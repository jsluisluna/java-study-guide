import React from "react";

export function IntegracionContinuaJenkins() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        ⚙️ Integración Continua con Jenkins
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🎯 Objetivo</h2>
        <p>
          Comprender qué es Jenkins, cómo se utiliza para automatizar procesos
          de integración y entrega continua (CI/CD), y cómo configurar pipelines
          básicos para proyectos Java.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🧩 ¿Qué es Jenkins?</h2>
        <p>
          Jenkins es una herramienta de automatización open source muy popular
          para la integración continua (CI). Permite compilar, probar y
          desplegar automáticamente aplicaciones cada vez que hay cambios en el
          código.
        </p>
        <p>
          Funciona mediante trabajos (jobs) que se pueden configurar desde una
          interfaz web o mediante archivos declarativos (
          <code>Jenkinsfile</code>).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🛠️ Pipeline básico en Jenkins
        </h2>
        <p>
          Ejemplo de <code>Jenkinsfile</code> para un proyecto Java con Maven:
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
          {`pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/usuario/proyecto.git'
      }
    }

    stage('Build') {
      steps {
        sh 'mvn clean install'
      }
    }

    stage('Test') {
      steps {
        sh 'mvn test'
      }
    }
  }
}`}{" "}
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🔗 Integraciones comunes
        </h2>
        <ul className="list-disc pl-5">
          <li>
            GitHub/GitLab/Bitbucket para detección de commits y pull requests.
          </li>
          <li>Docker para construir imágenes como parte del pipeline.</li>
          <li>Slack/Email para notificaciones del estado del build.</li>
          <li>
            JIRA o sistemas de seguimiento para integración con flujos de
            trabajo.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">📦 Plugins esenciales</h2>
        <ul className="list-disc pl-5">
          <li>
            <code>Git Plugin</code>: conexión con repositorios Git.
          </li>
          <li>
            <code>Pipeline</code>: soporte para <code>Jenkinsfile</code>.
          </li>
          <li>
            <code>Docker Pipeline</code>: integración con Docker y Docker Hub.
          </li>
          <li>
            <code>Blue Ocean</code>: interfaz visual moderna para pipelines.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">✅ Buenas prácticas</h2>
        <ul className="list-disc pl-5">
          <li>
            Versionar el <code>Jenkinsfile</code> junto con el proyecto.
          </li>
          <li>Separar stages por propósito: build, test, deploy, etc.</li>
          <li>Usar agentes aislados para mayor portabilidad y control.</li>
          <li>Automatizar pruebas como parte del pipeline.</li>
          <li>
            Evitar credenciales en texto plano, usar{" "}
            <code>credentials plugin</code>.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default IntegracionContinuaJenkins;
