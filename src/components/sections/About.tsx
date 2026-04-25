import { motion } from 'motion/react';
import { Award, CheckCircle, Flame, Star } from 'lucide-react';
import { Button } from '../ui/Button';
import { useLanguage } from '../../hooks/useLanguage';

export const About = () => {
  const { lang, t } = useLanguage();
  
  const stats = [
    { label: t.about.stats.clients, value: "500+" },
    { label: t.about.stats.success, value: "95%" },
    { label: t.about.stats.exp, value: "8 Yrs" },
    { label: t.about.stats.certs, value: "12+" },
  ];

  return (
    <section id="about" className={`py-32 px-6 bg-[#0a0a0a] relative overflow-hidden ${lang === 'ar' ? 'font-arabic' : ''}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className={`relative ${lang === 'ar' ? 'order-2' : 'order-2 lg:order-1'}`}>
             <motion.div
               initial={{ opacity: 0, x: lang === 'ar' ? 30 : -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative z-10 grid grid-cols-2 gap-4"
             >
                <div className="space-y-4 pt-12">
                   <div className="rounded-2xl overflow-hidden aspect-[3/4] border border-white/5">
                      <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000" alt="Hossam Training" className="w-full h-full object-cover" />
                   </div>
                   <div className="rounded-2xl overflow-hidden aspect-square border border-white/5 bg-gold/10 flex items-center justify-center p-8 text-center flex-col">
                      <Award className="text-gold w-16 h-16 mb-4" />
                      <p className="text-gold font-bold text-xs uppercase tracking-widest">{lang === 'ar' ? 'مدرب رئيسي معتمد' : 'Certified Master Trainer'}</p>
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="rounded-2xl overflow-hidden aspect-square border border-white/5">
                      <img src="https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&q=80&w=1000" alt="Hossam Front" className="w-full h-full object-cover" />
                   </div>
                   <div className="rounded-2xl overflow-hidden aspect-[3/4] border border-white/5">
                      <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=1000" alt="Hossam Progress" className="w-full h-full object-cover" />
                   </div>
                </div>
             </motion.div>
             
             {/* Decorative Elements */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold/5 rounded-full blur-[120px] -z-10" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: lang === 'ar' ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`${lang === 'ar' ? 'order-1 text-center lg:text-right' : 'order-1 lg:order-2 text-center lg:text-left'}`}
          >
            <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">{t.about.tag}</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black leading-tight mb-8">
              {lang === 'ar' ? (
                <>حسام <span className="gold-text-gradient uppercase">يوسف</span></>
              ) : (
                <>HOSSAM <span className="gold-text-gradient uppercase">YOUSEF</span></>
              )}
            </h2>
            <div className="space-y-6 text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              <p>
                 {t.about.p1}
              </p>
              <p>
                 {t.about.p2}
              </p>
              <ul className={`space-y-4 pt-4 inline-block lg:block ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                 {t.about.points.map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-white font-medium text-sm">
                      <CheckCircle className="text-gold shrink-0" size={18} />
                      {item}
                   </li>
                 ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
               {stats.map((stat, i) => (
                 <div key={i} className="p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-xl sm:text-2xl font-display font-black text-white">{stat.value}</div>
                    <div className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">{stat.label}</div>
                 </div>
               ))}
            </div>

            <Button 
              href="https://www.instagram.com/j0e309?igsh=MWg4eHoxdmJxYW9qaA=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-12 py-5 text-xs"
            >
              {t.about.cta}
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
