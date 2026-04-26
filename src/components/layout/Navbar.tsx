import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { Button } from '../ui/Button';
import { useLanguage } from '../../hooks/useLanguage';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, t, setLanguage } = useLanguage();
  const { scrollY } = useScroll();

  const handleLangChange = (newLang: string) => {
    setLanguage(newLang as 'en' | 'ar');
    if ((window as any).triggerTranslate) {
      (window as any).triggerTranslate(newLang);
    }
  };
  
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(5, 5, 5, 0)', 'rgba(5, 5, 5, 0.9)']
  );
  
  const navBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(12px)']
  );

  const menuItems = [
    { name: t.nav.home, href: '#' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.transformations, href: '#transformations' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.faq, href: '#faq' },
  ];

  return (
    <motion.nav
      style={{ backgroundColor: navBackground, backdropFilter: navBlur }}
      className={`fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-12 transition-all duration-300 ${lang === 'ar' ? 'font-arabic' : ''}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: lang === 'ar' ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-black tracking-tighter text-gold"
        >
          {lang === 'ar' ? 'حسام' : 'HOSSAM'} <span className="text-white">{lang === 'ar' ? 'يوسف' : 'YOUSEF'}</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center gap-10 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
          <div className={`flex items-center gap-10 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
            {menuItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-gold transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
          </div>
          
          <Button 
            href="#contact"
            variant="outline" 
            className="px-6 py-2 border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black"
          >
            {t.nav.clientPortal}
          </Button>

          <Button 
            href="https://wa.me/201116214309"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline" 
            className="px-6 py-2 border-gold text-gold text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-black"
          >
            {t.nav.bookCall}
          </Button>
          
          <div className="flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10">
            <button 
              onClick={() => handleLangChange('en')}
              className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${lang === 'en' ? 'bg-gold text-black' : 'text-gray-400 hover:text-white'}`}
            >
              EN
            </button>
            <button 
              onClick={() => handleLangChange('ar')}
              className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${lang === 'ar' ? 'bg-gold text-black' : 'text-gray-400 hover:text-white'}`}
            >
              AR
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
           <a href="https://www.instagram.com/j0e309?igsh=MWg4eHoxdmJxYW9qaA==" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors">
            <Instagram size={20} />
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-t border-white/10 px-6 py-10 flex flex-col gap-6 items-center"
        >
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-display font-bold tracking-wide hover:text-gold transition-colors"
            >
              {item.name}
            </a>
          ))}
          <Button 
            href="#contact"
            variant="outline"
            className="w-full"
            onClick={() => setIsOpen(false)}
          >
            {t.nav.clientPortal}
          </Button>

          <Button 
            href="https://wa.me/201116214309"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            {t.nav.bookCall}
          </Button>

          <div className="flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10 mt-4">
            <button 
              onClick={() => handleLangChange('en')}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${lang === 'en' ? 'bg-gold text-black' : 'text-gray-400 hover:text-white'}`}
            >
              ENGLISH
            </button>
            <button 
              onClick={() => handleLangChange('ar')}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${lang === 'ar' ? 'bg-gold text-black' : 'text-gray-400 hover:text-white'}`}
            >
              العربية
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};
