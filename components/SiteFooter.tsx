type SiteFooterProps = {
  label: string;
};

export default function SiteFooter({ label }: SiteFooterProps) {
  return (
    <footer className="mt-auto border-t border-white/10 py-8 text-center text-xs uppercase tracking-[0.25em] text-white/50">
      {label}
    </footer>
  );
}
