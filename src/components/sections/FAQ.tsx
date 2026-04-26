import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export const FAQ = () => {
  const { lang, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = t.faq.items;

  return (
    <section id="faq" className={`py-32 px-6 bg-[#0a0a0a] ${lang === 'ar' ? 'font-arabic' : ''}`}>
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 sm:mb-20 ${lang === 'ar' ? 'lg:text-right' : 'lg:text-center'}`}>
          <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4 block">{t.faq.tag}</span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black mb-6 uppercase tracking-tight">{t.faq.title}</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq: any, i: number) => (
            <div 
              key={i} 
              className="rounded-2xl border border-white/5 bg-white/5 overflow-hidden transition-colors hover:border-white/10"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className={`w-full flex items-center justify-between p-6 ${lang === 'ar' ? 'flex-row-reverse text-right' : 'text-left'}`}
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
                    <div className={`px-6 pb-6 text-gray-400 leading-relaxed font-medium ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
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
