/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { ProblemSolution } from './components/sections/ProblemSolution';
import { Services } from './components/sections/Services';
import { Transformations } from './components/sections/Transformations';
import { About } from './components/sections/About';
import { Pricing } from './components/sections/Pricing';
import { FAQ } from './components/sections/FAQ';
import { Contact, Footer } from './components/sections/Contact';
import { motion } from 'motion/react';
import { Button } from './components/ui/Button';

export default function App() {
  return (
    <main className="relative bg-background text-foreground selection:bg-gold selection:text-background font-sans min-h-screen border-x-0 md:border-8 border-[#1a1a1a] overflow-x-hidden">
      {/* Geometric Background Overlays */}
      <div className="fixed inset-0 pointer-events-none opacity-20 geometric-bg-overlay z-0"></div>
      <div className="fixed inset-0 pointer-events-none geometric-gradient-top z-[1]"></div>
      
      <div className="relative z-10 font-sans pb-24 md:pb-0">
        <Navbar />
        
        <Hero />
        
        <ProblemSolution />
      
      <Services />
      
      <Transformations />
      
      <About />
      
      <Pricing />
      
      {/* Final Motivational CTA */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-20" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
              <h2 className="text-5xl md:text-8xl font-display font-black mb-8 leading-[0.85] uppercase tracking-tighter">
                DON'T DEBATE. <br />
                <span className="gold-text-gradient">JUST EVOLVE.</span>
              </h2>
              <p className="text-gray-400 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium">
                The physique you want is on the other side of a decision. Make it today.
              </p>
              <Button 
                href="https://wa.me/201116214309"
                target="_blank"
                rel="noopener noreferrer"
                className="px-16 py-6 text-lg"
              >
                Start Your Journey Now
              </Button>
           </motion.div>
        </div>
      </section>

      <FAQ />
      
      <Contact />
      
      <Footer />
      
      {/* Universal Stick CTA for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 z-40 bg-background/80 backdrop-blur-xl border-t border-white/5">
         <Button 
           href="https://wa.me/201116214309"
           target="_blank"
           rel="noopener noreferrer"
           className="w-full py-4 text-xs"
         >
           Book Free Call Now
         </Button>
      </div>
      </div>
    </main>
  );
}
