import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function SeguridadJWT() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        🔐 Seguridad con JWT (JSON Web Tokens)
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🎯 Objetivo</h2>
        <p>
          Comprender cómo funciona la autenticación basada en JWT, su estructura
          interna, flujo de autenticación y mejores prácticas para su
          implementación en arquitecturas RESTful y microservicios.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">📦 ¿Qué es un JWT?</h2>
        <p>
          JWT (JSON Web Token) es un estándar abierto (RFC 7519) que permite
          intercambiar información entre dos partes de manera segura y compacta.
          Es ampliamente utilizado en autenticación sin estado (stateless).
        </p>
        <p>
          Un JWT contiene información que ha sido firmada digitalmente para
          garantizar su integridad, usando algoritmos como HMAC SHA-256 o RSA.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🔍 Estructura de un token JWT
        </h2>
        <p>
          Un JWT consta de tres partes codificadas en Base64 y separadas por
          puntos (<code>.</code>):
        </p>
        <SyntaxHighlighter
          language="text"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikp1YW4iLCJpYXQiOjE1MTYyMzkwMjJ9
.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`}
        </SyntaxHighlighter>
        <ul className="list-disc pl-5 mt-2">
          <li>
            <strong>Header</strong>: contiene el tipo de token (JWT) y el
            algoritmo de firma.
          </li>
          <li>
            <strong>Payload</strong>: incluye las <em>claims</em>, es decir,
            datos como <code>sub</code> (ID del usuario), <code>iat</code>{" "}
            (fecha de emisión), <code>exp</code> (fecha de expiración), roles,
            entre otros.
          </li>
          <li>
            <strong>Signature</strong>: se genera combinando el header y el
            payload codificados, más una clave secreta. Garantiza que el
            contenido no ha sido alterado.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🔐 Flujo típico de autenticación con JWT
        </h2>
        <ol className="list-decimal pl-5">
          <li>
            El usuario envía sus credenciales (usuario/contraseña) a un endpoint
            de autenticación (<code>/login</code>).
          </li>
          <li>
            El servidor valida las credenciales y genera un JWT con datos
            relevantes del usuario.
          </li>
          <li>
            El token se retorna al cliente, que lo guarda en localStorage,
            sessionStorage o una cookie segura.
          </li>
          <li>
            En cada solicitud subsecuente, el cliente envía el token en el
            encabezado HTTP <code>Authorization: Bearer &lt;token&gt;</code>.
          </li>
          <li>
            El servidor verifica la firma del token y extrae las claims para
            validar permisos y autenticación.
          </li>
        </ol>
        <p className="mt-4">
          Este modelo es especialmente útil en arquitecturas SPA y
          microservicios donde se requiere que cada servicio valide las
          credenciales sin mantener sesiones centralizadas.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🛡️ Claims comunes en JWT
        </h2>
        <ul className="list-disc pl-5">
          <li>
            <code>iss</code>: Emisor del token
          </li>
          <li>
            <code>sub</code>: Identificador del sujeto (ej. ID del usuario)
          </li>
          <li>
            <code>exp</code>: Fecha de expiración
          </li>
          <li>
            <code>iat</code>: Fecha de emisión
          </li>
          <li>
            <code>aud</code>: Audiencia destinataria
          </li>
          <li>
            <code>roles</code>, <code>scope</code>: Claims personalizadas para
            control de acceso
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          ✅ Ventajas y consideraciones
        </h2>
        <ul className="list-disc pl-5">
          <li>
            ✅ Stateless: no es necesario mantener sesiones en el servidor.
          </li>
          <li>✅ Escalable: ideal para arquitecturas distribuidas y SPAs.</li>
          <li>
            ✅ Flexible: permite incluir datos adicionales útiles para control
            de acceso.
          </li>
          <li>🔒 Siempre usar HTTPS para evitar exposición del token.</li>
          <li>
            🔐 Evitar incluir información sensible en el payload: el contenido
            es decodificable.
          </li>
          <li>
            ⏳ Usar expiración (<code>exp</code>) y considerar{" "}
            <strong>refresh tokens</strong> para renovar sesiones.
          </li>
          <li>
            🚫 Revocar JWT no es trivial: requiere listas negras (blacklists) o
            expiración corta.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default SeguridadJWT;
