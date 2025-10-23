'use client';

import DivButton from "@/Components/DivButtom";
import InputText from "@/Components/InputText";
import { Form } from "react-bootstrap";
import { useFormik } from "formik";

export default function Cadastro(){

     interface FormValues{
  username?: string;
  password?: string;
 }
 const formik = useFormik<FormValues>({
 
  initialValues: {
    username:"",
    password:"",
  },
  //validationSchema: cadSchema, // tem que criar o esquema de validação
  //função que será executada quando o formulário for enviado
  onSubmit: (values) => {
    console.log(values);
    if(values.username === "admin" &&  values.password === "admin123") {
    
    }
  }
 });

 const { handleSubmit,
          values,
          handleChange,
          errors } = formik; // == formik.handleSubmit


    errors.password
    errors.username

    return(
        <>
        
        <div style={{display: "flex",
            flexDirection: "row", marginTop: "50px",
            justifyContent: "space-evenly",
        }}>
            <DivButton text="Cadastro" onClick={() => {
                window.location.href = "/cadastrar";
            }} />
            <DivButton text="Login" onClick={() => {
                window.location.href = "/login";
            }} />
        </div>
            <section style={{display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",
                justifyContent: "center",
            }}>
                <div className="" style={{
                    display: "flex", flexDirection: "column",
                    marginTop: "20px",
                    alignItems: "center",
                    alignContent: "center",
                    backgroundColor: "#f5f5f5",
                    width: "40%",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    
                }}>
                    <h1>Cadastre-se</h1>
                    <Form style={{width: "400px", marginTop: "20px",
                        backgroundColor: "#ffffff", 
                        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                        display: "flex",
                        padding: "20px",
                        borderRadius: "8px",
                        flexDirection: "column",
                    }}>
                        <div style={{display: "flex", 
                            flexDirection: "column", gap: "15px",
                            marginBottom: "20px"
                            }}>
                            <InputText label="Nome Completo" id="inputName"
                            placeholder="Digite seu nome completo" />
                            <InputText label="Email" id="inputEmail" type="email"
                            placeholder="Digite seu email" />
                            <InputText label="Senha" id="inputPassword" type="password"
                            placeholder="Digite sua senha" />
                            <InputText label="Confirme a Senha" id="inputConfirmPassword" type="password"
                            placeholder="Confirme sua senha" />
                        </div>
                        <DivButton text="Cadastrar" onClick={() => {
                            alert("Cadastro realizado com sucesso!");
                        }} />
                    </Form>
                </div>
            </section>
        </>
    );
}