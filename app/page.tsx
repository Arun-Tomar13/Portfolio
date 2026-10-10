
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Boot from "@/components/Boot";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CommandPalette from "@/components/CommandPalette";

export default function Home() {
  return (
    <>
      <Boot />
      <ScrollProgress />
      <Nav />
      <CommandPalette />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
