import * as yup from "yup";

 export const cadSchema = yup.object().shape({
   username: yup.string().required("Nome é obrigatório"),
   password: yup.string().min(6, "Senha deve ter pelo menos 6 caracteres").required("Senha é obrigatória"),
   cpf: yup.string().required("CPF é obrigatório"),
   phone: yup.string().required("Telefone é obrigatório"),
   email: yup.string().email("Email inválido").required("Email é obrigatório"),
   confirmPassword: yup.string().nullable().oneOf([yup.ref("password")], "As senhas devem ser iguais")
   .required("Confirmação de senha é obrigatória"),
 });