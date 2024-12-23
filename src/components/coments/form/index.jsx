import { Toaster } from "react-hot-toast";
import { BsEye } from "react-icons/bs";
import { InputForm } from "./input.jsx";
import { SubmitButtonConfirm } from "./submitbutton.jsx";
import { ResetButton } from "./Resetbutton.jsx";
import { AvatarGithub } from "../../../hooks/avatar.jsx";
import { useHandlerForms } from "../../../hooks/useHandleForm.js";
import { validationComments } from "../../../model/schema/commentsSchema.js";
import { useFormComments } from "../../../hooks/useForm.js";
import { useHandleAvatar } from "../../../utils/handleAvatar.js";
import { useEffect } from "react";

const staticData = {
  name: "Guido van Rossum",
  githubuser: "guidovanrossum",
  function: "Criador do Python",
  coment:
    "Vejo um potencial incrível no 'Frontend Fusion'. A colaboração é a essência do avanço tecnológico, e vocês capturaram isso de forma brilhante. Achei inspirador. Recomendo focar na escalabilidade do projeto para garantir que a estrutura possa crescer sem comprometer a qualidade.",
  img: "./src/assets/guido.png",
};

export const Form = () => {
  const { register, handleSubmit, watch, errors, setValue, reset } =
    useHandlerForms();

  const name = watch("name");
  const email = watch("email");
  const comment = watch("comment");
  const githubuser = watch("githubuser");
  const { comments } = useFormComments();
  const { fetchAvatar, avatarUrl } = useHandleAvatar();

  const onSubmit = (data) => {
    console.log(data);
    comments.mutate(data);
  };

  useEffect(() => {
    if (comments.isSuccess) reset();
    return;
  }, [comments.isSuccess, reset]);

  return (
    <>
      <Toaster
        toastOptions={{
          style: { fontSize: "24px" },
          success: { duration: 4000 },
        }}
      />
      <form
        className="flex justify-center gap-8 my-20"
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset className="flex flex-col w-extraSmall mx-auto gap-3.5 lg:mx-0 lg:w-extraLarger">
          <div className="flex gap-4">
            <InputForm
              isError={errors.name ? true : false}
              inputType="text"
              placeholderContent={!errors.name ? "Nome" : errors.name.message}
              inputValue={name}
              register={register("name")}
            />

            <InputForm
              inputType="text"
              isError={errors.githubuser ? true : false}
              placeholderContent={
                !errors.githubuser ? "Github name" : errors.githubuser.message
              }
              inputValue={githubuser}
              register={register("githubuser", {
                onChange: (e) =>
                  setValue("githubuser", e.target.value.replace(/\s+/g, "")),
                onBlur: (e) => {
                  fetchAvatar(e.target.value);
                },
              })}
            />
          </div>

          <InputForm
            inputType="email"
            isError={errors.email ? true : false}
            placeholderContent={!errors.email ? "Email" : errors.email.message}
            inputValue={email || ""}
            register={register("email")}
          />

          <textarea
            name=""
            id=""
            placeholder="Digite o seu comentário"
            className={`w-full bg-inherit h-mini rounded-lg ${
              errors.comment
                ? "border border-red-600 placeholder:text-red-600 text-red-600"
                : "border border-blue-1 "
            } p-2.5 outline-none text-purple-1 dark:text-white-1 font-inter resize-none lg:h-small lg:px-8 lg:pt-4`}
            value={comment}
            {...register("comment")}
          ></textarea>
          <span>{errors.comment && errors.comment.message}</span>
          <span
            className={`${
              comment && comment?.length > 264 ? "text-red-500" : "text-white-1"
            }`}
          >
            {comment ? comment.length : "0"}/264
          </span>

          <fieldset className="flex gap-4 h-9 font-inter w-52 self-end">
            <SubmitButtonConfirm isLoading={comments.isPending} />
            <ResetButton cleanData={reset} />
          </fieldset>
        </fieldset>

        <section className="hidden lg:flex flex-col w-hiper h-auto bg-purple-3 dark:bg-purple-2 rounded-2xl p-9 gap-4">
          <h2 className="flex w-[100%] justify-between px-2 text-white-2 text-[12px] font-bold">
            {comment && !comment.length > 0 ? (
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
              <AvatarGithub avatarUrl={avatarUrl} />
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
            <SubmitButtonConfirm isLoading={comments.isPending} />
            <ResetButton cleanData={reset} />
          </fieldset>
        </section>
      </form>
    </>
  );
};
