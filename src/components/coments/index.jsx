import { useEffect, useRef, useState } from "react";
import axios from "axios";

import Card from "./card";
import Form from "./form";
import CallToActions from "./call-to-actions";

export default function Comments() {
  const [allComments, setAllComments] = useState([]);
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

  useEffect(() => {
    const getAllComments = async () => {
      const response = await axios.post(import.meta.env.VITE_API_URL_GET);
      const dataResponse = await response.data;
      setAllComments(dataResponse);
    };
    getAllComments();
  }, []);

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
                {allComments.map(
                  ({ name, githubuser, avatar, comment }, index) => (
                    <Card
                      key={index}
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

        <section className="flex flex-col gap-8">
          <h2 className="font-inconsolata dark:text-gray-0 text-purple-1 text-mobile-hiper text-center lg:text-desktop-ultra">
            Deixe o seu <br className="lg:hidden" /> Comentário
          </h2>

          <hr className="hidden lg:block bg-gray-1  w-hiper m-auto h-0.5 mt-miniNegativo mb-6" />

          <Form />
        </section>
      </>

      <CallToActions />
    </div>
  );
}
