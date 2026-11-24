import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Clock, Mail, Phone, ShieldCheck, ChevronRight, ChevronLeft } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const currentYear = new Date().getFullYear();
  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight;

  return (
    <footer className="bg-brand-tealDark text-white mt-auto border-t-4 border-brand-teal">
      {/* Top Banner with Brand Distinction */}
      <div className="bg-brand-teal/30 py-6 px-4 border-b border-brand-tealLight/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-yellow/20 border border-brand-yellow/40 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-brand-yellow" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">
                {t('hero.badgeStandards')}
              </p>
              <p className="text-xs text-slate-300">
                {t('footer.disclaimer')}
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-white bg-brand-red hover:bg-brand-redHover px-4 py-2 rounded-lg transition-colors shadow-sm"
          >
            <span>{t('nav.inquireNow')}</span>
            <ChevronIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Institutional Identity */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img
                src="/images/branding/jct-logo-white.svg"
                alt="JCT Education Center"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-brand-yellow">
              <span className="w-2 h-2 rounded-full bg-brand-yellow"></span>
              <span>{t('footer.country')}</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 border-b border-brand-tealLight/40 pb-2 inline-block">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-brand-yellow transition-colors inline-flex items-center gap-1.5">
                  <ChevronIcon className="w-3.5 h-3.5 text-slate-400" />
                  <span>{t('nav.home')}</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-yellow transition-colors inline-flex items-center gap-1.5">
                  <ChevronIcon className="w-3.5 h-3.5 text-slate-400" />
                  <span>{t('nav.about')}</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-brand-yellow transition-colors inline-flex items-center gap-1.5">
                  <ChevronIcon className="w-3.5 h-3.5 text-slate-400" />
                  <span>{t('nav.courses')}</span>
                </Link>
              </li>
              <li>
                <Link to="/approach" className="hover:text-brand-yellow transition-colors inline-flex items-center gap-1.5">
                  <ChevronIcon className="w-3.5 h-3.5 text-slate-400" />
                  <span>{t('nav.approach')}</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-yellow transition-colors inline-flex items-center gap-1.5">
                  <ChevronIcon className="w-3.5 h-3.5 text-slate-400" />
                  <span>{t('nav.contact')}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Language Programs */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 border-b border-brand-tealLight/40 pb-2 inline-block">
              {t('footer.programs')}
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link to="/courses" className="hover:text-brand-yellow transition-colors block">
                  <span className="font-semibold text-white block">Chinese (Mandarin)</span>
                  <span className="text-xs text-slate-400">HSK 1-6 & Business Chinese</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-brand-yellow transition-colors block">
                  <span className="font-semibold text-white block">English Programs</span>
                  <span className="text-xs text-slate-400">CEFR A1-C2 & IELTS Academic</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-brand-yellow transition-colors block">
                  <span className="font-semibold text-white block">Arabic for Non-Native Speakers</span>
                  <span className="text-xs text-slate-400">Modern Standard (MSA) & Levantine</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Institutional Location & Hours */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 border-b border-brand-tealLight/40 pb-2 inline-block">
              {t('footer.contactInfo')}
            </h3>
            <div className="space-y-3.5 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                <span>{t('contact.locationCity')}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                <div>
                  <p>{t('contact.hoursDays')}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{t('contact.hoursWeekend')}</p>
                </div>
              </div>
              <div className="pt-2 text-xs text-slate-400 bg-white/5 p-3 rounded-lg border border-white/10">
                {t('contact.locationNotice')}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-brand-tealLight/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} {t('footer.centerName')}. {t('footer.allRightsReserved')}
          </p>
          <p className="flex items-center gap-2">
            <span>Amman, Jordan</span>
            <span>·</span>
            <span className="text-brand-yellow">JCT Education Center</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

