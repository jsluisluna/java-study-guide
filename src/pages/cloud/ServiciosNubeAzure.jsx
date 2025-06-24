import React from "react";

export function ServiciosNubeAzure() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        ☁️ Servicios en la Nube con Microsoft Azure
      </h1>

      <section className="mb-8">
        <p>
          Microsoft Azure es una plataforma de computación en la nube que ofrece
          soluciones de infraestructura, bases de datos, inteligencia
          artificial, redes y servicios de desarrollo para aplicaciones
          empresariales. Azure proporciona una gran compatibilidad con entornos
          Java y permite crear, desplegar, monitorear y escalar aplicaciones
          usando servicios gestionados y herramientas DevOps.
        </p>
        <p className="mt-4">
          Azure destaca por su integración con el ecosistema de Microsoft,
          soporte multiplataforma y herramientas potentes como Azure DevOps, AKS
          y App Service. Es una opción sólida para empresas que combinan
          tecnologías Java con herramientas corporativas.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🌐 Servicios clave de Azure para Java
        </h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>Azure Virtual Machines:</strong> instancias virtuales
            configurables para ejecutar aplicaciones Java tradicionales con
            soporte para escalado, redes privadas y almacenamiento gestionado.
          </li>
          <li>
            <strong>Azure App Service:</strong> servicio PaaS que permite
            desplegar aplicaciones Java en Tomcat o JBoss, con escalabilidad
            automática y despliegue continuo desde GitHub o Azure DevOps.
          </li>
          <li>
            <strong>Azure Kubernetes Service (AKS):</strong> orquestador de
            contenedores completamente gestionado que permite ejecutar
            microservicios Java empaquetados como contenedores Docker.
          </li>
          <li>
            <strong>Azure Functions:</strong> funciones serverless en múltiples
            lenguajes, incluyendo Java, útiles para tareas reactivas o
            integraciones ligeras.
          </li>
          <li>
            <strong>Azure Storage:</strong> servicio de almacenamiento de blobs,
            archivos y colas. Ideal para almacenar objetos estáticos desde
            aplicaciones Java.
          </li>
          <li>
            <strong>Azure SQL Database:</strong> base de datos relacional
            totalmente gestionada, compatible con JDBC y otras bibliotecas
            comunes en Java.
          </li>
          <li>
            <strong>Cosmos DB:</strong> base de datos NoSQL multimodelo con baja
            latencia y alta disponibilidad global.
          </li>
          <li>
            <strong>Azure Event Hubs:</strong> sistema de ingestión de eventos a
            gran escala, similar a Kafka, útil para procesamiento en streaming.
          </li>
          <li>
            <strong>Azure Monitor:</strong> supervisión de métricas, trazas y
            logs para cualquier aplicación desplegada en Azure.
          </li>
          <li>
            <strong>Azure Active Directory:</strong> servicio de identidad para
            autenticación, autorización y Single Sign-On, integrable en apps
            Java.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🚀 Despliegue rápido con App Service
        </h2>
        <ol className="list-decimal pl-5">
          <li>
            Crear una app web en Azure Portal con stack Java y Tomcat
            preconfigurado.
          </li>
          <li>
            Subir el archivo <code>.jar</code> o <code>.war</code> desde la
            interfaz o con CLI.
          </li>
          <li>Configurar la integración continua con GitHub o Azure Repos.</li>
          <li>Acceder a la URL pública generada automáticamente.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          📦 Acceder a Azure Blob Storage desde Java
        </h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
          {`BlobServiceClient blobServiceClient = new BlobServiceClientBuilder()
  .connectionString("<your-connection-string>")
  .buildClient();
BlobContainerClient containerClient = blobServiceClient.getBlobContainerClient("mi-contenedor");
BlobClient blobClient = containerClient.getBlobClient("archivo.txt");
blobClient.uploadFromFile("archivo.txt");`}
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          ✅ Buenas prácticas en Azure
        </h2>
        <ul className="list-disc pl-5">
          <li>
            Usar Azure Resource Groups para organizar recursos por entorno o
            función.
          </li>
          <li>
            Aplicar control de acceso basado en roles (RBAC) para todos los
            servicios.
          </li>
          <li>Configurar escalado automático en App Service y AKS.</li>
          <li>
            Automatizar despliegues con Azure DevOps Pipelines o GitHub Actions.
          </li>
          <li>Utilizar tags en recursos para control de costos y auditoría.</li>
          <li>
            Activar alertas y diagnósticos con Azure Monitor y Application
            Insights.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default ServiciosNubeAzure;
