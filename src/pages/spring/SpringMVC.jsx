import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function SpringMVC() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">🌐 Spring MVC</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🔸 ¿Qué es Spring MVC?</h2>
        <p>
          Spring MVC (Model-View-Controller) es un módulo del framework Spring
          que permite desarrollar aplicaciones web y APIs REST de manera
          estructurada. Se basa en el patrón de diseño MVC, separando la lógica
          del negocio (modelo), la lógica de presentación (vista) y el
          controlador que maneja las solicitudes HTTP.
        </p>
        <p className="mt-2">
          Su principal objetivo es facilitar el desarrollo de aplicaciones
          robustas y desacopladas que sigan buenas prácticas arquitectónicas.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🔸 Anotaciones importantes
        </h2>
        <ul className="list-disc pl-5">
          <li>
            <code>@RestController</code>: Marca una clase como controlador REST.
            Combina <code>@Controller</code> y <code>@ResponseBody</code> para
            retornar objetos como JSON directamente.
          </li>
          <li>
            <code>@RequestMapping</code>: Define rutas generales a nivel de
            clase o método para manejar distintos verbos HTTP.
          </li>
          <li>
            <code>@GetMapping</code>, <code>@PostMapping</code>,{" "}
            <code>@PutMapping</code>, <code>@DeleteMapping</code>: Versiones
            especializadas de <code>@RequestMapping</code> para facilitar la
            lectura.
          </li>
          <li>
            <code>@PathVariable</code>: Permite capturar variables dentro de la
            URL (path).
          </li>
          <li>
            <code>@RequestParam</code>: Extrae parámetros de la query string.
          </li>
          <li>
            <code>@RequestBody</code>: Deserializa el cuerpo de la solicitud
            (JSON) en un objeto Java.
          </li>
          <li>
            <code>@ResponseStatus</code>: Define el código de estado HTTP que
            será retornado por el método.
          </li>
          <li>
            <code>@Valid</code>: Activa la validación de campos según las
            restricciones del modelo.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🔸 Ejemplo básico de un controlador REST
        </h2>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`@RestController
@RequestMapping("/api/productos")
public class ProductoController {

  @Autowired
  private ProductoService servicio;

  @GetMapping("/{id}")
  public ResponseEntity<Producto> obtenerProducto(@PathVariable Long id) {
    Producto producto = servicio.buscarPorId(id);
    if (producto != null) {
      return ResponseEntity.ok(producto);
    } else {
      return ResponseEntity.notFound().build();
    }
  }

  @PostMapping
  public ResponseEntity<Producto> crearProducto(@Valid @RequestBody Producto producto) {
    Producto guardado = servicio.guardar(producto);
    return ResponseEntity.status(HttpStatus.CREATED).body(guardado);
  }
}`}{" "}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🔸 Manejo de excepciones
        </h2>
        <p>
          Puedes capturar errores de manera global utilizando{" "}
          <code>@ControllerAdvice</code> y <code>@ExceptionHandler</code>:
        </p>
        <SyntaxHighlighter
          language="java"
          style={oneLight}
          className="rounded-md text-sm"
        >
          {`@ControllerAdvice
public class GlobalExceptionHandler {

  @ExceptionHandler(ProductoNoEncontradoException.class)
  public ResponseEntity<String> manejarError(ProductoNoEncontradoException ex) {
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
  }
}`}{" "}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">✅ Buenas prácticas</h2>
        <ul className="list-disc pl-5">
          <li>
            Utiliza <code>@RestController</code> para simplificar controladores
            que devuelvan JSON.
          </li>
          <li>
            Separa la lógica de negocio en servicios anotados con{" "}
            <code>@Service</code>.
          </li>
          <li>
            Valida datos de entrada con <code>@Valid</code> y restricciones de
            Bean Validation.
          </li>
          <li>
            Utiliza <code>ResponseEntity</code> para definir explícitamente el
            código de respuesta.
          </li>
          <li>
            Centraliza el manejo de errores con <code>@ControllerAdvice</code>.
          </li>
          <li>Utiliza DTOs para evitar exponer directamente tus entidades.</li>
        </ul>
      </section>
    </div>
  );
}
