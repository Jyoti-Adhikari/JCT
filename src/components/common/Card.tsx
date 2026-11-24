import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  bordered?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  hoverEffect = true,
  bordered = true,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl overflow-hidden shadow-subtle transition-all duration-300',
        bordered && 'border border-slate-100',
        hoverEffect && 'hover:shadow-hover hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

