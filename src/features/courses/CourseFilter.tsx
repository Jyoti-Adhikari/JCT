import React from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageCategory } from './types';
import { cn } from '@/lib/utils';

export interface CourseFilterProps {
  selectedCategory: LanguageCategory | 'all';
  onSelectCategory: (category: LanguageCategory | 'all') => void;
  counts: {
    all: number;
    chinese: number;
    english: number;
    arabic: number;
  };
}

export const CourseFilter: React.FC<CourseFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  counts,
}) => {
  const { t } = useTranslation();

  const filterTabs = [
    { id: 'all' as const, label: t('courses.filterAll'), count: counts.all },
    { id: 'chinese' as const, label: t('courses.filterChinese'), count: counts.chinese },
    { id: 'english' as const, label: t('courses.filterEnglish'), count: counts.english },
    { id: 'arabic' as const, label: t('courses.filterArabic'), count: counts.arabic },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 bg-slate-100/90 rounded-2xl max-w-fit mx-auto border border-slate-200/80">
      {filterTabs.map((tab) => {
        const active = selectedCategory === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onSelectCategory(tab.id)}
            className={cn(
              'px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 select-none',
              active
                ? 'bg-brand-teal text-white shadow-sm'
                : 'text-slate-600 hover:text-brand-teal hover:bg-white/60'
            )}
          >
            <span>{tab.label}</span>
            <span
              className={cn(
                'text-[11px] px-2 py-0.5 rounded-full font-bold',
                active ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
              )}
            >
              {tab.count}
            </span>
          </button>
        );
      })}
    </div>
  );
};

