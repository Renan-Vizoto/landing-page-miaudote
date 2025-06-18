"use client";

import React, { useState } from "react";

const PETS = [
  {
    name: "Fred",
    type: "Cachorro",
    img: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=facearea&w=400&h=400&q=80",
  },
  {
    name: "Amora",
    type: "Gato",
    img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=facearea&w=400&h=400&q=80",
  },

  {
    name: "Mel",
    type: "Cachorro",
    img: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=facearea&w=400&h=400&q=80",
  },
];

const TESTIMONIALS = [
  {
    name: "Camila",
    city: "São Paulo, SP",
    stars: 5,
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "O MiAuDote facilitou muito minha busca por um novo amigo. O app me mostrou pets que realmente combinavam com meu perfil e pude adotar com total segurança. Recomendo para todos!",
  },
  {
    name: "João",
    city: "Campinas, SP",
    stars: 5,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Adotei o Fred e foi uma experiência incrível! O suporte do app é excelente e a ONG era de confiança.",
  },
  {
    name: "Maria",
    city: "Rio de Janeiro, RJ",
    stars: 5,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "A Amora trouxe alegria para minha casa. O processo foi rápido, seguro e transparente.",
  },
];

const ONGS = [
  {
    name: "ONG Patinhas",
    logo: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  },
  {
    name: "Amigos do Bem",
    logo: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  },
  {
    name: "Pet Vida",
    logo: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  },
  {
    name: "Lar Animal",
    logo: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  },
];

const FAQ = [
  {
    q: "Como funciona o filtro inteligente?",
    a: "Você preenche um perfil e só vê pets compatíveis com seu ambiente, rotina e preferências.",
  },
  {
    q: "É seguro adotar pelo app?",
    a: "Sim! Todas as ONGs e adotantes são verificados e acompanhados por nossa equipe.",
  },
  {
    q: "Como posso cadastrar minha ONG?",
    a: "Basta selecionar 'Sou ONG' no cadastro e seguir as instruções. Nossa equipe dará suporte em todo o processo.",
  },
  {
    q: "O app é gratuito?",
    a: "Sim! O MiAuDote é 100% gratuito para adotantes e ONGs.",
  },
];

function Stars({ n }: { n: number }) {
  return (
    <span style={{ color: "#FFD700", fontSize: 18 }}>{"★".repeat(n)}</span>
  );
}

