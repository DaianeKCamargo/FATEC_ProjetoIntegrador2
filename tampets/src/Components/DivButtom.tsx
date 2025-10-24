
import React from 'react';
export interface DivButtonProps {
    text: string;
    onSubmit?: () => String | void;
    onClick?: () => void;
}

export default function DivButton({ text, onSubmit, onClick }: DivButtonProps) {
    return (
        <div
            onSubmit={onSubmit}
            onClick={onClick}
            className='centerdiv'
            style={{
                
                backgroundColor: "#D9D9D9",
                borderRadius: "8px",
                width: "200px",
                height: "40px",
                marginBottom: "10px",
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer"
            }}
        >
            <h2 style={{ color: "black" }}>{text}</h2>
        </div>
    );
}
