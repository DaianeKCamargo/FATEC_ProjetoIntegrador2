'use client'

import FileInput from "@/components/input-image/FileInput";
import Select from "@/components/select/Select";


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
        <section>
            <div>
                <h1>Area do Adiminstrador</h1> 
                <h2>Galeria TamPets</h2>
            </div>
            <div>
                <Select
                    options={selectOptions}
                    defaultValue="Escolha uma galeria"
                    onChange={handleChange}
                />
            </div>
            <div>
                <FileInput 
                    label="Insira a imagem desejada:"
                    controlId="formFile"
                    onChange={(e) => console.log(e.target.files)}
                />
            </div>
        </section>
        
    );
}