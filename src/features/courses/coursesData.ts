import { Course } from './types';

export const coursesData: Course[] = [
  // Chinese Programs
  {
    id: 'chinese-general',
    category: 'chinese',
    titleEn: 'Comprehensive Mandarin Chinese (Foundations to Intermediate)',
    titleAr: 'اللغة الصينية الشاملة (من التأسيس إلى المستوى المتوسط)',
    descriptionEn:
      'Structured mastery of standard Mandarin Chinese, covering Pinyin phonetics, essential Hanzi characters, foundational grammar, and real-life conversational dialogues.',
    descriptionAr:
      'إتقان منهجي للغة الصينية القياسية، يشمل الصوتيات (بينيين)، الأحرف الصينية الأساسية (هانزي)، القواعد النحوية، والمحادثات اليومية الواقعية.',
    levelEn: 'Beginner to Intermediate (HSK 1 - 3)',
    levelAr: 'من المبتدئ إلى المتوسط (HSK 1 - 3)',
    durationEn: '12 – 14 Weeks per level',
    durationAr: '12 – 14 أسبوعاً لكل مستوى',
    standard: 'HSK 1-3 Aligned',
    image: '/images/courses/chinese/chinese-general.svg',
    outcomesEn: [
      'Master accurate pronunciation and tonal clarity in standard Mandarin',
      'Read and write high-frequency Hanzi characters with correct stroke order',
      'Hold spontaneous conversations on daily, travel, and social situations',
      'Build a strong foundation for official HSK examination pathways',
    ],
    outcomesAr: [
      'إتقان مخارج الحروف والنغمات الصوتية الدقيقة في الماندرين القياسية',
      'قراءة وكتابة الرموز الصينية الشائعة بتسلسل حركات القلم الصحيح',
      'إجراء محادثات عفوية وواثقة في مواقف الحياة اليومية والسفر',
      'بناء قاعدة لغوية متينة تؤهل للتقدم لاختبارات HSK الرسمية',
    ],
  },
  {
    id: 'chinese-business',
    category: 'chinese',
    titleEn: 'Business Mandarin & Trade Communication',
    titleAr: 'اللغة الصينية للأعمال والتبادل التجاري',
    descriptionEn:
      'Specialized curriculum focused on professional commercial terminology, corporate etiquette in China, contract discussions, and bilateral cross-border trade negotiations.',
    descriptionAr:
      'منهج متخصص يركز على المصطلحات التجارية والمالية، وآداب العمل المؤسسي في الصين، ومفاوضات العقود والتجارة الثنائية الدولية.',
    levelEn: 'Intermediate to Advanced',
    levelAr: 'المستوى المتوسط إلى المتقدم',
    durationEn: '10 – 12 Weeks',
    durationAr: '10 – 12 أسبوعاً',
    standard: 'BCT / HSK 4-5',
    image: '/images/courses/chinese/chinese-business.svg',
    outcomesEn: [
      'Acquire industry-specific vocabulary for commerce, supply chains, and logistics',
      'Conduct professional business correspondence, emails, and presentations in Chinese',
      'Understand Chinese business culture, banquet etiquette, and negotiation customs',
      'Participate effectively in trade expos, supplier meetings, and formal partnerships',
    ],
    outcomesAr: [
      'اكتساب مصطلحات التجارة وسلاسل الإمداد والاستيراد والتصدير',
      'صياغة المراسلات المهنية والعروض التقديمية باللغة الصينية المؤسسية',
      'فهم ثقافة وبيئة الأعمال الصينية وآداب التفاوض والاجتماعات',
      'المشاركة الفاعلة في المعارض التجارية والاجتماعات مع الشركات والشركاء',
    ],
  },
  {
    id: 'chinese-hsk-prep',
    category: 'chinese',
    titleEn: 'Official HSK Examination Preparation (Levels 1–6)',
    titleAr: 'التحضير لاختبارات الكفاءة الصينية الرسمية (HSK 1–6)',
    descriptionEn:
      'Targeted test preparation program centered on mock examinations, question strategies, listening speed, reading comprehension, and writing precision for official certification.',
    descriptionAr:
      'برنامج إعداد مكثف يركز على نماذج الاختبارات التجريبية، واستراتيجيات إدارة الوقت، وسرعة الاستيعاب السمعي والقراءة، ودقة الكتابة.',
    levelEn: 'Tailored by Candidate Level (HSK 1 to 6)',
    levelAr: 'حسب مستوى المتقدم (من المستوى 1 إلى 6)',
    durationEn: '8 – 10 Weeks Intensive',
    durationAr: '8 – 10 أسابيع مكثفة',
    standard: 'Official HSK Standard',
    image: '/images/courses/chinese/chinese-hsk.svg',
    outcomesEn: [
      'Comprehensive review of required vocabulary and grammar patterns per HSK tier',
      'Extensive practice with timed past papers and computer-based test formats',
      'Strategic techniques for tricky listening dialogues and rapid reading sections',
      'Detailed analytical feedback and personalized weakness remediation',
    ],
    outcomesAr: [
      'مراجعة شاملة لقوائم المفردات والتراكيب النحوية المعتمدة لكل مستوى HSK',
      'تدريب مكثف على نماذج الاختبارات المحوسبة والورقية وفق التوقيت الرسمي',
      'استراتيجيات ذكية للتعامل مع أسئلة الاستماع السريعة والقراءة الاستيعابية',
      'تقييم تحليلي دوري لمعالجة نقاط الضعف ورفع الدرجات المتوقعة',
    ],
  },

  // English Programs
  {
    id: 'english-general',
    category: 'english',
    titleEn: 'General English & Communicative Fluency',
    titleAr: 'اللغة الإنجليزية العامة والطلاقة التواصلية',
    descriptionEn:
      'Engaging modular course covering all four language skills (listening, speaking, reading, writing) with an emphasis on speaking confidence and authentic natural expression.',
    descriptionAr:
      'دورة نموذجية تفاعلية تغطي المهارات اللغوية الأربع (الاستماع، التحدث، القراءة، الكتابة) مع تركيز أساسي على بناء الثقة في المحادثة والتعبير التلقائي.',
    levelEn: 'CEFR A1 through C1',
    levelAr: 'مستويات CEFR (من A1 إلى C1)',
    durationEn: '10 – 12 Weeks per level',
    durationAr: '10 – 12 أسبوعاً لكل مستوى',
    standard: 'CEFR Framework',
    image: '/images/courses/english/english-general.svg',
    outcomesEn: [
      'Overcome conversational hesitation through active, guided discussion circles',
      'Expand functional everyday vocabulary and natural idiomatic English expressions',
      'Strengthen grammatical accuracy and sentence structure in speaking and writing',
      'Develop active listening comprehension across diverse international accents',
    ],
    outcomesAr: [
      'كسر حاجز التردد والتحدث بثقة عبر حلقات النقاش التفاعلية الموجهة',
      'توسيع الحصيلة اللغوية من المفردات والتعبيرات الاصطلاحية الإنجليزية الحية',
      'تعزيز السلامة النحوية ودقة التراكيب في التحدث والكتابة',
      'تطوير مهارة الاستيعاب السمعي لمختلف اللهجات الإنجليزية العالمية',
    ],
  },
  {
    id: 'english-business',
    category: 'english',
    titleEn: 'Business English & Workplace Communication',
    titleAr: 'اللغة الإنجليزية المهنية وتواصل بيئات الأعمال',
    descriptionEn:
      'Designed for executives, corporate managers, and ambitious professionals who need to lead meetings, pitch ideas, write reports, and navigate international workplace settings.',
    descriptionAr:
      'مصممة للمدراء والتنفيذيين والمهنيين لقيادة الاجتماعات بكفاءة، وتقديم العروض التقديمية، وصياغة التقارير، والتعامل في بيئات العمل متعددة الجنسيات.',
    levelEn: 'Intermediate to Advanced (B2 – C2)',
    levelAr: 'المتوسط إلى المتقدم (B2 – C2)',
    durationEn: '8 – 12 Weeks',
    durationAr: '8 – 12 أسبوعاً',
    standard: 'Professional CEFR B2-C2',
    image: '/images/courses/english/english-business.svg',
    outcomesEn: [
      'Deliver persuasive business presentations and executive briefings with poise',
      'Chair and participate productively in cross-border business meetings and calls',
      'Draft concise, professional business correspondence, proposals, and summaries',
      'Navigate intercultural workplace sensitivities with diplomatic phrasing',
    ],
    outcomesAr: [
      'تقديم العروض التقديمية والتقارير الإدارية بأسلوب مقنع واحترافي',
      'إدارة والمشاركة الفاعلة في اجتماعات الأعمال الدولية والمكالمات الرسمية',
      'صياغة المراسلات والعروض والمقترحات التجارية بوضوح وإيجاز',
      'إتقان الأسلوب الدبلوماسي واللباقة في التعامل المهني بين الثقافات',
    ],
  },
  {
    id: 'english-ielts',
    category: 'english',
    titleEn: 'IELTS Academic & General Training Preparation',
    titleAr: 'التحضير لاختبار الآيلتس (IELTS Academic & General)',
    descriptionEn:
      'Rigorous test preparation for candidates pursuing international university degrees, immigration, or professional registrations requiring certified English bands (6.5 to 8.0+).',
    descriptionAr:
      'برنامج تحضيري مكثف للمتقدمين للجامعات الدولية أو الهجرة أو الاعتمادات المهنية التي تتطلب درجات معتمدة في اختبار الآيلتس (6.5 إلى 8.0 وأعلى).',
    levelEn: 'Target Bands: 6.5 to 8.0+',
    levelAr: 'الدرجات المستهدفة: 6.5 إلى 8.0+',
    durationEn: '8 – 10 Weeks Intensive',
    durationAr: '8 – 10 أسابيع مكثفة',
    standard: 'Official IELTS Standard',
    image: '/images/courses/english/english-ielts.svg',
    outcomesEn: [
      'Master Task 1 and Task 2 writing structures to meet IELTS band descriptors',
      'Practice rapid skimming, scanning, and analytical reading for complex texts',
      'Refine speaking fluency, coherence, and lexical resource in one-on-one interviews',
      'Complete full-length simulation tests under authentic exam room conditions',
    ],
    outcomesAr: [
      'إتقان منهجيات كتابة مهام القسم الأول والثاني وفق معايير التقييم الرسمية',
      'التدرب على القراءة السريعة والتحليلية للنصوص الأكاديمية المعقدة',
      'تطوير الطلاقة والترابط المنطقي وتنوع المفردات في مقابلة التحدث الفردية',
      'خوض اختبارات محاكاة كاملة في ظروف مطابقة للاختبار الفعلي',
    ],
  },

  // Arabic for Non-Native Speakers
  {
    id: 'arabic-msa',
    category: 'arabic',
    titleEn: 'Modern Standard Arabic (MSA / الفصحى المعاصرة)',
    titleAr: 'اللغة العربية الفصحى المعاصرة للناطقين بغيرها',
    descriptionEn:
      'In-depth immersion in Modern Standard Arabic for learners worldwide. Develop mastery in reading literary and journalistic texts, formal speaking, and morphological grammar.',
    descriptionAr:
      'برنامج انغماسي متكامل في الفصحى المعاصرة للطلاب والباحثين الأجانب، يركز على القراءة الصحفية والأدبية، والتحدث الرسمي، وعلم النحو والصرف.',
    levelEn: 'Beginner to Advanced (Novice to Superior)',
    levelAr: 'من المبتدئ إلى المتقدم (كافة المستويات)',
    durationEn: '12 – 16 Weeks per level',
    durationAr: '12 – 16 أسبوعاً لكل مستوى',
    standard: 'ACTFL / CEFR Equivalent',
    image: '/images/courses/arabic/arabic-msa.svg',
    outcomesEn: [
      'Read and comprehend Arabic media publications, news broadcasts, and essays',
      'Understand foundational and advanced Arabic grammar (I’rab and Sarf)',
      'Engage in formal discourse, public speeches, and academic discussions in MSA',
      'Gain deep literary and cultural appreciation of the Arab world',
    ],
    outcomesAr: [
      'قراءة وفهم المقالات والتحليلات الإخبارية ونشرات الأخبار العربية',
      'استيعاب قواعد النحو والصرف وتراكيب الجملة العربية السليمة',
      'المشاركة في النقاشات الأكاديمية والمحاضرات والندوات باللغة الفصحى',
      'اكتساب تقدير ثقافي وأدبي عميق للثقافة والتراث العربي',
    ],
  },
  {
    id: 'arabic-colloquial',
    category: 'arabic',
    titleEn: 'Levantine Colloquial Arabic (Jordanian Dialect / اللهجة الأردنية)',
    titleAr: 'اللهجة الأردنية والشامية المحكية للناطقين بغيرها',
    descriptionEn:
      'Immersive spoken Arabic program designed to help expatriates, researchers, and visitors converse naturally with locals in the streets, markets, and social gatherings of Jordan.',
    descriptionAr:
      'برنامج انغماسي تطبيقي لمساعدة المقيمين والباحثين والزوار الأجانب على التحدث والتفاعل العفوي مع المجتمع المحلي في أسواق وشوارع الأردن والمنطقة.',
    levelEn: 'All Levels',
    levelAr: 'كافة المستويات',
    durationEn: '10 – 12 Weeks',
    durationAr: '10 – 12 أسبوعاً',
    standard: 'Communicative Spoken Proficiency',
    image: '/images/courses/arabic/arabic-colloquial.svg',
    outcomesEn: [
      'Speak natural Jordanian Arabic with authentic intonation and local expressions',
      'Handle everyday social transactions, taxi rides, shopping, and hospitality customs',
      'Understand cultural humor, common proverbs, and conversational etiquette',
      'Connect warmly and authentically with Jordanian host communities',
    ],
    outcomesAr: [
      'التحدث باللهجة الأردنية السلسة بالنبرات والتعبيرات المحلية الأصلية',
      'إدارة التعاملات اليومية، والتسوق، وواجبات الضيافة والتفاعل الاجتماعي',
      'فهم الأمثال الشعبية والآداب الحوارية في الحياة الأردنية اليومية',
      'بناء علاقات إنسانية دافئة ومباشرة مع المجتمع المحلي',
    ],
  },
  {
    id: 'arabic-diplomats',
    category: 'arabic',
    titleEn: 'Arabic for Diplomats, NGOs & International Professionals',
    titleAr: 'اللغة العربية للدبلوماسيين والمنظمات الدولية',
    descriptionEn:
      'Tailored executive program specifically designed for foreign embassy personnel, humanitarian relief officers, and UN delegates operating in Amman and the broader region.',
    descriptionAr:
      'برنامج مخصص لكوادر السفارات الأجنبية، وموظفي الإغاثة والمنظمات غير الحكومية، وبعثات الأمم المتحدة العاملة في عمّان والشرق الأوسط.',
    levelEn: 'Intermediate to Advanced',
    levelAr: 'المتوسط إلى المتقدم',
    durationEn: 'Flexible Modules / Specialized Cohorts',
    durationAr: 'وحدات مرنة / مجموعات متخصصة',
    standard: 'Diplomatic & Institutional Standards',
    image: '/images/courses/arabic/arabic-diplomats.svg',
    outcomesEn: [
      'Analyze political communiqués, humanitarian briefs, and regional agreements',
      'Conduct diplomatic dialogues and protocol interactions with regional counterparts',
      'Understand socio-political nuances, legal terminology, and civil discourse',
      'Blend high-level MSA with practical regional spoken competence for field missions',
    ],
    outcomesAr: [
      'تحليل البيانات السياسية والتقارير الإنسانية والاتفاقيات الإقليمية',
      'إجراء الحوارات الدبلوماسية ومراعاة البروتوكولات الرسمية المتبعة',
      'فهم الأبعاد الاجتماعية والسياسية والمصطلحات القانونية والحقوقية',
      'الجمع بين الفصحى الرسمية والقدرة على التواصل الميداني مع الفئات المستهدفة',
    ],
  },
];

