import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  type?: 'button' | 'submit';
  href?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
}

export const Button = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  type = 'button',
  href,
  target,
  rel,
  disabled
}: ButtonProps) => {
  const baseStyles = 'px-8 py-4 font-display font-black text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden active:scale-95';
  
  const variants = {
    primary: 'bg-gold text-background hover:bg-gold-light btn-geometric-shadow',
    secondary: 'bg-white text-background hover:bg-gray-200',
    outline: 'border border-gold text-gold hover:bg-gold hover:text-background',
    ghost: 'text-white hover:bg-white/10'
  };

  const Component = href ? motion.a : motion.button;
  const commonProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    onClick,
    className: `${baseStyles} ${variants[variant]} ${className}`
  };

  const componentProps = href 
    ? { ...commonProps, href, target, rel } 
    : { ...commonProps, type, disabled };

  return (
    <Component {...(componentProps as any)} disabled={disabled}>
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      )}
    </Component>
  );
};
