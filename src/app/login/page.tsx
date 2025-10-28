'use client';
import DivButton from "@/Components/DivButtom";
import {InputText} from "@/Components/InputText";
import { Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import { LogSchema } from "@/schemas/LogSchema";

export default function Login(){
    interface values {
        email: string;
        password: string;
    }
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik<values>({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: LogSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return(
    <>
        <div style={{display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: "50px"
        }}>
            <DivButton text="Cadastrar" onClick={() => {
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

                <h1>Login</h1>
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
                        <InputText label="Email" id="inputEmail" type="email" name="email" error={errors.email}
                        placeholder="Digite seu email" value={values.email} onChange={handleChange}/>
                        <InputText label="Senha" id="inputPassword" type="password" name="password" error={errors.password}
                        placeholder="Digite sua senha" value={values.password} onChange={handleChange}/>
                    </div>
                    <div style={{display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    marginTop: "10px"
                    }}>
                    <Button type="submit">Entrar</Button>
                    </div>
                </Form>
            </div>
        </section>    
        </>
    );
}