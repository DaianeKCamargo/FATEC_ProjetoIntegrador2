'use client' 
import styles from '@/styles/meu-perfil.module.css';
import Input from "@/components/form/Input";
import { Button } from 'react-bootstrap';
import { bool } from 'yup';
   

export default function MeuPerfilPontoColeta() { 
    var editarInfo = true; 
    var editarPC = true; 
    return ( 
    <section> 
        <div className={styles.divprincipal}> 
            <div className={styles.divCenter}> 
                <h1> Meu perfil </h1> 
            </div> 
            <div className={styles.divsecundaria}> 
                <Input id="inputName" label="Nome completo" type="text" name="name" disabled={editarInfo} 
                    value="aaaa" classname={styles.input}/> 
                <Input id="inputEmail" label="Email" type="email" name="email" disabled={editarInfo} 
                    value="aaaa" classname={styles.input}/> 
                <Input id="CPF" label="CPF" type="text" name="namePC" disabled={editarInfo} value="aaaa" 
                    classname={styles.input}/> 
                <Input id="inputName" label="Telefone" type="text" name="namePC" disabled={editarInfo}
                    value="aaaa" classname={styles.input}/> 
                <Input id="inputName" label="Senha" type="password" name="namePC" disabled={editarInfo}
                    value="aaaa" classname={styles.input}/> 
                <Button variant='primary' className={styles.button}>Editar</Button> 
            </div> 
            <hr /> 
            <div className={styles.divCenter}> 
                <h1> Ponto de Coleta </h1> 
            </div> 
            <div className={styles.divsecundaria}> 
                <Input id="inputNamePC" label="Nome do ponto de coleta" type="text" name="namePC" 
                    disabled={editarPC} value="aaaa" classname={styles.input}/> 
                <Input id="inputEndePC" label="Endereço" type="text" name="endePC" 
                    disabled={editarPC} value="aaaa" classname={styles.input}/> 
                <Input id="inputHoraFunc" label="Horário de Funcionamento" type="text" name="horaFuncPC" 
                    disabled={editarPC} value="aaaa" classname={styles.input}/> 
                <Input id="inputCNPJ" label="CNPJ" type="text" name="cnpjPC" 
                    disabled={editarPC} value="aaaa" classname={styles.input}/> 
                <Button variant='primary' className={styles.button}>Editar</Button> 
            </div> 
            <hr /> 
            <div className={styles.divCenter}> 
                <Button variant='primary' className={styles.button}>Torne-se também um Parceiro</Button>
            </div> 
        </div> 
    </section> ); }