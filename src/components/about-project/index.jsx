import { SectionAbout } from "./section-about";


import imgBag from "../../public/img-bag.png";
import imgTarget from "../../public/img-target.png";
import imgStar from "../../public/img-star.png";

export function AboutProject() {
  const projectDetails = {
    title: "Sobre o Projeto Frontend Fusion",
    description: `O Frontend Fusion é um projeto inovador focado em proporcionar uma experiência envolvente de aprendizado de programação. 
          Nosso objetivo é oferecer um ambiente colaborativo onde entusiastas de tecnologia possam mergulhar no mundo do desenvolvimento 
          frontend, explorando CSS, HTML e JavaScript através de desafios e atividades interativas.`,
    sections: [
      {
        title: "O Que Procuramos:",
        content: `Paixão pela programação e desejo de aprender e crescer. Conhecimento básico de CSS, HTML e JavaScript (ou disposição para aprender).
            Capacidade de trabalhar em equipe e colaborar em projetos conjuntos. Comprometimento e vontade de enfrentar desafios e superar obstáculos.`,
        imgSrc: imgBag,
      },
      {
        title: "Responsabilidades:",
        content: `Participar de desafios e atividades gamificadas para desenvolver habilidades em programação. Colaborar com outros membros da equipe para criar projetos frontend inovadores. Contribuir com ideias e feedback para aprimorar continuamente o projeto.`,
        imgSrc: imgTarget,
      },
      {
        title: "Benefícios:",
        content: `Acesso a uma comunidade de aprendizado dinâmica e colaborativa. Oportunidade de desenvolver habilidades práticas em programação. Experiência valiosa para enriquecer seu currículo e portfólio. Se você está pronto para embarcar em uma jornada emocionante de aprendizado e crescimento no mundo do desenvolvimento web, junte-se a nós no Frontend Fusion!`,
        imgSrc: imgStar,
      },
    ],
  };


    return(
        <section className="min-h-screen min-w-screen flex flex-col text-center px-7 md:px-[106px] text-purple-1 dark:text-white-1 gap-11 font-mulish">
            <header className="w-[81%] mx-auto flex flex-col gap-8 md:gap-20">
                <h2 className="text-[28px] md:text-5xl md:leading-7 font-bold">{projectDetails.title}</h2>
                <p className="text-sm md:text-[22px] md:px-5">{projectDetails.description}</p>
            </header>

      <section className="flex flex-col gap-14">
        {projectDetails.sections.map((section, index) => (
          <SectionAbout
            key={index}
            content={section.content}
            imgSrc={section.imgSrc}
            title={section.title}
          />
        ))}
      </section>

      <footer className="w-[90%] md:w-[65%] flex flex-col items-center justify-center gap-11 mx-auto mt-20 mb-10">
        <h2 className="text-base md:text-[32px]">
          Estamos ansiosos para receber sua inscrição e dar as boas-vindas a
          você em nossa comunidade!
        </h2>

        <button className="px-9 md:px-12 py-[18px] md:py-4 bg-[#16C586] md:bg-[#06B94E] rounded-lg md:rounded-2xl text-lg md:text-2xl font-bold">
          Quero Participar.
        </button>
      </footer>
    </section>
  );
}
