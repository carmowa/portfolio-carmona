import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const skills = [
    { name: 'Excel', level: 90 },
    { name: 'Power BI', level: 85 },
    { name: 'Java', level: 75 },
    { name: 'Python', level: 80 },
    { name: 'SQL', level: 85 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'HTML', level: 75 },
    { name: 'CSS', level: 70 },
  ];

  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-center space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
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

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2" data-aos="fade-right">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Victor Alves Carmona
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Analista de Dados | Desenvolvedor em Formação
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0" data-aos="fade-left">
            {/* Substitua a URL abaixo pela URL da sua foto */}
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
              alt="Victor Alves Carmona"
              className="rounded-full w-64 h-64 object-cover mx-auto shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Sobre Mim</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 text-lg leading-relaxed">
              Olá! Sou Victor Alves Carmona, tenho 20 anos e atualmente estou cursando Análise e 
              Desenvolvimento de Sistemas na FIAP. Trabalho como Analista de Dados na Mundivox 
              Communications, onde aplico minhas habilidades técnicas para transformar dados em 
              insights valiosos. Sou apaixonado por tecnologia e sempre busco aprender novas 
              ferramentas e metodologias para aprimorar meu trabalho.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Habilidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={skill.name} className="p-4" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Exemplo de Projeto - Substitua com seus projetos reais */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                alt="Projeto Analytics"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Análise de Dados</h3>
                <p className="text-gray-600">
                  Projeto de análise de dados utilizando Python e Power BI.
                </p>
              </div>
            </div>
            {/* Adicione mais projetos aqui */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contato</h2>
          <div className="flex justify-center space-x-8">
            <a href="mailto:seu.email@exemplo.com" className="text-gray-600 hover:text-blue-600">
              <Mail size={24} />
            </a>
            <a href="https://linkedin.com/in/seu-perfil" className="text-gray-600 hover:text-blue-600">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/seu-usuario" className="text-gray-600 hover:text-blue-600">
              <Github size={24} />
            </a>
            <a href="https://instagram.com/seu-usuario" className="text-gray-600 hover:text-blue-600">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;