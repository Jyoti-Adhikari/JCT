import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';

export const CallToActionSection: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-brand-tealDark to-brand-teal text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-brand-yellow blur-2xl"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-brand-red blur-2xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-white">
          {t('home.ctaTitle')}
        </h2>
        <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto mb-8 leading-relaxed">
          {t('home.ctaDesc')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            to="/contact"
            variant="flame"
            size="lg"
            className="shadow-xl"
            iconRight={<ArrowUpRight className={cn('w-4 h-4', isRTL && 'rotate-270')} />}
          >
            {t('home.ctaButton')}
          </Button>
          <Button
            to="/courses"
            variant="outlineLight"
            size="lg"
          >
            {t('courses.title')}
          </Button>
        </div>
      </div>
    </section>
  );
};

