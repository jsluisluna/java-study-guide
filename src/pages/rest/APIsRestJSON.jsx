import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function APIsRestJSON() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">🌐 APIs RESTful y JSON</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🎯 Objetivo</h2>
        <p>
          Comprender los fundamentos de las APIs RESTful y cómo se comunican
          mediante JSON. Esta sección cubre el diseño, consumo y principios
          clave de las APIs REST, así como el uso de JSON como formato de
          intercambio de datos.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">📌 ¿Qué es REST?</h2>
        <p>
          REST (Representational State Transfer) es un estilo arquitectónico que
          define un conjunto de restricciones para crear servicios web
          escalables. Se basa en recursos que se acceden mediante URLs y
          operaciones HTTP.
        </p>
        <ul className="list-disc pl-5">
          <li>
            Stateless: cada solicitud debe contener toda la información
            necesaria.
          </li>
          <li>Usa métodos HTTP: GET, POST, PUT, PATCH, DELETE, etc.</li>
          <li>Los recursos se representan usualmente en JSON o XML.</li>
          <li>Identificación por URLs únicas.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🧾 Ejemplo de recurso en JSON
        </h2>
        <p>Formato común usado para enviar/recibir datos en APIs REST:</p>
        <SyntaxHighlighter
          language="json"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`{
  "id": 1,
  "nombre": "Juan",
  "correo": "juan@example.com",
  "activo": true
}`}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🔄 Operaciones CRUD y verbos HTTP
        </h2>
        <table className="table-auto w-full text-sm border mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-2 py-1 border">Operación</th>
              <th className="px-2 py-1 border">Verbo HTTP</th>
              <th className="px-2 py-1 border">Ejemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">Crear</td>
              <td className="border px-2 py-1">POST</td>
              <td className="border px-2 py-1">POST /usuarios</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Leer</td>
              <td className="border px-2 py-1">GET</td>
              <td className="border px-2 py-1">GET /usuarios/1</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Actualizar completamente</td>
              <td className="border px-2 py-1">PUT</td>
              <td className="border px-2 py-1">PUT /usuarios/1</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Actualizar parcialmente</td>
              <td className="border px-2 py-1">PATCH</td>
              <td className="border px-2 py-1">PATCH /usuarios/1</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Eliminar</td>
              <td className="border px-2 py-1">DELETE</td>
              <td className="border px-2 py-1">DELETE /usuarios/1</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2">
          <strong>PUT</strong> reemplaza completamente un recurso existente,
          mientras que <strong>PATCH</strong> solo actualiza campos específicos
          sin afectar los demás valores existentes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">♻️ Idempotencia</h2>
        <p>
          Un método HTTP es <strong>idempotente</strong> si múltiples
          solicitudes idénticas tienen el mismo efecto que una sola. Esto es
          importante para tolerancia a fallos y repetición de peticiones.
        </p>
        <ul className="list-disc pl-5">
          <li>
            <code>GET</code>, <code>PUT</code>, <code>DELETE</code> son
            idempotentes.
          </li>
          <li>
            <code>POST</code> no es idempotente: cada llamada crea un nuevo
            recurso.
          </li>
          <li>
            <code>PATCH</code> puede ser idempotente dependiendo de la
            implementación.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          📶 Códigos de respuesta HTTP comunes
        </h2>
        <p>Algunas respuestas estándar útiles en APIs:</p>
        <ul className="list-disc pl-5">
          <li>
            <strong>200 OK</strong>: solicitud exitosa.
          </li>
          <li>
            <strong>201 Created</strong>: recurso creado correctamente.
          </li>
          <li>
            <strong>204 No Content</strong>: solicitud exitosa sin cuerpo de
            respuesta.
          </li>
          <li>
            <strong>400 Bad Request</strong>: datos mal formateados o inválidos.
          </li>
          <li>
            <strong>401 Unauthorized</strong>: requiere autenticación.
          </li>
          <li>
            <strong>403 Forbidden</strong>: autenticado pero no autorizado.
          </li>
          <li>
            <strong>404 Not Found</strong>: recurso no encontrado.
          </li>
          <li>
            <strong>500 Internal Server Error</strong>: error inesperado del
            servidor.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          ⚙️ Buenas prácticas al diseñar APIs
        </h2>
        <ul className="list-disc pl-5">
          <li>
            Usar nombres de recursos en plural: <code>/usuarios</code>,{" "}
            <code>/productos</code>.
          </li>
          <li>
            Utilizar códigos de estado HTTP apropiados (200, 201, 404, 500...).
          </li>
          <li>Separar claramente los recursos y las acciones.</li>
          <li>Proveer paginación y filtros cuando sea necesario.</li>
          <li>Documentar la API (por ejemplo, con Swagger/OpenAPI).</li>
        </ul>
      </section>
    </div>
  );
}

export default APIsRestJSON;
