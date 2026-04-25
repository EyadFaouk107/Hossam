import { motion } from 'motion/react';
import { Check, Info } from 'lucide-react';
import { Button } from '../ui/Button';
import { useLanguage } from '../../hooks/useLanguage';

export const Pricing = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="pricing" className={`py-24 sm:py-32 px-4 sm:px-6 bg-background relative overflow-hidden ${lang === 'ar' ? 'font-arabic' : ''}`}>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4 block">{t.pricing.tag}</span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black leading-tight mb-6 uppercase tracking-tighter italic">
              {lang === 'ar' ? (
                <>استثمر في <span className="gold-text-gradient uppercase">نفسك</span></>
              ) : (
                <>Invest in <span className="gold-text-gradient uppercase">Yourself</span></>
              )}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-medium">
              {t.pricing.subtitle}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {t.pricing.plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 sm:p-10 border transition-all duration-500 relative flex flex-col h-full bg-gradient-to-br ${
                plan.popular 
                  ? 'from-gold/20 to-background border-gold btn-geometric-shadow lg:scale-105 z-10' 
                  : 'from-white/5 to-background border-white/10 hover:border-white/20'
              }`}
            >
              {plan.popular && (
                 <div className={`absolute top-0 px-4 py-2 bg-gold text-background text-[10px] font-black uppercase tracking-[0.2em] ${lang === 'ar' ? 'right-0' : 'left-0'}`}>
                    {lang === 'ar' ? 'الأكثر طلباً' : 'Best Value'}
                 </div>
              )}
              
              <div className="mb-8 mt-4">
                <h3 className={`text-xl sm:text-2xl font-display font-black mb-2 ${plan.popular ? 'text-gold' : 'text-white'}`}>{plan.name}</h3>
                <p className="text-gray-400 text-xs sm:text-sm font-medium">{plan.desc}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-display font-black text-white">{plan.price}</span>
                <span className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">{t.pricing.monthly}</span>
              </div>

              <div className="flex-grow space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                   <div key={idx} className={`flex items-start gap-3 ${lang === 'ar' ? 'flex-row-reverse text-right' : ''}`}>
                    <div className={`p-1 rounded-full shrink-0 mt-0.5 ${plan.popular ? 'bg-gold/20 text-gold' : 'bg-white/10 text-white'}`}>
                       <Check size={14} />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                href="https://wa.me/201116214309"
                target="_blank"
                rel="noopener noreferrer"
                variant={plan.popular ? 'primary' : 'outline'} 
                className="w-full py-4 text-[10px] font-black uppercase tracking-widest"
              >
                {t.pricing.cta}
              </Button>
            </motion.div>
          ))}
        </div>
        
        <div className={`mt-20 p-6 sm:p-10 bg-gold text-background flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto btn-geometric-shadow border border-gold-light text-center ${lang === 'ar' ? 'md:text-right' : 'md:text-left'}`}>
           <div>
              <h3 className="text-2xl sm:text-3xl font-display font-black mb-1 uppercase tracking-tighter leading-tight">
                {lang === 'ar' ? 'لست متأكداً أي باقة تختار؟' : 'Unsure Which One is Right?'}
              </h3>
              <p className="text-background/90 font-bold text-[10px] sm:text-sm tracking-wide uppercase">
                {lang === 'ar' ? 'احجز مكالمة استشارية مجانية لمدة ١٥ دقيقة مع حسام لتحديد أهدافك.' : 'Take a 15-minute free audit with Hossam to map your goals.'}
              </p>
           </div>
           <Button 
             href="https://wa.me/201116214309"
             target="_blank"
             rel="noopener noreferrer"
             variant="secondary" 
             className="px-10 whitespace-nowrap shadow-2xl border-none w-full md:w-auto py-4 text-[10px]"
           >
             {t.nav.bookCall}
           </Button>
        </div>
      </div>
    </section>
  );
};
