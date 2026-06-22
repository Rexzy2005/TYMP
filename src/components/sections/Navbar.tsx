import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";
import { navItems, navCta } from "@/lib/content";

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      {/* Matches hero container: 1440px section, 100px side padding */}
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-[100px]">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button href={navCta.href} variant="solid" size="md" trailingArrow>
          {navCta.label}
        </Button>
      </div>
    </header>
  );
}