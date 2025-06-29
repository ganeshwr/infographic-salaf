import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Users, Scale, Shield, Heart, Compass } from 'lucide-react';

const PrinciplesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const principles = [
    {
      title: "Quran and Authentic Sunnah",
      subtitle: "Primary Sources First",
      description: "All understanding must be rooted in the Quran and authentic prophetic traditions, interpreted through the lens of the early generations.",
      details: "This principle emphasizes returning to the original sources of Islam - the Quran and Sunnah - as understood by those who were closest to the Prophet ﷺ. It involves careful verification of hadiths and understanding the context in which verses were revealed.",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-primary to-primary-light",
      arabicText: "الكتاب والسنة"
    },
    {
      title: "Following the Salaf",
      subtitle: "Learning from the Best",
      description: "Prioritizing the understanding and methodology of the first three generations who were praised by the Prophet ﷺ.",
      details: "The Salaf as-Salih (righteous predecessors) include the Companions, their students (Tabi'un), and their students (Tabi' at-Tabi'in). Their proximity to the source and their righteousness make their understanding particularly valuable.",
      icon: <Users className="w-8 h-8" />,
      color: "from-secondary to-secondary-light",
      arabicText: "منهج السلف الصالح"
    },
    {
      title: "Scholarly Consensus",
      subtitle: "Unity in Essential Matters",
      description: "Respecting the consensus (Ijma) of qualified scholars, especially among the early generations, on fundamental issues.",
      details: "When there is unanimous agreement among qualified scholars of the early generations on a matter, this carries significant weight in Islamic jurisprudence and belief. This helps maintain unity and prevents individual opinions from overriding established understanding.",
      icon: <Scale className="w-8 h-8" />,
      color: "from-accent to-accent-light",
      arabicText: "الإجماع"
    },
    {
      title: "Avoiding Religious Innovation",
      subtitle: "Preserving Original Practice",
      description: "Distinguishing between beneficial worldly innovations and harmful religious innovations that alter worship.",
      details: "Bid'ah refers specifically to introducing new practices into the religion that were not part of the original teachings. This doesn't mean rejecting beneficial technological or social progress, but protecting the purity of religious practice.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-primary to-accent",
      arabicText: "تجنب البدع"
    },
    {
      title: "Balance and Moderation",
      subtitle: "The Middle Path",
      description: "Avoiding extremes in religious practice while maintaining commitment to authentic Islamic principles.",
      details: "Islam promotes moderation - neither being lax in religious obligations nor being excessively strict beyond what is required. This includes being neither overly lenient nor overly harsh in applying Islamic teachings.",
      icon: <Heart className="w-8 h-8" />,
      color: "from-secondary to-accent",
      arabicText: "الوسطية والاعتدال"
    },
    {
      title: "Sound Methodology",
      subtitle: "Proper Approach to Learning",
      description: "Using established principles of Islamic scholarship to understand and apply religious knowledge correctly.",
      details: "This involves learning from qualified teachers, understanding the sciences of hadith authentication, principles of Quranic interpretation, and the methodology used by early scholars in deriving rulings and understanding.",
      icon: <Compass className="w-8 h-8" />,
      color: "from-accent to-primary",
      arabicText: "المنهج السليم"
    }
  ];

  return (
    <section ref={sectionRef} id="principles" className="section-padding bg-white">
      <div className="container-width">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Core Principles
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8 rounded-full" />
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              The fundamental principles that guide the Manhaj Salaf approach to understanding 
              and practicing Islam, rooted in scholarly tradition and textual evidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-500 ${
                  activeCard === index ? 'scale-105 z-10 relative' : 'hover:scale-102'
                }`}
                onClick={() => setActiveCard(activeCard === index ? null : index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setActiveCard(activeCard === index ? null : index);
                  }
                }}
                aria-label={`Learn about ${principle.title}`}
              >
                <div className={`h-full bg-gradient-to-br ${principle.color} p-6 rounded-2xl text-white card-shadow`}>
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-4 bg-white/20 rounded-full">
                      {principle.icon}
                    </div>
                  </div>
                  
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
                    <p className="text-sm opacity-90 mb-3">{principle.subtitle}</p>
                    <div className="arabic-text text-lg opacity-80 mb-3">
                      {principle.arabicText}
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed mb-4">
                    {principle.description}
                  </p>

                  {activeCard === index && (
                    <div className="border-t border-white/30 pt-4 animate-fade-in">
                      <p className="text-sm leading-relaxed">
                        {principle.details}
                      </p>
                    </div>
                  )}

                  <div className="text-center mt-4">
                    <span className="text-xs opacity-70">
                      {activeCard === index ? 'Click to collapse' : 'Click to expand'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="mt-16 bg-gradient-to-r from-neutral-50 to-neutral-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-center text-primary mb-6">
              Integrated Approach
            </h3>
            <p className="text-lg text-neutral-700 leading-relaxed text-center max-w-4xl mx-auto">
              These principles work together as a cohesive methodology. They're not isolated rules 
              but interconnected guidelines that help ensure authentic understanding and practice 
              of Islam, as demonstrated by the earliest and most knowledgeable generations of Muslims.
            </p>
            <div className="flex justify-center mt-6">
              <div className="flex items-center space-x-2 text-secondary">
                <Compass className="w-5 h-5" />
                <span className="font-medium">Guided by Scholarly Wisdom</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;