import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Clock, Info, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/common/Card';

export const ContactInfo: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      {/* Location Card */}
      <Card className="p-6 border border-slate-200">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-brand-tealSubtle text-brand-teal flex items-center justify-center shrink-0 border border-brand-teal/20">
            <MapPin className="w-6 h-6 text-brand-teal" />
          </div>
          <div>
            <h4 className="text-base font-bold text-brand-tealDark mb-1">
              {t('contact.locationTitle')}
            </h4>
            <p className="text-sm font-semibold text-slate-800 mb-2">
              {t('contact.locationCity')}
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              {t('contact.locationNotice')}
            </p>
          </div>
        </div>
      </Card>

      {/* Operating Hours Card */}
      <Card className="p-6 border border-slate-200">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
            <Clock className="w-6 h-6 text-brand-yellow" />
          </div>
          <div>
            <h4 className="text-base font-bold text-brand-tealDark mb-1">
              {t('contact.hoursTitle')}
            </h4>
            <p className="text-sm font-medium text-slate-800">
              {t('contact.hoursDays')}
            </p>
            <p className="text-xs text-slate-500 mt-1">
              {t('contact.hoursWeekend')}
            </p>
          </div>
        </div>
      </Card>

      {/* Institutional Inquiries Notice */}
      <div className="rounded-2xl p-6 bg-brand-tealSubtle border border-brand-teal/20">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-bold text-brand-tealDark mb-1.5">
              {t('contact.inquiryNoticeTitle')}
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {t('contact.inquiryNoticeText')}
            </p>
            <ul className="mt-3 space-y-1.5 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Placement test booking</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Corporate & diplomatic cohort inquiries</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Academic counseling and course guidance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Visual Campus / Map Illustration */}
      <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
        <img
          src="/images/contact/location-amman.svg"
          alt="JCT Education Center Amman Location"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

