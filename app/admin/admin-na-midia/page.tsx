'use client'
import styles from "@/styles/admin-na-midia.module.css";
import style from "@/styles/adm-galeria.module.css";
import FileInput from "@/components/input-image/FileInput";

export default function AdministrativoNaMidia() {

    return (
        <section className={styles.body}>
            <div className={style['section-page']}>
                <h1>Área do Administrador</h1>
                <h2>TamPets na Mídia</h2>

                <div>
                <h3>PASSO 1: ESCOLHA DA IMAGEM</h3>
                <p>Escolha a imagem de capa da notícia:</p>
                    <FileInput
                        label="Insira aqui a imagem desejada:"
                        controlId="formFile"
                        className={style.input}
                    />
                </div>
                <div>
                    <h3>PASSO 2: INSIRA O TÍTULO DA NOTÍCIA</h3>
                    <p>Digite o texto título da notícia:</p>
                    <input className="form-control" type="text" placeholder="Insira o título aqui" aria-label="default input example"></input>
                </div>
                <div>
                    <h3>PASSO 3: INSIRA O URL DA NOTÍCIA</h3>
                    <p>Digite o link da notícia:</p>
                    <input className="form-control" type="text" placeholder="Insira o link aqui" aria-label="default input example"></input>
                </div>
                <div>
                    <h3>PASSO 4: INSIRA A DATA DA NOTÍCIA</h3>
                    <p>Selecione a data da notícia:</p>
                    <input className="form-control" type="date" placeholder="Insira a data aqui" aria-label="default input example"></input>
                </div>
                <div>
                    <h3>PASSO 5: CONFIRMAÇÃO DO ENVIO</h3>
                    <p>Após preencher todos os campos, clique no botão abaixo para enviar a notícia:</p>
                    <button type="button" className="btn btn-primary">Enviar Notícia</button>
                </div>
            </div>
        </section>
    );
}