import { FaSpinner } from "react-icons/fa";
export const SubmitButtonConfirm = ({ isLoading }) => {
  return (
    <>
      <button
        type="submit"
        className="gap-1 rounded-lg w-full h-9 text-purple-1 dark:text-white-1 cursor-pointer bg-green-500 p-2.5 flex items-center justify-center font-inter"
      >
        {isLoading ? (
          <span className="flex items-center gap-1">
            <FaSpinner className="animation animate-spin" /> Enviando...
            </span>
        ) : (
          <span>Enviar</span>
        )}
      </button>
    </>
  );
};
