import { Container } from "../ui/Container";
import { Logo } from "../ui/Logo";
import { SocialIconList } from "../ui/SocialIcons";
import { footer } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-podhub-ink pt-16 pb-8 text-white">
      <Container>
        {/* Top row */}
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          {/* Brand column */}
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm leading-6 text-white/55">
              {footer.tagline}
            </p>
            <SocialIconList names={footer.socials.map((s) => s.name.toLowerCase().replace("x", "x"))} size={15} />
          </div>

          {/* Link columns */}
          {footer.columns.map((col) => (
            <div key={col.title} className="space-y-4">
              <h4 className="font-urbanist text-xl font-semibold leading-[30px] tracking-[-0.4px] text-podhub-orange">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/55 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row">
          <p>{footer.copyright}</p>
          <p>Made with ♥ for podcast lovers everywhere</p>
        </div>
      </Container>
    </footer>
  );
}
