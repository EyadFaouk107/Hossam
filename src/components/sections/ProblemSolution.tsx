import { motion } from 'motion/react';
import { XCircle, CheckCircle2, Target, Zap, Brain } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export const ProblemSolution = () => {
  const { lang, t } = useLanguage();

  const struggleIcons = [
    <Brain className="text-red-500" />,
    <XCircle className="text-red-500" />,
    <XCircle className="text-red-500" />,
    <XCircle className="text-red-500" />,
  ];

  const solutionIcons = [
    <Target className="text-gold" />,
    <Zap className="text-gold" />,
    <CheckCircle2 className="text-gold" />,
    <CheckCircle2 className="text-gold" />,
  ];

  return (
    <section className={`py-32 px-6 bg-background relative overflow-hidden ${lang === 'ar' ? 'font-arabic' : ''}`}>
      <div className="max-w-4xl mx-auto">
        <div>
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">{t.problem.tag}</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black leading-tight mb-8 uppercase italic">
              {lang === 'ar' ? (
                <>هل سئمت من التخمين في <span className="gold-text-gradient">جسمك؟</span></>
              ) : (
                <>Tired of Guessing Your <span className="gold-text-gradient">Potential?</span></>
              )}
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              {t.problem.subtitle}
            </p>

            <div className={`grid sm:grid-cols-2 gap-8 sm:gap-10 text-sm font-medium ${lang === 'ar' ? 'sm:grid-flow-col' : ''}`}>
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-red-500/80 font-bold uppercase tracking-wider text-[10px] flex items-center justify-center gap-2">
                   {t.problem.strugglesTitle}
                </h3>
                {t.problem.struggles.map((text, i) => (
                   <div key={i} className={`flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                    <span className="shrink-0">{struggleIcons[i]}</span>
                    <span className="text-gray-400 text-xs sm:text-sm">{text}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-gold font-bold uppercase tracking-wider text-[10px] flex items-center justify-center gap-2">
                   {t.problem.solutionsTitle}
                </h3>
                {t.problem.solutions.map((text, i) => (
                  <div key={i} className={`flex items-center gap-3 p-4 rounded-xl bg-gold/5 border border-gold/10 ${lang === 'ar' ? 'text-right flex-row-reverse' : 'text-left'}`}>
                    <span className="shrink-0">{solutionIcons[i]}</span>
                    <span className="text-white font-bold text-xs sm:text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
