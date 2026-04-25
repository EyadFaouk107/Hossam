import { motion } from 'motion/react';
import { Dumbbell, Utensils, Calendar, Users, MessageCircle, TrendingUp } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export const Services = () => {
  const { lang, t } = useLanguage();
  
  const icons = [
    <Users className="text-gold" />,
    <Dumbbell className="text-gold" />,
    <Utensils className="text-gold" />,
    <TrendingUp className="text-gold" />,
    <Video className="text-gold" />,
    <MessageCircle className="text-gold" />,
  ];

  function Video(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m22 8-6 4 6 4V8Z" />
        <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
      </svg>
    );
  }

  return (
    <section id="services" className={`py-32 px-6 bg-[#0a0a0a] ${lang === 'ar' ? 'font-arabic' : ''}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4 block">{t.services.tag}</span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black mb-6 uppercase tracking-tight italic">
              {lang === 'ar' ? (
                <>كل ما <span className="gold-text-gradient">تحتاجه</span> للنجاح</>
              ) : (
                <>Everything You <span className="gold-text-gradient">Need</span></>
              )}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-medium">
              {t.services.subtitle}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.services.items.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 sm:p-10 bg-white/5 border border-white/10 hover:border-gold/50 hover:bg-white/[0.08] transition-all duration-300 relative overflow-hidden group"
            >
              {service.tag && (
                <div className={`absolute top-0 px-3 py-1 bg-gold text-background text-[10px] font-black uppercase tracking-widest ${lang === 'ar' ? 'right-0' : 'left-0'}`}>
                  {service.tag}
                </div>
              )}
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gold/10 flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-gold group-hover:text-background transition-colors duration-300 border border-gold/20">
                {icons[i]}
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
