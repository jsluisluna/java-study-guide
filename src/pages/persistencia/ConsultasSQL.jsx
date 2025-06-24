import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function ConsultasSQL() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">📘 Consultas SQL</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🎯 Objetivo</h2>
        <p>
          Entender cómo construir consultas SQL eficientes, claras y correctas
          para recuperar datos según diferentes necesidades del negocio. Esta
          sección se enfoca en SELECTs, filtros, joins, agrupaciones y
          subconsultas, que son componentes clave evaluados en entrevistas.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🧱 1. Estructura básica de una consulta SQL
        </h2>
        <SyntaxHighlighter
          language="sql"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`SELECT columna1, columna2
FROM tabla
WHERE condición
GROUP BY columna
HAVING condición_de_grupo
ORDER BY columna ASC|DESC
LIMIT n;`}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🔍 2. Filtros y operadores comunes
        </h2>
        <p>
          Operadores: =, &lt;&gt;, &lt;, &gt;, &lt;=, &gt;=, BETWEEN, LIKE, IN,
          IS NULL, IS NOT NULL, AND, OR, NOT
        </p>
        <SyntaxHighlighter
          language="sql"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`SELECT name, age
FROM employees
WHERE age BETWEEN 25 AND 35 AND department IN ('IT', 'HR');`}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🔗 3. Tipos de JOIN y uso práctico
        </h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>INNER JOIN</strong>: devuelve solo las filas con
            coincidencias en ambas tablas.
          </li>
          <li>
            <strong>LEFT JOIN</strong>: devuelve todas las filas de la izquierda
            y las coincidentes de la derecha.
          </li>
          <li>
            <strong>RIGHT JOIN</strong>: devuelve todas las filas de la derecha
            y las coincidentes de la izquierda.
          </li>
          <li>
            <strong>FULL JOIN</strong>: devuelve todas las filas con
            coincidencias en cualquiera de las tablas.
          </li>
        </ul>
        <SyntaxHighlighter
          language="sql"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`SELECT e.name, d.department_name
FROM employees e
INNER JOIN departments d ON e.department_id = d.id;`}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🧮 4. Funciones de agregación
        </h2>
        <ul className="list-disc pl-5">
          <li>
            <code>COUNT()</code>: cuenta filas
          </li>
          <li>
            <code>SUM()</code>: suma valores
          </li>
          <li>
            <code>AVG()</code>: promedio
          </li>
          <li>
            <code>MAX()</code> / <code>MIN()</code>: valor máximo / mínimo
          </li>
        </ul>
        <SyntaxHighlighter
          language="sql"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`SELECT department_id, AVG(salary)
FROM employees
GROUP BY department_id
HAVING AVG(salary) > 50000;`}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🧩 5. Subconsultas</h2>
        <h3 className="font-semibold">Subconsulta en WHERE:</h3>
        <SyntaxHighlighter
          language="sql"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`SELECT name
FROM employees
WHERE department_id = (
  SELECT id FROM departments WHERE name = 'IT'
);`}
        </SyntaxHighlighter>

        <h3 className="font-semibold mt-4">Subconsulta en FROM:</h3>
        <SyntaxHighlighter
          language="sql"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`SELECT dept_id, avg_salary
FROM (
  SELECT department_id AS dept_id, AVG(salary) AS avg_salary
  FROM employees
  GROUP BY department_id
) AS sub;`}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">📌 6. Cláusula CASE</h2>
        <SyntaxHighlighter
          language="sql"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`SELECT name,
       salary,
       CASE
         WHEN salary < 30000 THEN 'Junior'
         WHEN salary BETWEEN 30000 AND 70000 THEN 'Mid'
         ELSE 'Senior'
       END AS level
FROM employees;`}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🧠 Buenas prácticas en entrevistas
        </h2>
        <ul className="list-disc pl-5">
          <li>
            ❗ Usa alias (<code>AS</code>) claros para joins o subconsultas.
          </li>
          <li>
            🔄 Evita <code>SELECT *</code>, especifica columnas.
          </li>
          <li>
            ⚡ Utiliza <code>EXPLAIN</code> para ver el plan de ejecución.
          </li>
          <li>
            🎯 Practica en plataformas como LeetCode, HackerRank, SQLZoo, Mode
            Analytics.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          ✅ Ejercicio típico de entrevista
        </h2>
        <p className="mb-2">
          <strong>Pregunta:</strong> Devuelve el nombre de los empleados que
          ganan más que el salario promedio de su departamento.
        </p>
        <SyntaxHighlighter
          language="sql"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`SELECT e.name
FROM employees e
WHERE e.salary > (
  SELECT AVG(salary)
  FROM employees
  WHERE department_id = e.department_id
);`}
        </SyntaxHighlighter>
      </section>
    </div>
  );
}

export default ConsultasSQL;
