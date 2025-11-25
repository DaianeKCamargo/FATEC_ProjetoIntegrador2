'use client'
import Input from '@/components/form/Input';
import CheckDown from '@/components/checkchildren/CheckDown';
import styles from '@/styles/log-block.module.css';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { Button, Form } from 'react-bootstrap';
import InputChild from '@/components/checkchildren/InputChild';
import { cadSchema } from "@/schemas/cadSchema";
import { useState } from "react";


export default function Cadastrar() {
    const router = useRouter();
    //Definição dos valores do formulário
    interface values {
        id?: string;
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
        approved?: boolean; // página parceiros e admin
    }
    //Configuração do formik
    const { values, errors, touched, handleChange, handleBlur } = useFormik<values>({
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

    // config pagina admin e parceiros 
    const [username, setUsername] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [namePC, setNamePC] = useState("");
    const [endePC, setEndPC] = useState("");
    const [horaFuncPC, setHoraFuncPC] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [photoPC, setPhotoPC] = useState("");
    const [nameP, setNameP] = useState("");
    const [linkP, setLinkP] = useState("");
    const [photoP, setPhotoP] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // identifica se foi selecionado ponto de coleta (A) ou parceiro (B)
        const isPontoColeta = values.options?.includes("A");
        const isParceiro = values.options?.includes("B");

        if (!isPontoColeta && !isParceiro) {
            alert("Selecione ao menos uma opção!");
            return;
        }

        // se for ponto de coleta
        if (isPontoColeta) {
            const newColeta = {
                id: crypto.randomUUID(),
                username,
                cpf,
                email,
                phone,
                namePC,
                endePC,
                horaFuncPC,
                cnpj,
                photoPC,
                approved: false
            };

            await fetch("/api/collectionpoints", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newColeta),
            });

            alert("Cadastro enviado como Ponto de Coleta! Aguarde aprovação.");
        }

        // se for parceiro
        if (isParceiro) {
            const newPartner = {
                id: crypto.randomUUID(),
                username,
                cpf,
                email,
                phone,
                nameP,
                linkP,
                photoP,
                approved: false,
            };

            await fetch("/api/partners", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newPartner),
            });

            alert("Cadastro enviado como Parceiro! Aguarde aprovação.");
        }


        setUsername("");
        setCpf("");
        setEmail("");
        setPhone("");
        setPassword("");
        setConfirmPassword("");
        setNamePC("");
        setEndPC("");
        setHoraFuncPC("");
        setCnpj("");
        setPhotoPC("");
        setNameP("");
        setLinkP("");
        setPhotoP("");
    };

    // parceito e admin - vizualizar foto após upload
    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onloadend = () => {
            setPhotoP(reader.result as string);
            setPhotoPC(reader.result as string); // aqui vira base64
        };

        reader.readAsDataURL(file);
    };

    return (
        <section>
            <div className={styles.divprincipal}>
                <h1 className={styles.title}> Cadastrar </h1>
                <Form onSubmit={handleSubmit} className={styles.formWrapper}>
                    <Input id="inputName" placeholder='Insira seu nome completo'label="Nome Completo" type="text" name="username"
                        error={errors.username} onChange={(e) => {
                            handleChange(e);
                            setUsername(e.target.value);
                        }} value={username} />

                    <Input id="inputCPF" label='CPF' placeholder='Insira o seu CPF sem caracteres especiais' type='number' name='cpf'
                        error={errors.cpf} onChange={(e) => {
                            handleChange(e);
                            setCpf(e.target.value);
                        }} value={cpf} />

                    <Input id="inputEmail" label="Email" placeholder='Insira o seu email completp' type='email' name='email'
                        error={errors.email} onChange={(e) => {
                            handleChange(e);
                            setEmail(e.target.value);
                        }} value={email} />
                    <Input id="inputTelefone" placeholder='Insira o seu telefone' label='Telefone' type='tel' name='phone'
                        error={errors.phone} onChange={(e) => {
                            handleChange(e);
                            setPhone(e.target.value);
                        }} value={phone} />
                    <Input id="inputPassword" label='Senha' placeholder='Insira a senha' type='password' name="password"
                        error={errors.password} onChange={(e) => {
                            handleChange(e);
                            setPassword(e.target.value);
                        }} value={password} />

                    <Input id="inputConfirmPassword" label='Confirme a Senha' placeholder='Insira novamente a senha' type='password'
                        name='confirmPassword' error={errors.confirmPassword} onChange={(e) => {
                            handleChange(e);
                            setConfirmPassword(e.target.value);
                        }} value={confirmPassword} />
                    <div>
                        <CheckDown
                            label="Ponto de coleta"
                            name="options"
                            value="A"
                            id='check1'
                            error={errors.options}
                            info='Tornar-se um ponto de coleta ajuda a ampliar nossa rede de coleta.'
                            onChange={handleChange}
                            children={
                                <>
                                    <div className={styles.divChildren}>
                                        <InputChild id='inputNamePC' placeholder='Insira o nome do estabelecimento' label='Nome do estabelecimento' type='text'
                                            error={errors.namePC} onChange={(e) => {
                                                handleChange(e);
                                                setNamePC(e.target.value);
                                            }} name='namePC' value={namePC} />
                                        <InputChild id='inputEndPC' placeholder='Insira o CEP do estabelecimento' label='Endereço' type='text'
                                            error={errors.endePC} onChange={(e) => {
                                                handleChange(e);
                                                setEndPC(e.target.value);
                                            }} name='endePC' value={endePC} />
                                    </div>
                                    <div className={styles.divChildren}>
                                        <InputChild id='inputEndPC' placeholder='Insira o horario de funcionamento' label='Horario de Funcionamento' type='text'
                                            error={errors.horaFuncPC} onChange={(e) => {
                                                handleChange(e);
                                                setHoraFuncPC(e.target.value);
                                            }} name='horaFuncPC' value={horaFuncPC} />
                                        <InputChild id='inputEndPC' label='CNPJ' placeholder='Insira o CNPJ da empresa' type='text'
                                            error={errors.cnpj} onChange={(e) => {
                                                handleChange(e);
                                                setCnpj(e.target.value);
                                            }} name='cnpj' value={cnpj} />
                                    </div>
                                    <div className={styles.divChildren}>
                                        <InputChild
                                            id='photoP'
                                            name='photoPC'
                                            type='file'
                                            label='Foto'
                                            error={errors.photoPC}
                                            onChange={(e) => {
                                                handleChange(e);
                                                handlePhotoChange(e);
                                            }}
                                            placeholder='Insira a foto da fachada do seu estabelecimento aqui'
                                        />
                                    </div>
                                </>
                            }
                        />
                    </div>
                    <div>
                        <CheckDown
                            label="Parceiro"
                            name="options"
                            value="B"
                            id='check2'
                            error={errors.options}
                            info='Torne-se Parceiro Tampets e nós ajude a divulgar o projeto.'
                            onChange={handleChange}
                            children={
                                <>
                                    <div className={styles.divChildren}>
                                        <InputChild id='inputNameP' label='Nome do Perfil' type='text'
                                            error={errors.nameP} onChange={(e) => {
                                                handleChange(e);
                                                setNameP(e.target.value);
                                            }} name='nameP' placeholder='Insira o nome do seu Perfil da sua rede social.' value={nameP} />
                                        <InputChild id='inputLinkP' label='Link' type='text'
                                            error={errors.linkP} onChange={(e) => {
                                                handleChange(e);
                                                setLinkP(e.target.value);
                                            }} name='linkP' placeholder='Insira o link para uma de suas redes sociais.' value={linkP} />

                                    </div>
                                    <div className={styles.divChildren}>

                                        <InputChild
                                            id='photoP'
                                            name='photoP'
                                            type='file'
                                            label='Foto'
                                            onChange={(e) => {
                                                handlePhotoChange(e);
                                                handleChange(e);
                                            }}
                                            error={errors.photoP}
                                            placeholder='Insira a Foto do seu Perfil'
                                        />
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