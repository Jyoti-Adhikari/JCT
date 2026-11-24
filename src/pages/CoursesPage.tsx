import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionHeader } from '@/components/common/SectionHeader';
import { CourseFilter } from '@/features/courses/CourseFilter';
import { CourseCard } from '@/features/courses/CourseCard';
import { coursesData } from '@/features/courses/coursesData';
import { LanguageCategory } from '@/features/courses/types';
import { Info, HelpCircle } from 'lucide-react';
import { Button } from '@/components/common/Button';

export const CoursesPage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<LanguageCategory | 'all'>('all');

  const filteredCourses =
    selectedCategory === 'all'
      ? coursesData
      : coursesData.filter((c) => c.category === selectedCategory);

  const counts = {
    all: coursesData.length,
    chinese: coursesData.filter((c) => c.category === 'chinese').length,
    english: coursesData.filter((c) => c.category === 'english').length,
    arabic: coursesData.filter((c) => c.category === 'arabic').length,
  };

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          eyebrow={t('courses.eyebrow')}
          eyebrowColor="teal"
          title={t('courses.title')}
          subtitle={t('courses.subtitle')}
          centered
        />

        {/* Category Filters */}
        <div className="mb-12">
          <CourseFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            counts={counts}
          />
        </div>

        {/* Notice on transparent educational enrollment */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3.5 max-w-4xl mx-auto">
          <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <span className="font-bold block mb-0.5">{t('contact.inquiryNoticeTitle')}</span>
            <span>{t('courses.courseDetailNotice')}</span>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Bottom Assessment Callout */}
        <div className="mt-16 p-8 rounded-3xl bg-brand-tealSubtle border border-brand-teal/20 text-center max-w-3xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-brand-teal text-white flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-6 h-6 text-brand-yellow" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-brand-tealDark mb-2">
            Unsure of Your Current Proficiency Level?
          </h3>
          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            Our educational advisors conduct comprehensive placement assessments to ensure you are placed in the ideal cohort matched to your goals and pace.
          </p>
          <Button to="/contact" variant="flame" size="md">
            {t('hero.consultAdvisors')}
          </Button>
        </div>
      </div>
    </div>
  );
};

