import Card from "./card";
import ClickIcon from "../../public/assets/icons/ClickIcon.svg";
import TaskIcon from "../../public/assets/icons/TaskIcon.svg";
import ViewIcon from "../../public/assets/icons/ViewIcon.svg";
import CollabIcon from "../../public/assets/icons/CollabIcon.svg";
import SafeIcon from "../../public/assets/icons/SafeIcon.svg";

const Benefits = () => {
  return (
    <section className="w-full ">
      <div className="flex flex-wrap px-4 justify-around gap-4 w-full mx-auto md:justify-between md:max-w-medium lg:max-w-larger lg:px-0 lg:justify-center ">
        <div className="max-w-sm pr-8">
          <h2 className="font-black dark:text-gray-2 text-purple-2 dark:border-purple-3 border-purple-2 leading-mobile-ultra pb-4 mb-2 border-x-0 border-t-0 border-solid border-2 text-desktop-extraMedium font-inconsolata lg:text-desktop-extraUltra lg:leading-desktop-ultra lg:pb-8 lg:mb-8">
            Vantagens do <br /> Projeto
          </h2>

          <p className="text-xs font-normal leading-mobile-mini text-purple-2 dark:text-gray-0 font-mulish lg:text-lg lg:leading-desktop-larger">
            Participar de um projeto em grupo para aprender programação web
            frontend e desenvolver um portfólio colaborativo oferece uma série
            de vantagens!
          </p>
        </div>

        <Card
          title="Diversidade de habilidades:"
          text="Ao trabalhar em equipe, você pode aprender com os outros membros do grupo. Cada pessoa traz suas habilidades e conhecimentos únicos, permitindo trocas constantes de aprendizado e a oportunidade de explorar diferentes abordagens para resolver problemas."
          src={ClickIcon}
          alt="Ícone de clique"
        />

        <Card
          title="Divisão de tarefas:"
          text="Trabalhar em equipe permite distribuir o trabalho de forma eficiente, acelerando o progresso e permitindo que cada membro se concentre em suas áreas de especialização."
          src={TaskIcon}
          alt="Ícone de tarefas"
        />

        <Card
          title="Aprendizado colaborativo:"
          text="Ao trabalhar em equipe, você pode aprender com os outros membros do grupo. Cada pessoa traz suas habilidades e conhecimentos únicos, permitindo trocas constantes de aprendizado e a oportunidade de explorar diferentes abordagens para resolver problemas."
          src={CollabIcon}
          alt="Ícone de colaboração"
        />

        <Card
          title="Diversidade de perspectivas:"
          text="Trabalhar com pessoas diferentes traz uma variedade de perspectivas e abordagens para resolver problemas. Isso pode levar a soluções mais criativas e inovadoras, já que cada membro do grupo pode contribuir com suas ideias únicas."
          src={ViewIcon}
          alt="Ícone de perspectivas"
        />

        <Card
          title="Habilidades interpessoais:"
          text="Trabalhar em equipe ajuda a aprimorar habilidades de comunicação, colaboração e trabalho em grupo. Essas habilidades são essenciais no ambiente de trabalho, não apenas na área de programação, mas em muitos outros campos também."
          src={SafeIcon}
          alt="Ícone de habilidades interpessoais"
        />
      </div>
    </section>
  );
};

export default Benefits;
