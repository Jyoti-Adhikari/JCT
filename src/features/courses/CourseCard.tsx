import React from 'react';
import { useTranslation } from 'react-i18next';
import { Clock, BarChart3, CheckCircle2, ArrowUpRight, Award } from 'lucide-react';
import { Course } from './types';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';

export interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { t } = useTranslation();
  const { currentLanguage, isRTL } = useLanguage();

  const isAr = currentLanguage === 'ar';
  const title = isAr ? course.titleAr : course.titleEn;
  const description = isAr ? course.descriptionAr : course.descriptionEn;
  const level = isAr ? course.levelAr : course.levelEn;
  const duration = isAr ? course.durationAr : course.durationEn;
  const outcomes = isAr ? course.outcomesAr : course.outcomesEn;

  const categoryBadgeVariant = {
    chinese: 'red' as const,
    english: 'teal' as const,
    arabic: 'yellow' as const,
  };

  const categoryLabel = {
    chinese: isAr ? 'اللغة الصينية' : 'Chinese (Mandarin)',
    english: isAr ? 'اللغة الإنجليزية' : 'English',
    arabic: isAr ? 'العربية للناطقين بغيرها' : 'Arabic for Non-Native',
  };

  return (
    <Card className="flex flex-col h-full border border-slate-200/90 hover:border-brand-teal/40">
      {/* Course Image Header */}
      <div className="relative aspect-[16/10] overflow-hidden bg-brand-tealSubtle">
        <img
          src={course.image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3">
          <Badge variant={categoryBadgeVariant[course.category]} size="md">
            {categoryLabel[course.category]}
          </Badge>
        </div>
        <div className="absolute bottom-3 left-3 rtl:left-auto rtl:right-3">
          <Badge variant="neutral" size="sm" icon={<Award className="w-3.5 h-3.5 text-brand-teal" />}>
            {course.standard}
          </Badge>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-grow flex flex-col">
        {/* Meta details: Level & Duration */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-3 font-medium">
          <span className="flex items-center gap-1.5">
            <BarChart3 className="w-3.5 h-3.5 text-brand-teal" />
            <span>{level}</span>
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-brand-red" />
            <span>{duration}</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-brand-tealDark mb-3 leading-snug line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 mb-5 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Learning Outcomes */}
        <div className="mt-auto pt-4 border-t border-slate-100">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            {t('courses.outcomes')}
          </h4>
          <ul className="space-y-2 mb-6">
            {outcomes.slice(0, 3).map((item, index) => (
              <li key={index} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="line-clamp-2 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          {/* Action CTA */}
          <Button
            to={`/contact?program=${course.category}`}
            variant="outline"
            size="sm"
            className="w-full justify-between group hover:border-brand-teal"
            iconRight={
              <ArrowUpRight
                className={cn(
                  'w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5',
                  isRTL && 'rotate-270 group-hover:-translate-x-0.5'
                )}
              />
            }
          >
            <span>{t('courses.inquireCourse')}</span>
          </Button>
        </div>
      </div>
    </Card>
  );
};

