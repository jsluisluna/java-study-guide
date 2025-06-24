import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function JPAFundamentos() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        🗄️ JPA Fundamentos y JDBC Básico
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🔸 Introducción a JDBC</h2>
        <p>
          JDBC (Java Database Connectivity) es la API estándar para conectarse a
          bases de datos relacionales desde Java. Aunque hoy en día usamos
          frameworks como JPA, es útil entender JDBC para entrevistas técnicas.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`try (Connection conn = DriverManager.getConnection(url, user, password);
     PreparedStatement stmt = conn.prepareStatement("SELECT * FROM usuarios");
     ResultSet rs = stmt.executeQuery()) {

  while (rs.next()) {
    System.out.println(rs.getString("nombre"));
  }
}`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🔸 ¿Qué es JPA?</h2>
        <p>
          JPA (Java Persistence API) es una especificación de Java para el mapeo
          objeto-relacional (ORM). Permite trabajar con bases de datos usando
          entidades Java en lugar de SQL plano.
        </p>
        <p>
          Spring Data JPA implementa esta especificación y la simplifica
          proporcionando repositorios predefinidos.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🔸 Anotaciones clave</h2>
        <ul className="list-disc pl-5">
          <li>
            <code>@Entity</code>: marca una clase como entidad JPA.
          </li>
          <li>
            <code>@Id</code>: indica el campo identificador único.
          </li>
          <li>
            <code>@GeneratedValue</code>: configura la generación automática del
            ID.
          </li>
          <li>
            <code>@Column</code>: define atributos de columnas como longitud,
            nulabilidad, etc.
          </li>
          <li>
            <code>@Table</code>: opcionalmente especifica el nombre de la tabla.
          </li>
        </ul>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`@Entity
public class Usuario {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false)
  private String nombre;
}`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🔸 Relaciones entre entidades
        </h2>
        <ul className="list-disc pl-5">
          <li>
            <code>@OneToOne</code>: relación uno a uno.
          </li>
          <li>
            <code>@OneToMany</code>: un objeto tiene muchos relacionados.
          </li>
          <li>
            <code>@ManyToOne</code>: muchos apuntan a uno (relación inversa de
            OneToMany).
          </li>
          <li>
            <code>@ManyToMany</code>: relación de muchos a muchos.
          </li>
        </ul>
        <p className="mt-2">Ejemplo:</p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`@Entity
public class Curso {
  @Id
  private Long id;

  @OneToMany(mappedBy = "curso", fetch = FetchType.LAZY)
  private List<Estudiante> estudiantes;
}`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🔸 FetchType y Cascade</h2>
        <p>
          <strong>FetchType:</strong>
        </p>
        <ul className="list-disc pl-5">
          <li>
            <code>LAZY</code>: no carga la relación hasta que se accede
            explícitamente.
          </li>
          <li>
            <code>EAGER</code>: carga la relación inmediatamente (puede afectar
            rendimiento).
          </li>
        </ul>
        <p className="mt-4">
          <strong>Cascade:</strong> define qué operaciones se propagan (persist,
          remove, merge, etc.)
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🔸 Manejo de transacciones
        </h2>
        <p>
          Spring proporciona manejo de transacciones con la anotación{" "}
          <code>@Transactional</code>, que puede colocarse en clases o métodos.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`@Transactional
public void crearOrden(Orden orden) {
  ordenRepository.save(orden);
  inventarioService.reducirStock(orden);
}`}{" "}
        </SyntaxHighlighter>
        <p>Puedes configurar el aislamiento y comportamiento ante errores:</p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`@Transactional(rollbackFor = Exception.class, isolation = Isolation.READ_COMMITTED)`}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">✅ Buenas prácticas</h2>
        <ul className="list-disc pl-5">
          <li>
            Evita <code>FetchType.EAGER</code> en relaciones{" "}
            <code>@OneToMany</code>.
          </li>
          <li>Utiliza DTOs para evitar exponer entidades directamente.</li>
          <li>
            Aplica paginación para evitar cargar grandes volúmenes en listas.
          </li>
          <li>
            Incluye <code>@Transactional</code> solo donde realmente es
            necesario.
          </li>
        </ul>
      </section>
    </div>
  );
}
