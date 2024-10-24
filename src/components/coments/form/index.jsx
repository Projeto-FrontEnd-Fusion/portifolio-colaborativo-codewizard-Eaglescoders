import toast, { Toaster } from "react-hot-toast";
import { BsEye } from "react-icons/bs";
import { InputForm } from "./input.jsx";
import { SubmitButtonConfirm } from "./submitbutton.jsx";
import { ResetButton } from "./Resetbutton.jsx";
import { AvatarGithub } from "../../../hooks/avatar.jsx";
import { usePostComment } from "../../../hooks/usePostComment.js";
import { useEffect, useState } from "react";
import axios from "axios";

const staticData = {
  name: "Guido van Rossum",
  githubuser: "guidovanrossum",
  function: "Criador do Python",
  coment:
    "Vejo um potencial incrível no 'Frontend Fusion'. A colaboração é a essência do avanço tecnológico, e vocês capturaram isso de forma brilhante. Achei inspirador. Recomendo focar na escalabilidade do projeto para garantir que a estrutura possa crescer sem comprometer a qualidade.",
  img: "./src/assets/guido.png",
};

export const Form = () => {
  const { handleSubmit, register, watch, errors, isLoading, reset, isSuccess } =
    usePostComment();

  const name = watch("name");
  const email = watch("email");
  const comment = watch("comment");
  const githubuser = watch("githubuser");
  const avatar = watch("avatar");
  const [avatarGithub, setavatarGithub] = useState("");

  const handleAvatar = async () => {
    const { data } = await axios.get(
      `https://api.github.com/users/${githubuser}`
    );
    const { avatar_url } = await data;
    setavatarGithub(avatar_url);
  };

  return (
    <>
      <Toaster
        toastOptions={{
          style: { fontSize: "24px" },
          success: { duration: 4000 },
        }}
      />
      <form className="flex justify-center gap-8" onSubmit={handleSubmit}>
        <fieldset className="flex flex-col w-extraSmall mx-auto gap-3.5 lg:mx-0 lg:w-extraLarger">
          <div className="flex gap-4">
            <InputForm
              inputType="text"
              placeholderContent="Digite o seu nome"
              inputValue={name}
              register={register("name")}
            />

            <InputForm
              inputType="text"
              placeholderContent="githubuser"
              inputValue={githubuser}
              register={register("githubuser", {
                onBlur: () => {
                  handleAvatar();
                },
              })}
            />
          </div>

          {errors.name && (
            <span className="text-red-600 px-4 bg-red-300 py-2 font-bold flex-1">
              {errors.name.message}
            </span>
          )}

          <InputForm
            inputType="email"
            placeholderContent="email@exemplo.com"
            inputValue={email || ""}
            register={register("email")}
          />
          {errors.email && (
            <span className="text-red-600 px-4 bg-red-300 py-2 font-bold">
              {errors.email.message}
            </span>
          )}

          <textarea
            name=""
            id=""
            placeholder="Digite o seu comentário"
            className="w-full bg-inherit h-mini rounded-lg border border-blue-1 p-2.5 outline-none text-purple-1 dark:text-white-1 font-inter resize-none lg:h-small lg:px-8 lg:pt-4"
            value={comment}
            {...register("comment")}
            onBlur={() => verifyText(comment)}
          ></textarea>


          {errors.comment && (
            <span className="text-red-600 px-4 bg-red-300 py-2 font-bold">
              {errors.comment.message}
            </span>
          )}

          <fieldset className="flex gap-4 h-9 font-inter w-52 self-end">
            <SubmitButtonConfirm isLoading={isLoading} />
            <ResetButton cleanData={reset} />
          </fieldset>
        </fieldset>

        <section className="hidden lg:flex flex-col w-hiper h-auto bg-purple-3 dark:bg-purple-2 rounded-2xl p-9 gap-4">
          <h2 className="flex w-[100%] justify-between px-2 text-white-2 text-[12px] font-bold">
            {!name ? (
              <span>Todos os Comentários são Publicos</span>
            ) : (
              <h2 className="flex items-center gap-2  bg-green-600 px-2 py-1 rounded-md text-white">
                {" "}
                <BsEye /> pre-visualização{" "}
              </h2>
            )}
          </h2>
          <textarea
            className="text-purple-1 dark:text-gray-2 text-desktop-extraMini font-normal w-full min-h-36  bg-inherit resize-none outline-none p-2.5 overflow-hidden"
            value={comment ? `${comment}` : `"${staticData.coment}"`}
            disabled
          ></textarea>

          <div className="flex items-center gap-2.5">
            <figure className="h-14 w-14 rounded-full bg-black-1 grid place-content-center overflow-hidden">
              <AvatarGithub avatarUrl={avatarGithub} />
            </figure>
            <div className="flex flex-col text-purple-1 dark:text-white-1">
              <h3 className="text-desktop-extraSmall font-bold">
                {name ? name : staticData.name}
              </h3>
              <h4 className="text-desktop-mini">
                {githubuser || name ? githubuser : staticData.name}
              </h4>
            </div>
          </div>

          <fieldset className="flex gap-4 h-9 font-inter w-52 self-end md:hidden">
            <SubmitButtonConfirm isLoading={isLoading} />
            <ResetButton cleanData={reset} />
          </fieldset>
        </section>
      </form>
    </>
  );
};
