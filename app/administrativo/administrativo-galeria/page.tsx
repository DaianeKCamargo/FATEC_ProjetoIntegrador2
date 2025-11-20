'use client'

import FileInput from "@/components/input-image/FileInput";
import Select from "@/components/select/select";
import style from "@/styles/adm-galeria.module.css";
import { Button } from "react-bootstrap";



export default function AdministrativoGaleria() {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log("Valor selecionado:", e.target.value);
        };
        const selectOptions = [
    { value: "1", label: "Galeria Coletas" },
    { value: "2", label: "Galeria Empresas" },
    { value: "3", label: "Galeria Escolas" },
    { value: "4", label: "Galeria Eventos" }
  ];

    return (
        <section className={style['section-page']}>
            <div>
                <h1>Área do Adminstrador</h1> 
                <h2>Galeria TamPets</h2>
            </div>
            <div>
                <h3>PASSO 1: ESCOLHA DO ÁLBUM</h3>
                <p>A galeria TamPets conta com 4 álbuns onde as fotos do projeto
                    são exibidas. Escolha o álbum que deseja armazenar a imagem:
                </p>
                <Select
                    options={selectOptions}
                    defaultValue="Álbuns Disponíveis"
                    onChange={handleChange}
                />
            </div>
            <div>
                <h3>PASSO 2: CARREGAMENTO DA IMAGEM</h3>
                <p>Selecione a imagem que deseja enviar para o álbum escolhido:</p>
                <FileInput 
                    label="Insira aqui a imagem desejada:"
                    controlId="formFile"
                    onChange={(e) => console.log(e.target.files)}
                />
            </div>
            <div>
                <h3>PASSO 3: CONFIRMAÇÃO DO ENVIO</h3>
                <p>Após fazer a escolha do album e da imagem desejados, confirme abaixo para finalizar o envio,
                    ou cancele para reiniciar o processo:
                </p>
                <Button variant="primary">Enviar</Button>
                <Button variant="secondary">Cancelar</Button>
            </div>
        </section>
        
    );
}