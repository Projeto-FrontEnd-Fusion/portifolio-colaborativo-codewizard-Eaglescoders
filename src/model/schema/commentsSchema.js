import * as Yup from "yup"
export const validationComments = Yup.object().shape({
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
