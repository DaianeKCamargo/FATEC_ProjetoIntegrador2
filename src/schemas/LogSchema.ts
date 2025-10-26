import * as yup from "yup";

export const LogSchema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Insira um email válido"),
    password: yup.string().min(6, "Senha incorreta").required("Insira uma senha válida"),
});