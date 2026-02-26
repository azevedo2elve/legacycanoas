import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#FF5F1F]/30 blur-[120px]" />
        <div className="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-[#4F46E5]/30 blur-[140px]" />
      </div>

      <main className="relative mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
        <Image
          src="/logo-legacy-branco.png"
          alt="Legacy Canoas"
          width={180}
          height={180}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGD4DwABAgEAffqGIwAAAABJRU5ErkJggg=="
          className="mb-6 h-auto w-32 sm:w-40"
          priority
        />
        <span className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
          Legacy Canoas
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
          Estamos preparando algo{" "}
          <span className="bg-gradient-to-r from-[#FF5F1F] to-[#4F46E5] bg-clip-text text-transparent">
            simplesmente incrível
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
          O site está em construção, mas a vibe já está no ar. Volta já para viver a
          experiência completa.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white/80">
            🚧 Em construção
          </span>
          <span className="rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-white/70">
            Lançamento em breve
          </span>
        </div>
      </main>
    </div>
  );
}
