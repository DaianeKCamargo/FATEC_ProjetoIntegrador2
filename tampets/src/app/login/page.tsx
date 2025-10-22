'use client';
import DivButton from "@/Components/DivButtom";

export default function Login(){
    

    return(
        <>
        <div style={{display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "50px"
        }}>
            <DivButton text="Cadastrar" onClick={() => {
                window.location.href = "/cadastrar";
            }} />
            <DivButton text="Login" onClick={() => {
                window.location.href = "/login";
            }} />
        </div>
        </>
    );
}