import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function SpringDataJPA() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">🗃️ Spring Data JPA</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🔸 ¿Qué es Spring Data JPA?
        </h2>
        <p>
          Spring Data JPA es un módulo de Spring que facilita el acceso a bases
          de datos utilizando la especificación JPA (Java Persistence API),
          eliminando la necesidad de escribir código boilerplate para las
          operaciones comunes de persistencia.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🔸 Repositorios</h2>
        <p>
          Puedes definir interfaces que extienden de <code>JpaRepository</code>{" "}
          o <code>CrudRepository</code> para acceder a las entidades:
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`public interface ProductoRepository extends JpaRepository<Producto, Long> {
  List<Producto> findByNombreContainingIgnoreCase(String nombre);
}`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🔸 Anotaciones JPA importantes
        </h2>
        <ul className="list-disc pl-5">
          <li>
            <code>@Entity</code>: marca una clase como entidad persistente.
          </li>
          <li>
            <code>@Id</code>: define la clave primaria.
          </li>
          <li>
            <code>@GeneratedValue</code>: indica cómo se generará el ID (ej.
            AUTO, IDENTITY).
          </li>
          <li>
            <code>@Column</code>: define propiedades de la columna.
          </li>
          <li>
            <code>@Table</code>: especifica el nombre de la tabla.
          </li>
          <li>
            <code>@ManyToOne</code>, <code>@OneToMany</code>,{" "}
            <code>@ManyToMany</code>: relaciones entre entidades.
          </li>
          <li>
            <code>fetch = FetchType.LAZY</code>: evita la carga automática de
            relaciones hasta que se necesiten.
          </li>
          <li>
            <code>@JoinColumn</code>: indica la columna usada para la relación.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🔸 Ejemplo de entidad</h2>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`@Entity
public class Producto {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false)
  private String nombre;

  private double precio;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "categoria_id")
  private Categoria categoria;
}`}{" "}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">✅ Buenas prácticas</h2>
        <ul className="list-disc pl-5">
          <li>Evitar relaciones bidireccionales innecesarias.</li>
          <li>Usar DTOs para evitar la exposición directa de entidades.</li>
          <li>
            Controlar la carga de relaciones con <code>FetchType.LAZY</code>.
          </li>
          <li>
            Utilizar paginación con <code>Pageable</code> para listas grandes.
          </li>
        </ul>
      </section>
    </div>
  );
}
