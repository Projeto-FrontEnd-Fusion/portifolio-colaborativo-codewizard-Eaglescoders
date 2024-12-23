import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import clsx from "clsx";


import { BsEye } from "react-icons/bs";
import { InputForm } from "./input.jsx";
import { SubmitButtonConfirm } from "./submitbutton.jsx";
import { ResetButton } from "./Resetbutton.jsx";
import { getGithubUserDetails } from "../../../controller/getgithubusers.js";
import { textFormater } from "../../../utils/textformatter.js";
import { verifyOfensiveWords } from "../../../utils/verifybadwords.js";
import { AvatarGithub } from "../../../hooks/avatar.jsx";

export default function Form() {
  const [formValues, setformValues] = useState({
    avatar: "",
    isOfensive: false,
    comment: "",
  });

  const validationComments = Yup.object().shape({
    name: Yup.string()
      .required("Digite o nome")
      .max(25, "O nome deve ter no máximo 25 caracteres"),
    email: Yup.string()
      .required("Digite o email")
      .email("Digite um email válido"),
    comment: Yup.string()
      .required("Digite o comentário")
      .min(100, "O comentário deve ter no mínimo 100 caracteres")
      .max(264, "O comentário deve ter no máximo 264 caracteres"),
    githubuser: Yup.string().max(
      25,
      "O usuário do GitHub deve ter no máximo 25 caracteres"
    ),
    avatar: Yup.string(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationComments),
  });

  const staticData = {
    name: "Guido van Rossum",
    githubuser: "guidovanrossum",
    function: "Criador do Python",
    coment:
      "Vejo um potencial incrível no 'Frontend Fusion'. A colaboração é a essência do avanço tecnológico, e vocês capturaram isso de forma brilhante. Achei inspirador. Recomendo focar na escalabilidade do projeto para garantir que a estrutura possa crescer sem comprometer a qualidade.",
    img: "./src/assets/guido.png",
  };

  const [isLoading, setisLoading] = useState(null);

  const onSubmit = async (data) => {
    setisLoading(true);
    // console.log(data)

    try {
      const { name, email, comment, githubuser } = data;

      const response = await axios.post(import.meta.env.VITE_API_URL, {
        name,
        email,
        comment,
        avatar: formValues.avatar,
        githubuser,
        isOfensive: formValues.isOfensive,
      });
      if (response.status === 201) {
        setTimeout(() => {
          setisLoading(false);
          clearAllFiels();
          toast("✅ Obrigado Pelo Feedback!");
        }, 3000);
      } else {
        toast("❌ Algo deu Errado , Por favor Tente novamente");
        setisLoading(false);
      }
    } catch (error) {
      toast("❌ Algo deu Errado , Por favor Tente novamente");
    }
  };

  const handleInputsChanges = (e) => {
    const { name, value } = e.target;
    setformValues((prevState) => ({
      ...prevState,
      [name]: name === "githubuser" ? textFormater(value) : value,
    }));
  };

  const githubavatar = async () => {
    setformValues((prevState) => ({
      ...prevState,
      avatar: "loading",
    }));

    setTimeout(() => {
      getGithubUserDetails(formValues.githubuser)
        .then((avatarRes) =>
          setformValues((prevState) => ({
            ...prevState,
            avatar: avatarRes,
          }))
        )
        .catch(
          setformValues((prevState) => ({
            ...prevState,
            avatar: "notfound",
          }))
        );
    }, 2000);
  };

  const verifyText = (value) => {
    setformValues((prevState) => ({
      ...prevState,
      isOfensive: verifyOfensiveWords(value),
    }));
  };

  const clearAllFiels = () => {
    setformValues({
      avatar: "",
      name: "",
      email: "",
      comment: "",
      rate: "",
      githubuser: "",
    });
  };

  return (
    <>
      <Toaster
        toastOptions={{
          style: { fontSize: "24px" },
          success: { duration: 4000 },
        }}
      />
      <form
        className="flex justify-center gap-8"
        onSubmit={handleSubmit(onSubmit)}
        onChange={handleInputsChanges}
      >
        <fieldset className="flex flex-col w-extraSmall mx-auto gap-3.5 lg:mx-0 lg:w-extraLarger">
          <div className="flex gap-4">
            <InputForm
              inputType="text"
              placeholderContent="Digite o seu nome"
              inputValue={formValues.name}
              register={register("name")}
            />

            <InputForm
              inputType="text"
              placeholderContent="githubuser"
              inputValue={formValues.githubuser}
              register={register("githubuser")}
              onBlurFunction={githubavatar}
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
            inputValue={formValues.email}
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
            value={formValues.comment || ""}
            {...register("comment")}
            onBlur={() => verifyText(formValues.comment)}
          ></textarea>

          <span
            className={clsx(
              formValues.comment.length >= 230
                ? "text-red-400"
                : "text-white-1",
              "font-thin"
            )}
          >
            {formValues.comment.length}/264
          </span>

          {errors.comment && (
            <span className="text-red-600 px-4 bg-red-300 py-2 font-bold">
              {errors.comment.message}
            </span>
          )}

          <fieldset className="flex gap-4 h-9 font-inter w-52 self-end">
            <SubmitButtonConfirm isLoading={isLoading} />
            <ResetButton cleanData={clearAllFiels} />
          </fieldset>
        </fieldset>

        <section className="hidden lg:flex flex-col w-hiper h-auto bg-purple-3 dark:bg-purple-2 rounded-2xl p-9 gap-4">
          <h2 className="flex w-[100%] justify-between px-2 text-white-2 text-[12px] font-bold">
            {!formValues.name ? (
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
            value={
              formValues.comment
                ? `${formValues.comment}`
                : `"${staticData.coment}"`
            }
            disabled
          ></textarea>

          <div className="flex items-center gap-2.5">
            <figure className="h-14 w-14 rounded-full bg-black-1 grid place-content-center overflow-hidden">
              <AvatarGithub avatarUrl={formValues.avatar} />
            </figure>
            <div className="flex flex-col text-purple-1 dark:text-white-1">
              <h3 className="text-desktop-extraSmall font-bold">
                {formValues.name ? formValues.name : staticData.name}
              </h3>
              <h4 className="text-desktop-mini">
                {formValues.githubuser || formValues.name
                  ? formValues.githubuser
                  : staticData.name}
              </h4>
            </div>
          </div>

          <fieldset className="flex gap-4 h-9 font-inter w-52 self-end md:hidden">
            <SubmitButtonConfirm isLoading={isLoading} />
            <ResetButton cleanData={clearAllFiels} />
          </fieldset>
        </section>
      </form>
    </>
  );
}
