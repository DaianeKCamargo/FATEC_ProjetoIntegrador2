'use client'
import InfoIcon from '@/components/info-icon/InfoIcon';
import Input from '@/components/form/Input';
import CheckDown from '@/components/form/CheckDown';
import styles from '@/styles/log-block.module.css';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { Button, Form } from 'react-bootstrap';

export default function Cadastrar() {

    const router = useRouter();
    //Definição dos valores do formulário
    interface values {
        username?: string;
        cpf: string;
        email: string;
        phone: string;
        password: string;
        confirmPassword: string;
    }
    //Configuração do formik
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik<values>({
        initialValues: {
            username: "",
            cpf: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
        },
        //Quando o formulário for enviado
        onSubmit: (values) => {
            router.push('/meuPerfil');
        }
    });
    return (
        <section>
            <div className={styles.divprincipal}>
                <h1 className={styles.title}> Cadastrar </h1>
                <Form>
                    <Input id="inputName" label="Nome Completo" type="text" name="username"
                        error={values.username}></Input>
                    <Input id="inputCPF" label='CPF' type='number' name='cpf'
                        error={values.cpf}></Input>
                    <Input id="inputEmail" label="Email" type='email' name='email'
                        error={values.email}></Input>
                    <Input id="inputTelefone" label='Telefone' type='tel' name='phone'
                        error={values.phone}></Input>
                    <Input id="inputPassword" label='Senha' type='password' name="password"
                        error={values.password}></Input>
                    <Input id="inputConfirmPassword" label='Confirme a Senha' type='password' 
                        name='confirmPassword' error={values.confirmPassword}></Input>
                    <div>
                    <CheckDown
                        label="Ponto de coleta"
                        name="group1"
                        id='check1'
                        info='Tornar-se um ponto de coleta ajuda a ampliar nossa rede de coleta.'
                        children=""/>
                    </div>
                    <div>
                    <CheckDown
                        label="Parceiro"
                        name="group1"
                        id='check2'
                        info=''
                        children=""/>
                    </div>
                    <div>
                    <CheckDown
                        label="Voluntário"
                        name="group1"
                        id='check3'
                        info=''
                        children=""/>
                    </div>
                    <Button variant='primary' className={styles.logBtn}>Cadastrar</Button>
                    
                </Form>

            </div>

        </section>
    );
}