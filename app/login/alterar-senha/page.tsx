'use client'
import Input from '@/components/form/Input';
import styles from '@/styles/log-block.module.css';
import { Button, Form } from 'react-bootstrap';

export default function AlterarSenha() {

    return (
        <section>
            <div className={styles.divprincipal}>
                <h1 className={styles.title}> Alterar senha </h1>
                <Form className={styles.formWrapper}>
                    <Input id='redPassword' name='redPassword' type='email' placeholder='Insira seu email'
                    label='Email'/>
                    <Button className={styles.logBtn}>Enviar codigo no Email</Button>
                </Form>
            </div>
        </section>
    );
}