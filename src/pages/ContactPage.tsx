import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ContactForm } from '@/features/contact/ContactForm';
import { ContactInfo } from '@/features/contact/ContactInfo';

export const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          eyebrow={t('contact.eyebrow')}
          eyebrowColor="flame"
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
          centered
        />

        {/* Contact Grid: Form on Left (7 cols), Info on Right (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

