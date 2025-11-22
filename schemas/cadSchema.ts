import * as yup from "yup";

function validarCPF(cpf : string): boolean {
  cpf = cpf.replace(/[^\d]+/g, ""); // Remove tudo que não for número
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false; // Verifica repetidos tipo 11111111111

  let soma = 0;
  let resto;

  // Primeiro dígito verificador
  for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(9, 10))) return false;

  // Segundo dígito verificador
  soma = 0;
  for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;

  return resto === parseInt(cpf.substring(10, 11));
}
function validarTelefone(valor : string): boolean {
  if (!valor) return false;

  // Remove tudo que não for número
  const digitos = valor.replace(/\D/g, "");

  // Remove o código do país, se houver
  const semPais = digitos.startsWith("55") ? digitos.slice(2) : digitos;

  // Telefone fixo (10 dígitos)
  if (semPais.length === 10) {
    const primeiroDigito = semPais[2]; // índice 2 = primeiro dígito do número após DDD
    return ["2","3","4","5","6","7","8"].includes(primeiroDigito);
  }

  // Telefone móvel (11 dígitos)
  if (semPais.length === 11) {
    const primeiroDigito = semPais[2];
    return primeiroDigito === "9";
  }

  return false; // qualquer outro caso é inválido
}

export const cadSchema = yup.object().shape({
  username: yup.string().required("Nome é obrigatório"),

  password: yup.string().min(8, "Senha deve ter pelo menos 8 caracteres").required("Senha é obrigatória")
    .matches(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
    .matches(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
    .matches(/\d/, "A senha deve conter pelo menos um número")
    .matches(/[@$!%*?&^#()_\-+=]/, "A senha deve conter pelo menos um caractere especial"),
  
  cpf: yup.string().required("CPF é obrigatório").test("valid-cpf", "CPF inválido", (value) => {
    return validarCPF(value || "");
  }),

  phone: yup.string().required("Telefone é obrigatório").test("valid-phone", "Telefone inválido", (value) => {
    return validarTelefone(value || "");
  }),

  email: yup.string().email("Email inválido").required("Email é obrigatório"),
   
  confirmPassword: yup.string().nullable().oneOf([yup.ref("password")], "As senhas devem ser iguais")
   .required("Confirmação de senha é obrigatória"),

   options: yup.array()
    .min(1, "Escolha pelo menos uma opção!")
    .required(),


    // Validações condicionais para Ponto de Coleta
  namePC: yup.string().when('options', {
    is: (opts: string[]) => opts.includes('A'),
    then: (schema) => schema.required("Nome do estabelecimento é obrigatório"),
    otherwise: (schema) => schema.notRequired(),
  }),
  endePC: yup.string().when('options', {
    is: (opts: string[]) => opts.includes('A'),
    then: (schema) => schema.required("Endereço é obrigatório"),
    otherwise: (schema) => schema.notRequired(),
  }),
  horaFuncPC: yup.string().when('options', {
    is: (opts: string[]) => opts.includes('A'),
    then: (schema) => schema.required("Horário de funcionamento é obrigatório"),
    otherwise: (schema) => schema.notRequired(),
  }),
  cnpj: yup.string().when('options', {
    is: (opts: string[]) => opts.includes('A'),
    then: (schema) => schema.required("CNPJ é obrigatório"),
    otherwise: (schema) => schema.notRequired(),
  }),
  photoPC: yup.mixed().when('options', {
    is: (opts: string[]) => opts.includes('A'),
    then: (schema) => schema.required("Foto do estabelecimento é obrigatória"),
    otherwise: (schema) => schema.notRequired(),
  }),

  // Validações condicionais para Parceiro
   nameP: yup.string().when('options', {
    is: (opts: string[]) => opts.includes('B'),
    then: (schema) => schema.required("Nome do perfil é obrigatório"),
    otherwise: (schema) => schema.notRequired(),
  }),
  linkP: yup.string().when('options', {
    is: (opts: string[]) => opts.includes('B'),
    then: (schema) => schema.required("Link do perfil é obrigatório"),
    otherwise: (schema) => schema.notRequired(),
  }),
  photoP: yup.mixed().when('options', {
    is: (opts: string[]) => opts.includes('B'),
    then: (schema) => schema.required("Foto do perfil é obrigatória"),
    otherwise: (schema) => schema.notRequired(),
  }),
 });