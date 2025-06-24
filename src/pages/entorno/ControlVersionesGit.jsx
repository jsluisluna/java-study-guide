import React from "react";

export function ControlVersionesGit() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        🔧 Control de Versiones con Git
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🎯 Objetivo</h2>
        <p>
          Entender el funcionamiento básico y avanzado de Git como sistema de
          control de versiones distribuido. Aprender comandos clave, flujos de
          trabajo comunes y buenas prácticas para colaborar en proyectos.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">📚 ¿Qué es Git?</h2>
        <p>
          Git es un sistema de control de versiones distribuido que permite
          gestionar el historial de cambios en el código fuente, facilitando la
          colaboración entre desarrolladores y la trazabilidad del proyecto.
        </p>
        <p>
          Fue creado por Linus Torvalds en 2005 y se ha convertido en el sistema
          más utilizado en la industria del software.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🧰 Comandos básicos</h2>
        <ul className="list-disc pl-5">
          <li>
            <code>git init</code>: Inicializa un nuevo repositorio local.
          </li>
          <li>
            <code>git clone &lt;url&gt;</code>: Clona un repositorio remoto.
          </li>
          <li>
            <code>git status</code>: Muestra el estado actual de los archivos.
          </li>
          <li>
            <code>git add</code>: Agrega archivos al área de preparación
            (staging).
          </li>
          <li>
            <code>git commit -m "mensaje"</code>: Crea un nuevo commit.
          </li>
          <li>
            <code>git log</code>: Muestra el historial de commits.
          </li>
          <li>
            <code>git diff</code>: Muestra diferencias entre archivos.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🌿 Ramas y flujo de trabajo
        </h2>
        <p>
          Git permite crear y trabajar con múltiples ramas para desarrollar
          funcionalidades de forma aislada. Un flujo común es:
        </p>
        <ol className="list-decimal pl-5">
          <li>
            Crear una rama (<code>git checkout -b feature-x</code>).
          </li>
          <li>Hacer cambios, commits, pruebas.</li>
          <li>
            Fusionar con la rama principal (<code>git merge</code> o pull
            request).
          </li>
          <li>Eliminar la rama si ya no se necesita.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🔄 Trabajo con repositorios remotos
        </h2>
        <ul className="list-disc pl-5">
          <li>
            <code>git remote add origin &lt;url&gt;</code>: Agrega un
            repositorio remoto.
          </li>
          <li>
            <code>git push -u origin main</code>: Sube los commits a la rama
            remota principal.
          </li>
          <li>
            <code>git pull</code>: Descarga y fusiona cambios del remoto.
          </li>
          <li>
            <code>git fetch</code>: Descarga cambios sin fusionarlos
            automáticamente.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          ☁️ GitHub y plataformas colaborativas
        </h2>
        <p>
          GitHub es una de las plataformas más populares para alojar
          repositorios Git. Facilita la colaboración con pull requests,
          revisiones de código, issues y acciones automatizadas.
        </p>
        <ul className="list-disc pl-5">
          <li>
            Permite integrar herramientas CI/CD, pruebas, despliegues
            automáticos.
          </li>
          <li>
            Usa <strong>pull requests</strong> para proponer y revisar cambios
            antes de hacer merge.
          </li>
          <li>
            Permite gestionar proyectos con issues, milestones, y tableros tipo
            kanban.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🧭 GitFlow: estrategia de ramas
        </h2>
        <p>
          GitFlow es un modelo de ramificación popular para organizar el trabajo
          en equipos. Define roles claros para ramas como:
        </p>
        <ul className="list-disc pl-5">
          <li>
            <code>main</code>: contiene la versión estable en producción.
          </li>
          <li>
            <code>develop</code>: contiene el código en desarrollo.
          </li>
          <li>
            <code>feature/*</code>: para funcionalidades nuevas.
          </li>
          <li>
            <code>release/*</code>: para preparar versiones.
          </li>
          <li>
            <code>hotfix/*</code>: para arreglos urgentes en producción.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          ⚔️ Resolución de conflictos
        </h2>
        <p>
          Los conflictos ocurren cuando dos ramas han modificado las mismas
          líneas de un archivo. Para resolverlos:
        </p>
        <ol className="list-decimal pl-5">
          <li>
            Git marcará los archivos en conflicto tras un <code>merge</code> o{" "}
            <code>rebase</code>.
          </li>
          <li>
            Editar los archivos manualmente y decidir qué cambios conservar.
          </li>
          <li>
            Marcar el conflicto como resuelto con <code>git add archivo</code>.
          </li>
          <li>
            Finalizar con un nuevo <code>git commit</code> o{" "}
            <code>git merge --continue</code>.
          </li>
        </ol>
        <p>
          Herramientas como VS Code, GitKraken o herramientas gráficas de Git
          facilitan la resolución visual de conflictos.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">✅ Buenas prácticas</h2>
        <ul className="list-disc pl-5">
          <li>Hacer commits atómicos y con mensajes descriptivos.</li>
          <li>Usar ramas para cada funcionalidad o bugfix.</li>
          <li>Evitar commits grandes que mezclen muchos cambios.</li>
          <li>Actualizar la rama principal antes de hacer merge.</li>
          <li>Resolver conflictos de forma explícita y revisada.</li>
        </ul>
      </section>
    </div>
  );
}

export default ControlVersionesGit;
