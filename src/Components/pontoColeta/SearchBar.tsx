"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import styles from "../PontoColeta/SearchBar.module.css"; // 👈 Caminho ajustado

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export default function SearchBar({
  placeholder = "Buscar...",
  
  onSearch,
}: SearchBarProps) {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className={styles.input}
      />
      <button type="submit" className={styles.button} aria-label="Buscar">
        🔍
      </button>
    </form>
  );
}
