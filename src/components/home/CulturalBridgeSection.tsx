import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Globe2, Compass, Layers } from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';

export const CulturalBridgeSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Map (6 cols) */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border-2 border-brand-teal/20 shadow-card bg-brand-tealDark">
              <img
                src="/images/home/global-reach.svg"
                alt="JCT Education Center - Jordan Cultural Bridge to China and the World"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Text Content (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeader
              eyebrow="Jordan to the World"
              eyebrowColor="teal"
              title={t('home.bridgeTitle')}
              subtitle={t('home.bridgeDesc')}
              className="mb-6 md:mb-8"
            />

            {/* 3 Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-brand-tealSubtle border border-brand-teal/20">
                <MapPin className="w-5 h-5 text-brand-teal mb-2" />
                <p className="font-bold text-brand-tealDark text-base">{t('home.bridgeStat1')}</p>
                <p className="text-xs text-slate-600 mt-1">{t('home.bridgeStat1Sub')}</p>
              </div>

              <div className="p-4 rounded-2xl bg-brand-redSubtle border border-brand-red/20">
                <Layers className="w-5 h-5 text-brand-red mb-2" />
                <p className="font-bold text-brand-tealDark text-base">{t('home.bridgeStat2')}</p>
                <p className="text-xs text-slate-600 mt-1">{t('home.bridgeStat2Sub')}</p>
              </div>

              <div className="p-4 rounded-2xl bg-brand-yellowSubtle border border-brand-yellow/30">
                <Compass className="w-5 h-5 text-amber-700 mb-2" />
                <p className="font-bold text-brand-tealDark text-base">{t('home.bridgeStat3')}</p>
                <p className="text-xs text-slate-600 mt-1">{t('home.bridgeStat3Sub')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

