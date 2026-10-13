// src/app/page.tsx
import MegaMenuNavbar from "@/components/ui/mega-menu-navbar";
import AnimatedButton from "@/components/ui/animated-button";
import { RadialGlowButton } from "@/components/ui/radial-glow-button"
import SocialFlipButton from "@/components/ui/social-flip-button"
import StatsCounter from "@/components/ui/stats-counter"

export default function Home() {
  return (
    <>
      <MegaMenuNavbar />
      <main className="flex min-h-screen items-center justify-center">
        <h1>Contenido principal</h1>
        <AnimatedButton className="flex items-center justify-center m-4" >
          Click me
        </AnimatedButton>
        <RadialGlowButton className="flex items-center justify-center m-4">
          Radial Glow
        </RadialGlowButton>
        
      </main>
      
<div className="flex flex-wrap items-center justify-center gap-8">
  <div className="flex flex-col items-center justify-center">
    <StatsCounter value={250} suffix="+" duration={2} />
    <span className="mt-2 text-sm text-zinc-500">
      Components
    </span>
  </div>

  <div className="flex flex-col items-center justify-center">
    <StatsCounter value={12000} suffix="+" duration={2} />
    <span className="mt-2 text-sm text-zinc-500">
      Downloads
    </span>
  </div>

  <div className="flex flex-col items-center justify-center">
    <StatsCounter value={99} suffix="%" duration={2} />
    <span className="mt-2 text-sm text-zinc-500">
      Satisfaction
    </span>
  </div>
</div>


      <footer className="flex items-center justify-center p-4">
        <SocialFlipButton className="flex items-center justify-center m-4" />
      </footer>
    </>
  );
}