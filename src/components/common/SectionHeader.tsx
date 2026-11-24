import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeaderProps {
  eyebrow?: string;
  eyebrowColor?: 'flame' | 'yellow' | 'teal';
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  action?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  eyebrowColor = 'flame',
  title,
  subtitle,
  centered = false,
  className,
  action,
}) => {
  const eyebrowColors = {
    flame: 'text-brand-red bg-brand-redSubtle border-brand-red/20',
    yellow: 'text-amber-800 bg-brand-yellowSubtle border-brand-yellow/30',
    teal: 'text-brand-teal bg-brand-tealSubtle border-brand-teal/20',
  };

  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        centered && 'text-center mx-auto max-w-3xl',
        !centered && 'flex flex-col md:flex-row md:items-end md:justify-between gap-4',
        className
      )}
    >
      <div>
        {eyebrow && (
          <div className={cn('inline-block mb-3.5', centered && 'mx-auto')}>
            <span
              className={cn(
                'text-xs md:text-sm font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border',
                eyebrowColors[eyebrowColor]
              )}
            >
              {eyebrow}
            </span>
          </div>
        )}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-tealDark tracking-tight leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {subtitle}
          </p>
        )}
      </div>

      {action && !centered && <div className="mt-4 md:mt-0 shrink-0">{action}</div>}
    </div>
  );
};

