import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { ShieldCheck, Compass, HeartHandshake, Eye, Target, MapPin, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';

export const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const values = [
    {
      icon: ShieldCheck,
      color: 'text-brand-teal',
      bg: 'bg-brand-tealSubtle',
      border: 'border-brand-teal/20',
      title: t('about.value1Title'),
      desc: t('about.value1Desc'),
    },
    {
      icon: Compass,
      color: 'text-brand-red',
      bg: 'bg-brand-redSubtle',
      border: 'border-brand-red/20',
      title: t('about.value2Title'),
      desc: t('about.value2Desc'),
    },
    {
      icon: HeartHandshake,
      color: 'text-amber-700',
      bg: 'bg-brand-yellowSubtle',
      border: 'border-brand-yellow/30',
      title: t('about.value3Title'),
      desc: t('about.value3Desc'),
    },
    {
      icon: Target,
      color: 'text-emerald-700',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      title: t('about.value4Title'),
      desc: t('about.value4Desc'),
    },
  ];

  return (
    <div className="py-12 md:py-16">
      {/* Page Header Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border border-brand-red/20 bg-brand-redSubtle text-brand-red inline-block">
              {t('about.eyebrow')}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-tealDark tracking-tight leading-tight">
              {t('about.title')}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {t('about.intro')}
            </p>
            <div className="pt-2">
              <Button
                to="/contact"
                variant="flame"
                size="md"
                iconRight={<ArrowUpRight className={cn('w-4 h-4', isRTL && 'rotate-270')} />}
              >
                {t('hero.consultAdvisors')}
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border-2 border-brand-teal/20 shadow-card bg-brand-tealDark">
              <img
                src="/images/about/institution-building.svg"
                alt="JCT Education Center Institution Building"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-white py-16 border-y border-slate-100 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-card">
                <img
                  src="/images/about/mission-vision.svg"
                  alt="Mission and Vision Venn Diagram"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
              {/* Mission Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-brand-tealSubtle border border-brand-teal/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-teal text-white flex items-center justify-center font-bold">
                    <Target className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-tealDark">
                    {t('about.missionTitle')}
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {t('about.missionDesc')}
                </p>
              </div>

              {/* Vision Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-brand-redSubtle border border-brand-red/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-red text-white flex items-center justify-center font-bold">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-tealDark">
                    {t('about.visionTitle')}
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {t('about.visionDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Institutional Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <SectionHeader
          eyebrow="Core Values"
          eyebrowColor="yellow"
          title={t('about.valuesTitle')}
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <Card key={i} className="p-6 border border-slate-200">
                <div
                  className={`w-12 h-12 rounded-xl ${v.bg} ${v.border} border flex items-center justify-center mb-5`}
                >
                  <Icon className={`w-6 h-6 ${v.color}`} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-brand-tealDark mb-2">
                  {v.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {v.desc}
                </p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Cultural Exchange Illustration Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-tealDark text-white p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-brand-yellow text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Amman, Jordan</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {t('about.facilityTitle')}
              </h2>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {t('about.facilityDesc')}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-white/20">
                <img
                  src="/images/about/cultural-exchange.svg"
                  alt="Cultural Exchange"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

