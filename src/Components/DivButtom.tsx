
import React from 'react';
export interface DivButtonProps {
    text: string;
    onSubmit?: () => String | void;
    onClick?: () => void;
    className?: string;
}

export default function DivButton({ text, onSubmit, onClick, className }: DivButtonProps) {
    return (
        <div
            onSubmit={onSubmit}
            onClick={onClick}
            className={className}
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
                cursor: "pointer",
                
            }}
        >
            <h2 style={{ color: "black" }}>{text}</h2>
        </div>
    );
}
