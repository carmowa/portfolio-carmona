import Foto from "./img/linkedin.jpg";
import FotoPortoConserta from "./img/projeto-porto-conserta.png";
import FotoMundivox from "./img/mundivox.png";
import FotoEnergiaSolidaria from "./img/projeto-energia-solidaria-teste.png";
import FotoFuturoABeiraMar from "./img/projeto-futuro-a-beira-mar-teste.png";
import IconeExcel from "./img/icone-excel.png";
import IconeJava from "./img/icone-java.png";
import IconeSQL from "./img/icone-sql.png";
import IconeHTML from "./img/icone-html.png";
import IconePowerBI from "./img/icone-powerbi.png";
import IconePython from "./img/icone-python.png";
import IconePostgreSQL from "./img/icone-postgresql.png";
import IconeCSS from "./img/icone-css.png";
import IconeWord from "./img/icone-word.png";
import IconePowerPoint from "./img/icone-power-point.png";
import IconeIngles from "./img/icone-ingles.png";
import IconeEspanhol from "./img/icone-espanha.png";

import React, { useEffect } from "react";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const skills = [
    { name: "Excel", icon: IconeExcel, level: "Avançado" },
    { name: "Power BI", icon: IconePowerBI, level: "Avançado" },
    { name: "Python", icon: IconePython, level: "Avançado" },
    { name: "Word", icon: IconeWord, level: "Avançado" },
    { name: "Power Point", icon: IconePowerPoint, level: "Avançado" },
    { name: "Inglês", icon: IconeIngles, level: "Avançado" },
    { name: "PostgreSQL", icon: IconePostgreSQL, level: "Avançado" },
    { name: "Java", icon: IconeJava, level: "Intermediário" },
    { name: "SQL", icon: IconeSQL, level: "Intermediário" },
    { name: "HTML", icon: IconeHTML, level: "Intermediário" },
    { name: "CSS", icon: IconeCSS, level: "Intermediário" },
    { name: "Espanhol", icon: IconeEspanhol, level: "Básico" },
  ];

  return (
    <div className="bg-white">
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-center space-x-8">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <Link
                key={item}
                to={item}
                spy={true}
                smooth={true}
                duration={500}
                className="text-gray-600 hover:text-blue-600 cursor-pointer capitalize font-medium"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2" data-aos="fade-right">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Victor Alves Carmona
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Analista de Dados | Desenvolvedor Fullstack
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0" data-aos="fade-left">
            <img
              src={Foto}
              alt="Victor Alves Carmona"
              className="rounded-full w-64 h-64 object-cover mx-auto shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Sobre Mim</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Sou Victor Alves Carmona, tenho 20 anos e sou natural de São Paulo. Estudo Análise e Desenvolvimento de Sistemas na FIAP, após um ano de Engenharia de Produção no Mackenzie, onde descobri minha paixão por programação e resolução de problemas.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Trabalho como Analista de Dados na Mundivox Communications, utilizando ferramentas como Excel, Power BI, Apache Superset, e conhecimentos em Python, Java, SQL, PostgreSQL, Git e GitHub. Sou adepto de metodologias ágeis e tenho experiência em trabalho em equipe e comunicação.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Além da minha carreira técnica, sou apaixonado por esportes e praticante de lutas, tendo inclusive dado aulas de boxe. Já trabalhei com vendas, o que me ajudou a desenvolver habilidades de negociação e atendimento ao cliente. Falo inglês avançado e espanhol básico.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Sempre em busca de novos desafios, estou focado em continuar meu crescimento profissional e contribuir com soluções inovadoras.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20">
        <div className="container mx-auto px-6" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Habilidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="flex items-center p-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img src={skill.icon} alt={skill.name} className="w-8 h-8 mr-4" />
                <div>
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <div className="text-gray-600 text-sm">{skill.level}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up">
              <img
                src={FotoMundivox}
                alt="Projeto Mundivox"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Análise de Dados</h3>
                <p className="text-gray-600">
                  Projeto de análise de dados utilizando Excel, Power BI & Apache Superset.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up">
              <img
                src={FotoPortoConserta}
                alt="Projeto Porto Conserta"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Porto Conserta: Plataforma Digital</h3>
                <p className="text-gray-600">
                  Projeto de criação de site usando HTML e CSS.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up">
              <img
                src={FotoEnergiaSolidaria}
                alt="Projeto Energia Solidária"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Energia Solidária: Plataforma Digital</h3>
                <p className="text-gray-600">
                  Projeto de criação de site usando HTML, CSS & NextJs.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up">
              <img
                src={FotoFuturoABeiraMar}
                alt="Projeto Futuro Á Beira Mar"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Futuro Á Beira Mar: Plataforma Digital</h3>
                <p className="text-gray-600">
                  Projeto de criação de site usando HTML, CSS & React.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contato</h2>
          <div className="flex justify-center space-x-8">
            <a href="mailto:victorcarmona1802@gmail.com" className="text-gray-600 hover:text-blue-600" target="__blank">
              <Mail size={24} />
            </a>
            <a href="https://linkedin.com/in/carmowa" className="text-gray-600 hover:text-blue-600" target="__blank">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/carmowa" className="text-gray-600 hover:text-blue-600" target="__blank">
              <Github size={24} />
            </a>
            <a href="https://instagram.com/thecaarmona" className="text-gray-600 hover:text-blue-600" target="__blank">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
