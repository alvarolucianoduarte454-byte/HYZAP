import React from "react";

export default function Page() {
  const features = [
    {
      titulo: "Envio sequencial organizado",
      descricao: "Dispare suas campanhas em fila, reduzindo risco de bloqueio e mantendo tudo sob controle."
    },
    {
      titulo: "Mensagens personalizadas",
      descricao: "Use variáveis como nome e tags para deixar cada mensagem com cara de 1 a 1."
    },
    {
      titulo: "Listas e etiquetas de contatos",
      descricao: "Separe clientes por campanhas, interesses ou status e fale com o grupo certo."
    },
    {
      titulo: "Importação via planilha",
      descricao: "Suba seus contatos a partir de arquivos CSV ou Excel em poucos cliques."
    },
    {
      titulo: "Agendamento de campanhas",
      descricao: "Prepare envios com antecedência e deixe o HyzAp cuidar do disparo no horário escolhido."
    },
    {
      titulo: "Relatórios em tempo real",
      descricao: "Acompanhe o status dos envios e tenha visão clara do que está funcionando melhor."
    },
  ];

  return (
    <div
      style={{
        fontFamily: "system-ui, -apple-system, sans-serif",
        backgroundColor: "#F2F2F2",
        color: "#333",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          backgroundColor: "#3D5C45",
          color: "#FFFFFF",
          padding: "16px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <span style={{ 
          fontWeight: 700, 
          fontSize: 20, 
          color: "#F9F9F9", 
          letterSpacing: 0.5 
        }}>
          HyzAp
        </span>

        <nav
          style={{
            display: "flex",
            gap: 24,
            fontSize: 14,
            alignItems: "center",
          }}
        >
          <a href="#inicio" style={{ color: "#FFFFFF", textDecoration: "none" }}>
            Início
          </a>
          <a href="#recursos" style={{ color: "#FFFFFF", textDecoration: "none" }}>
            Recursos
          </a>
          <a
            href="#como-funciona"
            style={{ color: "#FFFFFF", textDecoration: "none" }}
          >
            Como funciona
          </a>
          <a href="#planos" style={{ color: "#FFFFFF", textDecoration: "none" }}>
            Planos
          </a>
          <a href="#contato" style={{ color: "#FFFFFF", textDecoration: "none" }}>
            Contato
          </a>
        </nav>

        <a
          href="#planos"
          style={{
            backgroundColor: "#F57C00",
            color: "#FFFFFF",
            padding: "10px 18px",
            borderRadius: 6,
            fontSize: 14,
            textDecoration: "none",
            fontWeight: 600,
            whiteSpace: "nowrap",
          }}
        >
          Testar o HyzAp
        </a>
      </header>

      {/* HERO */}
      <section id="inicio" style={{ padding: "48px 24px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 40,
            alignItems: "center",
            maxWidth: 1120,
            margin: "0 auto",
          }}
        >
          <div style={{ flex: "1 1 320px", maxWidth: 560 }}>
            <h1
              style={{
                fontSize: 30,
                fontWeight: 700,
                color: "#3D5C45",
                marginBottom: 16,
                lineHeight: 1.2,
              }}
            >
              A plataforma mais simples para enviar campanhas no seu aplicativo
              de mensagens.
            </h1>
            <p style={{ fontSize: 16, marginBottom: 24 }}>
              Crie listas, organize seus contatos e envie mensagens
              personalizadas de forma rápida, segura e profissional — tudo em
              um único sistema.
            </p>
            <a
              href="#planos"
              style={{
                display: "inline-block",
                backgroundColor: "#F57C00",
                color: "#FFFFFF",
                padding: "12px 24px",
                borderRadius: 8,
                fontWeight: 600,
                textDecoration: "none",
                marginBottom: 12,
              }}
            >
              TESTAR O HYZAP AGORA
            </a>
            <p style={{ fontSize: 13, color: "#555" }}>
              Interface moderna · Envio responsável · Suporte em português
            </p>
          </div>

          <div style={{ flex: "1 1 320px", maxWidth: 460 }}>
            <img
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/3a16f6a7-c284-47c3-a583-2444f4d41a4d.png"
              alt="Preview do sistema HyzAp"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: 12,
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                backgroundColor: "#ffffff",
              }}
            />
          </div>
        </div>
      </section>

      {/* RECURSOS PREMIUM */}
      <section
        id="recursos"
        style={{ padding: "48px 24px", backgroundColor: "#FFFFFF" }}
      >
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: 26,
              fontWeight: 700,
              color: "#3D5C45",
              textAlign: "center",
              marginBottom: 8,
            }}
          >
            Recursos que deixam suas campanhas mais profissionais
          </h2>
          <p
            style={{
              fontSize: 15,
              textAlign: "center",
              color: "#555",
              marginBottom: 32,
            }}
          >
            Tudo o que você precisa para organizar contatos, configurar envios
            com segurança e ter visão clara dos resultados.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 20,
            }}
          >
            {features.map((item) => (
              <div
                key={item.titulo}
                className="card-recursos"
                style={{
                  backgroundColor: "#F9FAF9",
                  borderRadius: 8,
                  padding: 20,
                  border: "1px solid #E0E4E0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, #F57C00, #FBC02D)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                    fontWeight: 700,
                    fontSize: 16,
                    marginBottom: 12,
                  }}
                >
                  ✓
                </div>
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    marginBottom: 6,
                    color: "#334235",
                  }}
                >
                  {item.titulo}
                </h3>
                <p style={{ fontSize: 14, color: "#555" }}>{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA O HYZAP */}
      <section
        id="como-funciona"
        style={{ padding: "48px 24px", backgroundColor: "#F2F2F2" }}
      >
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: 26,
              fontWeight: 700,
              color: "#3D5C45",
              textAlign: "center",
              marginBottom: 8,
            }}
          >
            Como funciona o HyzAp
          </h2>
          <p
            style={{
              fontSize: 15,
              textAlign: "center",
              color: "#555",
              marginBottom: 32,
              maxWidth: 600,
              margin: "0 auto 32px",
            }}
          >
            Em três passos simples você carrega os contatos, personaliza as mensagens e configura o envio de forma segura e profissional.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 20,
            }}
          >
            <div
              className="card-passo"
              style={{
                backgroundColor: "#F9FAF9",
                borderRadius: 8,
                padding: 20,
                border: "1px solid #E0E4E0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #F57C00, #FBC02D)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontSize: 16,
                  marginBottom: 12,
                }}
              >
                1
              </div>
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  marginBottom: 6,
                  color: "#334235",
                }}
              >
                Passo 1 – Carregar contatos
              </h3>
              <p style={{ fontSize: 14, color: "#555" }}>
                Importe uma planilha ou cole os números que deseja enviar.
              </p>
            </div>

            <div
              className="card-passo"
              style={{
                backgroundColor: "#F9FAF9",
                borderRadius: 8,
                padding: 20,
                border: "1px solid #E0E4E0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #F57C00, #FBC02D)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontSize: 16,
                  marginBottom: 12,
                }}
              >
                2
              </div>
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  marginBottom: 6,
                  color: "#334235",
                }}
              >
                Passo 2 – Personalizar mensagem
              </h3>
              <p style={{ fontSize: 14, color: "#555" }}>
                Use variáveis como nome e tags para deixar cada mensagem personalizada.
              </p>
            </div>

            <div
              className="card-passo"
              style={{
                backgroundColor: "#F9FAF9",
                borderRadius: 8,
                padding: 20,
                border: "1px solid #E0E4E0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #F57C00, #FBC02D)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontSize: 16,
                  marginBottom: 12,
                }}
              >
                3
              </div>
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  marginBottom: 6,
                  color: "#334235",
                }}
              >
                Passo 3 – Enviar com segurança
              </h3>
              <p style={{ fontSize: 14, color: "#555" }}>
                O HyzAp dispara as mensagens em fila para reduzir risco de bloqueio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PLANOS QUE SE ADAPTAM AO SEU NEGÓCIO */}
      <section
        id="planos"
        style={{ padding: "64px 24px", backgroundColor: "#FFFFFF" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "#3D5C45",
              textAlign: "center",
              marginBottom: 12,
            }}
          >
            Planos que se adaptam ao seu negócio
          </h2>
          <p
            style={{
              fontSize: 16,
              textAlign: "center",
              color: "#555",
              marginBottom: 48,
            }}
          >
            Escolha o plano ideal e aproveite todos os recursos do HyzAp.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 24,
            }}
          >
            {/* CARD 1 - LIVRE */}
            <div
              className="card-plano"
              style={{
                backgroundColor: "#D7E8D0",
                borderRadius: 8,
                padding: "32px 24px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <h3
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#2F4F36",
                  marginBottom: 8,
                }}
              >
                Livre
              </h3>
              <p
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#2F4F36",
                  marginBottom: 4,
                }}
              >
                R$ 0
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: "#555",
                  marginBottom: 16,
                }}
              >
                para sempre
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: "#555",
                  marginBottom: 24,
                  fontStyle: "italic",
                }}
              >
                Perfeito para experimentar
              </p>

              <ul style={{ listStyle: "none", padding: 0, marginBottom: 24, flex: 1 }}>
                <li style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
                  <span style={{ color: "#4CAF50", fontSize: 18, marginRight: 8, fontWeight: 700 }}>✔</span>
                  <span style={{ fontSize: 14, color: "#333" }}>Acesso ao painel</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
                  <span style={{ color: "#4CAF50", fontSize: 18, marginRight: 8, fontWeight: 700 }}>✔</span>
                  <span style={{ fontSize: 14, color: "#333" }}>Envio básico para testes</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
                  <span style={{ color: "#4CAF50", fontSize: 18, marginRight: 8, fontWeight: 700 }}>✔</span>
                  <span style={{ fontSize: 14, color: "#333" }}>Suporte inicial</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
                  <span style={{ color: "#F44336", fontSize: 18, marginRight: 8, fontWeight: 700 }}>✘</span>
                  <span style={{ fontSize: 14, color: "#777" }}>Filtros avançados</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
                  <span style={{ color: "#F44336", fontSize: 18, marginRight: 8, fontWeight: 700 }}>✘</span>
                  <span style={{ fontSize: 14, color: "#777" }}>Anexos</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
                  <span style={{ color: "#F44336", fontSize: 18, marginRight: 8, fontWeight: 700 }}>✘</span>
                  <span style={{ fontSize: 14, color: "#777" }}>Relatórios</span>
                </li>
              </ul>

              <a
                href="#contato"
                style={{
                  display: "block",
                  backgroundColor: "#F57C00",
                  color: "#FFFFFF",
                  padding: "14px 24px",
                  borderRadius: 10,
                  fontWeight: 600,
                  textDecoration: "none",
                  fontSize: 15,
                  textAlign: "center",
                  transition: "all 0.3s ease",
                }}
              >
                Começar grátis
              </a>
            </div>

            {/* CARD 2 - MENSAL (DESTAQUE) */}
            <div
              className="card-plano"
              style={{
                backgroundColor: "#3D6B42",
                borderRadius: 8,
                padding: "32px 24px",
                boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                border: "3px solid #F57C00",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -16,
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "#F57C00",
                  color: "#FFFFFF",
                  padding: "6px 20px",
                  borderRadius: 20,
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                Mais escolhido
              </div>

              <h3
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginBottom: 8,
                }}
              >
                Mensal
              </h3>
              <p
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginBottom: 4,
                }}
              >
                R$ 49,90
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: "#D7E8D0",
                  marginBottom: 16,
                }}
              >
                / mês
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: "#D7E8D0",
                  marginBottom: 24,
                  fontStyle: "italic",
                }}
              >
                Ótimo para uso contínuo
              </p>

              <ul style={{ listStyle: "none", padding: 0, marginBottom: 24, flex: 1 }}>
                <li style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
                  <span style={{ color: "#8BC34A", fontSize: 18, marginRight: 8, fontWeight: 700 }}>✔</span>
                  <span style={{ fontSize: 14, color: "#FFFFFF" }}>Válido por 30 dias</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
                  <span style={{ color: "#8BC34A", fontSize: 18, marginRight: 8, fontWeight: 700 }}>✔</span>
                  <span style={{ fontSize: 14, color: "#FFFFFF" }}>Envio organizado</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
                  <span style={{ color: "#8BC34A", fontSize: 18, marginRight: 8, fontWeight: 700 }}>✔</span>
                  <span style={{ fontSize: 14, color: "#FFFFFF" }}>Filtros básicos</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
                  <span style={{ color: "#8BC34A", fontSize: 18, marginRight: 8, fontWeight: 700 }}>✔</span>
                  <span style={{ fontSize: 14, color: "#FFFFFF" }}>Relatórios essenciais</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
                  <span style={{ color: "#EF5350", fontSize: 18, marginRight: 8, fontWeight: 700 }}>✘</span>
                  <span style={{ fontSize: 14, color: "#B8D4BC" }}>Suporte prioritário</span>
                </li>
              </ul>

              <a
                href="#contato"
                style={{
                  display: "block",
                  backgroundColor: "#F57C00",
                  color: "#FFFFFF",
                  padding: "14px 24px",
                  borderRadius: 10,
                  fontWeight: 600,
                  textDecoration: "none",
                  fontSize: 15,
                  textAlign: "center",
                  transition: "all 0.3s ease",
                }}
              >
                Assinar Mensal
              </a>
            </div>

            {/* CARD 3 - TRIMESTRAL */}
            <div
              className="card-plano"
              style={{
                backgroundColor: "#5A8A50",
                borderRadius: 8,
                padding: "32px 24px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <h3
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginBottom: 8,
                }}
              >
                Trimestral
              </h3>
              <p
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginBottom: 4,
                }}
              >
                R$ 129,90
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: "#D7E8D0",
                  marginBottom: 16,
                }}
              >
                / trimestre
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: "#D7E8D0",
                  marginBottom: 24,
                  fontStyle: "italic",
                }}
              >
                Economia para quem usa sempre
              </p>

              <ul style={{ listStyle: "none", padding: 0, marginBottom: 24, flex: 1 }}>
                <li style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
                  <span style={{ color: "#8BC34A", fontSize: 18, marginRight: 8, fontWeight: 700 }}>✔</span>
                  <span style={{ fontSize: 14, color: "#FFFFFF" }}>Válido por 3 meses</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
                  <span style={{ color: "#8BC34A", fontSize: 18, marginRight: 8, fontWeight: 700 }}>✔</span>
                  <span style={{ fontSize: 14, color: "#FFFFFF" }}>Envio organizado</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
                  <span style={{ color: "#8BC34A", fontSize: 18, marginRight: 8, fontWeight: 700 }}>✔</span>
                  <span style={{ fontSize: 14, color: "#FFFFFF" }}>Filtros básicos</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
                  <span style={{ color: "#8BC34A", fontSize: 18, marginRight: 8, fontWeight: 700 }}>✔</span>
                  <span style={{ fontSize: 14, color: "#FFFFFF" }}>Relatórios essenciais</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
                  <span style={{ color: "#8BC34A", fontSize: 18, marginRight: 8, fontWeight: 700 }}>✔</span>
                  <span style={{ fontSize: 14, color: "#FFFFFF" }}>Suporte padrão</span>
                </li>
              </ul>

              <a
                href="#contato"
                style={{
                  display: "block",
                  backgroundColor: "#F57C00",
                  color: "#FFFFFF",
                  padding: "14px 24px",
                  borderRadius: 10,
                  fontWeight: 600,
                  textDecoration: "none",
                  fontSize: 15,
                  textAlign: "center",
                  transition: "all 0.3s ease",
                }}
              >
                Assinar Trimestral
              </a>
            </div>

            {/* CARD 4 - ANUAL */}
            <div
              className="card-plano"
              style={{
                backgroundColor: "#2F4F36",
                borderRadius: 8,
                padding: "32px 24px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <h3
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginBottom: 8,
                }}
              >
                Anual
              </h3>
              <p
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginBottom: 4,
                }}
              >
                R$ 299
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: "#D7E8D0",
                  marginBottom: 16,
                }}
              >
                / ano
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: "#D7E8D0",
                  marginBottom: 24,
                  fontStyle: "italic",
                }}
              >
                Melhor custo-benefício
              </p>

              <ul style={{ listStyle: "none", padding: 0, marginBottom: 24, flex: 1 }}>
                <li style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
                  <span style={{ color: "#8BC34A", fontSize: 18, marginRight: 8, fontWeight: 700 }}>✔</span>
                  <span style={{ fontSize: 14, color: "#FFFFFF" }}>Válido por 12 meses</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
                  <span style={{ color: "#8BC34A", fontSize: 18, marginRight: 8, fontWeight: 700 }}>✔</span>
                  <span style={{ fontSize: 14, color: "#FFFFFF" }}>Envio organizado</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
                  <span style={{ color: "#8BC34A", fontSize: 18, marginRight: 8, fontWeight: 700 }}>✔</span>
                  <span style={{ fontSize: 14, color: "#FFFFFF" }}>Filtros avançados</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
                  <span style={{ color: "#8BC34A", fontSize: 18, marginRight: 8, fontWeight: 700 }}>✔</span>
                  <span style={{ fontSize: 14, color: "#FFFFFF" }}>Relatórios completos</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
                  <span style={{ color: "#8BC34A", fontSize: 18, marginRight: 8, fontWeight: 700 }}>✔</span>
                  <span style={{ fontSize: 14, color: "#FFFFFF" }}>Suporte prioritário</span>
                </li>
              </ul>

              <a
                href="#contato"
                style={{
                  display: "block",
                  backgroundColor: "#F57C00",
                  color: "#FFFFFF",
                  padding: "14px 24px",
                  borderRadius: 10,
                  fontWeight: 600,
                  textDecoration: "none",
                  fontSize: 15,
                  textAlign: "center",
                  transition: "all 0.3s ease",
                }}
              >
                Assinar Anual
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: "#F4F4F4",
          color: "#4A4A4A",
          height: 60,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 14,
          fontFamily: "system-ui, -apple-system, sans-serif",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        <p style={{ margin: 0, marginBottom: 4 }}>
          © 2025 HyzAp — Todos os direitos reservados.
        </p>
        <p style={{ margin: 0 }}>
          <a href="#" style={{ color: "#4A4A4A", textDecoration: "none" }}>Termos de Uso</a>
          {" · "}
          <a href="#" style={{ color: "#4A4A4A", textDecoration: "none" }}>Política de Privacidade</a>
          {" · "}
          contatohyzap@gmail.com
        </p>
      </footer>

      {/* ESTILO RESPONSIVO BÁSICO */}
      <style>{`
        @media (max-width: 640px) {
          section#inicio {
            padding: 32px 16px;
          }
          section#inicio h1 {
            font-size: 26px;
            line-height: 1.25;
          }
        }
      `}</style>
    </div>
  );
}
