import DivButton from "@/Components/DivButtom";
import {InputText} from "@/Components/InputText";
import { Bold } from "lucide-react";
import { Button, Form } from "react-bootstrap";


export default function meuPerfil(){

    return(
        <>
        <div>
            <div style={{display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "50px"
            }}>
            <h1>Meu Perfil</h1>
            </div>
            <div style={{display: "flex",
            flexDirection: "row",
            justifyContent: "end",
            marginTop: "50px",
            marginRight: "100px"}}>
            <DivButton text="Editar" ></DivButton>
            </div>
            <div style={{display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    marginTop: "50px"
            }}>
                <div style={{
                backgroundColor: "#D9D9D9",
                borderRadius: "8px",
                width: "300px",
                height: "30px",
                marginBottom: "10px",
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer"}}>
                    <label style={{fontSize: '1.5rem'}}>Nome: </label>
                    <input style={{
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        justifyContent: "end",
                        width: "300px",
                        height: "20px",
                        marginLeft: "5px",
                        fontSize: '1.5rem',
                        paddingLeft: "5px"
                        }} value={"Admin test"} disabled/>
                </div>
                <div style={{
                    backgroundColor: "#D9D9D9",
                    borderRadius: "8px",
                    width: "300px",
                    height: "30px",
                    marginBottom: "10px",
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: "5px",
                    cursor: "pointer"}}>
                        <label style={{fontSize: '1.5rem' }}>Email: </label>
                        <input style={{
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                            justifyContent: "end",
                            width: "300px",
                            height: "20px",
                            marginLeft: "5px",
                            fontSize: '1.5rem',
                            paddingLeft: "5px",
                            }}value={"AdminTest123@email.com"} disabled/>
                </div>
            </div>
            <div style={{display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    marginTop: "50px"
            }}>
                <div style={{
                backgroundColor: "#D9D9D9",
                borderRadius: "8px",
                width: "300px",
                height: "30px",
                marginBottom: "10px",
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer"}}>
                    <label style={{fontSize: '1.5rem' }}>Telefone: </label>
                    <input style={{
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        justifyContent: "end",
                        width: "300px",
                        height: "20px",
                        marginLeft: "5px",
                        fontSize: '1.5rem',
                        paddingLeft: "5px",
                        }} value={"(15) 91234-5678"} disabled/>
                </div>
                <div style={{
                    backgroundColor: "#D9D9D9",
                    borderRadius: "8px",
                    width: "300px",
                    height: "30px",
                    marginBottom: "10px",
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer"}}>
                        <label style={{fontSize: '1.5rem'}}>CPF: </label>
                        <input style={{
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                            justifyContent: "end",
                            width: "300px",
                            height: "20px",
                            marginLeft: "5px",
                            fontSize: '1.5rem',
                            paddingLeft: "5px",
                            }} value={"123.456.789-01"} disabled/>
                </div>
            </div>
            <div style={{display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "50px"}}>
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
                            
                    </div>
                    <div style={{display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        marginTop: "10px"
                        }}>
                        <Button type="submit">Entrar</Button>
                    </div>
                </Form>

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
                            
                    </div>
                    <div style={{display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        marginTop: "10px"
                        }}>
                        <Button type="submit">Enc</Button>
                    </div>
                </Form>
            </div>
        </div>
    </>

    
    );
}