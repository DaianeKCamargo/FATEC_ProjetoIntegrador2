
import React from 'react';
export interface DivButtonProps {
    text: string;
    onClick: () => String | void;
}

export default function DivButton({ text, onClick }: DivButtonProps) {
    return (
        <div
            onClick={onClick}
            style={{
                backgroundColor: "#D9D9D9",
                borderRadius: "8px",
                width: "200px",
                height: "40px",
                marginBottom: "10px",
                marginRight: "30px",
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
