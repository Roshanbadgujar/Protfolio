'use client';

import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { DeveloperSpotlight } from '@/components/DeveloperSpotlight';
import { Profile } from '@/components/Profile';
import { Experience } from '@/components/Experience';
import { Services } from '@/components/Services';
import { Projects } from '@/components/Projects';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';
import { ChatGuide } from '@/components/ChatGuide';
import { StarBackground } from '@/components/StarBackground';
import { CustomCursor } from '@/components/CustomCursor';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href')!);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
          });
        }
      });
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-brand-bg text-brand-ink selection:bg-brand-accent selection:text-brand-bg overflow-x-hidden">
      {/* Global Atmospheric Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(99,102,241,0.03),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,rgba(236,72,153,0.03),transparent_50%)]" />
      </div>

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Background Layer */}
      <StarBackground />

      {/* Navigation */}
      <Navbar />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-accent origin-left z-[10001] shadow-[0_0_20px_rgba(99,102,241,0.5)]"
        style={{ scaleX }}
      />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <DeveloperSpotlight />
        <Profile />
        <Experience />
        <Services />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* AI Guide */}
      <ChatGuide />
    </div>
  );
}
