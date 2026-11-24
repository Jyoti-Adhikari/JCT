import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { useLanguage } from '@/hooks/useLanguage';

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  program: string;
  skillLevel: string;
  schedule: string;
  message: string;
}

const initialFormState: FormState = {
  fullName: '',
  email: '',
  phone: '',
  program: '',
  skillLevel: '',
  schedule: '',
  message: '',
};

export const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Pre-fill program if coming from course page link ?program=...
  useEffect(() => {
    const programParam = searchParams.get('program');
    if (programParam) {
      if (programParam === 'chinese') setFormData((prev) => ({ ...prev, program: 'chinese' }));
      else if (programParam === 'english') setFormData((prev) => ({ ...prev, program: 'english' }));
      else if (programParam === 'arabic') setFormData((prev) => ({ ...prev, program: 'arabic' }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.program) {
      setErrorMsg(isRTL ? 'يرجى تعبئة الحقول الأساسية المطلوبة.' : 'Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    // Simulate frontend submission (no backend / static architecture)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData(initialFormState);
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-10 border border-emerald-100 shadow-card text-center animate-fadeIn">
        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5 border-2 border-emerald-200">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-brand-tealDark mb-3">
          {t('contact.successTitle')}
        </h3>
        <p className="text-slate-600 max-w-md mx-auto mb-8 leading-relaxed text-sm sm:text-base">
          {t('contact.successMsg')}
        </p>
        <Button onClick={handleReset} variant="primary" size="md">
          {t('contact.sendAnother')}
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-card">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-brand-tealDark mb-2">
          {t('contact.formTitle')}
        </h3>
        <p className="text-sm text-slate-600">
          {t('contact.formSubtitle')}
        </p>
      </div>

      {errorMsg && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            {t('contact.fullName')} <span className="text-brand-red">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder={t('contact.fullNamePlaceholder')}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all outline-none"
          />
        </div>

        {/* Email & Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              {t('contact.email')} <span className="text-brand-red">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder={t('contact.emailPlaceholder')}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              {t('contact.phone')} <span className="text-brand-red">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder={t('contact.phonePlaceholder')}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all outline-none"
            />
          </div>
        </div>

        {/* Program of Interest */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            {t('contact.programInterest')} <span className="text-brand-red">*</span>
          </label>
          <select
            name="program"
            required
            value={formData.program}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all outline-none"
          >
            <option value="">-- {t('contact.selectProgram')} --</option>
            <option value="chinese">{t('contact.progChinese')}</option>
            <option value="english">{t('contact.progEnglish')}</option>
            <option value="arabic">{t('contact.progArabic')}</option>
            <option value="general">{t('contact.progGeneral')}</option>
          </select>
        </div>

        {/* Skill Level & Schedule Preferences */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              {t('contact.skillLevel')}
            </label>
            <select
              name="skillLevel"
              value={formData.skillLevel}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all outline-none"
            >
              <option value="">-- {t('contact.selectLevel')} --</option>
              <option value="beginner">{t('contact.levelBeginner')}</option>
              <option value="elementary">{t('contact.levelElementary')}</option>
              <option value="intermediate">{t('contact.levelIntermediate')}</option>
              <option value="advanced">{t('contact.levelAdvanced')}</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              {t('contact.preferredSchedule')}
            </label>
            <select
              name="schedule"
              value={formData.schedule}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all outline-none"
            >
              <option value="">-- {t('contact.selectSchedule')} --</option>
              <option value="morning">{t('contact.schedMorning')}</option>
              <option value="evening">{t('contact.schedEvening')}</option>
              <option value="weekend">{t('contact.schedWeekend')}</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            {t('contact.message')}
          </label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder={t('contact.messagePlaceholder')}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all outline-none resize-none"
          />
        </div>

        {/* Notice on pricing / schedule */}
        <p className="text-xs text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-100">
          {t('contact.inquiryNoticeText')}
        </p>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="flame"
          size="lg"
          disabled={isSubmitting}
          className="w-full justify-center text-base"
          iconRight={<Send className="w-4 h-4" />}
        >
          {isSubmitting ? t('contact.submitting') : t('contact.submit')}
        </Button>
      </form>
    </div>
  );
};

