import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function SpringAOP() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        🌀 Spring AOP (Aspect-Oriented Programming)
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🔸 ¿Qué es AOP?</h2>
        <p>
          AOP (Programación Orientada a Aspectos) es un paradigma que permite
          modularizar lógica transversal, como logging, validaciones, manejo de
          errores o seguridad, sin mezclarla con la lógica principal del
          negocio.
        </p>
        <p className="mt-2">
          Spring AOP permite interceptar métodos y aplicar lógica adicional
          antes, después o alrededor de su ejecución, de forma declarativa.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🔸 Terminología clave</h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>Aspect:</strong> Módulo que contiene lógica transversal (ej.
            clase con logging).
          </li>
          <li>
            <strong>Advice:</strong> Acción a ejecutar (antes, después, etc.).
          </li>
          <li>
            <strong>Join Point:</strong> Punto de ejecución interceptable
            (métodos por defecto).
          </li>
          <li>
            <strong>Pointcut:</strong> Expresión que define qué métodos serán
            interceptados.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🔸 Tipos de Advice</h2>
        <ul className="list-disc pl-5">
          <li>
            <code>@Before</code>: Se ejecuta antes del método interceptado.
          </li>
          <li>
            <code>@After</code>: Se ejecuta después, sin importar si hubo
            excepción.
          </li>
          <li>
            <code>@AfterReturning</code>: Se ejecuta solo si no hubo excepción.
          </li>
          <li>
            <code>@AfterThrowing</code>: Se ejecuta si se lanza una excepción.
          </li>
          <li>
            <code>@Around</code>: Control total: ejecuta código antes y después,
            y puede evitar que se ejecute el método.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🔸 Ejemplo práctico: Logging
        </h2>
        <p>
          Supongamos que queremos loguear todos los métodos del paquete{" "}
          <code>com.miapp.servicio</code>:
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`@Aspect
@Component
public class LoggingAspect {

  @Before("execution(* com.miapp.servicio..*(..))")
  public void logAntes(JoinPoint joinPoint) {
    System.out.println("[LOG] Ejecutando: " + joinPoint.getSignature().getName());
  }
}`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🔸 @Around con lógica condicional
        </h2>
        <p>
          El advice <code>@Around</code> te permite modificar parámetros o
          evitar la ejecución del método:
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`@Around("execution(* com.miapp.servicio..*(..))")
public Object alrededor(ProceedingJoinPoint pjp) throws Throwable {
  System.out.println("[START] " + pjp.getSignature());
  Object result = pjp.proceed();
  System.out.println("[END] " + pjp.getSignature());
  return result;
}`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🔸 Anotaciones personalizadas (custom annotations)
        </h2>
        <p>
          Puedes definir tus propias anotaciones y crear aspectos que se activen
          según ellas:
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface MedirTiempo {}`}
        </SyntaxHighlighter>

        <p className="mt-4">
          Aspecto que reacciona a <code>@MedirTiempo</code>:
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`@Around("@annotation(com.miapp.anotaciones.MedirTiempo)")
public Object medirTiempo(ProceedingJoinPoint pjp) throws Throwable {
  long inicio = System.currentTimeMillis();
  Object resultado = pjp.proceed();
  long fin = System.currentTimeMillis();
  System.out.println("Tiempo de ejecución: " + (fin - inicio) + " ms");
  return resultado;
}`}{" "}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">✅ Buenas prácticas</h2>
        <ul className="list-disc pl-5">
          <li>No abuses del uso de AOP para lógica de negocio.</li>
          <li>
            Usa AOP para logging, métricas, seguridad, validaciones, auditoría.
          </li>
          <li>Evita pointcuts muy amplios que puedan ralentizar la app.</li>
          <li>
            Documenta claramente los aspectos, ya que no son visibles
            directamente en el flujo del código.
          </li>
        </ul>
      </section>
    </div>
  );
}
