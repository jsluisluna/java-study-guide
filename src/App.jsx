import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { SearchResults } from "./pages/SearchResults";
import { TiposDeDatos } from "./pages/fundamentos/TiposDeDatos";
import { ClasesObjetos } from "./pages/fundamentos/ClasesObjetos";
import { HerenciaPolimorfismo } from "./pages/fundamentos/HerenciaPolimorfismo";
import { InterfacesVsClasesAbstractas } from "./pages/fundamentos/InterfacesVsClasesAbstractas";
import { ClasesInternasYAnonimas } from "./pages/fundamentos/ClasesInternasYAnonimas";
import { ModificadoresDeAcceso } from "./pages/fundamentos/ModificadoresDeAcceso";
import { ExcepcionesEnJava } from "./pages/fundamentos/ExcepcionesEnJava";
import { Java8LambdasStreamsOptional } from "./pages/fundamentos/Java8LambdasStreamsOptional";
import { Java11To21Features } from "./pages/fundamentos/Java11To21Features";
import { Colecciones } from "./pages/advanced/Colecciones";
import { Generics } from "./pages/advanced/Generics";
import { MultithreadingConcurrencia } from "./pages/advanced/MultithreadingConcurrencia";
import { JavaIoNio } from "./pages/advanced/JavaIoNio";
import { UnitTestingJava } from "./pages/testing/UnitTestingJava";
import { SpringCore } from "./pages/spring/SpringCore";
import { SpringBoot } from "./pages/spring/SpringBoot";
import { SpringMVC } from "./pages/spring/SpringMVC";
import { SpringDataJPA } from "./pages/spring/SpringDataJPA";
import { SpringSecurity } from "./pages/spring/SpringSecurity";
import { SpringAOP } from "./pages/spring/SpringAOP";
import { JPAFundamentos } from "./pages/persistencia/JPAFundamentos";
import { JPQLEntityManager } from "./pages/persistencia/JPQLEntityManager";
import { ConsultasSQL } from "./pages/persistencia/ConsultasSQL";
import { PrincipiosSOLID } from "./pages/solid/PrincipiosSOLID";
import { PatronesCreacionales } from "./pages/patrones/PatronesCreacionales";
import { PatronesEstructurales } from "./pages/patrones/PatronesEstructurales";
import { PatronesComportamiento } from "./pages/patrones/PatronesComportamiento";
import { APIsRestJSON } from "./pages/rest/APIsRestJSON";
import { SeguridadJWT } from "./pages/seguridad/SeguridadJWT";
import { SeguridadOAuth } from "./pages/seguridad/SeguridadOAuth";
import { ControlVersionesGit } from "./pages/entorno/ControlVersionesGit";
import { GestionDependenciasMaven } from "./pages/entorno/GestionDependenciasMaven";
import { ContenerizacionDocker } from "./pages/entorno/ContenerizacionDocker";
import { IntegracionContinuaJenkins } from "./pages/entorno/IntegracionContinuaJenkins";
import { MensajeriaEventosKafka } from "./pages/otros/MensajeriaEventosKafka";
import { ObservabilidadWatchdogSplunk } from "./pages/otros/ObservabilidadWatchdogSplunk";
import { CacheDatosRedis } from "./pages/otros/CacheDatosRedis";
import { ServiciosNubeAWS } from "./pages/cloud/ServiciosNubeAWS";
import { ServiciosNubeGCP } from "./pages/cloud/ServiciosNubeGCP";
import { ServiciosNubeAzure } from "./pages/cloud/ServiciosNubeAzure";
import { PalindromoChallenge } from "./pages/challenges/strings/PalindromoChallenge";
import { AnagramaChallenge } from "./pages/challenges/strings/AnagramaChallenge";
import { FibonacciChallenge } from "./pages/challenges/recursion/FibonacciChallenge";
import { TwoSumChallenge } from "./pages/challenges/lists/TwoSumChallenge";
import { FrecuenciaPalabrasChallenge } from "./pages/challenges/maps/FrecuenciaPalabrasChallenge";
import { BinarySearchChallenge } from "./pages/challenges/search/BinarySearchChallenge";
import { BubbleSortChallenge } from "./pages/challenges/sorting/BubbleSortChallenge";
import { EmpleadoChallenge } from "./pages/challenges/poo/EmpleadoChallenge";
import { ReservasChallenge } from "./pages/challenges/poo/ReservasChallenge";
import { PolimorfismoFigurasChallenge } from "./pages/challenges/poo/PolimorfismoFigurasChallenge";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/buscar" element={<SearchResults />} />
              <Route path="/tipos-datos" element={<TiposDeDatos />} />
              <Route path="/clases-objetos" element={<ClasesObjetos />} />
              <Route path="/oop" element={<HerenciaPolimorfismo />} />
              <Route
                path="/interfaces-abstractas"
                element={<InterfacesVsClasesAbstractas />}
              />
              <Route
                path="/clases-internas"
                element={<ClasesInternasYAnonimas />}
              />
              <Route
                path="/modificadores-acceso"
                element={<ModificadoresDeAcceso />}
              />
              <Route path="/excepciones" element={<ExcepcionesEnJava />} />
              <Route path="/java8" element={<Java8LambdasStreamsOptional />} />
              <Route path="/java11-21" element={<Java11To21Features />} />
              <Route path="/colecciones" element={<Colecciones />} />
              <Route path="/generics" element={<Generics />} />
              <Route
                path="/multithreading"
                element={<MultithreadingConcurrencia />}
              />
              <Route path="/io" element={<JavaIoNio />} />
              <Route path="/testing" element={<UnitTestingJava />} />
              <Route path="/spring-core" element={<SpringCore />} />
              <Route path="/spring-boot" element={<SpringBoot />} />
              <Route path="/spring-mvc" element={<SpringMVC />} />
              <Route path="/spring-data" element={<SpringDataJPA />} />
              <Route path="/spring-security" element={<SpringSecurity />} />
              <Route path="/spring-aop" element={<SpringAOP />} />
              <Route path="/persistencia-jpa" element={<JPAFundamentos />} />
              <Route
                path="/persistencia-entity"
                element={<JPQLEntityManager />}
              />
              <Route path="/persistencia-sql" element={<ConsultasSQL />} />
              <Route path="/solid" element={<PrincipiosSOLID />} />
              <Route
                path="/patrones-creacionales"
                element={<PatronesCreacionales />}
              />
              <Route
                path="/patrones-estructurales"
                element={<PatronesEstructurales />}
              />
              <Route
                path="/patrones-comportamiento"
                element={<PatronesComportamiento />}
              />
              <Route path="/rest" element={<APIsRestJSON />} />
              <Route path="/seguridad-jwt" element={<SeguridadJWT />} />
              <Route path="/seguridad-oauth" element={<SeguridadOAuth />} />
              <Route path="/entorno-git" element={<ControlVersionesGit />} />
              <Route
                path="/entorno-maven"
                element={<GestionDependenciasMaven />}
              />
              <Route
                path="/entorno-docker"
                element={<ContenerizacionDocker />}
              />
              <Route
                path="/entorno-jenkins"
                element={<IntegracionContinuaJenkins />}
              />
              <Route path="/otros-kafka" element={<MensajeriaEventosKafka />} />
              <Route
                path="/otros-obs"
                element={<ObservabilidadWatchdogSplunk />}
              />
              <Route path="/otros-redis" element={<CacheDatosRedis />} />
              <Route path="/cloud-aws" element={<ServiciosNubeAWS />} />
              <Route path="/cloud-gcp" element={<ServiciosNubeGCP />} />
              <Route path="/cloud-azure" element={<ServiciosNubeAzure />} />
              <Route
                path="/challenges/strings/palindromo"
                element={<PalindromoChallenge />}
              />
              <Route
                path="/challenges/strings/anagrama"
                element={<AnagramaChallenge />}
              />
              <Route
                path="/challenges/recursion/fibonacci"
                element={<FibonacciChallenge />}
              />
              <Route
                path="/challenges/lists/two-sum"
                element={<TwoSumChallenge />}
              />
              <Route
                path="/challenges/maps/frecuencia-palabras"
                element={<FrecuenciaPalabrasChallenge />}
              />
              <Route
                path="/challenges/search/binary-search"
                element={<BinarySearchChallenge />}
              />
              <Route
                path="/challenges/sorting/bubble-sort"
                element={<BubbleSortChallenge />}
              />
              <Route
                path="/challenges/poo/empleado"
                element={<EmpleadoChallenge />}
              />
              <Route
                path="/challenges/poo/reservas"
                element={<ReservasChallenge />}
              />
              <Route
                path="/challenges/poo/polimorfismo-figuras"
                element={<PolimorfismoFigurasChallenge />}
              />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
