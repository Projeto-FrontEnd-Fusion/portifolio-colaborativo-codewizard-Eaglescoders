export const InputForm = ({
  inputType,
  placeholderContent,
  value,
  register,
  isError,
}) => {
  return (
    <>
      <input
        type={inputType}
        placeholder={placeholderContent}
        value={value}
        max={35}
        maxLength={32}
        className={`focus:outline-none w-full bg-inherit h-9 rounded-lg border border-blue-1 
              p-2.5 outline-none text-purple-1 dark:text-white-1 font-inter 
              lg:h-14 lg:px-8 lg:max-w-min ${
                isError === true
                  ? "focus:outline-none focus:ring-1 ring-red-500 border-red-600 text-red-500 placeholder:text-red-600"
                  : ""
              }`}
        {...register}
      />
    </>
  );
};
