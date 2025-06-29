import { useState, useEffect } from 'react';

export type Language = 'en' | 'id';

interface TranslationData {
  [key: string]: {
    en: string;
    id: string;
  };
}

const translations: TranslationData = {
  // Hero Section
  'hero.title': {
    en: 'Understanding Manhaj Salaf',
    id: 'Memahami Manhaj Salaf'
  },
  'hero.subtitle': {
    en: 'A Clear, Authentic Guide to Islamic Methodology',
    id: 'Panduan yang Jelas dan Autentik tentang Metodologi Islam'
  },
  'hero.description': {
    en: 'Discover the true teachings, clear misconceptions, and learn from scholarly tradition in an accessible, engaging way.',
    id: 'Temukan ajaran yang benar, luruskan kesalahpahaman, dan belajar dari tradisi keilmuan dengan cara yang mudah dipahami dan menarik.'
  },
  'hero.startLearning': {
    en: 'Begin Your Journey',
    id: 'Mulai Perjalanan Anda'
  },
  'hero.clearMisconceptions': {
    en: 'Clear Misconceptions',
    id: 'Luruskan Kesalahpahaman'
  },
  'hero.yearsOfTradition': {
    en: 'Years of Continuous Tradition',
    id: 'Tahun Tradisi Berkesinambungan'
  },
  'hero.blessedGenerations': {
    en: 'Blessed Generations (Salaf)',
    id: 'Generasi Terbaik (Salaf)'
  },
  'hero.opportunitiesToLearn': {
    en: 'Opportunities to Learn',
    id: 'Kesempatan untuk Belajar'
  },

  // Foundation Section
  'foundation.title': {
    en: 'What is Manhaj Salaf?',
    id: 'Apa itu Manhaj Salaf?'
  },
  'foundation.description': {
    en: 'Manhaj Salaf (منهج السلف) literally means "the methodology of the predecessors." It refers to understanding and practicing Islam according to the way of the Salaf as-Salih (السلف الصالح) - the righteous predecessors.',
    id: 'Manhaj Salaf (منهج السلف) secara harfiah berarti "metodologi para pendahulu." Ini merujuk pada pemahaman dan pengamalan Islam sesuai dengan cara Salaf as-Salih (السلف الصالح) - para pendahulu yang saleh.'
  },
  'foundation.coreDefinition': {
    en: 'Core Definition',
    id: 'Definisi Inti'
  },
  'foundation.coreDefinitionText': {
    en: 'Following the understanding and practice of Islam as demonstrated by the first three generations of Muslims, who were praised by Prophet Muhammad ﷺ as the best of people.',
    id: 'Mengikuti pemahaman dan pengamalan Islam sebagaimana yang dicontohkan oleh tiga generasi pertama umat Islam, yang dipuji oleh Nabi Muhammad ﷺ sebagai sebaik-baik manusia.'
  },
  'foundation.hadithText': {
    en: '"The best of people are my generation" - Hadith',
    id: '"Sebaik-baik manusia adalah generasiku" - Hadits'
  },
  'foundation.threeGenerations': {
    en: 'The Three Blessed Generations',
    id: 'Tiga Generasi Terbaik'
  },
  'foundation.firstGeneration': {
    en: '1st Generation',
    id: 'Generasi Ke-1'
  },
  'foundation.companions': {
    en: 'The Companions (Sahabah)',
    id: 'Para Sahabat (Sahabah)'
  },
  'foundation.companionsDesc': {
    en: 'Those who met Prophet Muhammad ﷺ, believed in him, and died as Muslims. They received direct instruction and witnessed the revelation.',
    id: 'Mereka yang bertemu Nabi Muhammad ﷺ, beriman kepadanya, dan meninggal dalam keadaan Islam. Mereka menerima pengajaran langsung dan menyaksikan turunnya wahyu.'
  },
  'foundation.secondGeneration': {
    en: '2nd Generation',
    id: 'Generasi Ke-2'
  },
  'foundation.followers': {
    en: 'The Followers (Tabi\'un)',
    id: 'Para Tabi\'in (Tabi\'un)'
  },
  'foundation.followersDesc': {
    en: 'Students of the Companions who learned from them directly. They preserved and transmitted the teachings with accuracy.',
    id: 'Murid-murid para Sahabat yang belajar langsung dari mereka. Mereka menjaga dan menyampaikan ajaran dengan akurat.'
  },
  'foundation.thirdGeneration': {
    en: '3rd Generation',
    id: 'Generasi Ke-3'
  },
  'foundation.followersOfFollowers': {
    en: 'Followers of Followers (Tabi\' Tabi\'in)',
    id: 'Tabi\'ut Tabi\'in (Tabi\' Tabi\'in)'
  },
  'foundation.followersOfFollowersDesc': {
    en: 'Students of the Tabi\'un who continued the chain of authentic transmission and scholarly methodology.',
    id: 'Murid-murid para Tabi\'in yang melanjutkan rantai transmisi yang autentik dan metodologi keilmuan.'
  },
  'foundation.whyFollow': {
    en: 'Why Follow Their Methodology?',
    id: 'Mengapa Mengikuti Metodologi Mereka?'
  },
  'foundation.divineTestimony': {
    en: 'Divine Testimony: Allah praised them in the Quran',
    id: 'Kesaksian Ilahi: Allah memuji mereka dalam Al-Qur\'an'
  },
  'foundation.propheticPraise': {
    en: 'Prophetic Praise: Muhammad ﷺ testified to their excellence',
    id: 'Pujian Nabi: Muhammad ﷺ bersaksi atas keunggulan mereka'
  },
  'foundation.directAccess': {
    en: 'Direct Access: Closest to the original source',
    id: 'Akses Langsung: Paling dekat dengan sumber asli'
  },
  'foundation.purityOfUnderstanding': {
    en: 'Purity of Understanding: Free from later innovations',
    id: 'Kemurnian Pemahaman: Bebas dari bid\'ah kemudian'
  },
  'foundation.comprehensiveGuidance': {
    en: 'Comprehensive Guidance: Complete way of life',
    id: 'Panduan Menyeluruh: Cara hidup yang lengkap'
  },
  'foundation.provenResults': {
    en: 'Proven Results: Successfully implemented Islam',
    id: 'Hasil Terbukti: Berhasil mengimplementasikan Islam'
  },

  // History Section
  'history.title': {
    en: 'Historical Continuity',
    id: 'Kesinambungan Sejarah'
  },
  'history.description': {
    en: 'Manhaj Salaf isn\'t a modern movement—it\'s the continuous, unbroken chain of Islamic understanding that has existed since the time of Prophet Muhammad ﷺ.',
    id: 'Manhaj Salaf bukanlah gerakan modern—ini adalah rantai pemahaman Islam yang berkesinambungan dan tidak terputus yang telah ada sejak zaman Nabi Muhammad ﷺ.'
  },
  'history.propheticEra': {
    en: 'Prophetic Era',
    id: 'Era Kenabian'
  },
  'history.propheticEraDesc': {
    en: 'Foundation of Islamic methodology through revelation and prophetic example',
    id: 'Fondasi metodologi Islam melalui wahyu dan teladan nabi'
  },
  'history.rashidunCaliphate': {
    en: 'Rashidun Caliphate',
    id: 'Khilafah Rasyidah'
  },
  'history.rashidunDesc': {
    en: 'Righteous leadership following prophetic methodology',
    id: 'Kepemimpinan yang saleh mengikuti metodologi nabi'
  },
  'history.scholarlyDevelopment': {
    en: 'Scholarly Development',
    id: 'Perkembangan Keilmuan'
  },
  'history.scholarlyDesc': {
    en: 'Systematic preservation and transmission of knowledge',
    id: 'Pelestarian dan transmisi pengetahuan secara sistematis'
  },
  'history.globalSpread': {
    en: 'Global Spread',
    id: 'Penyebaran Global'
  },
  'history.globalDesc': {
    en: 'Transmission of Salafi methodology across Muslim lands',
    id: 'Transmisi metodologi Salafi di seluruh negeri Muslim'
  },
  'history.centersOfLearning': {
    en: 'Centers of Learning & Transmission',
    id: 'Pusat Pembelajaran & Transmisi'
  },
  'history.unbrokenChain': {
    en: 'An Unbroken Chain',
    id: 'Rantai yang Tidak Terputus'
  },
  'history.unbrokenChainDesc': {
    en: 'From the Prophet ﷺ to today, this methodology has been preserved and transmitted by sincere scholars across centuries and continents. It\'s not a modern interpretation, but the original understanding maintained through careful scholarship.',
    id: 'Dari Nabi ﷺ hingga hari ini, metodologi ini telah dilestarikan dan ditransmisikan oleh para ulama yang tulus selama berabad-abad dan di berbagai benua. Ini bukan interpretasi modern, tetapi pemahaman asli yang dijaga melalui keilmuan yang teliti.'
  },

  // Principles Section
  'principles.title': {
    en: 'Core Principles',
    id: 'Prinsip-Prinsip Inti'
  },
  'principles.description': {
    en: 'The fundamental principles that guide the Manhaj Salaf approach to understanding and practicing Islam, rooted in scholarly tradition and textual evidence.',
    id: 'Prinsip-prinsip fundamental yang memandu pendekatan Manhaj Salaf dalam memahami dan mengamalkan Islam, berakar pada tradisi keilmuan dan dalil tekstual.'
  },
  'principles.quranSunnah': {
    en: 'Quran and Authentic Sunnah',
    id: 'Al-Qur\'an dan Sunnah Sahih'
  },
  'principles.primarySources': {
    en: 'Primary Sources First',
    id: 'Sumber Primer Utama'
  },
  'principles.quranSunnahDesc': {
    en: 'All understanding must be rooted in the Quran and authentic prophetic traditions, interpreted through the lens of the early generations.',
    id: 'Semua pemahaman harus berakar pada Al-Qur\'an dan tradisi nabi yang sahih, ditafsirkan melalui kacamata generasi awal.'
  },
  'principles.followingSalaf': {
    en: 'Following the Salaf',
    id: 'Mengikuti Salaf'
  },
  'principles.learningFromBest': {
    en: 'Learning from the Best',
    id: 'Belajar dari yang Terbaik'
  },
  'principles.followingSalafDesc': {
    en: 'Prioritizing the understanding and methodology of the first three generations who were praised by the Prophet ﷺ.',
    id: 'Mengutamakan pemahaman dan metodologi tiga generasi pertama yang dipuji oleh Nabi ﷺ.'
  },
  'principles.scholarlyConsensus': {
    en: 'Scholarly Consensus',
    id: 'Ijma\' Ulama'
  },
  'principles.unityInEssentials': {
    en: 'Unity in Essential Matters',
    id: 'Kesatuan dalam Perkara Pokok'
  },
  'principles.consensusDesc': {
    en: 'Respecting the consensus (Ijma) of qualified scholars, especially among the early generations, on fundamental issues.',
    id: 'Menghormati ijma\' para ulama yang berkompeten, terutama di kalangan generasi awal, dalam masalah-masalah fundamental.'
  },
  'principles.avoidingInnovation': {
    en: 'Avoiding Religious Innovation',
    id: 'Menghindari Bid\'ah Agama'
  },
  'principles.preservingOriginal': {
    en: 'Preserving Original Practice',
    id: 'Menjaga Praktik Asli'
  },
  'principles.innovationDesc': {
    en: 'Distinguishing between beneficial worldly innovations and harmful religious innovations that alter worship.',
    id: 'Membedakan antara inovasi duniawi yang bermanfaat dan bid\'ah agama yang merusak yang mengubah ibadah.'
  },
  'principles.balanceModeration': {
    en: 'Balance and Moderation',
    id: 'Keseimbangan dan Moderasi'
  },
  'principles.middlePath': {
    en: 'The Middle Path',
    id: 'Jalan Tengah'
  },
  'principles.balanceDesc': {
    en: 'Avoiding extremes in religious practice while maintaining commitment to authentic Islamic principles.',
    id: 'Menghindari ekstremisme dalam praktik agama sambil mempertahankan komitmen pada prinsip-prinsip Islam yang autentik.'
  },
  'principles.soundMethodology': {
    en: 'Sound Methodology',
    id: 'Metodologi yang Benar'
  },
  'principles.properApproach': {
    en: 'Proper Approach to Learning',
    id: 'Pendekatan yang Tepat dalam Belajar'
  },
  'principles.methodologyDesc': {
    en: 'Using established principles of Islamic scholarship to understand and apply religious knowledge correctly.',
    id: 'Menggunakan prinsip-prinsip keilmuan Islam yang mapan untuk memahami dan menerapkan pengetahuan agama dengan benar.'
  },
  'principles.integratedApproach': {
    en: 'Integrated Approach',
    id: 'Pendekatan Terintegrasi'
  },
  'principles.integratedDesc': {
    en: 'These principles work together as a cohesive methodology. They\'re not isolated rules but interconnected guidelines that help ensure authentic understanding and practice of Islam, as demonstrated by the earliest and most knowledgeable generations of Muslims.',
    id: 'Prinsip-prinsip ini bekerja bersama sebagai metodologi yang kohesif. Mereka bukan aturan yang terisolasi tetapi pedoman yang saling terkait yang membantu memastikan pemahaman dan praktik Islam yang autentik, sebagaimana dicontohkan oleh generasi Muslim paling awal dan paling berpengetahuan.'
  },
  'principles.guidedByWisdom': {
    en: 'Guided by Scholarly Wisdom',
    id: 'Dipandu oleh Hikmah Keilmuan'
  },

  // Misconceptions Section
  'misconceptions.title': {
    en: 'Clearing Misconceptions',
    id: 'Meluruskan Kesalahpahaman'
  },
  'misconceptions.description': {
    en: 'Unfortunately, many misconceptions exist about Manhaj Salaf. Let\'s address these misunderstandings with clear, factual explanations based on scholarly evidence.',
    id: 'Sayangnya, banyak kesalahpahaman tentang Manhaj Salaf. Mari kita bahas kesalahpahaman ini dengan penjelasan yang jelas dan faktual berdasarkan dalil keilmuan.'
  },
  'misconceptions.clickToReveal': {
    en: 'Click cards to reveal the truth',
    id: 'Klik kartu untuk mengungkap kebenaran'
  },
  'misconceptions.commonMisconception': {
    en: 'Common Misconception',
    id: 'Kesalahpahaman Umum'
  },
  'misconceptions.clickToSee': {
    en: 'Click to see the truth',
    id: 'Klik untuk melihat kebenaran'
  },
  'misconceptions.wantToLearnMore': {
    en: 'Want to Learn More?',
    id: 'Ingin Belajar Lebih Lanjut?'
  },
  'misconceptions.wantToLearnDesc': {
    en: 'Understanding comes through proper education from qualified sources. Don\'t let misconceptions cloud your judgment - seek authentic knowledge.',
    id: 'Pemahaman datang melalui pendidikan yang tepat dari sumber yang berkualitas. Jangan biarkan kesalahpahaman mengaburkan penilaian Anda - carilah pengetahuan yang autentik.'
  },
  'misconceptions.findResources': {
    en: 'Find Learning Resources',
    id: 'Cari Sumber Belajar'
  },
  'misconceptions.readQuestions': {
    en: 'Read Common Questions',
    id: 'Baca Pertanyaan Umum'
  },

  // Applications Section
  'applications.title': {
    en: 'What Manhaj Salaf Actually Does',
    id: 'Apa yang Sebenarnya Dilakukan Manhaj Salaf'
  },
  'applications.description': {
    en: 'Rather than focusing on what it opposes, let\'s see how Manhaj Salaf provides practical guidance for real-life situations and contemporary challenges.',
    id: 'Daripada fokus pada apa yang ditentangnya, mari kita lihat bagaimana Manhaj Salaf memberikan panduan praktis untuk situasi kehidupan nyata dan tantangan kontemporer.'
  },
  'applications.approachingQuestions': {
    en: 'Approaching Religious Questions',
    id: 'Mendekati Pertanyaan Agama'
  },
  'applications.understandingTexts': {
    en: 'Understanding Islamic Texts',
    id: 'Memahami Teks Islam'
  },
  'applications.contemporaryIssues': {
    en: 'Contemporary Issues',
    id: 'Isu Kontemporer'
  },
  'applications.communityBuilding': {
    en: 'Community Building',
    id: 'Membangun Komunitas'
  },
  'applications.personalDevelopment': {
    en: 'Personal Development',
    id: 'Pengembangan Diri'
  },
  'applications.familyLife': {
    en: 'Family Life',
    id: 'Kehidupan Keluarga'
  },
  'applications.evidenceBased': {
    en: 'Evidence-Based',
    id: 'Berdasarkan Dalil'
  },
  'applications.evidenceBasedDesc': {
    en: 'Every position is supported by Quranic verses, authentic Hadith, or scholarly consensus',
    id: 'Setiap posisi didukung oleh ayat Al-Qur\'an, Hadits sahih, atau ijma\' ulama'
  },
  'applications.practicalWisdom': {
    en: 'Practical Wisdom',
    id: 'Hikmah Praktis'
  },
  'applications.practicalWisdomDesc': {
    en: 'Provides clear guidance for real-life situations and contemporary challenges',
    id: 'Memberikan panduan yang jelas untuk situasi kehidupan nyata dan tantangan kontemporer'
  },
  'applications.scholarlyGuidance': {
    en: 'Scholarly Guidance',
    id: 'Bimbingan Ulama'
  },
  'applications.scholarlyGuidanceDesc': {
    en: 'Emphasizes learning from qualified teachers and established scholars',
    id: 'Menekankan belajar dari guru yang berkualitas dan ulama yang mapan'
  },
  'applications.balancedApproach': {
    en: 'Balanced Approach',
    id: 'Pendekatan Seimbang'
  },
  'applications.balancedApproachDesc': {
    en: 'Avoids extremes while maintaining commitment to authentic Islamic principles',
    id: 'Menghindari ekstrem sambil mempertahankan komitmen pada prinsip-prinsip Islam yang autentik'
  },
  'applications.livingMethodology': {
    en: 'A Living Methodology',
    id: 'Metodologi yang Hidup'
  },
  'applications.livingMethodologyDesc': {
    en: 'Manhaj Salaf isn\'t just theoretical—it\'s a practical approach to living Islam authentically in any time and place. It provides clear guidance while respecting the wisdom of scholarly tradition and the needs of contemporary Muslim communities.',
    id: 'Manhaj Salaf bukan hanya teoretis—ini adalah pendekatan praktis untuk menjalani Islam secara autentik di waktu dan tempat mana pun. Ini memberikan panduan yang jelas sambil menghormati hikmah tradisi keilmuan dan kebutuhan komunitas Muslim kontemporer.'
  },

  // FAQ Section
  'faq.title': {
    en: 'Frequently Asked Questions',
    id: 'Pertanyaan yang Sering Diajukan'
  },
  'faq.description': {
    en: 'Common questions about Manhaj Salaf, answered with clarity and scholarly backing. These address real concerns and curiosities from sincere learners.',
    id: 'Pertanyaan umum tentang Manhaj Salaf, dijawab dengan kejelasan dan dukungan keilmuan. Ini menangani kekhawatiran dan keingintahuan nyata dari para pelajar yang tulus.'
  },
  'faq.browseByCategory': {
    en: 'Browse by Category',
    id: 'Jelajahi berdasarkan Kategori'
  },
  'faq.stillHaveQuestions': {
    en: 'Still Have Questions?',
    id: 'Masih Ada Pertanyaan?'
  },
  'faq.stillHaveQuestionsDesc': {
    en: 'The best way to learn is from qualified teachers. Don\'t hesitate to seek knowledge from established scholars and educational institutions.',
    id: 'Cara terbaik untuk belajar adalah dari guru yang berkualitas. Jangan ragu untuk mencari ilmu dari ulama dan lembaga pendidikan yang mapan.'
  },
  'faq.reviewBasics': {
    en: 'Review the Basics',
    id: 'Tinjau Dasar-Dasar'
  },

  // Resources Section
  'resources.title': {
    en: 'Learning Resources',
    id: 'Sumber Belajar'
  },
  'resources.description': {
    en: 'Your journey to understanding Manhaj Salaf begins with authentic sources and qualified teachers. Here are recommended resources for every level of learning.',
    id: 'Perjalanan Anda untuk memahami Manhaj Salaf dimulai dengan sumber-sumber autentik dan guru-guru yang berkualitas. Berikut adalah sumber-sumber yang direkomendasikan untuk setiap tingkat pembelajaran.'
  },
  'resources.gettingStarted': {
    en: 'Getting Started',
    id: 'Memulai'
  },
  'resources.buildingKnowledge': {
    en: 'Building Knowledge',
    id: 'Membangun Pengetahuan'
  },
  'resources.learnFromTeachers': {
    en: 'Learn from Teachers',
    id: 'Belajar dari Guru'
  },
  'resources.deepStudy': {
    en: 'Deep Study',
    id: 'Studi Mendalam'
  },
  'resources.recommendedPath': {
    en: 'Recommended Learning Path',
    id: 'Jalur Pembelajaran yang Direkomendasikan'
  },
  'resources.foundation': {
    en: 'Foundation',
    id: 'Fondasi'
  },
  'resources.methodology': {
    en: 'Methodology',
    id: 'Metodologi'
  },
  'resources.application': {
    en: 'Application',
    id: 'Penerapan'
  },
  'resources.advancedStudy': {
    en: 'Advanced Study',
    id: 'Studi Lanjutan'
  },
  'resources.importantGuidelines': {
    en: 'Important Learning Guidelines',
    id: 'Pedoman Pembelajaran Penting'
  },
  'resources.recommendedPractices': {
    en: 'Recommended Practices:',
    id: 'Praktik yang Direkomendasikan:'
  },
  'resources.thingsToAvoid': {
    en: 'Things to Avoid:',
    id: 'Hal yang Harus Dihindari:'
  },
  'resources.readyToBegin': {
    en: 'Ready to Begin Your Learning Journey?',
    id: 'Siap Memulai Perjalanan Belajar Anda?'
  },
  'resources.readyToBeginDesc': {
    en: 'Remember, seeking Islamic knowledge is a lifelong journey. Start with sincerity, be patient with yourself, and always seek guidance from qualified teachers.',
    id: 'Ingat, mencari ilmu Islam adalah perjalanan seumur hidup. Mulailah dengan ketulusan, bersabarlah dengan diri sendiri, dan selalu cari bimbingan dari guru yang berkualitas.'
  },
  'resources.accessResource': {
    en: 'Access Resource',
    id: 'Akses Sumber'
  },

  // Common UI Elements
  'common.clickToExpand': {
    en: 'Click to expand',
    id: 'Klik untuk memperluas'
  },
  'common.clickToCollapse': {
    en: 'Click to collapse',
    id: 'Klik untuk menyembunyikan'
  },
  'common.loading': {
    en: 'Loading...',
    id: 'Memuat...'
  },
  'common.error': {
    en: 'Error',
    id: 'Kesalahan'
  },
  'common.close': {
    en: 'Close',
    id: 'Tutup'
  },
  'common.open': {
    en: 'Open',
    id: 'Buka'
  },
  'common.next': {
    en: 'Next',
    id: 'Selanjutnya'
  },
  'common.previous': {
    en: 'Previous',
    id: 'Sebelumnya'
  },
  'common.beginner': {
    en: 'Beginner',
    id: 'Pemula'
  },
  'common.intermediate': {
    en: 'Intermediate',
    id: 'Menengah'
  },
  'common.advanced': {
    en: 'Advanced',
    id: 'Lanjutan'
  },
  'common.allLevels': {
    en: 'All Levels',
    id: 'Semua Tingkat'
  }
};

export const useTranslation = () => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[language] || translation.en || key;
  };

  const switchLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return {
    language,
    t,
    switchLanguage
  };
};