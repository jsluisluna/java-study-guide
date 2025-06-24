import React from "react";

export function ServiciosNubeAWS() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        ☁️ Servicios en la Nube con AWS
      </h1>

      <section className="mb-8">
        <p>
          Amazon Web Services (AWS) es una plataforma de computación en la nube
          ampliamente adoptada que ofrece más de 200 servicios completamente
          gestionados, desde recursos de cómputo, almacenamiento y bases de
          datos, hasta inteligencia artificial, redes y analítica. Su modelo de
          pago por uso, escalabilidad automática y alcance global la hacen ideal
          para empresas de todos los tamaños que buscan construir, desplegar y
          operar software de forma flexible y segura.
        </p>
        <p className="mt-4">
          En aplicaciones Java modernas, AWS permite desde ejecutar servicios
          backend y APIs hasta almacenar archivos, implementar funciones
          serverless, administrar bases de datos, hacer despliegues continuos y
          garantizar observabilidad. A continuación se presentan los servicios
          más utilizados en este contexto.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🌐 Principales servicios de AWS
        </h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>Amazon EC2 (Elastic Compute Cloud):</strong> servicio de
            máquinas virtuales que permite ejecutar instancias Linux o Windows
            para desplegar aplicaciones, balanceadores, bases de datos, etc.
            Puedes elegir tamaño, tipo de instancia, AMI (imagen base), zona de
            disponibilidad y configurar auto escalado.
          </li>
          <li>
            <strong>Amazon S3 (Simple Storage Service):</strong> almacenamiento
            de objetos altamente duradero y escalable. Ideal para almacenar
            imágenes, archivos, backups o datos estáticos accesibles desde apps
            web o móviles. Soporta versiones, políticas de ciclo de vida y
            control de acceso granular (ACLs).
          </li>
          <li>
            <strong>Amazon RDS (Relational Database Service):</strong> servicio
            gestionado para motores como MySQL, PostgreSQL, Oracle, SQL Server y
            Amazon Aurora. Incluye backups automáticos, alta disponibilidad
            (Multi-AZ), escalabilidad vertical y monitoreo integrado.
          </li>
          <li>
            <strong>AWS Lambda:</strong> permite ejecutar funciones sin
            aprovisionar servidores. Solo pagas por invocación y tiempo de
            ejecución. Muy útil para procesar eventos de S3, SNS, DynamoDB, API
            Gateway, etc.
          </li>
          <li>
            <strong>Elastic Beanstalk:</strong> plataforma como servicio (PaaS)
            para desplegar apps Java (y otros lenguajes) automáticamente. Maneja
            EC2, auto-scaling, balanceadores, monitoreo y despliegue sin
            intervención manual.
          </li>
          <li>
            <strong>Amazon CloudWatch:</strong> recolección y monitoreo de logs,
            métricas personalizadas y uso de alarmas. Útil para monitorear
            instancias, funciones Lambda, uso de CPU, errores HTTP, y mucho más.
          </li>
          <li>
            <strong>AWS IAM (Identity and Access Management):</strong> permite
            crear usuarios, roles, políticas y permisos. Es fundamental para
            aplicar el principio de menor privilegio y controlar quién puede
            hacer qué con cada servicio.
          </li>
          <li>
            <strong>Amazon SQS (Simple Queue Service):</strong> sistema de colas
            distribuido que desacopla componentes de una arquitectura. Asegura
            entrega eventual, permite reintentos y escalabilidad.
          </li>
          <li>
            <strong>Amazon SNS (Simple Notification Service):</strong> sistema
            de notificaciones push que publica mensajes a múltiples suscriptores
            (email, SMS, endpoints HTTP, Lambda, etc.).
          </li>
          <li>
            <strong>Amazon DynamoDB:</strong> base de datos NoSQL totalmente
            gestionada y de baja latencia. Ideal para eventos, sesiones,
            catálogos, etc.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🚀 Ejemplo de despliegue con Elastic Beanstalk
        </h2>
        <ol className="list-decimal pl-5">
          <li>
            Empaquetar el proyecto como archivo <code>.jar</code> o{" "}
            <code>.war</code> usando Maven.
          </li>
          <li>
            Instalar la CLI de Elastic Beanstalk:{" "}
            <code>pip install awsebcli</code>.
          </li>
          <li>
            Inicializar un entorno con <code>eb init</code> y seleccionar región
            y plataforma.
          </li>
          <li>
            Desplegar con <code>eb create</code> o actualizar con{" "}
            <code>eb deploy</code>.
          </li>
          <li>
            Acceder al entorno en{" "}
            <code>
              http://&lt;app-name&gt;.&lt;region&gt;.elasticbeanstalk.com
            </code>
            .
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          🛠️ Integración con S3 desde Java
        </h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
          {`AmazonS3 s3 = AmazonS3ClientBuilder.defaultClient();
s3.putObject("mi-bucket", "archivo.txt", new File("archivo.txt"));`}
        </pre>
        <p>
          También puedes generar enlaces temporales, leer objetos como streams y
          aplicar políticas de acceso directamente desde el código usando el SDK
          de AWS para Java.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          ✅ Buenas prácticas en AWS
        </h2>
        <ul className="list-disc pl-5">
          <li>Crear roles IAM específicos por microservicio o entorno.</li>
          <li>
            Separar ambientes (desarrollo, pruebas, producción) en diferentes
            cuentas o VPCs.
          </li>
          <li>Habilitar cifrado en tránsito y en reposo (SSL, KMS).</li>
          <li>
            Activar alertas y métricas con CloudWatch para todos los recursos
            críticos.
          </li>
          <li>
            Automatizar despliegues con herramientas como Terraform,
            CloudFormation o CDK.
          </li>
          <li>Monitorear costos y establecer presupuestos y alarmas.</li>
        </ul>
      </section>
    </div>
  );
}

export default ServiciosNubeAWS;
