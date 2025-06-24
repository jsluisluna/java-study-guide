import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Bienvenido a Java Study Guide
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Esta guía interactiva está diseñada para ayudarte a dominar los
        fundamentos, frameworks, patrones de diseño y desafíos técnicos más
        comunes que aparecen en entrevistas y proyectos Java reales.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <div className="p-6 bg-white border rounded-xl shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-blue-500 mb-2">
            🔍 Fundamentos de Java
          </h2>
          <p className="text-gray-600">
            Aprende desde tipos primitivos hasta clases abstractas y
            excepciones.
          </p>
          <Link
            to="/tipos-datos"
            className="text-sm text-blue-600 mt-2 inline-block hover:underline"
          >
            Explorar sección
          </Link>
        </div>

        <div className="p-6 bg-white border rounded-xl shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-blue-500 mb-2">
            🧠 Code Challenges
          </h2>
          <p className="text-gray-600">
            Practica algoritmos comunes con retos clasificados por tipo.
          </p>
          <Link
            to="/challenges/strings/palindromo"
            className="text-sm text-blue-600 mt-2 inline-block hover:underline"
          >
            Probar retos
          </Link>
        </div>

        <div className="p-6 bg-white border rounded-xl shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-blue-500 mb-2">
            🚀 Spring & Testing
          </h2>
          <p className="text-gray-600">
            Domina Spring Boot, MVC, Security y pruebas unitarias con JUnit.
          </p>
          <Link
            to="/spring-boot"
            className="text-sm text-blue-600 mt-2 inline-block hover:underline"
          >
            Ver módulos
          </Link>
        </div>

        <div className="p-6 bg-white border rounded-xl shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-blue-500 mb-2">
            ☁️ DevOps & Cloud
          </h2>
          <p className="text-gray-600">
            Aprende Git, Docker, Jenkins y despliegue en AWS, GCP y Azure.
          </p>
          <Link
            to="/entorno-git"
            className="text-sm text-blue-600 mt-2 inline-block hover:underline"
          >
            Ir a DevOps
          </Link>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-500">
          Explora el menú lateral para navegar por todos los temas disponibles.
        </p>
      </div>
    </div>
  );
}
