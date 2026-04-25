import { motion } from 'motion/react';
import { BeforeAfterSlider } from '../ui/BeforeAfterSlider';

export const Transformations = () => {
  const results = [
    {
      name: "Ahmed K.",
      time: "12 Weeks",
      result: "-12kg Fat, +4kg Muscle",
      beforeImg: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=60&w=1000",
      afterImg: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1000",
      type: "Fat Loss"
    },
    {
      name: "Omar M.",
      time: "16 Weeks",
      result: "Total Physique Rebirth",
      beforeImg: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=60&w=1000",
      afterImg: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=1000",
      type: "Muscle Gain"
    },
    {
      name: "Sara T.",
      time: "10 Weeks",
      result: "Athletic Conditioning",
      beforeImg: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=60&w=1000",
      afterImg: "https://images.unsplash.com/photo-1434681941759-1896c71f54c4?auto=format&fit=crop&q=80&w=1000",
      type: "Body Recomp"
    },
    {
      name: "Youssef Z.",
      time: "90 Days",
      result: "Elite Ab Definition",
      beforeImg: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&q=60&w=1000",
      afterImg: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=1000",
      type: "Core Focus"
    }
  ];

  return (
    <section id="transformations" className="py-24 sm:py-32 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left">
          <div className="max-w-2xl mx-auto md:mx-0">
            <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4 block">Proven Results</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black leading-[0.95] mb-4 uppercase italic">
               Real People, <br /><span className="gold-text-gradient">Real Evolution.</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-medium">
              These aren't just photos. They are the product of 90 days of discipline, structured training, and relentless execution. Drag the slider to see the transformation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
          {results.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col group"
            >
              <div className="mb-6">
                <BeforeAfterSlider 
                  beforeImage={item.beforeImg}
                  afterImage={item.afterImg}
                />
              </div>
              
              <div className="px-2">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded bg-gold/10 border border-gold/20 text-[9px] font-black text-gold uppercase tracking-widest">
                    {item.time}
                  </span>
                  <span className="text-[9px] text-gray-500 uppercase tracking-widest font-black">
                    • {item.type}
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-display font-black text-white mb-1 uppercase tracking-tight">{item.name}</h4>
                <p className="text-gold font-black text-xs sm:text-sm tracking-wide">
                  {item.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 py-12 border-y border-white/5 text-center">
            <p className="text-gray-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-60">
                *Results vary based on individual effort, nutrition, and consistency. No shortcuts taken.
            </p>
        </div>
      </div>
    </section>
  );
};

