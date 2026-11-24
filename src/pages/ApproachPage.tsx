import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import {
  MessageCircle,
  Users2,
  Globe2,
  LineChart,
  ClipboardCheck,
  GraduationCap,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';

export const ApproachPage: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const pillars = [
    {
      icon: MessageCircle,
      image: '/images/approach/communicative-method.svg',
      title: t('approach.pillar1Title'),
      desc: t('approach.pillar1Desc'),
      color: 'text-brand-teal',
      bg: 'bg-brand-tealSubtle',
      tag: 'Day 1 Immersion',
    },
    {
      icon: Users2,
      image: '/images/approach/small-groups.svg',
      title: t('approach.pillar2Title'),
      desc: t('approach.pillar2Desc'),
      color: 'text-brand-red',
      bg: 'bg-brand-redSubtle',
      tag: 'Max 8-12 Students',
    },
    {
      icon: Globe2,
      image: '/images/approach/cultural-immersion.svg',
      title: t('approach.pillar3Title'),
      desc: t('approach.pillar3Desc'),
      color: 'text-amber-700',
      bg: 'bg-brand-yellowSubtle',
      tag: 'Cultural Context',
    },
    {
      icon: LineChart,
      image: '/images/approach/continuous-assessment.svg',
      title: t('approach.pillar4Title'),
      desc: t('approach.pillar4Desc'),
      color: 'text-emerald-700',
      bg: 'bg-emerald-50',
      tag: 'Measurable Benchmarks',
    },
  ];

  const steps = [
    {
      num: '01',
      title: t('approach.step1Title'),
      desc: t('approach.step1Desc'),
      icon: ClipboardCheck,
    },
    {
      num: '02',
      title: t('approach.step2Title'),
      desc: t('approach.step2Desc'),
      icon: Sparkles,
    },
    {
      num: '03',
      title: t('approach.step3Title'),
      desc: t('approach.step3Desc'),
      icon: LineChart,
    },
    {
      num: '04',
      title: t('approach.step4Title'),
      desc: t('approach.step4Desc'),
      icon: GraduationCap,
    },
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          eyebrow={t('approach.eyebrow')}
          eyebrowColor="flame"
          title={t('approach.title')}
          subtitle={t('approach.subtitle')}
          centered
        />

        {/* 4 Pillars Grid with Visual Assets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <Card key={idx} className="border border-slate-200 overflow-hidden flex flex-col">
                <div className="relative aspect-[16/9] bg-slate-100 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-brand-tealDark shadow-sm border border-slate-200">
                      {pillar.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2.5 rounded-xl ${pillar.bg}`}>
                      <Icon className={`w-5 h-5 ${pillar.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-brand-tealDark">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* The 4-Step Student Journey */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-card mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border border-brand-teal/20 bg-brand-tealSubtle text-brand-teal inline-block mb-3">
              Structured Pathway
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-tealDark">
              {t('approach.lifecycleTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-brand-sand border border-slate-200/80 flex flex-col items-start relative group hover:border-brand-teal transition-colors"
                >
                  <div className="flex items-center justify-between w-full mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-teal text-white flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6 text-brand-yellow" />
                    </div>
                    <span className="text-2xl font-black text-slate-300 font-mono">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-brand-tealDark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Callout */}
        <div className="text-center">
          <Button
            to="/contact"
            variant="flame"
            size="lg"
            iconRight={<ArrowUpRight className={cn('w-4 h-4', isRTL && 'rotate-270')} />}
          >
            {t('home.ctaButton')}
          </Button>
        </div>
      </div>
    </div>
  );
};

