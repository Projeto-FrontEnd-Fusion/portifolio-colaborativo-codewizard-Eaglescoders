import { useRef, useState } from "react";
import CallToActions from "./call-to-actions";
import Card from "./card";
import { useGetComments } from "../../hooks/useGetComments";

export default function Comments() {
  const { data: allComments } = useGetComments();
  const [selectedButton01, setSelectedButton01] = useState(true);
  const [selectedButton02, setSelectedButton02] = useState(false);
  const scroll = useRef();

  const carousel = (e) => {
    const button = e.target.name;

    switch (button) {
      case "button01":
        setSelectedButton02(false);
        setSelectedButton01(true);
        scroll.current.scrollLeft -= scroll.current.offsetWidth;
        break;
      case "button02":
        setSelectedButton01(false);
        setSelectedButton02(true);
        scroll.current.scrollLeft += scroll.current.offsetWidth;
        break;
    }
  };

  return (
    <div className="py-28 gap-16 flex flex-col">
      <>
        <section className="font-mulish mx-auto pb-14 w-small lg:gap-medium lg:w-full">
          <h2 className="font-inconsolata text-mobile-hiper text-center text-purple-1 dark:text-gray-0 mb-8 border-b-2 pb-4 lg:border-0 lg:text-desktop-ultra">
            Comentários e <br className="lg:hidden" />
            Avaliações
          </h2>
          <div className="flex flex-col">
            <div
              className="max-w-extralarger mx-auto lg:overflow-hidden scroll-smooth extraLg:max-w-hiper"
              ref={scroll}
            >
              <div className="flex flex-col items-center gap-8 lg:flex-row lg:pb-16 lg:w-fit">
                {allComments?.map(
                  ({ name, githubuser, avatar, comment }, index) => (
                    <Card
                      key={comment}
                      name={name}
                      githubuser={githubuser}
                      avatar={avatar}
                      comment={comment}
                    />
                  )
                )}
              </div>
            </div>
            <div className="hidden gap-3.5 self-center lg:flex">
              <button
                className={`h-4 w-4 rounded-full cursor-pointer ${
                  selectedButton01 ? "bg-blue-2" : "bg-gray-1"
                }`}
                name="button01"
                onClick={(e) => carousel(e)}
              ></button>
              <button
                className={`h-4 w-4 rounded-full cursor-pointer ${
                  selectedButton02 ? "bg-blue-2" : "bg-gray-1"
                }`}
                name="button02"
                onClick={(e) => carousel(e)}
              ></button>
            </div>
          </div>
        </section>
      </>
      <CallToActions />
    </div>
  );
}
