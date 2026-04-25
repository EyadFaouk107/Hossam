import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Is it beginner friendly?",
      a: "Absolutely. In fact, it's better for beginners to start with a system to avoid building bad habits or injuring themselves early on. We tailor everything to your current level."
    },
    {
      q: "Do I need a gym?",
      a: "No. While a gym is recommended for maximum hypertrophy, I can design elite home-based workouts if you have basic equipment (dumbbells/bands) or even just bodyweight for a start."
    },
    {
      q: "How does the weekly follow-up work?",
      a: "Every weekend, you'll submit a check-in form with your data, workout logs, and optional physique photos. I then provide a video or voice audit reviewing your progress and updating your strategy for the next week."
    },
    {
      q: "Can I still eat my favorite foods?",
      a: "Yes. My 'Flexi-Science' approach focuses on hitting your macros. As long as you follow the core structure, you can enjoy treats without ruining your progress."
    },
    {
      q: "What if I travel frequently for work?",
      a: "I specialize in high-performance individuals who travel. I'll provide you with hotel-gym workouts and a travel nutrition guide to keep you on track regardless of where you are in the world."
    },
  ];

  return (
    <section id="faq" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4 block">Information</span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black mb-6 uppercase tracking-tight">Common Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="rounded-2xl border border-white/5 bg-white/5 overflow-hidden transition-colors hover:border-white/10"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-bold tracking-tight text-white">{faq.q}</span>
                <div className={`p-2 rounded-full transition-colors ${activeIndex === i ? 'bg-gold text-background' : 'bg-white/10 text-gold'}`}>
                  {activeIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed font-medium">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
