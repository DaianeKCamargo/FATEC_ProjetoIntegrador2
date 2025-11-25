'use client' 
import styles from '@/styles/meu-perfil.module.css';
import Input from "@/components/form/Input";
import { Button } from 'react-bootstrap';
   

export default function MeuPerfilPontoColeta() { 
    var editarInfo = true; 
    var editarPC = true; 
    return ( 
    <section className={styles.body}> 
        <div className={styles.divprincipal}> 
            <div className={styles.divCenter}> 
                <h1> Meu perfil </h1> 
            </div> 
            <div className={styles.divsecundaria}> 
                <Input id="inputName" label="Nome completo" type="text" name="name" disabled={editarInfo} 
                    value="Maria de Souza" classname={styles.input}/> 
                <Input id="inputEmail" label="Email" type="email" name="email" disabled={editarInfo} 
                    value="souzamaria@user.com" classname={styles.input}/> 
                <Input id="CPF" label="CPF" type="text" name="namePC" disabled={editarInfo} value="334.576.578-65" 
                    classname={styles.input}/> 
                <Input id="inputName" label="Telefone" type="text" name="namePC" disabled={editarInfo}
                    value="(15) 99999-9999" classname={styles.input}/> 
                <Input id="inputName" label="Senha" type="password" name="namePC" disabled={editarInfo}
                    value="user123" classname={styles.input}/> 
                <Button variant='primary' className={styles.button}>Editar</Button> 
            </div> 
            <hr /> 
            <div className={styles.divCenter}> 
                <h1> Ponto de Coleta </h1> 
            </div> 
            <div className={styles.divsecundaria}> 
                <Input id="inputNamePC" label="Nome do ponto de coleta" type="text" name="namePC" 
                    disabled={editarPC} value="Casa das tampinhas" classname={styles.input}/> 
                <Input id="inputEndePC" label="Endereço" type="text" name="endePC" 
                    disabled={editarPC} value="Rua Almorim Moreira" classname={styles.input}/> 
                <Input id="inputHoraFunc" label="Horário de Funcionamento" type="text" name="horaFuncPC" 
                    disabled={editarPC} value="08:00 - 18:00" classname={styles.input}/> 
                <Input id="inputCNPJ" label="CNPJ" type="text" name="cnpjPC" 
                    disabled={editarPC} value="12.345.678/0001-90" classname={styles.input}/> 
                <Button variant='primary' className={styles.button}>Editar</Button> 
            </div> 
            <hr /> 
            <div className={styles.divCenter}> 
                <Button variant='primary' className={styles.button}>Torne-se também um Parceiro</Button>
            </div> 
        </div> 
    </section> ); }