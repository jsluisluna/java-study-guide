import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function UnitTestingJava() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">🧪 Unit Testing en Java</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🔹 JUnit 5</h2>
        <p>
          JUnit 5 es el framework estándar de pruebas en Java. Se organiza en
          tres módulos: Platform, Jupiter (API actual) y Vintage (soporte
          legado).
        </p>

        <ul className="list-disc pl-5 mt-4">
          <li>
            <code>@Test</code>: marca un método como prueba.
          </li>
          <li>
            <code>@BeforeEach</code> / <code>@AfterEach</code>: lógica
            antes/después de cada test.
          </li>
          <li>
            <code>@Disabled</code>: desactiva una prueba.
          </li>
          <li>
            <code>@Nested</code>: agrupa pruebas relacionadas.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">✔️ Ejemplo simple</h3>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.*;

class CalculadoraTest {
  @Test
  void sumaDebeSerCorrecta() {
    assertEquals(5, 2 + 3);
  }
}`}
        </SyntaxHighlighter>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🔹 Mockito</h2>
        <p>
          Mockito permite crear mocks de dependencias para pruebas unitarias,
          útil para aislar lógica.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">
          ✔️ Ejemplo básico de mock
        </h3>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`@ExtendWith(MockitoExtension.class)
class ServicioTest {
  @Mock
  private Repositorio repositorio;

  @InjectMocks
  private Servicio servicio;

  @Test
  void testGuardar() {
    when(repositorio.save(any())).thenReturn(new Entidad());
    servicio.guardar();
    verify(repositorio).save(any());
  }
}`}
        </SyntaxHighlighter>

        <p className="mt-4">
          Funciones clave: <code>when()</code> para simular comportamiento y{" "}
          <code>verify()</code> para validar interacción.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🔹 Tests Parametrizados</h2>
        <p>Permiten ejecutar un test varias veces con diferentes entradas.</p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`@ParameterizedTest
@ValueSource(ints = {1, 2, 3})
void testMultiploDeDos(int numero) {
  assertTrue(numero > 0);
}`}
        </SyntaxHighlighter>

        <p className="mt-4">
          Puedes usar <code>@CsvSource</code> o <code>@MethodSource</code> para
          datos más complejos.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          🔹 Pruebas de integración en Spring Boot
        </h2>
        <p>
          Verifican el funcionamiento real de componentes con contexto Spring
          cargado.
        </p>

        <ul className="list-disc pl-5 mt-2">
          <li>
            <code>@SpringBootTest</code>: carga todo el contexto.
          </li>
          <li>
            <code>@WebMvcTest</code>: pruebas a controladores.
          </li>
          <li>
            <code>@DataJpaTest</code>: solo repositorios.
          </li>
        </ul>

        <p className="mt-4">
          Usa <code>TestRestTemplate</code> o <code>MockMvc</code> para simular
          peticiones HTTP.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">✅ Buenas prácticas</h2>
        <ul className="list-disc pl-5">
          <li>
            Nombrar bien los métodos: <code>deberiaRetornarXCuandoY()</code>
          </li>
          <li>Usar mocks solo cuando es necesario.</li>
          <li>Pruebas pequeñas, independientes y repetibles.</li>
          <li>Separar unitarias e integración.</li>
          <li>Ejecutar tests automáticamente en CI/CD.</li>
        </ul>
      </section>
    </div>
  );
}
