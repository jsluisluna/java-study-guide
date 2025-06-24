import React from "react";
import { useSearch } from "../context/SearchContext";
import { Link } from "react-router-dom";

const allTopics = [
  {
    path: "/tipos-datos",
    title: "Tipos de Datos",
    keywords: ["tipos", "datos", "primitivos", "valores"],
  },
  {
    path: "/clases-objetos",
    title: "Clases y Objetos",
    keywords: ["clases", "objetos", "poo", "instancia"],
  },
  {
    path: "/oop",
    title: "Herencia y Polimorfismo",
    keywords: ["herencia", "polimorfismo", "poo", "override"],
  },
  {
    path: "/interfaces-abstractas",
    title: "Interfaces vs Clases Abstractas",
    keywords: ["interfaces", "clases abstractas", "poo", "contrato"],
  },
  {
    path: "/clases-internas",
    title: "Clases Internas y Anónimas",
    keywords: ["clases internas", "anonimas", "poo"],
  },
  {
    path: "/modificadores-acceso",
    title: "Modificadores de Acceso",
    keywords: ["private", "public", "protected", "encapsulamiento"],
  },
  {
    path: "/excepciones",
    title: "Excepciones en Java",
    keywords: ["try", "catch", "throw", "exception", "error"],
  },
  {
    path: "/java8",
    title: "Java 8: Lambdas, Streams y Optional",
    keywords: ["java 8", "lambdas", "streams", "optional"],
  },
  {
    path: "/java11-21",
    title: "Java 11 a 21: Nuevas Características",
    keywords: ["java 11", "java 17", "java 21", "novedades"],
  },
  {
    path: "/colecciones",
    title: "Colecciones",
    keywords: ["listas", "sets", "mapas", "collection", "arrays"],
  },
  {
    path: "/generics",
    title: "Generics",
    keywords: ["generics", "tipado", "parametrización"],
  },
  {
    path: "/multithreading",
    title: "Multithreading y Concurrencia",
    keywords: ["hilos", "threads", "concurrencia", "asincronía"],
  },
  {
    path: "/io",
    title: "Java IO y NIO",
    keywords: ["input", "output", "archivo", "nio"],
  },
  {
    path: "/testing",
    title: "Unit Testing con JUnit y Mockito",
    keywords: ["junit", "mockito", "tests", "unitario"],
  },
  {
    path: "/spring-core",
    title: "Spring Core",
    keywords: ["spring", "context", "bean", "di"],
  },
  {
    path: "/spring-boot",
    title: "Spring Boot",
    keywords: ["spring boot", "starter", "configuración"],
  },
  {
    path: "/spring-mvc",
    title: "Spring MVC",
    keywords: ["mvc", "controller", "rest", "spring web"],
  },
  {
    path: "/spring-data",
    title: "Spring Data JPA",
    keywords: ["jpa", "repositorio", "hibernate"],
  },
  {
    path: "/spring-security",
    title: "Spring Security",
    keywords: ["seguridad", "auth", "jwt", "oauth"],
  },
  {
    path: "/spring-aop",
    title: "Spring AOP",
    keywords: ["aspectos", "aop", "crosscutting", "proxy"],
  },
  {
    path: "/persistencia-jpa",
    title: "JPA Fundamentos",
    keywords: ["jpa", "persistencia", "entidades"],
  },
  {
    path: "/persistencia-entity",
    title: "EntityManager y JPQL",
    keywords: ["entitymanager", "jpql", "query"],
  },
  {
    path: "/persistencia-sql",
    title: "Consultas SQL",
    keywords: ["sql", "query", "base de datos"],
  },
  {
    path: "/solid",
    title: "Principios SOLID",
    keywords: ["solid", "principios", "diseño", "oop"],
  },
  {
    path: "/patrones-creacionales",
    title: "Patrones Creacionales",
    keywords: ["singleton", "factory", "builder"],
  },
  {
    path: "/patrones-estructurales",
    title: "Patrones Estructurales",
    keywords: ["adapter", "decorator", "proxy"],
  },
  {
    path: "/patrones-comportamiento",
    title: "Patrones de Comportamiento",
    keywords: ["strategy", "observer", "state"],
  },
  {
    path: "/rest",
    title: "APIs REST y JSON",
    keywords: ["api", "rest", "json", "http"],
  },
  {
    path: "/seguridad-jwt",
    title: "Seguridad con JWT",
    keywords: ["jwt", "token", "autenticación"],
  },
  {
    path: "/seguridad-oauth",
    title: "Seguridad con OAuth",
    keywords: ["oauth", "login", "autorización"],
  },
  {
    path: "/entorno-git",
    title: "Control de Versiones con Git",
    keywords: ["git", "versiones", "repositorio"],
  },
  {
    path: "/entorno-maven",
    title: "Gestión de Dependencias con Maven",
    keywords: ["maven", "pom", "dependencias"],
  },
  {
    path: "/entorno-docker",
    title: "Contenerización con Docker",
    keywords: ["docker", "imagen", "contenedor"],
  },
  {
    path: "/entorno-jenkins",
    title: "Integración Continua con Jenkins",
    keywords: ["jenkins", "ci", "pipeline"],
  },
  {
    path: "/otros-kafka",
    title: "Mensajería con Kafka",
    keywords: ["kafka", "mensajes", "eventos"],
  },
  {
    path: "/otros-obs",
    title: "Observabilidad con Watchdog y Splunk",
    keywords: ["logs", "monitor", "splunk", "watchdog"],
  },
  {
    path: "/otros-redis",
    title: "Cache de Datos con Redis",
    keywords: ["redis", "cache", "memoria"],
  },
  {
    path: "/cloud-aws",
    title: "Servicios en la Nube: AWS",
    keywords: ["aws", "cloud", "amazon"],
  },
  {
    path: "/cloud-gcp",
    title: "Servicios en la Nube: GCP",
    keywords: ["gcp", "google", "cloud"],
  },
  {
    path: "/cloud-azure",
    title: "Servicios en la Nube: Azure",
    keywords: ["azure", "microsoft", "cloud"],
  },
  {
    path: "/challenges/strings/palindromo",
    title: "Challenge: Palíndromo",
    keywords: ["palindromo", "string", "reto"],
  },
  {
    path: "/challenges/strings/anagrama",
    title: "Challenge: Anagrama",
    keywords: ["anagrama", "string", "reto"],
  },
  {
    path: "/challenges/recursion/fibonacci",
    title: "Challenge: Fibonacci",
    keywords: ["fibonacci", "recursivo", "números"],
  },
  {
    path: "/challenges/lists/two-sum",
    title: "Challenge: Two Sum",
    keywords: ["sum", "lista", "reto"],
  },
  {
    path: "/challenges/maps/frecuencia-palabras",
    title: "Challenge: Frecuencia de Palabras",
    keywords: ["frecuencia", "palabras", "map"],
  },
  {
    path: "/challenges/search/binary-search",
    title: "Challenge: Binary Search",
    keywords: ["binaria", "búsqueda", "search"],
  },
  {
    path: "/challenges/sorting/bubble-sort",
    title: "Challenge: Bubble Sort",
    keywords: ["bubble", "sort", "ordenamiento"],
  },
  {
    path: "/challenges/poo/empleado",
    title: "Challenge: Empleado",
    keywords: ["empleado", "poo", "salario"],
  },
  {
    path: "/challenges/poo/reservas",
    title: "Challenge: Reservas",
    keywords: ["reserva", "poo", "hotel"],
  },
  {
    path: "/challenges/poo/polimorfismo-figuras",
    title: "Challenge: Polimorfismo Figuras",
    keywords: ["figuras", "polimorfismo", "poo"],
  },
];

export function SearchResults() {
  const { query } = useSearch();

  const results = allTopics.filter(({ title, keywords }) => {
    const q = query.toLowerCase();
    return (
      title.toLowerCase().includes(q) ||
      (keywords && keywords.some((kw) => kw.toLowerCase().includes(q)))
    );
  });

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold mb-6">
        Resultados de búsqueda para: "{query}"
      </h1>
      {results.length === 0 ? (
        <p className="text-gray-600">No se encontraron coincidencias.</p>
      ) : (
        <ul className="space-y-2">
          {results.map((item) => (
            <li key={item.path}>
              <Link to={item.path} className="text-blue-600 hover:underline">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
