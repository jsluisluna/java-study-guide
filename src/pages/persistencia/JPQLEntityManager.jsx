import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function JPQLEntityManager() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        🔍 Consultas JPQL y uso de EntityManager
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🔸 ¿Qué es JPQL?</h2>
        <p>
          JPQL (Java Persistence Query Language) es un lenguaje de consulta
          orientado a objetos definido por JPA. A diferencia del SQL
          tradicional, JPQL opera sobre entidades en lugar de tablas.
        </p>
        <p className="mt-2">
          <strong>Ejemplo básico:</strong>
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`SELECT u FROM Usuario u WHERE u.activo = true`}{" "}
        </SyntaxHighlighter>
        <p>
          Esta consulta busca objetos `Usuario` cuyo atributo `activo` sea
          verdadero, en lugar de trabajar directamente con columnas SQL.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          🔸 Consultas personalizadas con @Query
        </h2>
        <p>
          Spring Data JPA permite definir consultas JPQL personalizadas usando
          la anotación <code>@Query</code> en interfaces de repositorio:
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

  @Query("SELECT u FROM Usuario u WHERE u.email = :email")
  Optional<Usuario> buscarPorEmail(@Param("email") String email);
}`}{" "}
        </SyntaxHighlighter>
        <p>
          Puedes usar también consultas nativas con{" "}
          <code>nativeQuery = true</code> si necesitas escribir SQL
          directamente.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          🔸 Uso directo de EntityManager
        </h2>
        <p>
          Para casos donde necesitas mayor flexibilidad (consultas dinámicas,
          uso de Criteria API, etc.), puedes inyectar y usar directamente el{" "}
          <code>EntityManager</code>:
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`@PersistenceContext
private EntityManager entityManager;

public List<Usuario> buscarActivos() {
  return entityManager
          .createQuery("SELECT u FROM Usuario u WHERE u.activo = true", Usuario.class)
          .getResultList();
}`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          🔸 Introducción a Criteria API
        </h2>
        <p>
          Criteria API es una forma programática y segura en tiempo de
          compilación para construir consultas dinámicas en JPA.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`CriteriaBuilder cb = entityManager.getCriteriaBuilder();
CriteriaQuery<Usuario> query = cb.createQuery(Usuario.class);
Root<Usuario> root = query.from(Usuario.class);
query.select(root).where(cb.equal(root.get("activo"), true));

List<Usuario> resultado = entityManager.createQuery(query).getResultList();`}{" "}
        </SyntaxHighlighter>
        <p>
          Aunque más verboso que JPQL, Criteria API es útil para construir
          consultas condicionales y reutilizables.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">✅ Buenas prácticas</h2>
        <ul className="list-disc pl-5">
          <li>Prefiere JPQL o métodos derivados en la mayoría de los casos.</li>
          <li>
            Usa <code>Criteria API</code> solo cuando realmente necesites lógica
            dinámica.
          </li>
          <li>
            Evita consultas nativas salvo que sean necesarias por rendimiento o
            funciones específicas.
          </li>
          <li>
            Usa paginación (<code>Pageable</code>) para evitar cargar grandes
            volúmenes de datos.
          </li>
        </ul>
      </section>
    </div>
  );
}
