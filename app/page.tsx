import Image from "next/image";
import HighlightCard from "@/components/HighlightCard";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";

const highlights = [
  {
    title: "Presença e Palavra",
    description:
      "Noites profundas de adoração e mensagens que falam direto ao coração.",
  },
  {
    title: "Conexão Real",
    description:
      "Grupos, amizade e suporte para caminhar junto durante a semana.",
  },
  {
    title: "Missão e Impacto",
    description:
      "A gente serve a cidade com criatividade, alegria e intencionalidade.",
  },
];

const weeklyMoments = [
  {
    title: "Culto Legacy",
    description: "Culto de jovens com louvor intenso e ambiente acolhedor.",
    detail: "Igreja Lagoinha Canoas",
  },
  {
    title: "GC Legacy",
    description: "Grupos menores para conversa, discipulado e oração.",
    detail: "Durante a semana",
    href: "/groups",
  },
];

const upcoming = [
  // {
  //   title: "Conferência Legacy",
  //   description: "Uma noite especial com palavra, louvor e convidados.",
  //   date: "Em breve",
  // },
  {
    title: "Retiro de Jovens",
    description: "Dias intensos de conexão, descanso e avivamento.",
    date: "01, 02 e 03 de maio 2026",
    href: "/camp",
  },
  // {
  //   title: "Legacy Sessions",
  //   description: "Noites de som autoral e testemunhos marcantes.",
  //   date: "Agenda aberta",
  // },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#FF5F1F]/30 blur-[140px]" />
        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-[#4F46E5]/30 blur-[160px]" />
        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#FF5F1F]/20 blur-[140px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-16 pt-10">
        <SiteNav
          title="Legacy"
          subtitle="Jovens Lagoinha Canoas"
          logoSrc="/logo-legacy-branco.png"
        />

        <main className="flex flex-1 flex-col gap-24 pb-10 pt-16">
          <section className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
                Movimento de jovens
              </span>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
                WE ARE{" "}
                <span className="bg-gradient-to-r from-[#FF5F1F] to-[#4F46E5] bg-clip-text text-transparent">
                  LEGACY
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                O Legacy Canoas é o grupo de jovens da Igreja Lagoinha Canoas.
                Encontros que unem adoração intensa, palavra viva e conexões reais.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  className="rounded-full bg-gradient-to-r from-[#FF5F1F] to-[#4F46E5] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#4F46E5]/20 transition hover:brightness-110"
                  href="#encontros"
                >
                  Quero participar
                </a>
                <a
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
                  href="#agenda"
                >
                  Ver agenda
                </a>
              </div>
            </div>

            <div className="relative rounded-[32px] border border-white/10 bg-white/5 shadow-[0_20px_60px_-30px_rgba(79,70,229,0.6)]">
              <div className="rounded-[28px] border border-white/10 bg-[#0C0C0C]/80 p-8">
              <Image
                src="/logo-legacy-branco-fundo-preto.jpg"
                alt="Logo Legacy Canoas"
                width={360}
                height={360}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBUQEA8QDw8PDQ8PEA8PEA8PFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKAAoAMBIgACEQEDEQH/xAAXAAEAAwAAAAAAAAAAAAAAAAAABAUG/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQACIf/aAAwDAQACEAMQAAABy9T/xAAXEAADAQAAAAAAAAAAAAAAAAAAAREx/9oACAEBAAEFAmOeX//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABcQAQEBAQAAAAAAAAAAAAAAAAERABH/2gAIAQEABj8Cxl7/xAAYEAADAQEAAAAAAAAAAAAAAAAAAREhQf/aAAgBAQABPyHie4n/2gAMAwEAAgADAAAAEOP/xAAXEQEAAwAAAAAAAAAAAAAAAAAAAREx/9oACAEDAQE/EGyP/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oACAECAQE/EPi//8QAHBABAAICAwAAAAAAAAAAAAAAAAERIQAxQVFh/9oACAEBAAE/EHvuMNKqRrqk32rDDat//2Q=="
                className="h-auto w-full rounded-2xl"
                priority
              />
              <div className="mt-6 grid gap-4 text-sm text-white/70 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                  Visão
                </p>
                <p className="mt-2 text-sm font-semibold text-white">
                  Formar jovens apaixonados por Jesus e pela cidade.
                </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                  Cultura
                </p>
                <p className="mt-2 text-sm font-semibold text-white">
                  Familia, honra, autenticidade e servico.
                </p>
                </div>
              </div>
              </div>
            </div>
          </section>

          <section id="sobre" className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Somos o Legacy da Lagoinha Canoas
              </h2>
              <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg">
                Um lugar onde jovens se encontram para crescer na fé, servir com
                criatividade e criar memórias que marcam. Nosso desejo é ver uma
                geração firmada em Jesus, relevante e cheia do Espírito Santo.
              </p>
            </div>
            <div className="grid gap-4">
              {highlights.map((item) => (
                <HighlightCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  variant="compact"
                />
              ))}
            </div>
          </section>

          <section id="encontros" className="grid gap-8">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-semibold sm:text-4xl">Nossos encontros</h2>
              <p className="max-w-2xl text-base text-white/70 sm:text-lg">
                Cada semana é uma nova história. Chega junto e vive o que Deus
                está fazendo entre a juventude de Canoas.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {weeklyMoments.map((item) => (
                <HighlightCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  eyebrow={item.detail}
                  href={item.href}
                  interactive
                />
              ))}
            </div>
          </section>

          <section id="agenda" className="grid gap-8">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-semibold sm:text-4xl">Agenda Legacy</h2>
              <p className="max-w-2xl text-base text-white/70 sm:text-lg">
                Próximos momentos especiais para a juventude. Se preparem e chamem
                geral.
              </p>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {upcoming.map((item) => (
                <HighlightCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  eyebrow={item.date}
                  href={item.href}
                  interactive
                />
              ))}
            </div>
          </section>

          <section
            id="contato"
            className="rounded-[32px] border border-white/10 bg-gradient-to-r from-[#0F0F0F] via-[#131220] to-[#0F0F0F] px-8 py-12"
          >
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-semibold sm:text-4xl">
                  Bora viver essa jornada com a gente?
                </h2>
                <p className="mt-4 text-base text-white/70 sm:text-lg">
                  Fala com a gente, acompanha os avisos e chega junto nos nossos
                  encontros. O Legacy Canoas está pronto para te receber.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#050505] transition hover:brightness-90"
                  href="#"
                >
                  Falar com a liderança
                </a>
                <a
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
                  href="#"
                >
                  Seguir no Instagram
                </a>
              </div>
            </div>
          </section>
        </main>

        <SiteFooter label="Legacy Canoas · Jovens Lagoinha Canoas" />
      </div>
    </div>
  );
}
