// src/app/page.tsx
import MegaMenuNavbar from "@/components/ui/mega-menu-navbar";
import AnimatedButton from "@/components/ui/animated-button";
import { RadialGlowButton } from "@/components/ui/radial-glow-button"
import SocialFlipButton from "@/components/ui/social-flip-button"

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
      <footer className="flex items-center justify-center p-4">
        <SocialFlipButton className="flex items-center justify-center m-4">
          Social Flip
        </SocialFlipButton>
      </footer>
    </>
  );
}