
import {Recycle,PawPrint,CheckCircle2,Info,BarChart3, Mail,} from "lucide-react";
import "@/style/SobreNos.css";
import TampleteTitulo from "@/Components/tampleteTitulo";

type TamPetsSectionProps = {
  monthlyWeight?: number;
};
 

export default function SobreNos({ monthlyWeight = 4.3 }: TamPetsSectionProps) {
  return (
    <section className="tampets-container">
      <div className="hero">
        <TampleteTitulo titulo="Sobre Nós " descricao="Conheça um pouco quem somos e o que o projeto faz." color="#aefab860"/>
      </div>

      <div className="content-grid">
        <div className="main-content">
          <article className="card">
            <header className="card-header">
              <PawPrint className="icon" />
              <h2>Missão</h2>
            </header>
            <p>
              Reduzir o sofrimento animal financiando castrações através da venda de tampinhas plásticas.
            </p>
          </article>

          <article className="card">
            <header className="card-header">
              <Recycle className="icon" />
              <h3>Como funciona</h3>
            </header>
            <ul>
              <li><CheckCircle2 className="icon-small" /> Coleta em pontos parceiros</li>
              <li><CheckCircle2 className="icon-small" /> Venda para recicladores</li>
              <li><CheckCircle2 className="icon-small" /> Divulgação transparente mensal</li>
            </ul>
          </article>

          <article className="card">
            <header className="card-header">
              <Info className="icon" />
              <h3>Esclarecimentos</h3>
            </header>
            <p className="text-list">
              • Não é ONG<br />
              • Sem vínculos políticos<br />
              • Não realiza resgates diretamente<br />
              • Doações apenas destinadas a serviços veterinários
            </p>
          </article>
        </div>

        <aside className="aside">
          <div className="aside-card">
            <BarChart3 className="icon-large" />
            <h4>Resumo Mensal</h4>
            <span className="monthly">{monthlyWeight}</span>
            <p>kg arrecadados</p>
          </div>

          <div className="contact-card" id="contato">
            <Mail className="icon-contact" />
            <h4>Participe</h4>
            <p>Quer se tornar um ponto de coleta ou ser parceiro do projeto?</p>
            <button>Entrar em contato</button>
          </div>
        </aside>
      </div>
    </section>
  );
}