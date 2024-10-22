import github from "../../public/github.svg";
import useFetchData from "../../controller/useFetchData";

export const Footer = () => {
  const { data } = useFetchData(
    import.meta.env.VITE_API_URL_GET_DADOS_CADASTRO
  );

  return (
    <footer className="bg-rodape-0 w-full rounded-t-3xl dark:bg-purple-2 bg-black-1">
      <div className="flex p-8 justify-between">
        <div className="flex flex-col md:flex-row md:mr-4">
          <div>
            <button className="bg-blue-1 text-white-1 w-36 flex items-center text-white gap-1 justify-center p-4 rounded-lg font-inconsolata text-xl">
              github <img src={github} alt="GitHub logo" />
            </button>
          </div>
          <div className="flex flex-col my-4 gap-8 md:flex-row md:pl-4 text-white-1">
            <nav>
              <ul className="flex flex-col my-4 gap-8 md:flex-row md:pl-4">
                <li>
                  <a href="#" className="text-sizeParagraphSm font-inconsolata text-white ">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sizeParagraphSm font-inconsolata text-white ">
                    Equipe
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sizeParagraphSm font-inconsolata text-white ">
                    Projetos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sizeParagraphSm font-inconsolata text-white ">
                    Participantes
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="flex w-24 md:w-full md:justify-end md:max-w-60">
          <div className="flex h-max box-border gap-8 md:flex-col">
            <figure className="flex flex-wrap items-center h-12 relative md:flex-nowrap md:w-full md:max-w-60">
              {data?.people.map((integrante, index) => (
                <img
                  className="flex items-center w-8 rounded-full"
                  style={{
                    zIndex: index,
                    marginRight: `${index * 32}px`,
                    position: 'absolute',
                    right: `${index * 16}px`
                  }}
                  key={integrante.id}
                  src={integrante.githubImgUrl}
                  alt={integrante.name}
                  title={integrante.name}
                />
              ))}
            </figure>

            <div className="hidden gap-0.5 md:inline-flex md:flex-col md:max-w-60 justify-center text-white-1">
              {data?.people.map((integrante) => (
                <p className="font-mulish text-xs" key={integrante.id}>
                  {integrante.name} - {integrante.subTitle}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="flex justify-center text-xs font-mulish pb-8 md:text-left md:ml-8 text-white-1">
        Projeto Frontendfusion - Todos os direitos reservados
      </p>
    </footer>
  );
};
