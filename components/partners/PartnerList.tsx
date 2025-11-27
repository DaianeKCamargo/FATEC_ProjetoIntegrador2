"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/lists.module.css";

export default function PartnersList() {
  const [partners, setPartners] = useState<any[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editData, setEditData] = useState<any>({});

  // Carrega da API
  const loadPartners = async () => {
    const res = await fetch("/api/partners");
    const data = await res.json();
    setPartners(data);
  };

  useEffect(() => {
    loadPartners();
  }, []);

  // DELETE (usando ID real)
  const handleDelete = async (index: number) => {
    const partner = partners[index]; // pega o objeto certo
    if (!partner?.id) {
      alert("Erro: parceiro sem ID. Verifique o JSON.");
      return;
    }

    await fetch(`/api/partners/${partner.id}`, {
      method: "DELETE",
    });

    // remove do estado
    setPartners(prev => prev.filter((_, i) => i !== index));
  };

  // Entrar em modo edição
  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setEditData({ ...partners[index] });
  };

  // PUT — salvar no arquivo
  const handleSave = async () => {
    if (editingIndex === null) return;

    const partner = partners[editingIndex];

    const res = await fetch(`/api/partners/${partner.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editData),
    });

    if (!res.ok) {
      alert("Erro ao salvar mudanças");
      return;
    }

    // atualiza localmente
    const updated = [...partners];
    updated[editingIndex] = editData;

    setPartners(updated);
    setEditingIndex(null);
  };

  // Cancelar edição
  const handleCancel = () => {
    setEditingIndex(null);
  };

  return (
    <div className={styles.list}>
      {partners.length === 0 && <p>Nenhum parceiro encontrado.</p>}

      {partners.map((partner, index) => {
        const isEditing = index === editingIndex;

        return (
          <div key={partner.id} className={styles.item}>

            <p><b>Foto da Empresa:</b></p>
            {isEditing ? (
              <input
                type="text"
                value={editData.photoP}
                onChange={e => setEditData({ ...editData, photoP: e.target.value })}
              />
            ) : (
              <img src={partner.photoP} className={styles.previewImg} />
            )}

            <p><b>Nome:</b></p>
            {isEditing ? (
              <input
                value={editData.username}
                onChange={e => setEditData({ ...editData, username: e.target.value })}
              />
            ) : (
              <p>{partner.username}</p>
            )}

            <p><b>CPF:</b></p>
            {isEditing ? (
              <input
                value={editData.cpf}
                onChange={e => setEditData({ ...editData, cpf: e.target.value })}
              />
            ) : (
              <p>{partner.cpf}</p>
            )}

            <p><b>Telefone:</b></p>
            {isEditing ? (
              <input
                value={editData.phone}
                onChange={e => setEditData({ ...editData, phone: e.target.value })}
              />
            ) : (
              <p>{partner.phone}</p>
            )}

            <p><b>Nome da Empresa:</b></p>
            {isEditing ? (
              <input
                value={editData.nameP}
                onChange={e => setEditData({ ...editData, nameP: e.target.value })}
              />
            ) : (
              <p>{partner.nameP}</p>
            )}

            <p><b>Link da Empresa:</b></p>
            {isEditing ? (
              <input
                value={editData.linkP}
                onChange={e => setEditData({ ...editData, linkP: e.target.value })}
              />
            ) : (
              partner.linkP && (
                <a href={partner.linkP} target="_blank" rel="noopener noreferrer">
                  Ver perfil
                </a>
              )
            )}

            {/* Botões */}
            {!isEditing ? (
              <>
                <button onClick={() => handleEdit(index)}>Editar</button>
                <button onClick={() => handleDelete(index)}>Excluir</button>
              </>
            ) : (
              <>
                <button onClick={handleSave}>Salvar</button>
                <button onClick={handleCancel}>Cancelar</button>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}