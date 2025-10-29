"use client";
import { useState } from "react";

type Dados = {
  mes: string;
  ano: number;
  gatos: number;
  cachorros: number;
  tampinhas: number;
  gas: number;
};

const dadosFixos: Dados[] = [
  { mes: "Agosto", ano: 2025, gatos: 32, cachorros: 10, tampinhas: 1500000, gas: 30.2 },
  { mes: "Setembro", ano: 2025, gatos: 35, cachorros: 11, tampinhas: 1750000, gas: 33.4 },
  { mes: "Outubro", ano: 2025, gatos: 40, cachorros: 12, tampinhas: 1908000, gas: 37.5 },
  { mes: "Novembro", ano: 2025, gatos: 45, cachorros: 13, tampinhas: 2100000, gas: 39.8 },
];

export default function relatorio() {
    const [mes, setMes] = useState("Outubro");
  const [ano, setAno] = useState(2025);

  const dados = dadosFixos.find((d) => d.mes === mes && d.ano === ano)!;

  return (
    <main className="min-h-screen bg-[#f8fafc] text-gray-800">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold">Relatório</h1>
      </section>

      <div className="flex justify-center gap-4 mb-6">
        <select
          className="border rounded-xl px-3 py-2 bg-white shadow"
          value={mes}
          onChange={(e) => setMes(e.target.value)}
        >
          {["Agosto", "Setembro", "Outubro", "Novembro"].map((m) => (
            <option key={m}>{m}</option>
          ))}
        </select>

        <select
          className="border rounded-xl px-3 py-2 bg-white shadow"
          value={ano}
          onChange={(e) => setAno(Number(e.target.value))}
        >
          <option>2025</option>
        </select>
      </div>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        <div className="bg-white rounded-2xl shadow flex flex-col text-center overflow-hidden">
        <div>
        <p className="text-lg font-semibold pt-6">Gatos</p>
        <p className="text-4xl font-bold mt-2 mb-6">{dados.gatos}</p>
        </div>
        <img src="/gatoRel.png" alt="Gato" className="w-55 mx-auto mt-auto translate-y-[15px]" />
        </div>

        <div className="bg-white rounded-2xl shadow flex flex-col text-center overflow-hidden">
        <p className="text-lg font-semibold pt-6">Cachorros</p>
        <p className="text-4xl font-bold mt-2 mb-6">{dados.cachorros}</p>
        <img src="/cachorroRel.png" alt="Cachorro" className="w-40 mx-auto mt-auto" />
        </div>

        <div className="bg-white rounded-2xl shadow flex flex-col text-center overflow-hidden">
        <p className="text-lg font-semibold pt-6">Tampinhas</p>
        <p className="text-4xl font-bold mt-2 mb-6">
        {dados.tampinhas.toLocaleString("pt-BR")}
        </p>
        <img src="/tampinhasRel.png" alt="Tampinhas" className="w-60 mx-auto mt-auto" />
        </div>
      </section>

      {/* Gráfico fake */}
      <section className="max-w-6xl mx-auto py-10 p-4">
        <h2 className="text-2xl font-semibold mb-4">
          Quantidade de Gás Carbônico reduzido durante o ano
        </h2>

        <div className="bg-white rounded-2xl shadow p-6">
          <div className="flex justify-between mb-4">
            <p className="text-lg font-semibold">{dados.gas} Kg</p>
            <span className="text-green-600 font-semibold">+4.6%</span>
          </div>

          <div className="h-48 bg-gradient-to-r from-blue-200 via-purple-200 to-blue-300 rounded-xl flex items-center justify-center text-gray-600 font-semibold">
            (gráfico ilustrativo)
          </div>
        </div>
      </section>
    </main>
  );
}