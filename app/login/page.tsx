'use client'

import Input from '@/components/form/Input';
import styles from '@/styles/log-block.module.css';
import { Button, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { LogSchema } from "@/schemas/logSchema";
import { useState } from "react";
import { users } from "@/utils/users";
import { useAuth } from "@/context/AuthContext";



export default function Login() {
    // Login
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useAuth();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        const user = users.find(
            (u) => u.email === email && u.password === password
        );

        if (user) {
            login(); // ativa o estado global de usuário logado

            // salva role para você continuar usando no sistema
            localStorage.setItem("role", user.role);

            if (user.role === "admin") {
                router.push("/admin");
            } else {
                router.push("/meu-perfil"); // redireciona para perfil
            }
        };
    }


    //Definição dos valores do formulário
    interface values {
        email: string;
        password: string;
    }

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik<values>({
        initialValues: {
            email: "",
            password: "",
        },

        //Quando o formulário for enviado
        validationSchema: LogSchema,

        onSubmit: (values) => {
            router.push('/meuPerfil');
        },
    });
    return (
        <section className={styles.body}>
            <div className={styles.divprincipal}>
                <h1 className={styles.title}> Login </h1>
                <Form onSubmit={handleLogin} className={styles.formWrapper}>

                    <Input id='logEmail' label='Email' name='logEmail' error={errors.email}
                        placeholder='Insira seu Email' onChange={(e) => {
                            // handleChange(e);
                            setEmail(e.target.value);
                        }} />

                    <Input id='logPassword' label='Senha' type='password' name='logPassword'
                        placeholder='Insira a sua senha' onChange={(e) => {
                            // handleChange(e);
                            setPassword(e.target.value);
                        }} error={errors.password} />


                    <Button variant='primary' type='submit' className={styles.logBtn}>Entrar</Button>
                    {error && <p>{error}</p>}


                    <div className={`${styles.divCenter} ${styles.forceColumn}`}>
                        <div>
                            <a href="/cadastro" className={styles.link}>Não tem uma conta? Clique aqui</a>
                            <a href="/login/alterar-senha" className={styles.link}>Esqueci minha senha</a>
                        </div>
                    </div>
                </Form>
            </div>
        </section>
    );
}