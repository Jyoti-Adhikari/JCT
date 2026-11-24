import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { FeaturedCourses } from '@/components/home/FeaturedCourses';
import { CulturalBridgeSection } from '@/components/home/CulturalBridgeSection';
import { CallToActionSection } from '@/components/home/CallToActionSection';

export const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <WhyChooseUs />
      <FeaturedCourses />
      <CulturalBridgeSection />
      <CallToActionSection />
    </div>
  );
};

