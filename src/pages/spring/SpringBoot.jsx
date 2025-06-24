import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function SpringBoot() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">🚀 Spring Boot</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🔸 ¿Qué es Spring Boot?</h2>
        <p>
          Spring Boot es un proyecto del ecosistema Spring que facilita la
          creación de aplicaciones basadas en Spring sin necesidad de una
          configuración extensa o archivos XML. Proporciona:
        </p>
        <ul className="list-disc pl-5">
          <li>Auto-configuración</li>
          <li>Dependencias organizadas por starter</li>
          <li>Servidor embebido (Tomcat, Jetty...)</li>
          <li>Actuadores para monitoreo</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🔸 Estructura mínima</h2>
        <p>
          Un proyecto típico con Spring Boot contiene una clase principal con{" "}
          <code>@SpringBootApplication</code> que habilita configuración
          automática y escaneo de componentes.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`@SpringBootApplication
public class MiAplicacion {
  public static void main(String[] args) {
    SpringApplication.run(MiAplicacion.class, args);
  }
}`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🔸 Anotaciones más comunes en Spring Boot
        </h2>
        <ul className="list-disc pl-5">
          <li>
            <code>@SpringBootApplication</code>: combina{" "}
            <code>@Configuration</code>, <code>@EnableAutoConfiguration</code> y{" "}
            <code>@ComponentScan</code>.
          </li>
          <li>
            <code>@ComponentScan</code>: permite a Spring buscar beans dentro
            del paquete base.
          </li>
          <li>
            <code>@EnableAutoConfiguration</code>: permite la configuración
            automática basada en dependencias.
          </li>
          <li>
            <code>@Configuration</code>: indica que una clase define beans
            manualmente.
          </li>
          <li>
            <code>@Value</code>: inyecta valores desde el archivo de
            propiedades.
          </li>
          <li>
            <code>@ConfigurationProperties</code>: mapea un grupo de propiedades
            a una clase Java.
          </li>
          <li>
            <code>@Profile</code>: activa una clase solo bajo un perfil
            específico.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🔸 Starters</h2>
        <p>
          Los starters son dependencias preconfiguradas que agrupan librerías
          comunes. Por ejemplo:
        </p>
        <ul className="list-disc pl-5">
          <li>
            <code>spring-boot-starter-web</code>: para construir APIs REST con
            Spring MVC
          </li>
          <li>
            <code>spring-boot-starter-data-jpa</code>: soporte para JPA con
            Hibernate
          </li>
          <li>
            <code>spring-boot-starter-security</code>: seguridad y autenticación
          </li>
          <li>
            <code>spring-boot-starter-validation</code>: validaciones con Bean
            Validation
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🔸 Configuración con application.properties
        </h2>
        <p>
          Puedes configurar el comportamiento de la aplicación a través de un
          archivo <code>application.properties</code> o{" "}
          <code>application.yml</code>:
        </p>
        <SyntaxHighlighter
          language="properties"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`server.port=8081
spring.datasource.url=jdbc:mysql://localhost:3306/miapp
spring.datasource.username=root
spring.jpa.hibernate.ddl-auto=update`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🔸 Perfiles de configuración
        </h2>
        <p>
          Spring Boot permite definir múltiples perfiles de entorno (desarrollo,
          producción, etc.):
        </p>
        <SyntaxHighlighter
          language="properties"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`spring.profiles.active=dev`}{" "}
        </SyntaxHighlighter>
        <p className="mt-2">
          Puedes definir propiedades específicas para cada perfil en archivos
          como <code>application-dev.properties</code> o usar la anotación{" "}
          <code>@Profile</code> en tus beans.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">✅ Buenas prácticas</h2>
        <ul className="list-disc pl-5">
          <li>
            Evitar configuración innecesaria: aprovecha la auto-configuración.
          </li>
          <li>
            Dividir tu configuración en múltiples archivos si crece mucho.
          </li>
          <li>Utilizar perfiles para separar ambientes.</li>
          <li>
            Agregar validación a las propiedades con{" "}
            <code>@ConfigurationProperties</code>.
          </li>
          <li>
            Documentar los valores importantes en el archivo de propiedades.
          </li>
          <li>No sobreescribir el comportamiento por defecto sin necesidad.</li>
        </ul>
      </section>
    </div>
  );
}
