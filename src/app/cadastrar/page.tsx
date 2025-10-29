'use client';

import DivButton from "@/Components/DivButtom";
import {InputText} from "@/Components/InputText";
import { Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import { cadSchema } from "@/schemas/cadSchema";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Cadastro(){

    interface values {
        username?: string;
        cpf: string;
        email: string;
        phone: string;
        password: string;
        confirmPassword: string;
    }
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik<values>({
        initialValues: {
            username: "",
            cpf: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: cadSchema,
        onSubmit: (values) => {
            console.log(values);
            
        }
    });

    return(
        <>
        
        <div style={{display: "flex",
            flexDirection: "row", marginTop: "50px",
            justifyContent: "space-evenly",
        }}>
            <DivButton text="Cadastro" />
            <Link href="/login" className="nav-link"><DivButton text="Login" /></Link>
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
                    <Form  onSubmit={handleSubmit} style={{width: "400px", marginTop: "20px",
                        backgroundColor: "#ffffff", 
                        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                        display: "flex",
                        padding: "20px",
                        borderRadius: "8px",
                        flexDirection: "column",
                    }}>

                        <div style={{display: "flex", 
                            flexDirection: "column", gap: "15px"
                            }}>
                            <InputText label="Nome Completo" id="inputName" name="username" error={errors.username}
                                placeholder="Digite seu nome completo" value={values.username} onChange={handleChange}/>
                            <InputText label="CPF" id="inputCPF" name="cpf" error={errors.cpf}
                                placeholder="Digite seu CPF" value={values.cpf} onChange={handleChange}/>
                            <InputText label="Email" id="inputEmail" type="email" name="email" error={errors.email}
                                placeholder="Digite seu email" value={values.email} onChange={handleChange}/>
                            <InputText label="Telefone" id="inputPhone" type="tel" name="phone" error={errors.phone}
                                placeholder="Digite seu telefone" value={values.phone} onChange={handleChange}/>
                            <InputText label="Senha" id="inputPassword" type="password" 
                                name="password" error={errors.password}
                                placeholder="Digite sua senha" value={values.password} onChange={handleChange}/>
                            <InputText label="Confirme a Senha" id="inputConfirmPassword" type="password" 
                                name="confirmPassword" error={errors.confirmPassword}
                                placeholder="Confirme sua senha" value={values.confirmPassword} onChange={handleChange}/>
                        </div>
                        <div style={{display: "flex",
                            flexDirection: "row", marginTop: "10px",
                            justifyContent: "space-evenly",
                        }}>
                            <Button type="submit">Cadastrar</Button>
                        </div>
                    </Form>
                </div>
            </section>
        </>
    );
}