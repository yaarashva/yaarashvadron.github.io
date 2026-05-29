export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--border)] py-12 section-padding">
      <div className="container-max flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-serif text-base text-[var(--foreground)]">Yaara Shvadron</span>

        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/yaarashvadron/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-[var(--foreground)] transition-colors underline-grow"
          >
            LinkedIn
          </a>
          <a
            href="mailto:hello@yaarashvadron.com"
            className="text-sm text-muted hover:text-[var(--foreground)] transition-colors underline-grow"
          >
            Email
          </a>
        </div>

        <p className="text-xs text-muted">© {year}</p>
      </div>
    </footer>
  )
}
