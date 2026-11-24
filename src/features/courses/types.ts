export type LanguageCategory = 'chinese' | 'english' | 'arabic';

export interface Course {
  id: string;
  category: LanguageCategory;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  levelEn: string;
  levelAr: string;
  durationEn: string;
  durationAr: string;
  standard: string;
  image: string;
  outcomesEn: string[];
  outcomesAr: string[];
}

