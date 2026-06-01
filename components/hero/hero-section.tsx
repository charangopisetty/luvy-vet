import Image from "next/image";
import Link from "next/link";
import { HeroChat } from "./hero-chat";
import { HeroVideoBackground } from "./hero-video-background";

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <HeroVideoBackground />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/25" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-16">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-white"
          >
            <Image
              src="/LucyLogo.png"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 shrink-0"
              priority
            />
            Lucy-Vet
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-white/90 sm:flex">
            <Link href="#services" className="transition-colors hover:text-white">
              Services
            </Link>
            <Link href="#about" className="transition-colors hover:text-white">
              About
            </Link>
            <Link href="#contact" className="transition-colors hover:text-white">
              Contact
            </Link>
          </nav>
          <Link
            href="#book"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100"
          >
            Talk with Lucy-AI
          </Link>
        </header>

        <div className="flex w-full flex-1 items-center justify-center px-4 pb-10 pt-4 lg:justify-start lg:px-16 lg:pb-16">
          <HeroChat />
        </div>
      </div>
    </section>
  );
}
