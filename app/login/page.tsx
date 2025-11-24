'use client'

import Input from '@/components/form/Input';
import styles from '@/styles/log-block.module.css';
import { Button, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { LogSchema } from "@/schemas/logSchema";
import { useState } from "react";
import { users } from "@/utils/users";


export default function Login() {
    // Login
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        const user = users.find(
            (u) => u.email === email && u.password === password
        );

        if (user) {
            // salva role no localStorage para persistir sessão (só teste)
            localStorage.setItem("role", user.role);
            if (user.role === "admin") {
                router.push("/admin");
            } else {
                router.push("/user");
            }
        } else {
            setError("Email ou senha incorretos!");
        }
    };


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
        <section>
            <div className={styles.divprincipal}>
                <h1 className={styles.title}> Login </h1>
                <Form onSubmit={handleLogin}>

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
                        </div>
                        <div>
                            <a href="/login/alterar-senha" className={styles.link}>Esqueci minha senha</a>
                        </div>
                    </div>
                </Form>
            </div>
        </section>
    );
}