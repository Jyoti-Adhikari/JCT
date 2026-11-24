import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps {
  variant?: 'teal' | 'red' | 'yellow' | 'neutral' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'teal',
  size = 'md',
  className,
  children,
  icon,
}) => {
  const variantClasses = {
    teal: 'bg-brand-tealSubtle text-brand-teal border border-brand-teal/15 font-semibold',
    red: 'bg-brand-redSubtle text-brand-red border border-brand-red/15 font-semibold',
    yellow: 'bg-brand-yellowSubtle text-amber-800 border border-brand-yellow/20 font-semibold',
    neutral: 'bg-slate-100 text-slate-700 border border-slate-200 font-medium',
    outline: 'border border-brand-teal/30 text-brand-teal bg-white font-semibold',
  };

  const sizeClasses = {
    sm: 'text-xs px-2.5 py-0.5 rounded-full gap-1',
    md: 'text-xs md:text-sm px-3 py-1 rounded-full gap-1.5',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center tracking-wide',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

