import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PhilosophySection } from './components/PhilosophySection';
import { WorkSection } from './components/WorkSection';
import { ExperienceSection } from './components/ExperienceSection';
import { WorkspaceSection } from './components/WorkspaceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sectionIds = ['hero', 'work', 'experience', 'archive', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black flex flex-col font-poppins">
      {/* Sticky Top Header */}
      <Header activeSection={activeSection} />

      {/* Main Content Layout with top padding to offset sticky header */}
      <main className="flex-1 w-full pt-20">
        <HeroSection />
        <PhilosophySection />
        <WorkSection />
        <ExperienceSection />
        <WorkspaceSection />
        <ContactSection />
      </main>

      {/* Persistent Footer */}
      <Footer />
    </div>
  );
}
