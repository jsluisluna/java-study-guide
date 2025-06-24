import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  BookOpen,
  Layers,
  Cpu,
  HardDrive,
  FlaskConical,
  Flower2,
  Database,
  ShieldCheck,
  Puzzle,
  Cloud,
  Terminal,
  Zap,
  FileCode,
  LayoutDashboard,
} from "lucide-react";

function Section({ title, icon, children }) {
  const location = useLocation();
  const [open, setOpen] = useState(() =>
    React.Children.toArray(children).some(
      (child) => child.props.to && location.pathname.startsWith(child.props.to)
    )
  );

  return (
    <div className="transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="text-base font-semibold text-gray-700 mt-2 mb-1 w-full text-left flex items-center gap-2 hover:text-blue-600 transition-colors"
      >
        {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        {icon && <span>{icon}</span>}
        {title}
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 pl-6 pt-1">{children}</div>
      </div>
    </div>
  );
}

function SidebarLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-sm pl-6 rounded-md py-1 px-2 transition-colors ${
          isActive
            ? "bg-blue-100 text-blue-700 font-medium border-l-4 border-blue-400"
            : "text-gray-700 hover:text-blue-600"
        }`
      }
    >
      {children}
    </NavLink>
  );
}

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <aside
      className={`fixed z-30 top-0 left-0 h-screen border-r bg-white shadow-sm flex flex-col transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      } md:static md:translate-x-0`}
    >
      <div className="flex justify-center items-center px-4 pt-6 pb-4">
        <div className="flex items-center gap-2">
          <LayoutDashboard size={20} className="text-blue-600" />
          {!collapsed && (
            <h1 className="text-lg font-bold text-blue-600">Menu</h1>
          )}
        </div>
      </div>

      <nav className="flex flex-col gap-2 px-4 pb-6 font-medium overflow-y-auto divide-y divide-gray-200">
        <Section title="1. Fundamentos de Java" icon={<BookOpen size={16} />}>
          <SidebarLink to="/tipos-datos">
            Tipos primitivos, operadores, estructuras de control
          </SidebarLink>
          <SidebarLink to="/clases-objetos">
            Clases, objetos, constructores
          </SidebarLink>
          <SidebarLink to="/oop">
            Herencia, polimorfismo, encapsulamiento, abstracción
          </SidebarLink>
          <SidebarLink to="/interfaces-abstractas">
            Interfaces vs clases abstractas
          </SidebarLink>
          <SidebarLink to="/clases-internas">
            Clases internas, anónimas y estáticas
          </SidebarLink>
          <SidebarLink to="/modificadores-acceso">
            Modificadores de acceso
          </SidebarLink>
          <SidebarLink to="/excepciones">Excepciones en Java</SidebarLink>
          <SidebarLink to="/java8">
            Java 8+ (Streams, Lambdas, Optional)
          </SidebarLink>
          <SidebarLink to="/java11-21">
            Java 11–21 (var, Records, Sealed, Pattern Matching)
          </SidebarLink>
        </Section>

        <Section title="2. Colecciones y generics" icon={<Layers size={16} />}>
          <SidebarLink to="/colecciones">Colecciones</SidebarLink>
          <SidebarLink to="/generics">Generics</SidebarLink>
        </Section>

        <Section
          title="3. Multithreading y concurrencia"
          icon={<Cpu size={16} />}
        >
          <SidebarLink to="/multithreading">
            Multithreading y concurrencia
          </SidebarLink>
        </Section>

        <Section title="4. Java IO y NIO" icon={<HardDrive size={16} />}>
          <SidebarLink to="/io">IO y NIO</SidebarLink>
        </Section>

        <Section title="5. Unit testing" icon={<FlaskConical size={16} />}>
          <SidebarLink to="/testing">JUnit 5 y Mockito</SidebarLink>
        </Section>

        <Section title="6. Spring framework" icon={<Flower2 size={16} />}>
          <SidebarLink to="/spring-core">Spring Core</SidebarLink>
          <SidebarLink to="/spring-boot">Spring Boot</SidebarLink>
          <SidebarLink to="/spring-mvc">Spring MVC</SidebarLink>
          <SidebarLink to="/spring-data">Spring Data JPA</SidebarLink>
          <SidebarLink to="/spring-security">
            Seguridad con Spring Security
          </SidebarLink>
          <SidebarLink to="/spring-aop">Aspectos (AOP)</SidebarLink>
        </Section>

        <Section title="7. Persistencia" icon={<Database size={16} />}>
          <SidebarLink to="/persistencia-jpa">Fundamentos JPA</SidebarLink>
          <SidebarLink to="/persistencia-entity">Entity Manager</SidebarLink>
          <SidebarLink to="/persistencia-sql">Consultas SQL</SidebarLink>
        </Section>

        <Section title="8. Principios SOLID" icon={<ShieldCheck size={16} />}>
          <SidebarLink to="/solid">Principios SOLID</SidebarLink>
        </Section>

        <Section title="9. Patrones de diseño" icon={<Puzzle size={16} />}>
          <SidebarLink to="/patrones-creacionales">Creacionales</SidebarLink>
          <SidebarLink to="/patrones-estructurales">Estructurales</SidebarLink>
          <SidebarLink to="/patrones-comportamiento">
            Comportamiento
          </SidebarLink>
        </Section>

        <Section title="10. APIs RESTful y JSON" icon={<FileCode size={16} />}>
          <SidebarLink to="/rest">APIs RESTful y JSON</SidebarLink>
        </Section>

        <Section title="11. Seguridad" icon={<ShieldCheck size={16} />}>
          <SidebarLink to="/seguridad-jwt">JWT</SidebarLink>
          <SidebarLink to="/seguridad-oauth">OAuth 2.0</SidebarLink>
        </Section>

        <Section title="12. Entorno & CI/CD" icon={<Terminal size={16} />}>
          <SidebarLink to="/entorno-git">Git</SidebarLink>
          <SidebarLink to="/entorno-maven">Maven</SidebarLink>
          <SidebarLink to="/entorno-docker">Docker</SidebarLink>
          <SidebarLink to="/entorno-jenkins">Jenkins</SidebarLink>
        </Section>

        <Section title="13. Cloud" icon={<Cloud size={16} />}>
          <SidebarLink to="/cloud-aws">AWS</SidebarLink>
          <SidebarLink to="/cloud-gcp">Google Cloud</SidebarLink>
          <SidebarLink to="/cloud-azure">Azure</SidebarLink>
        </Section>

        <Section title="14. Otros" icon={<Zap size={16} />}>
          <SidebarLink to="/otros-kafka">Apache Kafka</SidebarLink>
          <SidebarLink to="/otros-obs">Watchdog & Splunk</SidebarLink>
          <SidebarLink to="/otros-redis">Redis</SidebarLink>
        </Section>

        <Section title="15. Code challenges" icon={<FileCode size={16} />}>
          <Section title="Strings">
            <SidebarLink to="/challenges/strings/palindromo">
              Palíndromo
            </SidebarLink>
            <SidebarLink to="/challenges/strings/anagrama">
              Anagrama
            </SidebarLink>
          </Section>
          <Section title="Recursion">
            <SidebarLink to="/challenges/recursion/fibonacci">
              Secuencia Fibonacci
            </SidebarLink>
          </Section>
          <Section title="Lists">
            <SidebarLink to="/challenges/lists/two-sum">Two Sum</SidebarLink>
          </Section>
          <Section title="Maps">
            <SidebarLink to="/challenges/maps/frecuencia-palabras">
              Frecuencia de Palabras
            </SidebarLink>
          </Section>
          <Section title="Search">
            <SidebarLink to="/challenges/search/binary-search">
              Búsqueda Binaria
            </SidebarLink>
          </Section>
          <Section title="Sorting">
            <SidebarLink to="/challenges/sorting/bubble-sort">
              Bubble Sort
            </SidebarLink>
          </Section>
          <Section title="POO">
            <SidebarLink to="/challenges/poo/empleado">
              Clase Empleado
            </SidebarLink>
            <SidebarLink to="/challenges/poo/reservas">
              Sistema de Reservas
            </SidebarLink>
            <SidebarLink to="/challenges/poo/polimorfismo-figuras">
              Figuras con Polimorfismo
            </SidebarLink>
          </Section>
        </Section>
      </nav>
    </aside>
  );
}
