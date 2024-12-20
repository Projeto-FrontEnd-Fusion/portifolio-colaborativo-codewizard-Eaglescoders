import react from "../../public/react.svg";
import tailwind from "../../public/tailwind.svg";
import js from "../../public/js.svg";
import vite from "../../public/vite.svg";
import reactB from "../../public/react-dark.svg";
import tailwindB from "../../public/tailwind-dark.svg";
import jsB from "../../public/js-dark.svg";
import viteB from "../../public/vite-dark.svg";

import { useMembers } from "../../hooks/useMembers";
import { useGetComments } from "../../hooks/useGetComments";

export const HeroSection = () => {
  const {data} = useMembers()
  return (
    
    <section
      className="w-full self-center gap-10  pb-16 px-1  flex items-center justify-between max-w-[1300px] flex-col-reverse
      lg:flex-row
      lg:pb-40 py-20
      lg:px-10
    "
    >
      <div className="flex  gap-2 md:gap-4">
        <figure className="flex items-center justify-center ">
          <img
            src={data?.people[0].githubImgUrl}
            alt={data?.people[0].name}
            title={data?.people[0].name}
            className="w-24  rounded-2xl md:w-32 "
          />
        </figure>
        <figure className="flex  flex-col items-center justify-center gap-2 md:gap-4">
          <img
            src={data?.people[1].githubImgUrl}
            alt={data?.people[1].name}
            title={data?.people[1].name}
            className="w-24   rounded-2xl md:w-32 "
          />
          <img
            src={data?.people[2].githubImgUrl}
            alt={data?.people[2].name}
            title={data?.people[2].name}
            className="w-24   rounded-2xl md:w-32 "
          />
        </figure>
        <figure className="flex flex-col mt-6 items-center gap-2  md:gap-4">
          <img
            src={data?.people[3].githubImgUrl}
            alt={data?.people[3].name}
            title={data?.people[3].name}
            className=" w-24  rounded-2xl md:w-32 "
          />
          <img
            src={data?.people[4].githubImgUrl}
            alt={data?.people[4].name}
            title={data?.people[4].name}
            className=" w-24    rounded-2xl md:w-32 "
          />
        </figure>
        <figure className="flex mt-6  items-center justify-center">
          {/* <img
            src={data?.people[4].githubImgUrl}
            alt={data?.people[4].name}
            title={data?.people[4].name}
            className=" w-24    rounded-2xl md:w-32 "
          /> */}
        </figure>
      </div>

      <div className="flex flex-col justify-center md:gap-4">
      <div className="flex flex-col justify-center items-center md:items-center">
  <p className="font-inconsolata font-medium text-xl md:text-sizeParagraph dark:text-gray-0 text-purple-2">
    projeto
  </p>
  <h2 className="font-zen font-normal text-[26px] md:text-sizeTitle dark:text-gray-0 text-purple-2">
    Frontend Fusion
  </h2>
  <p className="font-inconsolata text-lg lg:text-sizeParagraph dark:text-gray-0 text-purple-2">
    Codifique o seu futuro hoje!
  </p>
</div>


            <figure className="flex mt-6 gap-8 items-center self-center ">
         
              <img src={reactB} className="w-10 md:w-14 flex dark:hidden" />
              <img src={viteB} className="w-10 md:w-14 flex dark:hidden" />
              <img src={jsB} className="w-10 md:w-14 flex dark:hidden" />
              <img src={tailwindB} className="w-10 md:w-14 flex dark:hidden" />

              <img src={react} className="w-10 md:w-14 hidden dark:flex" />
              <img src={vite} className="w-10 md:w-14 hidden dark:flex" />
              <img src={js} className="w-10 md:w-14 hidden dark:flex" />
              <img src={tailwind} className="w-10 md:w-14 hidden dark:flex" />
            </figure>
     
      </div>
    </section>
  );
};