export default function Home() {
  const [liked, setLiked] = useState(Array(PETS.length).fill(false));
  const [formSent, setFormSent] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const handleLike = (idx: number) => {
    setLiked((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  // Countdown placeholder (static)
  const countdown = "03 dias 12h 45m";

  return (
    <main
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: "2em 1em 1em 1em",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.5em",
        background: "rgba(255,255,255,0.7)",
        borderRadius: 32,
        boxShadow: "0 8px 32px 0 rgba(31,38,135,0.15)",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* HERO */}
      <section
        style={{
          width: "100%",
          background: "linear-gradient(135deg, #b2f0f7 0%, #ffe5d9 100%)",
          borderRadius: 32,
          boxShadow: "0 4px 32px 0 rgba(31,38,135,0.10)",
          padding: "3em 1.5em 2.5em 1.5em",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          marginBottom: 0,
        }}
      >
        <img
          src="/logo.png"
          alt="MiAuDote logo"
          style={{
            width: 120,
            height: 120,
            borderRadius: 36,
            marginBottom: 12,
            boxShadow: "0 2px 12px #b2f0f7",
          }}
        />
        <h1
          style={{
            fontSize: "2.7em",
            margin: 0,
            fontWeight: 800,
            letterSpacing: -1,
            textAlign: "center",
          }}
        >
          MiAuDote
        </h1>
        <h2
          style={{
            fontWeight: 500,
            color: "#444",
            fontSize: "1.4em",
            margin: 0,
            textAlign: "center",
          }}
        >
          Conectando ONGs, pets e adotantes para adoção responsável
        </h2>
        <p
          style={{
            color: "#666",
            fontSize: "1.15em",
            margin: "0.7em 0 1.2em 0",
            textAlign: "center",
            maxWidth: 480,
          }}
        >
          Encontre o pet ideal para você, apoie ONGs e transforme vidas através
          da adoção consciente.
        </p>
        <button
          className="btn"
          style={{
            marginBottom: 10,
            width: 240,
            fontSize: "1.15em",
            background: "linear-gradient(90deg,#FFD700,#ffb347)",
            color: "#222",
            fontWeight: 700,
            boxShadow: "0 2px 12px #ffe5d9",
          }}
        >
          Quero conhecer o app
        </button>
        <button
          className="btn"
          style={{
            background: "#222",
            color: "#FFD700",
            fontWeight: 700,
            width: 240,
            fontSize: "1.15em",
            border: "2px solid #FFD700",
            boxShadow: "0 2px 12px #ffe5d9",
          }}
        >
          Baixe agora
        </button>
        <div
          style={{
            marginTop: 24,
            fontSize: 18,
            color: "#b48a00",
            fontWeight: 600,
            background: "rgba(255,255,255,0.7)",
            borderRadius: 12,
            padding: "0.5em 1.5em",
            boxShadow: "0 2px 8px #ffe5d9",
          }}
        >
          Faça parte dessa rede de amor e responsabilidade!
        </div>
      </section>

      {/* TRUSTED BY */}
      <section
        style={{
          width: "100%",
          textAlign: "center",
          margin: "1.5em 0 0.5em 0",
        }}
      >
        <div
          style={{
            fontWeight: 600,
            color: "#888",
            fontSize: 15,
            marginBottom: 8,
          }}
        >
          ONGs que confiam no MiAuDote:
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          {ONGS.map((ong, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                borderRadius: 12,
                padding: 8,
                boxShadow: "0 1px 6px #eee",
              }}
            >
              <img
                src={ong.logo}
                alt={ong.name}
                style={{ width: 48, height: 48, borderRadius: 12 }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO/APP DEMO */}
      <section
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "1.5em 0",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.8)",
            borderRadius: 24,
            boxShadow: "0 2px 16px #b2f0f7",
            padding: 24,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 8 }}>
            Veja como é fácil adotar
          </div>
          <video
            src="/video.mp4"
            controls
            style={{
              width: 260,
              height: 520,
              background: "#eee",
              borderRadius: 32,
              boxShadow: "0 2px 16px #b2f0f7",
              marginBottom: 8,
              objectFit: "cover",
            }}
            poster="/logo.png"
          >
            Seu navegador não suporta vídeo HTML5.
          </video>
          <div style={{ color: "#888", fontSize: 14 }}>
            Assista um caso real de adoção pelo MiAuDote
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section
        style={{
          background: "linear-gradient(90deg,#fffbe6,#ffe5d9 80%)",
          borderRadius: 18,
          padding: "2em 1em 1.5em 1em",
          boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
          width: "100%",
          textAlign: "center",
          margin: "1.5em 0",
        }}
      >
        <h3
          style={{
            fontSize: "1.4em",
            color: "#b48a00",
            fontWeight: 700,
            marginBottom: 18,
          }}
        >
          Por que escolher o MiAuDote?
        </h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 32,
            flexWrap: "wrap",
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          <div style={{ minWidth: 180, textAlign: "center" }}>
            <span style={{ fontSize: 32, color: "#FFD700" }}>🔒</span>
            <div style={{ fontWeight: 600, margin: "8px 0 2px 0" }}>
              Adoção segura
            </div>
            <div style={{ color: "#444", fontSize: 15 }}>
              ONGs e adotantes verificados
            </div>
          </div>
          <div style={{ minWidth: 180, textAlign: "center" }}>
            <span style={{ fontSize: 32, color: "#FFD700" }}>✨</span>
            <div style={{ fontWeight: 600, margin: "8px 0 2px 0" }}>
              Pets compatíveis com você
            </div>
            <div style={{ color: "#444", fontSize: 15 }}>
              Sugestões personalizadas para seu perfil
            </div>
          </div>
          <div style={{ minWidth: 180, textAlign: "center" }}>
            <span style={{ fontSize: 32, color: "#FFD700" }}>🤝</span>
            <div style={{ fontWeight: 600, margin: "8px 0 2px 0" }}>
              Apoio às ONGs
            </div>
            <div style={{ color: "#444", fontSize: 15 }}>
              Cada adoção ajuda uma ONG parceira
            </div>
          </div>
        </div>
      </section>

      {/* NOSSOS NÚMEROS */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 18,
          maxWidth: 700,
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div
          className="card"
          style={{
            background: "#e6f7fa",
            textAlign: "center",
            border: "2px solid #FFD700",
          }}
        >
          <div style={{ fontSize: 28, fontWeight: 700, color: "#3bb6c5" }}>
            +120
          </div>
          <div style={{ fontSize: 15 }}>Pets adotados</div>
        </div>
        <div
          className="card"
          style={{
            background: "#ffe5d9",
            textAlign: "center",
            border: "2px solid #FFD700",
          }}
        >
          <div style={{ fontSize: 28, fontWeight: 700, color: "#ffb347" }}>
            +15
          </div>
          <div style={{ fontSize: 15 }}>ONGs parceiras</div>
        </div>
        <div
          className="card"
          style={{
            background: "#b2f0f7",
            textAlign: "center",
            border: "2px solid #FFD700",
          }}
        >
          <div style={{ fontSize: 28, fontWeight: 700, color: "#5ed1e6" }}>
            4.9★
          </div>
          <div style={{ fontSize: 15 }}>Avaliação média</div>
        </div>
      </section>

      {/* TESTIMONIALS CAROUSEL */}
      <section style={{ width: "100%", textAlign: "center", margin: "2em 0" }}>
        <h3
          style={{
            fontSize: "1.3em",
            color: "#b48a00",
            fontWeight: 700,
            marginBottom: 18,
          }}
        >
          O que dizem nossos usuários
        </h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 24,
          }}
        >
          <button
            onClick={() =>
              setTestimonialIdx(
                (testimonialIdx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
              )
            }
            style={{
              background: "none",
              border: "none",
              fontSize: 28,
              cursor: "pointer",
              color: "#FFD700",
            }}
            aria-label="Anterior"
          >
            ‹
          </button>
          <div
            style={{
              background: "#fff",
              borderRadius: 18,
              boxShadow: "0 2px 16px #b2f0f7",
              padding: 24,
              minWidth: 260,
              maxWidth: 340,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "2px solid #FFD700",
            }}
          >
            <img
              src={TESTIMONIALS[testimonialIdx].img}
              alt={TESTIMONIALS[testimonialIdx].name}
              style={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                marginBottom: 8,
                border: "2px solid #FFD700",
              }}
            />
            <Stars n={TESTIMONIALS[testimonialIdx].stars} />
            <div
              style={{ fontWeight: 600, margin: "8px 0 4px 0", fontSize: 16 }}
            >
              {TESTIMONIALS[testimonialIdx].text}
            </div>
            <div style={{ color: "#888", fontSize: 15 }}>
              {TESTIMONIALS[testimonialIdx].name} -{" "}
              {TESTIMONIALS[testimonialIdx].city}
            </div>
          </div>
          <button
            onClick={() =>
              setTestimonialIdx((testimonialIdx + 1) % TESTIMONIALS.length)
            }
            style={{
              background: "none",
              border: "none",
              fontSize: 28,
              cursor: "pointer",
              color: "#FFD700",
            }}
            aria-label="Próximo"
          >
            ›
          </button>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        style={{
          background: "#fff",
          borderRadius: 18,
          padding: "1.5em 1em",
          boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
          width: "100%",
          margin: "1.5em 0",
        }}
      >
        <h3
          style={{
            textAlign: "center",
            marginBottom: 18,
            fontSize: "1.2em",
            color: "#b48a00",
            fontWeight: 700,
          }}
        >
          Como funciona
        </h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          <div style={{ textAlign: "center", minWidth: 90 }}>
            <div style={{ fontSize: 32, color: "#FFD700" }}>📲</div>
            <div style={{ fontSize: 14 }}>Baixe o app</div>
          </div>
          <div style={{ textAlign: "center", minWidth: 90 }}>
            <div style={{ fontSize: 32, color: "#FFD700" }}>📝</div>
            <div style={{ fontSize: 14 }}>Preencha o perfil</div>
          </div>
          <div style={{ textAlign: "center", minWidth: 90 }}>
            <div style={{ fontSize: 32, color: "#FFD700" }}>💡</div>
            <div style={{ fontSize: 14 }}>Veja sugestões</div>
          </div>
          <div style={{ textAlign: "center", minWidth: 90 }}>
            <div style={{ fontSize: 32, color: "#FFD700" }}>❤️</div>
            <div style={{ fontSize: 14 }}>Adote e mude uma vida</div>
          </div>
        </div>
      </section>

      {/* PETS CAROUSEL */}
      <section
        style={{
          background: "#f6fcfd",
          borderRadius: 18,
          padding: "1.5em 1em",
          boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
          width: "100%",
        }}
      >
        <h3
          style={{
            textAlign: "center",
            marginBottom: 16,
            color: "#b48a00",
            fontWeight: 700,
          }}
        >
          Conheça alguns pets
        </h3>
        <div
          style={{
            display: "flex",
            overflowX: "auto",
            gap: 18,
            paddingBottom: 8,
            justifyContent: "center",
          }}
        >
          {PETS.map((pet, idx) => (
            <div
              key={pet.name}
              className="card"
              style={{
                minWidth: 180,
                textAlign: "center",
                position: "relative",
                padding: 18,
                border: "2px solid #FFD700",
                background: "#fff",
              }}
            >
              <img
                src={pet.img}
                alt={pet.name}
                style={{
                  width: 90,
                  height: 90,
                  objectFit: "cover",
                  borderRadius: "50%",
                  marginBottom: 8,
                  border: "3px solid #b2f0f7",
                }}
              />
              <div style={{ fontWeight: 600 }}>{pet.name}</div>
              <div style={{ color: "#888", fontSize: 14 }}>{pet.type}</div>
              <button
                className="btn"
                style={{
                  background: liked[idx] ? "#FFD700" : "#5ed1e6",
                  color: liked[idx] ? "#222" : "#fff",
                  fontWeight: 700,
                  marginTop: 8,
                  width: "80%",
                  transition: "background 0.2s",
                  border: liked[idx] ? "2px solid #b48a00" : "none",
                  boxShadow: liked[idx] ? "0 2px 8px #ffe5d9" : "none",
                }}
                onClick={() => handleLike(idx)}
                type="button"
              >
                {liked[idx] ? "❤️ Curtido" : "Curtir"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ONG & APOIE UMA CAUSA */}
      <section
        style={{
          background: "#fff7e6",
          borderRadius: 18,
          padding: "1.5em 1em",
          boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
          width: "100%",
        }}
      >
        <div style={{ fontSize: 28, marginBottom: 4, color: "#FFD700" }}>
          🐾
        </div>
        <strong style={{ fontSize: 18 }}>ONG ou Protetor?</strong>
        <div style={{ color: "#444", textAlign: "center", maxWidth: 420 }}>
          Cadastre seus animais e encontre adotantes ideais. Cada adoção feita
          pelo app ajuda animais resgatados a encontrarem um lar cheio de amor.
        </div>
      </section>

      {/* LEAD FORM + THANK YOU PAGE */}
      <section
        style={{
          background: "#fff",
          borderRadius: 18,
          boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
          maxWidth: 420,
          margin: "0 auto",
          padding: "1.5em 1em",
          width: "100%",
        }}
      >
        <h3
          style={{
            textAlign: "center",
            marginBottom: 16,
            fontSize: "1.2em",
            color: "#b48a00",
            fontWeight: 700,
          }}
        >
          Cadastre-se para novidades
        </h3>
        {formSent ? (
          <div
            className="card"
            style={{
              textAlign: "center",
              color: "#3bb6c5",
              background: "#f6fcfd",
            }}
          >
            <div style={{ fontSize: 32, marginBottom: 8 }}>🎉</div>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>
              Obrigado pelo seu interesse!
            </div>
            <div style={{ color: "#444" }}>
              Em breve você receberá novidades do MiAuDote.
              <br />
              Siga-nos nas redes sociais para acompanhar o lançamento!
            </div>
          </div>
        ) : (
          <form
            className="card"
            style={{ maxWidth: 340, margin: "0 auto", background: "#f6fcfd" }}
            onSubmit={handleSubmit}
          >
            <input type="text" placeholder="Nome" required />
            <input type="email" placeholder="Email" required />
            <select required>
              <option value="">Tipo de usuário</option>
              <option value="cpf">Quero adotar (CPF)</option>
              <option value="cnpj">Sou ONG (CNPJ)</option>
            </select>
            <button
              className="btn"
              type="submit"
              style={{
                background: "linear-gradient(90deg,#FFD700,#ffb347)",
                color: "#222",
                fontWeight: 700,
              }}
            >
              Quero participar!
            </button>
          </form>
        )}
      </section>

      {/* FAQ */}
      <section
        style={{
          width: "100%",
          maxWidth: 600,
          margin: "2em auto",
          background: "#fff",
          borderRadius: 18,
          boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
          padding: "1.5em 1em",
        }}
      >
        <h3
          style={{
            textAlign: "center",
            marginBottom: 18,
            fontSize: "1.2em",
            color: "#b48a00",
            fontWeight: 700,
          }}
        >
          Perguntas frequentes
        </h3>
        {FAQ.map((item, idx) => (
          <div key={idx} style={{ marginBottom: 12 }}>
            <button
              onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
              style={{
                width: "100%",
                background: "none",
                border: "none",
                textAlign: "left",
                fontWeight: 600,
                fontSize: 16,
                color: "#222",
                padding: "0.5em 0",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
                outline: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
              aria-expanded={faqOpen === idx}
            >
              <span style={{ color: "#FFD700", fontSize: 18 }}>
                {faqOpen === idx ? "▼" : "►"}
              </span>{" "}
              {item.q}
            </button>
            {faqOpen === idx && (
              <div
                style={{ color: "#444", fontSize: 15, padding: "0.5em 1.5em" }}
              >
                {item.a}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* FINAL CTA */}
      <section
        style={{
          background: "linear-gradient(90deg,#FFD700,#ffb347 80%)",
          borderRadius: 18,
          textAlign: "center",
          margin: "2em 0",
          padding: "2em 1em",
          boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
          width: "100%",
        }}
      >
        <div
          style={{
            fontSize: 24,
            fontWeight: 800,
            marginBottom: 8,
            color: "#222",
            letterSpacing: 1,
          }}
        >
          Pronto para adotar ou ajudar uma ONG?
        </div>
        <div
          style={{
            marginBottom: 16,
            color: "#444",
            fontSize: 18,
            fontWeight: 500,
          }}
        >
          Baixe o MiAuDote e faça parte dessa transformação!
        </div>
        <button
          className="btn"
          style={{
            background: "#222",
            color: "#FFD700",
            fontWeight: 700,
            fontSize: 20,
            padding: "1.1em 2.8em",
            border: "2px solid #FFD700",
            boxShadow: "0 2px 12px #ffe5d9",
          }}
        >
          Baixe agora
        </button>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          margin: "2em 0 1em 0",
          color: "#888",
          width: "100%",
        }}
      >
        <div style={{ fontSize: 20, marginBottom: 8 }}>
          <a
            href="#"
            style={{ margin: "0 8px", color: "#FFD700" }}
            aria-label="Instagram"
          >
            📸
          </a>
          <a
            href="#"
            style={{ margin: "0 8px", color: "#FFD700" }}
            aria-label="Facebook"
          >
            📘
          </a>
          <a
            href="#"
            style={{ margin: "0 8px", color: "#FFD700" }}
            aria-label="WhatsApp"
          >
            💬
          </a>
        </div>
        <div style={{ fontSize: 14 }}>
          <a href="#" style={{ color: "#888", marginRight: 8 }}>
            Política de Privacidade
          </a>
          |
          <a href="#" style={{ color: "#888", marginLeft: 8 }}>
            Termos de Uso
          </a>
        </div>
        <div style={{ fontSize: 12, marginTop: 8 }}>
          © {new Date().getFullYear()} MiAuDote. Todos os direitos reservados.
        </div>
      </footer>
    </main>
  );
}
