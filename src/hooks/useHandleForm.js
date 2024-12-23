import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { validationComments } from "../model/schema/commentsSchema";

export const useHandlerForms = () => {
  const { register, handleSubmit, formState: { errors }, reset, watch, setValue, setError } = useForm({
    resolver: yupResolver(validationComments)
  })
  return {
    handleSubmit,
    errors,
    reset,
    watch,
    setValue,
    setError,
    register
  }
}