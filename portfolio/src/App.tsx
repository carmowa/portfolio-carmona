import Foto from "./img/linkedin.jpg";
import FotoPortoConserta from "./img/projeto-porto-conserta.png";
import FotoMundivox from "./img/mundivox.png";
import FotoEnergiaSolidaria from "./img/projeto-energia-solidaria.png";
import FotoFuturoABeiraMar from "./img/projeto-futuro-a-beira-mar.png";
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
import FotoPortoConserta2 from "./img/projeto-porto-seguro-tela-2.png"
import FotoPortoConserta3 from "./img/projeto-porto-seguro-tela-3.png"
import FotoPortoConserta1 from "./img/projeto-porto-conserta-tela-1.png"

import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { Github, Linkedin, Instagram, Mail, X, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  mainImage: string;
  images: string[];
  longDescription: string;
}

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const projects: Project[] = [
    {
      title: "Análise de Dados - Mundivox",
      description: "Projeto de análise de dados utilizando Excel, Power BI & Apache Superset.",
      mainImage: FotoMundivox,
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80"
      ],
      longDescription: "Projeto desenvolvido na Mundivox Communications focado na análise de dados de performance e qualidade. Utilizando Excel para manipulação de dados, Power BI para criação de dashboards interativos e Apache Superset para visualizações avançadas. O projeto resultou em insights significativos que melhoraram a tomada de decisão da empresa."
    },
    {
      title: "Porto Conserta: Plataforma Digital",
      description: "Projeto de criação de site usando HTML e CSS.",
      mainImage: FotoPortoConserta,
      images: [
        FotoPortoConserta1,
        FotoPortoConserta2,
        FotoPortoConserta3
      ],
      longDescription: "O Porto Conserta é uma plataforma web desenvolvida para conectar prestadores de serviços com clientes na região do Porto. O projeto foi construído utilizando HTML e CSS, com foco em criar uma interface intuitiva e responsiva. Implementamos recursos de busca, filtros e um sistema de avaliações."
    },
    {
      title: "Energia Solidária: Plataforma Digital",
      description: "Projeto de criação de site usando HTML, CSS & NextJs.",
      mainImage: FotoEnergiaSolidaria,
      images: [
        "https://images.unsplash.com/photo-1497435334941-8c899ee9e694?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&q=80"
      ],
      longDescription: "Energia Solidária é uma iniciativa que visa conectar comunidades carentes com doadores de painéis solares. A plataforma foi desenvolvida usando HTML, CSS e Next.js, oferecendo uma experiência moderna e otimizada. O sistema inclui cadastro de doadores, mapeamento de comunidades e acompanhamento de projetos."
    },
    {
      title: "Futuro Á Beira Mar: Plataforma Digital",
      description: "Projeto de criação de site usando HTML, CSS & React.",
      mainImage: FotoFuturoABeiraMar,
      images: [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1520520731457-9283dd14aa66?auto=format&fit=crop&q=80"
      ],
      longDescription: "Futuro à Beira Mar é um projeto focado na preservação de praias e conscientização ambiental. Desenvolvido com React, HTML e CSS, o site apresenta informações sobre ações de preservação, eventos de limpeza e educação ambiental. Inclui um sistema de cadastro para voluntários e um blog com conteúdo educativo."
    }
  ];

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

  const nextImage = () => {
    if (selectedProject && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => 
          prev === selectedProject.images.length - 1 ? 0 : prev + 1
        );
        setTimeout(() => {
          setIsTransitioning(false);
        }, 500);
      }, 200);
    }
  };

  const prevImage = () => {
    if (selectedProject && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => 
          prev === 0 ? selectedProject.images.length - 1 : prev - 1
        );
        setTimeout(() => {
          setIsTransitioning(false);
        }, 500);
      }, 200);
    }
  };

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
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
                data-aos="fade-up"
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImageIndex(0);
                  setIsTransitioning(false);
                }}
              >
                <img
                  src={project.mainImage}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full mx-4 relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
            >
              <X size={24} />
            </button>
            
            <div className="relative overflow-hidden">
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                className={`w-full h-[400px] object-cover transition-opacity duration-500 ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}
              />
              
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-transform duration-200 hover:scale-110"
                    disabled={isTransitioning}
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-transform duration-200 hover:scale-110"
                    disabled={isTransitioning}
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
              
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {selectedProject.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (!isTransitioning) {
                        setIsTransitioning(true);
                        setTimeout(() => {
                          setCurrentImageIndex(index);
                          setTimeout(() => {
                            setIsTransitioning(false);
                          }, 500);
                        }, 200);
                      }
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50 scale-100'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{selectedProject.title}</h3>
              <p className="text-gray-600 leading-relaxed">{selectedProject.longDescription}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;