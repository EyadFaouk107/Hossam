import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from '../ui/Button';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export const Hero = () => {
  const { lang, t } = useLanguage();

  const { scrollY } = useScroll();
  const useScrollYTransform = useTransform(scrollY, [0, 500], [0, 200]);
  const useScrollOpacityTransform = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className={`relative min-h-screen w-full flex items-center overflow-hidden py-12 lg:py-0 ${lang === 'ar' ? 'font-arabic' : ''}`}>
      {/* Visual background layers */}
      <div className="absolute inset-0 z-0">
         <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-10 md:opacity-20"
          >
            <source 
              src="https://player.vimeo.com/external/370331493.sd.mp4?s=7b0185196fcee49e49175d40131754020f69a53f&profile_id=139&oauth2_token_id=57447761" 
              type="video/mp4" 
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(212,175,55,0.1),transparent_50%)] z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-20 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            style={{ y: useScrollYTransform, opacity: useScrollOpacityTransform }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.2, delayChildren: 0.4 }
              }
            }}
            className={`flex flex-col items-center lg:col-span-2 max-w-4xl lg:mx-0 mx-auto ${lang === 'ar' ? 'lg:items-end text-center lg:text-right' : 'lg:items-start text-center lg:text-left'}`}
          >
             <motion.div 
               variants={{
                 hidden: { opacity: 0, x: lang === 'ar' ? 20 : -20 },
                 visible: { opacity: 1, x: 0 }
               }}
               className={`flex items-center gap-4 mb-6 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}
             >
              <span className="hidden lg:block h-[1px] w-12 bg-gold"></span>
              <span className="text-gold text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em]">
                {t.hero.tag}
              </span>
            </motion.div>
            
            <motion.h1 
              variants={{
                hidden: { opacity: 0, rotateX: -40, y: 50, scale: 0.9 },
                visible: { 
                  opacity: 1, 
                  rotateX: 0, 
                  y: 0, 
                  scale: 1,
                  transition: { type: "spring", stiffness: 100, damping: 20 }
                }
              }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-display font-black leading-[0.85] mb-8 tracking-tighter uppercase italic"
            >
              {lang === 'ar' ? (
                <>غير <span className="gold-text-gradient">جسمك</span> <br /> في ٩٠ يوم فقط.</>
              ) : (
                <>Transform Your <br /> <span className="gold-text-gradient">Body</span> in 90 Days.</>
              )}
            </motion.h1>
            
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 max-w-2xl lg:mx-0 leading-relaxed font-medium"
            >
              {t.hero.subtitle}
            </motion.p>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className={`flex flex-col sm:flex-row gap-6 items-center lg:justify-start w-full mb-12 ${lang === 'ar' ? 'lg:flex-row-reverse' : ''}`}
            >
              <Button 
                href="https://wa.me/201116214309"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-black px-12 py-5 text-sm font-black uppercase tracking-widest btn-geometric-shadow w-full sm:w-auto"
              >
                {t.hero.cta}
              </Button>
              
              <div className={`flex items-center gap-4 px-6 md:px-0 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                <div className={`flex ${lang === 'ar' ? 'space-x-reverse -space-x-3' : '-space-x-3'}`}>
                  {[1, 2, 3].map((u) => (
                    <div key={u} className="w-10 h-10 rounded-full border-2 border-background bg-gray-700 shadow-xl overflow-hidden flex items-center justify-center">
                       <span className="text-[10px] text-white font-black">+{u}k</span>
                    </div>
                  ))}
                </div>
                <span className={`text-[10px] font-bold text-gray-400 uppercase tracking-widest ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t.hero.stats.transformed}
                </span>
              </div>
            </motion.div>

            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              className="grid grid-cols-3 gap-8 sm:gap-12 border-t border-white/10 pt-10 w-full max-w-2xl"
            >
              <div className={lang === 'ar' ? 'text-right' : ''}>
                <div className="text-gold text-2xl sm:text-4xl font-black font-display tracking-tighter">8+</div>
                <div className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                  {t.hero.stats.years}
                </div>
              </div>
              <div className={lang === 'ar' ? 'text-right' : ''}>
                <div className="text-gold text-2xl sm:text-4xl font-black font-display tracking-tighter">95%</div>
                <div className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                  {t.hero.stats.success}
                </div>
              </div>
              <div className={lang === 'ar' ? 'text-right' : ''}>
                <div className="text-gold text-2xl sm:text-4xl font-black font-display tracking-tighter uppercase">ISS-M</div>
                <div className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                  {lang === 'ar' ? 'مدرب معتمد' : 'Certified'}
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>


      <div className={`hidden lg:flex absolute top-1/2 transform -translate-y-1/2 flex-col gap-8 items-center z-30 ${lang === 'ar' ? 'left-4' : 'right-4'}`}>
        <div className="h-20 w-[1px] bg-white/20"></div>
        <span className="rotate-90 text-[10px] font-black uppercase tracking-[0.5em] text-gray-500 whitespace-nowrap opacity-50">
          {lang === 'ar' ? 'تأسس سنة ٢٠٢٤' : 'ESTABLISHED MMXXIV'}
        </span>
        <div className="h-20 w-[1px] bg-white/20"></div>
      </div>
    </section>
  );
};
