"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AuthContextProps {
    isLogged: boolean;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
    isLogged: false,
    login: () => { },
    logout: () => { }
});

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("isLogged");
        if (saved === "true") {
            setIsLogged(true);
        }
    }, []);

    const login = () => {
        setIsLogged(true);
        localStorage.setItem("isLogged", "true");
    };

    const logout = () => {
        setIsLogged(false);
        localStorage.removeItem("isLogged");
    };

    return (
        <AuthContext.Provider value={{ isLogged, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
