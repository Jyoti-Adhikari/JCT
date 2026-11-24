import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface LanguageSwitcherProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className,
  variant = 'light',
}) => {
  const { currentLanguage, toggleLanguage } = useLanguage();

  const isDark = variant === 'dark';

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs md:text-sm font-bold transition-all duration-200 border select-none',
        !isDark &&
          'bg-white text-brand-teal border-slate-200 hover:border-brand-teal hover:bg-brand-tealSubtle shadow-xs',
        isDark &&
          'bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/40',
        className
      )}
      aria-label={currentLanguage === 'en' ? 'التحويل إلى العربية' : 'Switch to English'}
      title={currentLanguage === 'en' ? 'التحويل إلى العربية' : 'Switch to English'}
    >
      <Globe className="w-4 h-4 text-brand-yellow shrink-0" />
      <span className="font-semibold">
        {currentLanguage === 'en' ? 'العربية' : 'English'}
      </span>
      <span
        className={cn(
          'text-[10px] uppercase font-bold px-1.5 py-0.5 rounded',
          !isDark && 'bg-brand-teal text-white',
          isDark && 'bg-brand-yellow text-brand-tealDark'
        )}
      >
        {currentLanguage === 'en' ? 'AR' : 'EN'}
      </span>
    </button>
  );
};

