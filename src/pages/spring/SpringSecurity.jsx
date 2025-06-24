import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function SpringSecurity() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">🔐 Spring Security</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🔸 ¿Qué es Spring Security?
        </h2>
        <p>
          Spring Security es un framework de seguridad para aplicaciones Java
          que proporciona autenticación, autorización y protección contra
          ataques comunes como CSRF, clickjacking y más. Se integra
          estrechamente con Spring Boot y se configura de forma declarativa o
          programática.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🔸 Autenticación vs Autorización
        </h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>Autenticación:</strong> Proceso de verificar la identidad
            del usuario (por ejemplo, con usuario y contraseña).
          </li>
          <li>
            <strong>Autorización:</strong> Proceso de verificar si el usuario
            autenticado tiene permiso para realizar una acción específica.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🔸 Configuración básica</h2>
        <p>
          A partir de Spring Security 5.7, se recomienda usar{" "}
          <code>SecurityFilterChain</code> en lugar de extender{" "}
          <code>WebSecurityConfigurerAdapter</code>:
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`@Configuration
@EnableWebSecurity
public class SecurityConfig {

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
      .authorizeHttpRequests(auth -> auth
        .requestMatchers("/admin/**").hasRole("ADMIN")
        .requestMatchers("/user/**").authenticated()
        .anyRequest().permitAll()
      )
      .formLogin()
      .and()
      .httpBasic();

    return http.build();
  }
}`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🔸 Uso de @PreAuthorize</h2>
        <p>
          Puedes usar anotaciones como <code>@PreAuthorize</code> para proteger
          métodos basados en expresiones SpEL:
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`@PreAuthorize("hasRole('ADMIN')")
public void eliminarUsuario(Long id) {
  // lógica de eliminación
}`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🔸 Seguridad con JWT</h2>
        <p>
          En aplicaciones REST, es común usar JWT (JSON Web Tokens) para manejar
          sesiones sin estado (stateless):
        </p>
        <ul className="list-disc pl-5">
          <li>El usuario inicia sesión con usuario/contraseña.</li>
          <li>
            El backend genera un token firmado con los claims del usuario.
          </li>
          <li>
            Ese token se envía en cada request en el header{" "}
            <code>Authorization</code>.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          🧩 Estructura de un JWT
        </h3>
        <p>
          Un JWT se compone de tres partes codificadas en Base64 y separadas por
          puntos:
        </p>
        <ul className="list-disc pl-5">
          <li>
            <strong>Header:</strong> Tipo de token y algoritmo de firma.
          </li>
          <li>
            <strong>Payload:</strong> Contiene los claims o datos del usuario.
          </li>
          <li>
            <strong>Signature:</strong> Firma digital para verificar la
            integridad.
          </li>
        </ul>
        <p className="mt-2">Ejemplo de JWT:</p>
        <SyntaxHighlighter
          language="json"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
  eyJzdWIiOiJ1c3VhcmlvIiwicm9sZXMiOlsiQURNSU4iXSwiaWF0IjoxNjg3MDA0NzYyfQ.
  dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk`}
        </SyntaxHighlighter>

        <p className="mt-4">Ejemplo de un filtro JWT personalizado:</p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`public class JwtFilter extends OncePerRequestFilter {

  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
      throws ServletException, IOException {

    String authHeader = request.getHeader("Authorization");
    if (authHeader != null && authHeader.startsWith("Bearer ")) {
      String jwt = authHeader.substring(7);
      // Validar y procesar el token...
    }

    filterChain.doFilter(request, response);
  }
}`}{" "}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">✅ Buenas prácticas</h2>
        <ul className="list-disc pl-5">
          <li>
            Usa siempre contraseñas encriptadas con{" "}
            <code>BCryptPasswordEncoder</code>.
          </li>
          <li>Protege las rutas sensibles con roles específicos.</li>
          <li>
            Evita exponer endpoints sin autenticar (salvo los explícitamente
            públicos).
          </li>
          <li>Para APIs REST, usa JWT o tokens OAuth2.</li>
          <li>
            Activa protección CSRF si usas sesiones tradicionales con
            formularios.
          </li>
        </ul>
      </section>
    </div>
  );
}
