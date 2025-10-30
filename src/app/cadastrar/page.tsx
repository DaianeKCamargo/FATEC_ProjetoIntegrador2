'use client';

import DivButton from "@/Components/DivButtom";
import {InputText} from "@/Components/InputText";
import { Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useFormik } from "formik";
import { cadSchema } from "@/schemas/cadSchema";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IoMdInformationCircleOutline } from "react-icons/io";

export default function Cadastro(){

    //Declaração do roteador
    const router = useRouter();
    //Definição dos valores do formulário
    interface values {
        username?: string;
        cpf: string;
        email: string;
        phone: string;
        password: string;
        confirmPassword: string;
    }
    //Configuração do formik
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
        //Quando o formulário for enviado
        onSubmit: (values) => {
            router.push('/');
        }
    });

    return(
        <>
                    {/* Formulário de Cadastro*/}
                    <section style={{display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyItems: "center",
                        justifyContent: "center",
                        marginBottom: "5rem",
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
                            <Form  onSubmit={handleSubmit} style={{width: "100%", marginTop: "20px",
                                backgroundColor: "#ffffff", 
                                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                                display: "flex",
                                padding: "20px",
                                borderRadius: "8px",
                                flexDirection: "column",
                                }}>
                                {/* Campos do formulário */}
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

                                    
                                    <div>
                                        {/*Escolha entre ponto de coleta, parceiro ou voluntário*/}
                                        <Form.Label style={{fontSize: "2rem"}}>Tipo de Usuário</Form.Label>
                                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                            <Form.Check
                                                type="checkbox"
                                                name="userType"
                                                label="Ponto de Coleta"
                                                style={{ fontSize: "1.5rem" }}
                                            />
                                            <OverlayTrigger
                                                placement="right" // pode ser 'top', 'bottom', 'left', 'right'
                                                overlay={
                                                <Tooltip id="tooltip-info" style={{fontSize: "1rem"}}>
                                                    Ajude tornando-se um ponto de coleta oficial
                                                </Tooltip>
                                                }
                                            >
                                                <span style={{ cursor: "pointer" }}>
                                                    <IoMdInformationCircleOutline size={16} color="#0d6efd" />
                                                </span>
                                            </OverlayTrigger>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                            <Form.Check
                                                type="checkbox" name="userType"
                                                label="Parceiro"
                                                style={{fontSize:"1.5rem"}}/>
                                            <OverlayTrigger
                                                placement="right" // pode ser 'top', 'bottom', 'left', 'right'
                                                overlay={
                                                <Tooltip id="tooltip-info" style={{fontSize: "1rem"}}>
                                                    Engaje sua empresa na sustentabilidade.
                                                </Tooltip>
                                                }
                                            >
                                                <span style={{ cursor: "pointer" }}>
                                                <IoMdInformationCircleOutline size={16} color="#0d6efd" />
                                                </span>
                                            </OverlayTrigger>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                            <Form.Check
                                                type="checkbox"
                                                name="userType"
                                                label="Voluntário "
                                                style={{fontSize:"1.5rem"}} />
                                            <OverlayTrigger
                                                placement="right" // pode ser 'top', 'bottom', 'left', 'right'
                                                overlay={
                                                <Tooltip id="tooltip-info" style={{fontSize: "1rem"}}>
                                                    Ajude o projeto a crescer!
                                                </Tooltip>
                                                }
                                            >
                                                <span style={{ cursor: "pointer" }}>
                                                <IoMdInformationCircleOutline size={16} color="#0d6efd" />
                                                </span>
                                            </OverlayTrigger>
                                        </div>
                                    </div>
                                </div>
                                {/* Botão de envio do formulário */}
                                <div style={{display: "flex", justifyContent: "center",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    marginTop: "20px",
                                    }}>
                                    <Link href="/login" style={{marginBottom: "1rem"}}>Já possui uma conta? Faça login</Link>
                                    <Button type="submit" style={{width: "12rem",
                                        height:"4rem",
                                        fontSize: "2rem"
                                        }}>
                                        Cadastrar</Button>
                                </div>
                            </Form>
                        </div>
                    </section>
        </>
    );
}