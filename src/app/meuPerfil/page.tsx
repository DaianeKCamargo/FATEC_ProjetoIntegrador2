import DivButton from "@/Components/DivButtom";
import InputText from "@/Components/InputText";
import { Bold } from "lucide-react";


export default function meuPerfil(){

    return(
        <>
        <div>
            <h1>Meu Perfil</h1>
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
                    <label style={{}}>Nome: </label>
                    <input style={{
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        justifyContent: "end",
                        width: "300px",
                        height: "20px",
                        marginLeft: "10px",
                        
                        }} disabled/>
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
                        <label style={{}}>Email: </label>
                        <input style={{
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                            justifyContent: "end",
                            width: "300px",
                            height: "20px",
                            marginLeft: "10px",
                            
                            }} disabled/>
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
                    <label style={{ }}>Telefone: </label>
                    <input style={{
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        justifyContent: "end",
                        width: "300px",
                        height: "20px",
                        marginLeft: "10px",
                        
                        }} disabled/>
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
                        <label style={{}}>CPF: </label>
                        <input style={{
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                            justifyContent: "end",
                            width: "300px",
                            height: "20px",
                            marginLeft: "10px",
                            
                            }} disabled/>
                </div>
            </div>
        </div>

    </>

    
    );
}