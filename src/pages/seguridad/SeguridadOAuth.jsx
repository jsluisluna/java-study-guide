import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function SeguridadOAuth() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">🔓 Seguridad con OAuth 2.0</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🎯 Objetivo</h2>
        <p>
          Comprender cómo funciona el protocolo OAuth 2.0 para autorización
          segura en aplicaciones modernas, incluyendo sus roles, flujos y casos
          de uso comunes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🔑 ¿Qué es OAuth 2.0?</h2>
        <p>
          OAuth 2.0 es un protocolo de autorización que permite a las
          aplicaciones acceder a recursos protegidos en nombre de un usuario,
          sin exponer sus credenciales.
        </p>
        <p>
          Es ampliamente usado por proveedores como Google, Facebook y GitHub
          para permitir el inicio de sesión y acceso a datos del usuario desde
          apps externas.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">👥 Roles en OAuth</h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>Resource Owner</strong>: el usuario final que otorga acceso
            a sus recursos.
          </li>
          <li>
            <strong>Client</strong>: la aplicación que desea acceder a los
            recursos.
          </li>
          <li>
            <strong>Authorization Server</strong>: emite tokens después de
            autenticar al usuario.
          </li>
          <li>
            <strong>Resource Server</strong>: expone los recursos protegidos,
            valida tokens.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🔁 Flujo de autorización (Authorization Code)
        </h2>
        <ol className="list-decimal pl-5">
          <li>
            El usuario accede a la app cliente, que redirige al Authorization
            Server (ej: login de Google).
          </li>
          <li>El usuario se autentica y autoriza el acceso.</li>
          <li>
            El Authorization Server redirige al cliente con un{" "}
            <strong>authorization code</strong>.
          </li>
          <li>
            El cliente intercambia el code por un <strong>access token</strong>.
          </li>
          <li>
            El token se usa para acceder al Resource Server en nombre del
            usuario.
          </li>
        </ol>
        <p className="mt-2">
          Este es el flujo más seguro y recomendado para aplicaciones web
          públicas o SPAs que interactúan con APIs.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🪪 Tokens en OAuth</h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>Access Token</strong>: se utiliza para acceder a recursos
            protegidos, tiene vida limitada.
          </li>
          <li>
            <strong>Refresh Token</strong>: se usa para obtener un nuevo access
            token sin volver a autenticar.
          </li>
        </ul>
        <p>
          Los tokens pueden ser JWT u opacos. Su uso correcto permite mantener
          sesiones seguras sin almacenar contraseñas.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          ✅ Buenas prácticas con OAuth
        </h2>
        <ul className="list-disc pl-5">
          <li>Utilizar HTTPS en todos los endpoints.</li>
          <li>No almacenar secrets en clientes públicos (ej: navegadores).</li>
          <li>
            Revisar el alcance (<code>scope</code>) de los permisos solicitados.
          </li>
          <li>Rotar y expirar los tokens regularmente.</li>
          <li>
            Aplicar el principio de menor privilegio al configurar scopes.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default SeguridadOAuth;
