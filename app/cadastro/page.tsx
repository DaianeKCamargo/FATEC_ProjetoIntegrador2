'use client'
import Input from '@/components/form/Input';
import CheckDown from '@/components/checkchildren/CheckDown';
import styles from '@/styles/log-block.module.css';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { Button, Form } from 'react-bootstrap';
import InputChild from '@/components/checkchildren/InputChild';
import { cadSchema } from "@/schemas/cadSchema";

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
        endePC?: string;
        horaFuncPC?: string;
        cnpj?: string;
        photoPC?: string;
        nameP?: string;
        linkP?: string;
        photoP?: string;
        options?: string[];
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
            options: [],
        },
        validationSchema: cadSchema,
        //Quando o formulário for enviado
        onSubmit: (values) => {
            router.push('/meuPerfil');
        }
    });
    return (
        <section>
            <div className={styles.divprincipal}>
                <h1 className={styles.title}> Cadastrar </h1>
                <Form onSubmit={handleSubmit}>
                    <Input id="inputName" label="Nome Completo" type="text" name="username"
                        error={errors.username} onChange={handleChange}/>
                    <Input id="inputCPF" label='CPF' type='number' name='cpf'
                        error={errors.cpf} onChange={handleChange}/>
                    <Input id="inputEmail" label="Email" type='email' name='email'
                        error={errors.email} onChange={handleChange}/>
                    <Input id="inputTelefone" label='Telefone' type='tel' name='phone'
                        error={errors.phone} onChange={handleChange}/>
                    <Input id="inputPassword" label='Senha' type='password' name="password"
                        error={errors.password} onChange={handleChange}/>
                    <Input id="inputConfirmPassword" label='Confirme a Senha' type='password' 
                        name='confirmPassword' error={errors.confirmPassword} onChange={handleChange}/>
                    <div>
                        <CheckDown
                            label="Ponto de coleta"
                            name="options" value='A'
                            id='check1' error={errors.options} onChange={handleChange}
                            info='Tornar-se um ponto de coleta ajuda a ampliar nossa rede de coleta.'
                            children={
                                <>
                                    <div className={styles.divChildren}>
                                        <InputChild id='inputNamePC' label='Nome do estabelecimento' type='text'
                                            error={errors.namePC} onChange={handleChange} name='namePC'/>
                                        <InputChild id='inputEndPC' label='Endereço' type='text'
                                            error={errors.endePC} onChange={handleChange} name='endePC'/>
                                    </div>
                                     <div className={styles.divChildren}>
                                        <InputChild id='inputEndPC' label='Horario de Funcionamento' type='text'
                                            error={errors.horaFuncPC} onChange={handleChange} name='horaFuncPC'/>
                                        <InputChild id='inputEndPC' label='Horario de Funcionamento' type='text'
                                            error={errors.cnpj} onChange={handleChange} name='cnpj'/>
                                    </div>
                                    <div className={styles.divChildren}>
                                        <InputChild id='photoP' name='photoPC' type='file' label='Foto'
                                            error={errors.photoPC} onChange={handleChange}/>
                                    </div>
                                </>
                            }
                        />
                    </div>
                    <div>
                        <CheckDown
                            label="Parceiro"
                            name="options" value="B" onChange={handleChange}
                            id='check2' error={errors.options}
                            info='Torne-se Parceiro Tampets e nós ajude a divulgar o projeto.'
                            children={
                                <>
                                    <div className={styles.divChildren}>
                                        <InputChild id='inputNameP' label='Nome do Perfil' type='text'
                                            error={errors.nameP} onChange={handleChange} name='nameP' placeholder='Insira o nome do seu Perfil da sua rede social.'/>
                                        <InputChild id='inputLinkP' label='Link' type='text'
                                            error={errors.linkP} onChange={handleChange} name='linkP' placeholder='Insira o link para uma de suas redes sociais.'/>
                                        
                                    </div>
                                    <div className={styles.divChildren}>
                                        <InputChild id='photoP' name='photoP' type='file' label='Foto' onChange={handleChange}
                                            error={errors.photoP} placeholder='Insira a Foto do seu Perfil'/>
                                    </div>
                                </>
                            }
                        />
                    </div>
                    <Button variant='primary' type='submit' className={styles.logBtn}>Cadastrar</Button>
                    <div className={styles.divCenter}>
                        <a href="/login" className={styles.link}>Ja tem uma conta? Clique aqui</a>
                    </div>    
                </Form>
            </div>
        </section>
    );
}