import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { CourseCard } from '@/features/courses/CourseCard';
import { coursesData } from '@/features/courses/coursesData';
import { Button } from '@/components/common/Button';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';

export const FeaturedCourses: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  // Select 3 flagship courses: 1 Chinese, 1 English, 1 Arabic
  const featured = [
    coursesData.find((c) => c.id === 'chinese-general')!,
    coursesData.find((c) => c.id === 'english-ielts')!,
    coursesData.find((c) => c.id === 'arabic-colloquial')!,
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Flagship Offerings"
          eyebrowColor="yellow"
          title={t('home.featuredCoursesTitle')}
          subtitle={t('home.featuredCoursesSubtitle')}
          action={
            <Button
              to="/courses"
              variant="primary"
              size="md"
              iconRight={<ArrowUpRight className={cn('w-4 h-4', isRTL && 'rotate-270')} />}
            >
              {t('common.viewAll')}
            </Button>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

