'use client'
import Input from '@/components/form/Input';
import styles from '@/styles/log-block.module.css';
import { Button, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { LogSchema } from "@/schemas/logSchema";

export default function Login() {
    const router = useRouter();
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
    validationSchema: LogSchema,
        //Quando o formulário for enviado
    onSubmit: (values) => {
        router.push('/meuPerfil');
    },
});
    return (
        <section>
                <div className={styles.divprincipal}>
                    <h1 className={styles.title}> Login </h1>
                    <Form onSubmit={handleSubmit}>
                        <Input id='logEmail' label='Email' name='logEmail' error={errors.email}
                        placeholder='Insira seu Email' onChange={handleChange}/>
                        <Input id='logPassword' label='Senha' type='password' name='logPassword' 
                        placeholder='Insira a sua senha' onChange={handleChange} error={errors.password}/>
                        <Button variant='primary' type='submit' className={styles.logBtn}>Entrar</Button>
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