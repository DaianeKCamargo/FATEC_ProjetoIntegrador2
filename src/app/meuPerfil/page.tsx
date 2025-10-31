import DivButton from "@/components/DivButtom";
import { InputText } from "@/components/InputText";
import { Bold } from "lucide-react";
import { Form, Button, FormGroup } from "react-bootstrap";
import { useFormik } from "formik";



export default function meuPerfil() {
    return (
        <>
            <div style={{ marginBottom: "2rem" }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "50px"
                }}>
                    <h1>Meu Perfil</h1>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "end",
                    marginTop: "50px",
                    marginRight: "100px"
                }}>
                    <DivButton text="Editar" ></DivButton>
                </div>
                <div style={{
                    display: "flex",
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
                        cursor: "pointer"
                    }}>
                        <label style={{ fontSize: '1.5rem' }}>Nome: </label>
                        <input style={{
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                            justifyContent: "end",
                            width: "300px",
                            height: "20px",
                            marginLeft: "5px",
                            fontSize: '1.5rem',
                            paddingLeft: "5px"
                        }} value={"Admin test"} disabled />
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
                        cursor: "pointer"
                    }}>
                        <label style={{ fontSize: '1.5rem' }}>Email: </label>
                        <input style={{
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                            justifyContent: "end",
                            width: "300px",
                            height: "20px",
                            marginLeft: "5px",
                            fontSize: '1.5rem',
                            paddingLeft: "5px",
                        }} value={"AdminTest123@email.com"} disabled />
                    </div>
                </div>
                <div style={{
                    display: "flex",
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
                        cursor: "pointer"
                    }}>
                        <label style={{ fontSize: '1.5rem' }}>Telefone: </label>
                        <input style={{
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                            justifyContent: "end",
                            width: "300px",
                            height: "20px",
                            marginLeft: "5px",
                            fontSize: '1.5rem',
                            paddingLeft: "5px",
                        }} value={"(15) 91234-5678"} disabled />
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
                        cursor: "pointer"
                    }}>
                        <label style={{ fontSize: '1.5rem' }}>CPF: </label>
                        <input style={{
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                            justifyContent: "end",
                            width: "300px",
                            height: "20px",
                            marginLeft: "5px",
                            fontSize: '1.5rem',
                            paddingLeft: "5px",
                        }} value={"123.456.789-01"} disabled />
                    </div>
                </div>

                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "50px"
                }}>
                    <Form style={{
                        width: "400px", marginTop: "20px",
                        backgroundColor: "#ffffff",
                        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                        display: "flex",
                        padding: "20px",
                        borderRadius: "8px",
                        flexDirection: "column",
                        minWidth: "60rem"
                    }}>
                        <div style={{
                            display: "flex", flexDirection: "row",
                            marginTop: "20px",
                            alignItems: "center",
                        }}>
                            <div style={{ maxWidth: "30%" }}><img src="/logofatec.png" alt="" style={{}} /></div>
                            <div style={{
                                display: "flex",
                                flexDirection: "column", gap: "15px",
                                marginBottom: "20px"
                            }}>

                                <Form.Label style={{ fontSize: '1.5rem' }}>Link da Rede Social: </Form.Label>
                                <Form.Control type="text"
                                    name="link"
                                    placeholder="Insira o link"></Form.Control>
                                <Form.Label htmlFor="" style={{ fontSize: '1.5rem' }}>Insira a imagem</Form.Label>
                                <Form.Control type="file" name="imageUpload" />
                            </div>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            marginTop: "10px"
                        }}>
                            <Button type="submit">Enviar</Button>
                        </div>
                    </Form>

                    <Form style={{
                        width: "400px", marginTop: "20px",
                        backgroundColor: "#ffffff",
                        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                        display: "flex",
                        padding: "20px",
                        borderRadius: "8px",
                        flexDirection: "column",
                        minWidth: "60rem",
                    }}>

                        <div style={{
                            display: "flex", flexDirection: "row",
                            marginTop: "20px",
                            alignItems: "center",
                        }}>
                            <div style={{ maxWidth: "30%" }}><img src="/logofatec.png" alt="" style={{}} /></div>
                            <div style={{
                                display: "flex",
                                flexDirection: "column", gap: "15px",
                                marginBottom: "20px"
                            }}>
                                <h1>Torne-se Ponto de coleta</h1>
                                <Form.Label style={{ fontSize: '1.5rem' }}>Nome do Local: </Form.Label>
                                <Form.Control type="text"
                                    name="nomeLocal"
                                    placeholder="Insira o nome do local"></Form.Control>
                                <Form.Label style={{ fontSize: '1.5rem' }}>Horário: </Form.Label>
                                <Form.Control type="text"
                                    name="nomeLocal"
                                    placeholder="Insira o horario de funcionamento"></Form.Control>
                                <Form.Label style={{ fontSize: '1.5rem' }}>CNPJ: </Form.Label>
                                <Form.Control type="text"
                                    name="CNPJ"
                                    placeholder="Insira o nome do local"></Form.Control>
                                <div style={{
                                    display: "flex", flexDirection: "row",
                                    alignItems: "center",
                                }}>
                                    <div>
                                        <Form.Label htmlFor="" style={{ fontSize: '1.5rem' }}>Insira uma foto do local</Form.Label>
                                        <Form.Control type="file" name="imageUpload" />
                                    </div>
                                    <div style={{ marginLeft: "20px" }}>
                                        <Form.Label htmlFor="" style={{ fontSize: '1.5rem' }}>Insira o endereço</Form.Label>
                                        <Form.Control type="text" name="endereço" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            marginTop: "10px"
                        }}>
                            <Button type="submit">Enviar</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
}