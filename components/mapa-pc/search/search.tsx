'use client'

import { FormEvent, useState } from "react";

export default function Search({ onSearch }) {
    const [query, setQuery] = useState("");

    const handleSearch = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        onSearch(query);
    };

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        throw new Error("Function not implemented.");
    }

    return (
        <form
        onSubmit={handleSubmit}
        style={{ 
            display: "flex", 
            alignItems: "center", 
            width: "360px",
            background: "#fff",
            borderRadius: "400px",
            border: "1px solid #d1d1d1",
            overflow: "hidden", 
        }}>

        <input type="text" 
        placeholder="Buscar..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
            flex: 1,
            padding: "12px 18px",
            fontSize: "16px",
            border: "none",
            outline: "none",
        }}/>

        <button type="submit"
            style={{
                padding: "12px 20px",
                fontSize: "16px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none", 
                cursor: "pointer",
                fontWeight: "bold",
                height: "100%",
                borderRadius: "0",
            }}>
                Buscar
        </button>

        </form>
    );
}