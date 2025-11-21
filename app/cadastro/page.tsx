'use client'
import InfoIcon from '@/components/info-icon/InfoIcon';
import Input from '@/components/form/Input';
import CheckDown from '@/components/checkchildren/CheckDown';
import styles from '@/styles/log-block.module.css';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { Button, Form } from 'react-bootstrap';
import { a, div } from 'framer-motion/client';
import InputChild from '@/components/checkchildren/InputChild';

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
        namePC?: string;
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
                            children={
                                <div className={styles.divChildren}>
                                    <InputChild id='inputNamePC' label='Nome do estabelecimento' type='text'
                                        error={values.namePC} name='namePC'/>
                                    <InputChild id='inputEndPC' label='Endereço' type='text'
                                        error={values.namePC} name='endePC'/>
                                </div>
                            }
                        />
                    </div>
                    <div>
                        <CheckDown
                            label="Parceiro"
                            name="group1"
                            id='check2'
                            info='Torne-se Parceiro Tampets e nós ajude a divulgar o projeto.'
                            children={
                                <div className={styles.divChildren}>
                                    <InputChild id='inputNameP' label='Nome do Parceiro/Perfil' type='text'
                                        error={values.namePC} name='nameP'/>
                                    <InputChild id='inputLinkP' label='Link para o perfil' type='text'
                                        error={values.namePC} name='linkP'/>
                                </div>
                            }
                        />
                    </div>
                    <Button variant='primary' className={styles.logBtn}>Cadastrar</Button>
                    <div className={styles.divCenter}><a href="/login">Ja tem uma conta? Clique aqui</a></div>    
                </Form>
            </div>
        </section>
    );
}