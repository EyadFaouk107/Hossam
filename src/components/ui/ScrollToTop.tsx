import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, backgroundColor: '#d4af37' }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className={`fixed z-[60] bottom-40 sm:bottom-28 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-gold backdrop-blur-md flex items-center justify-center shadow-2xl transition-colors duration-300 group ${
            lang === 'ar' ? 'left-4 sm:left-10' : 'right-4 sm:right-10'
          }`}
          title={lang === 'ar' ? 'العودة للأعلى' : 'Scroll to Top'}
        >
          <ChevronUp className="w-6 h-6 group-hover:text-black transition-colors" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
