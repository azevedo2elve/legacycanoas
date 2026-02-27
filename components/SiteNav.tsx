import Image from "next/image";
import Link from "next/link";

type SiteNavProps = {
  title: string;
  subtitle: string;
  logoSrc: string;
};

const logoBlurDataURL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGD4DwABAgEAffqGIwAAAABJRU5ErkJggg==";

export default function SiteNav({ title, subtitle, logoSrc }: SiteNavProps) {
  const navLinks = [
    { label: "Sobre", href: "#sobre" },
    { label: "Grupos", href: "/groups" },
    { label: "Agenda", href: "#agenda" },
    { label: "Store", href: "/store" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
      <Link className="flex items-center gap-3" href="/">
        <Image
          src={logoSrc}
          alt={title}
          width={72}
          height={72}
          placeholder="blur"
          blurDataURL={logoBlurDataURL}
          className="h-12 w-12"
          priority
        />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
            {subtitle}
          </p>
          <p className="text-lg font-semibold">{title}</p>
        </div>
      </Link>

      <nav className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/70 sm:justify-end">
        {navLinks.map((link) => (
          <a key={link.href} className="transition hover:text-white" href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
