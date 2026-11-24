import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Compass, Users, MessageSquare } from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Card } from '@/components/common/Card';

export const WhyChooseUs: React.FC = () => {
  const { t } = useTranslation();

  const pillars = [
    {
      icon: ShieldCheck,
      iconColor: 'text-brand-teal',
      bgColor: 'bg-brand-tealSubtle',
      borderColor: 'border-brand-teal/20',
      title: t('home.pillar1Title'),
      desc: t('home.pillar1Desc'),
    },
    {
      icon: Compass,
      iconColor: 'text-brand-red',
      bgColor: 'bg-brand-redSubtle',
      borderColor: 'border-brand-red/20',
      title: t('home.pillar2Title'),
      desc: t('home.pillar2Desc'),
    },
    {
      icon: Users,
      iconColor: 'text-amber-700',
      bgColor: 'bg-brand-yellowSubtle',
      borderColor: 'border-brand-yellow/30',
      title: t('home.pillar3Title'),
      desc: t('home.pillar3Desc'),
    },
    {
      icon: MessageSquare,
      iconColor: 'text-emerald-700',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      title: t('home.pillar4Title'),
      desc: t('home.pillar4Desc'),
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Distinctive Excellence"
          eyebrowColor="flame"
          title={t('home.welcomeTitle')}
          subtitle={t('home.welcomeSubtitle')}
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={index}
                className="p-6 sm:p-7 border border-slate-200 flex flex-col items-start text-start"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${pillar.bgColor} ${pillar.borderColor} border flex items-center justify-center mb-6`}
                >
                  <Icon className={`w-7 h-7 ${pillar.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-brand-tealDark mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Feature Graphic Showcase */}
        <div className="mt-14 max-w-4xl mx-auto rounded-3xl overflow-hidden border border-slate-200 shadow-card">
          <img
            src="/images/home/why-choose-us.svg"
            alt="Why Choose JCT Education Center"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

