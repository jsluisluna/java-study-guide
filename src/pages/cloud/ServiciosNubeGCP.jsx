import React from "react";

export function ServiciosNubeGCP() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        ☁️ Servicios en la Nube con Google Cloud (GCP)
      </h1>

      <section className="mb-8">
        <p>
          Google Cloud Platform (GCP) es una plataforma de servicios en la nube
          desarrollada por Google que ofrece infraestructura escalable,
          herramientas de análisis de datos, servicios de inteligencia
          artificial y entornos de ejecución para aplicaciones modernas. Está
          diseñada para brindar alto rendimiento, seguridad y eficiencia en
          entornos empresariales, facilitando la ejecución de cargas de trabajo
          tanto tradicionales como nativas en la nube.
        </p>
        <p className="mt-4">
          En aplicaciones Java, GCP proporciona servicios completamente
          gestionados para el despliegue de APIs, bases de datos, contenedores,
          procesamiento de eventos y monitoreo, todo integrado con herramientas
          como Cloud Build, Pub/Sub y Stackdriver.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🌐 Servicios clave de GCP para Java
        </h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>Compute Engine:</strong> instancias virtuales de alto
            rendimiento, personalizables en CPU, memoria y disco. Permite
            ejecutar aplicaciones Java en entornos controlados, con opciones
            para autoescalado, imágenes personalizadas, GPU, y redes privadas.
          </li>
          <li>
            <strong>App Engine:</strong> plataforma serverless PaaS que
            automatiza el escalado, balanceo de carga, actualizaciones y
            monitoreo. Ideal para desplegar apps Java con frameworks como Spring
            Boot, sin preocuparse de la infraestructura.
          </li>
          <li>
            <strong>Cloud Run:</strong> permite ejecutar contenedores Docker en
            una infraestructura totalmente gestionada, con soporte para
            invocación HTTP y escalado automático hasta cero. Integra
            perfectamente con Cloud Build y Cloud Pub/Sub.
          </li>
          <li>
            <strong>Cloud Functions:</strong> funciones pequeñas en JavaScript,
            Python o Java para procesar eventos sin mantener servidores.
            Excelente para integraciones ligeras, validaciones o disparadores
            desde Pub/Sub o Cloud Storage.
          </li>
          <li>
            <strong>Cloud Storage:</strong> almacenamiento de objetos (archivos,
            imágenes, backups) con redundancia global, control de versiones, y
            reglas de ciclo de vida. Se accede mediante el SDK oficial de GCP o
            REST APIs.
          </li>
          <li>
            <strong>Cloud SQL:</strong> bases de datos relacionales gestionadas
            (MySQL, PostgreSQL, SQL Server) con backups automáticos, alta
            disponibilidad y conexión segura con VPC.
          </li>
          <li>
            <strong>Firestore / Datastore:</strong> bases de datos NoSQL para
            almacenamiento de documentos con consultas complejas, escalabilidad
            automática y sincronización en tiempo real (especialmente útil para
            apps móviles y backend en Java).
          </li>
          <li>
            <strong>Pub/Sub:</strong> sistema de mensajería distribuido basado
            en publicación y suscripción. Es altamente escalable y tolerante a
            fallos, ideal para arquitecturas orientadas a eventos y
            microservicios Java.
          </li>
          <li>
            <strong>Cloud Monitoring (Stackdriver):</strong> monitoreo de
            métricas, trazas distribuidas, alertas y dashboards integrados. Se
            puede combinar con OpenTelemetry o Spring Actuator.
          </li>
          <li>
            <strong>IAM & Resource Manager:</strong> control de acceso
            detallado, con políticas a nivel de proyecto, recurso y servicio.
            Permite crear service accounts, asignar roles y auditar permisos.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🚀 Despliegue simple en App Engine (Java)
        </h2>
        <ol className="list-decimal pl-5">
          <li>
            Crear archivo <code>app.yaml</code> con configuración básica.
          </li>
          <li>
            Usar el plugin de Maven o el SDK de Google Cloud para desplegar.
          </li>
          <li>
            Comando: <code>gcloud app deploy</code>
          </li>
          <li>
            La aplicación estará disponible en{" "}
            <code>https://&lt;project-id&gt;.appspot.com</code>
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          📦 Subir archivos a Cloud Storage desde Java
        </h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
          {`Storage storage = StorageOptions.getDefaultInstance().getService();
BlobId blobId = BlobId.of("mi-bucket", "archivo.txt");
BlobInfo blobInfo = BlobInfo.newBuilder(blobId).build();
storage.create(blobInfo, Files.readAllBytes(Paths.get("archivo.txt")));`}
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          ✅ Buenas prácticas en GCP
        </h2>
        <ul className="list-disc pl-5">
          <li>
            Separar ambientes (dev, test, prod) usando proyectos diferentes.
          </li>
          <li>Usar Service Accounts con permisos mínimos necesarios.</li>
          <li>
            Habilitar monitoreo y trazabilidad desde el inicio del desarrollo.
          </li>
          <li>
            Etiquetar todos los recursos para facilitar análisis de costos.
          </li>
          <li>Automatizar despliegues con Cloud Build o GitHub Actions.</li>
          <li>
            Limitar el acceso público solo a servicios explícitamente expuestos.
          </li>
          <li>
            Centralizar la gestión de identidad y acceso con Cloud Identity/IAM.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default ServiciosNubeGCP;
