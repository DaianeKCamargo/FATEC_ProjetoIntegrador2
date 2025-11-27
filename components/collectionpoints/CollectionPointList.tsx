"use client";
import { useEffect, useState } from "react";
import styles from "@/styles/lists.module.css";

interface CP {
  id: string;
  username?: string;
  cpf: string;
  email: string;
  phone: string;
  namePC: string;
  endePC: string;
  horaFuncPC: string;
  photoPC: string;
  approved: boolean;
}

export default function CollectionPointList() {
  const [collectionPoints, setCollectionPoints] = useState<CP[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editData, setEditData] = useState<Partial<CP>>({});

  // Carrega da API
  const loadCollectionPoints = async () => {
    const res = await fetch("/api/collectionpoints");
    const data = await res.json();
    setCollectionPoints(data);
  };

  useEffect(() => {
    loadCollectionPoints();
  }, []);

  // DELETE usando ID real
  const handleDelete = async (index: number) => {
    const cp = collectionPoints[index];
    if (!cp?.id) {
      alert("Erro: ponto de coleta sem ID!");
      return;
    }

    await fetch(`/api/collectionpoints/${cp.id}`, { method: "DELETE" });

    setCollectionPoints(prev => prev.filter((_, i) => i !== index));
  };

  // Entrar no modo edição
  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setEditData({ ...collectionPoints[index] });
  };

  // Salvar alterações (PUT)
  const handleSave = async () => {
    if (editingIndex === null) return;

    const cp = collectionPoints[editingIndex];

    const res = await fetch(`/api/collectionpoints/${cp.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editData),
    });

    if (!res.ok) {
      alert("Erro ao salvar alterações");
      return;
    }

    const updated = [...collectionPoints];
    updated[editingIndex] = editData as CP;
    setCollectionPoints(updated);
    setEditingIndex(null);
  };

  // Cancelar edição
  const handleCancel = () => {
    setEditingIndex(null);
  };

  return (
    <div className={styles.list}>
      {collectionPoints.length === 0 && <p>Nenhum ponto de coleta encontrado.</p>}

      {collectionPoints.map((cp, index) => {
        const isEditing = index === editingIndex;

        return (
          <div key={cp.id} className={styles.item}>
            <p><b>Foto do Local da Empresa:</b></p>
            {isEditing ? (
              <input
                type="text"
                value={editData.photoPC || ""}
                onChange={e => setEditData({ ...editData, photoPC: e.target.value })}
              />
            ) : (
              <img src={cp.photoPC} alt="logo da empresa" className={styles.previewImg} />
            )}

            <p><b>Nome do Responsável:</b></p>
            {isEditing ? (
              <input
                value={editData.username || ""}
                onChange={e => setEditData({ ...editData, username: e.target.value })}
              />
            ) : (
              <p>{cp.username}</p>
            )}

            <p><b>Telefone:</b></p>
            {isEditing ? (
              <input
                value={editData.phone || ""}
                onChange={e => setEditData({ ...editData, phone: e.target.value })}
              />
            ) : (
              <p>{cp.phone}</p>
            )}

            <p><b>Nome da Empresa:</b></p>
            {isEditing ? (
              <input
                value={editData.namePC || ""}
                onChange={e => setEditData({ ...editData, namePC: e.target.value })}
              />
            ) : (
              <p>{cp.namePC}</p>
            )}

            <p><b>Endereço:</b></p>
            {isEditing ? (
              <input
                value={editData.endePC || ""}
                onChange={e => setEditData({ ...editData, endePC: e.target.value })}
              />
            ) : (
              <p>{cp.endePC}</p>
            )}

            <p><b>Horário de Funcionamento:</b></p>
            {isEditing ? (
              <input
                value={editData.horaFuncPC || ""}
                onChange={e => setEditData({ ...editData, horaFuncPC: e.target.value })}
              />
            ) : (
              <p>{cp.horaFuncPC}</p>
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