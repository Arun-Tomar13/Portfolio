
export default function Footer() {
  return (
    <footer className="border-t border-line/70 bg-bg/70">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-6 py-6 text-sm text-dim sm:flex-row sm:items-center sm:justify-between lg:px-[72px]">
        
        <p>
            © 2026
          <span className="mx-2 text-line-strong">·</span>
          Built with purpose.
        </p>

        <a
          href="#home"
          className="inline-flex items-center gap-2 transition-colors hover:text-accent"
        >
          Designed & built by{" "}
          <span className="font-medium text-accent">Arun Tomar</span>
          <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
