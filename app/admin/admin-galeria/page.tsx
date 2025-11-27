'use client'

import FileInput from "@/components/input-image/FileInput";
import Select from "@/components/select/Select";
import style from "@/styles/adm-galeria.module.css";
import { Button } from "react-bootstrap";
import { useState } from "react";
import BackButton from "@/components/back-button/BackButton";

export default function AdministrativoGaleria() {
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [statusMessage, setStatusMessage] = useState('');

  const selectOptions = [
    { value: "1", label: "Galeria Coletas" },
    { value: "2", label: "Galeria Empresas" },
    { value: "3", label: "Galeria Escolas" },
    { value: "4", label: "Galeria Eventos" }
  ];

  const handleAlbumChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAlbum(Number(e.target.value));
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  }

  const handleSubmit = async () => {
    if (!selectedAlbum || !selectedFile) {
      setStatusMessage('Selecione um álbum e uma imagem antes de enviar.');
      return;
    }

    const formData = new FormData();
    formData.append('albumId', selectedAlbum.toString());
    formData.append('file', selectedFile);

    try {
      const res = await fetch('/api/galeria', {
        method: 'POST',
        body: formData
      });

      const data = await res.json();

      if (res.ok) {
        setStatusMessage('Imagem enviada com sucesso!');
        setSelectedFile(null);
      } else {
        setStatusMessage(`Erro: ${data.error}`);
      }
    } catch (err) {
      setStatusMessage('Erro ao enviar a imagem.');
      console.error(err);
    }
  }

  return (
    <div className={style['section-page']}>
      <div>
        <BackButton/>
        <h1>Área do Administrador</h1>
        <h2>Galeria TamPets</h2>
      </div>

      <div>
        <h3>PASSO 1: ESCOLHA DO ÁLBUM</h3>
        <p>Escolha o álbum onde a imagem será armazenada:</p>
        <Select
          options={selectOptions}
          defaultValue="Álbuns Disponíveis"
          onChange={handleAlbumChange}
          className={style.select}
        />
      </div>

      <div>
        <h3>PASSO 2: CARREGAMENTO DA IMAGEM</h3>
        <p>Selecione a imagem que deseja enviar:</p>
        <FileInput
          label="Insira aqui a imagem desejada:"
          controlId="formFile"
          onChange={handleFileChange}
          className={style.input}
        />
      </div>

      <div>
        <h3>PASSO 3: CONFIRMAÇÃO DO ENVIO</h3>
        <p>Confirme para finalizar o envio:</p>
        <Button variant="primary" onClick={handleSubmit} className={style.btn}>Enviar</Button>
        <Button variant="secondary" onClick={() => setSelectedFile(null)} className={style.btn}>Cancelar</Button>
        {statusMessage && <p>{statusMessage}</p>}
      </div>
    </ div>
  );
}
