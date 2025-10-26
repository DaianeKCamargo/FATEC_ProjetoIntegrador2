import React from "react";

type TamPetsSectionProps = {
  monthlyWeight?: number; // peso arrecadado no mês em kg (para exibição)
};

// Componente React pronto para uso em uma página. Usa TailwindCSS para estilização.
// Exporte e importe onde for necessário (ex: src/components/TamPetsSection.tsx)
export default function TamPetsSection({
  monthlyWeight = 0,
}: TamPetsSectionProps) {
  return (
    <section className="max-w-5xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold">Projeto TamPets</h1>
        <p className="mt-2 text-sm text-gray-600">
          Coleta e reciclagem de tampinhas plásticas para financiar castrações e
          esterilizações de animais em situação de vulnerabilidade.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article className="md:col-span-2">
          <h2 className="text-lg font-medium">Missão</h2>
          <p className="mt-2 text-gray-700 leading-relaxed">
            Reduzir o abandono e o sofrimento animal por meio da arrecadação e
            venda de tampinhas plásticas. Os recursos são destinados
            exclusivamente a clínicas, ONGs e abrigos parceiros para a
            realização de castrações e tratamentos veterinários.
          </p>

          <h3 className="mt-4 font-medium">Como funciona</h3>
          <ul className="mt-2 list-inside list-disc text-gray-700 leading-relaxed">
            <li>
              Parcerias com pessoas físicas e jurídicas para coleta de tampinhas.
            </li>
            <li>Venda das tampinhas a recicladores para formação de fundo.</li>
            <li>
              Transparência: a quantidade arrecadada é divulgada mensalmente nas
              redes sociais do projeto.
            </li>
          </ul>

          <h3 className="mt-4 font-medium">Esclarecimentos importantes</h3>
          <div className="mt-2 text-gray-700 leading-relaxed space-y-1">
            <p>• O Projeto TamPets não é uma ONG.</p>
            <p>• Não possui vínculos políticos nem abrigo próprio.</p>
            <p>
              • Não organiza resgates, feiras de adoção ou mutirões; apoia por
              meio da divulgação e repasse a parceiros.
            </p>
            <p>
              • Não aceita doações em dinheiro, exceto quando feitas diretamente
              às clínicas parceiras.
            </p>
          </div>

          <footer className="mt-6">
            <p className="text-sm text-gray-600">Idealizadora: Eliada Marcos (Lia)</p>
          </footer>
        </article>

        <aside className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-xl border">
            <h4 className="text-sm font-medium text-gray-800">Resumo mensal</h4>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-semibold">{monthlyWeight}</span>
              <span className="text-sm text-gray-600">kg arrecadados</span>
            </div>
            <p className="mt-2 text-xs text-gray-500">
              Quantidade compartilhada mensalmente nas redes sociais para
              transparência.
            </p>
          </div>

        </aside>
      </div>

      {/* Seção de contato (ancora) */}
      <div id="contato" className="mt-8 bg-gray-50 p-6 rounded-xl border">
        <h3 className="text-lg font-medium">Como contribuir</h3>
        <p className="mt-2 text-gray-700 leading-relaxed">
          Reúna as tampinhas plásticas limpas e secas e entregue em um dos pontos
          de coleta parceiros. Para cadastrar um novo ponto de coleta ou obter
          informações sobre parcerias, entre em contato com a idealizadora.
        </p>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-600">Idealizadora</label>
            <div className="mt-1 text-sm font-medium">Eliada Marcos (Lia)</div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600">Observação</label>
            <div className="mt-1 text-sm text-gray-600">
              Recursos apenas para serviços veterinários parceiros; não opere
              com dinheiro diretamente ao projeto.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
