import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, BookOpen, CheckCircle2, Globe, Shield, Sparkles } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-tealDark via-brand-teal to-brand-tealDark text-white pt-12 pb-20 md:pt-16 md:pb-28">
      {/* Background Subtle Geometric Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-yellow rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-red rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left rtl:lg:text-right">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-xs sm:text-sm font-semibold text-brand-yellow">
              <Sparkles className="w-4 h-4 text-brand-yellow shrink-0 animate-pulse" />
              <span>{t('hero.badge')}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              {t('hero.titlePart1')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 underline decoration-brand-red decoration-4 underline-offset-8">
                {t('hero.titleHighlight')}
              </span>
            </h1>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t('hero.description')}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                to="/courses"
                variant="flame"
                size="lg"
                className="w-full sm:w-auto shadow-lg"
                iconRight={<ArrowUpRight className={cn('w-4 h-4', isRTL && 'rotate-270')} />}
              >
                {t('hero.exploreCourses')}
              </Button>
              <Button
                to="/contact"
                variant="outlineLight"
                size="lg"
                className="w-full sm:w-auto"
              >
                {t('hero.consultAdvisors')}
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 border-t border-white/15 grid grid-cols-3 gap-3 sm:gap-6 text-left rtl:text-right">
              <div className="bg-white/5 p-3 sm:p-4 rounded-xl border border-white/10">
                <Globe className="w-5 h-5 text-brand-yellow mb-1.5" />
                <p className="text-xs sm:text-sm font-bold text-white">Chinese · English · Arabic</p>
                <p className="text-[11px] text-slate-300 mt-0.5">3 Core Tracks</p>
              </div>

              <div className="bg-white/5 p-3 sm:p-4 rounded-xl border border-white/10">
                <Shield className="w-5 h-5 text-brand-red mb-1.5" />
                <p className="text-xs sm:text-sm font-bold text-white">HSK & CEFR Standards</p>
                <p className="text-[11px] text-slate-300 mt-0.5">Internationally Aligned</p>
              </div>

              <div className="bg-white/5 p-3 sm:p-4 rounded-xl border border-white/10">
                <BookOpen className="w-5 h-5 text-emerald-400 mb-1.5" />
                <p className="text-xs sm:text-sm font-bold text-white">Amman Campus</p>
                <p className="text-[11px] text-slate-300 mt-0.5">Central Hub in Jordan</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Graphic (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-white/15 bg-brand-tealDark">
              <img
                src="/images/home/hero-banner.svg"
                alt="JCT Education Center - Language Learning Bridge in Jordan"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

