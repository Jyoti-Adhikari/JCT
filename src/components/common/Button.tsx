import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'flame' | 'yellow' | 'outline' | 'outlineLight' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  href,
  iconLeft,
  iconRight,
  className,
  children,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none select-none';

  const variantClasses = {
    primary:
      'bg-brand-teal text-white hover:bg-brand-tealDark shadow-sm hover:shadow-card focus-visible:ring-brand-teal',
    flame:
      'bg-brand-red text-white hover:bg-brand-redHover shadow-sm hover:shadow-card focus-visible:ring-brand-red',
    yellow:
      'bg-brand-yellow text-brand-tealDark hover:bg-brand-yellowHover shadow-sm hover:shadow-card focus-visible:ring-brand-yellow',
    outline:
      'border-2 border-brand-teal text-brand-teal bg-transparent hover:bg-brand-teal hover:text-white focus-visible:ring-brand-teal',
    outlineLight:
      'border-2 border-white/80 text-white bg-transparent hover:bg-white hover:text-brand-teal focus-visible:ring-white',
    ghost:
      'text-brand-teal bg-transparent hover:bg-brand-tealSubtle focus-visible:ring-brand-teal',
  };

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  };

  const combinedClasses = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  const content = (
    <>
      {iconLeft && <span className="inline-flex shrink-0">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className="inline-flex shrink-0">{iconRight}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};

