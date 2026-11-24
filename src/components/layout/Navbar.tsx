import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react';
import { LanguageSwitcher } from '@/components/common/LanguageSwitcher';
import { Button } from '@/components/common/Button';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/hooks/useLanguage';

export const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/courses', label: t('nav.courses') },
    { to: '/approach', label: t('nav.approach') },
    { to: '/contact', label: t('nav.contact') },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Institutional Top Bar */}
      <div className="bg-brand-tealDark text-white/90 text-xs py-2 px-4 border-b border-brand-tealLight/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <span className="flex items-center gap-1.5 font-medium text-emerald-200">
              <MapPin className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
              <span>Amman, Jordan · عمّان، الأردن</span>
            </span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-white/80">
              <span className="w-2 h-2 rounded-full bg-brand-yellow shrink-0"></span>
              <span>{t('hero.badgeStandards')}</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <LanguageSwitcher variant="dark" />
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={cn(
          'w-full bg-white/95 backdrop-blur-md transition-all duration-300 border-b',
          scrolled ? 'shadow-md border-slate-200/80 py-3' : 'border-slate-100 py-4'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <img
              src="/images/branding/jct-logo.svg"
              alt="JCT Education Center Logo"
              className="h-10 sm:h-12 w-auto transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    'px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 relative',
                    active
                      ? 'text-brand-teal bg-brand-tealSubtle font-bold'
                      : 'text-slate-700 hover:text-brand-teal hover:bg-slate-50'
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-brand-red rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              to="/contact"
              variant="flame"
              size="sm"
              iconRight={<ArrowUpRight className={cn('w-4 h-4', isRTL && 'rotate-270')} />}
            >
              {t('nav.inquireNow')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-brand-teal hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-teal"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const active = isActive(link.to);
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={cn(
                      'px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between',
                      active
                        ? 'bg-brand-tealSubtle text-brand-teal font-bold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-brand-teal'
                    )}
                  >
                    <span>{link.label}</span>
                    {active && <span className="w-2 h-2 rounded-full bg-brand-red"></span>}
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-3">
                <Button
                  to="/contact"
                  variant="flame"
                  size="md"
                  className="w-full justify-center"
                  iconRight={<ArrowUpRight className={cn('w-4 h-4', isRTL && 'rotate-270')} />}
                >
                  {t('nav.inquireNow')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

