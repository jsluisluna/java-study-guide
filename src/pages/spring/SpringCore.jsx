import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function SpringCore() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">🌱 Spring Core (IoC y DI)</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🔸 ¿Qué es Spring Core?</h2>
        <p>
          Spring Core es el núcleo del ecosistema Spring. Proporciona los
          fundamentos de la programación basada en Java con soporte para{" "}
          <strong>Inversión de Control (IoC)</strong> y{" "}
          <strong>Inyección de Dependencias (DI)</strong>. Estas capacidades
          permiten escribir aplicaciones desacopladas y más fáciles de probar.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🔸 Inversión de Control (IoC)
        </h2>
        <p>
          IoC es un principio en el que el control del flujo del programa se
          invierte: en lugar de que el código cree objetos directamente, el
          contenedor de Spring se encarga de inyectarlos cuando son necesarios.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🔸 Inyección de Dependencias (DI)
        </h2>
        <p>Spring puede inyectar dependencias de múltiples maneras:</p>
        <ul className="list-disc pl-5">
          <li>
            <strong>Por constructor</strong> (recomendado para objetos
            inmutables)
          </li>
          <li>
            <strong>Por setter</strong>
          </li>
          <li>
            <strong>Por campo</strong> (menos recomendado para pruebas
            unitarias)
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">
          📌 Ejemplo de DI por constructor:
        </h3>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`@Component
public class PedidoService {

  private final RepositorioPedido repo;

  @Autowired
  public PedidoService(RepositorioPedido repo) {
    this.repo = repo;
  }
}`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🔸 ¿Qué es un Bean?</h2>
        <p>
          En Spring, un <strong>Bean</strong> es cualquier objeto que está
          gestionado por el contenedor de Spring. Se declara automáticamente al
          usar anotaciones como <code>@Component</code>, <code>@Service</code>,{" "}
          <code>@Repository</code> o manualmente en clases de configuración con{" "}
          <code>@Bean</code>.
        </p>

        <p className="mt-4">
          Spring permite definir el <strong>alcance (scope)</strong> de un bean:
        </p>
        <ul className="list-disc pl-5">
          <li>
            <code>singleton</code> (por defecto): una única instancia por
            contenedor de Spring.
          </li>
          <li>
            <code>prototype</code>: se crea una nueva instancia cada vez que se
            solicita.
          </li>
          <li>
            <code>request</code>: una instancia por cada solicitud HTTP (solo en
            aplicaciones web).
          </li>
          <li>
            <code>session</code>: una instancia por sesión HTTP (solo en
            aplicaciones web).
          </li>
        </ul>

        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm mt-4"
        >
          {`@Component
@Scope("prototype")
public class MiBeanPrototype {
  // Cada vez que se solicite se creará una nueva instancia
}`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🔸 Anotaciones importantes
        </h2>
        <ul className="list-disc pl-5">
          <li>
            <code>@Component</code>: marca una clase como componente gestionado
            por Spring.
          </li>
          <li>
            <code>@Service</code>, <code>@Repository</code>,{" "}
            <code>@Controller</code>: especializaciones de{" "}
            <code>@Component</code>.
          </li>
          <li>
            <code>@Autowired</code>: inyecta una dependencia automáticamente.
          </li>
          <li>
            <code>@Qualifier</code>: ayuda a seleccionar un bean cuando hay más
            de uno del mismo tipo.
          </li>
          <li>
            <code>@Bean</code>: se usa en clases de configuración para registrar
            beans manualmente.
          </li>
          <li>
            <code>@Scope</code>: define el alcance del bean (singleton,
            prototype, etc.).
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🔸 Ciclo de vida de un Bean
        </h2>
        <p>Los beans en Spring pasan por estas fases:</p>
        <ol className="list-decimal pl-5">
          <li>Creación del bean</li>
          <li>Inyección de dependencias</li>
          <li>
            Llamada a métodos de inicialización (<code>@PostConstruct</code>)
          </li>
          <li>Uso del bean</li>
          <li>
            Llamada a métodos de destrucción (<code>@PreDestroy</code>)
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🔸 ApplicationContext</h2>
        <p>
          Es el contenedor principal de Spring que administra los beans y su
          ciclo de vida.
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`ApplicationContext context = 
  new AnnotationConfigApplicationContext(AppConfig.class);

MiServicio servicio = context.getBean(MiServicio.class);`}{" "}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">✅ Buenas prácticas</h2>
        <ul className="list-disc pl-5">
          <li>Preferir la inyección por constructor.</li>
          <li>
            Usar perfiles para separar configuraciones (<code>@Profile</code>).
          </li>
          <li>Evitar lógica en los constructores.</li>
          <li>
            No abusar del uso de <code>@Autowired</code> en campos (difícil de
            testear).
          </li>
          <li>
            Usar anotaciones especializadas como <code>@Service</code> o{" "}
            <code>@Repository</code> para semántica clara.
          </li>
        </ul>
      </section>
    </div>
  );
}
