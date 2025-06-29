import React, { useState, useEffect, useRef } from 'react';
import { Lightbulb, Users, Book, MessageSquare, Home, Globe } from 'lucide-react';

const PracticalApplicationsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeScenario, setActiveScenario] = useState(0);
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

  const practicalScenarios = [
    {
      title: "Approaching Religious Questions",
      icon: <MessageSquare className="w-6 h-6" />,
      scenario: "A Muslim has a question about prayer methods or religious practices",
      approach: "The Manhaj Salaf Approach",
      steps: [
        "First, check what the Quran and authentic Sunnah say about the matter",
        "Look at how the Companions and early generations understood and practiced it",
        "Consult qualified scholars who follow this methodology",
        "Consider the consensus (Ijma) of early scholars if it exists",
        "Apply the understanding that is most supported by evidence"
      ],
      outcome: "A well-grounded understanding based on the strongest evidence and earliest understanding",
      color: "from-primary to-primary-light"
    },
    {
      title: "Understanding Islamic Texts",
      icon: <Book className="w-6 h-6" />,
      scenario: "Studying Quranic verses or Hadith for personal understanding",
      approach: "Textual Analysis Method",
      steps: [
        "Study the Arabic text with proper translation and context",
        "Research how the Companions understood these texts",
        "Examine commentaries from early scholars (Tafsir works)",
        "Consider the historical context and circumstances of revelation",
        "Apply the understanding through established scholarly principles"
      ],
      outcome: "Clear comprehension that aligns with how the early generations understood the texts",
      color: "from-secondary to-secondary-light"
    },
    {
      title: "Contemporary Issues",
      icon: <Globe className="w-6 h-6" />,
      scenario: "Addressing modern challenges like technology, social media, or current events",
      approach: "Principled Application",
      steps: [
        "Identify the underlying Islamic principles that apply",
        "Study how early scholars dealt with analogous situations",
        "Consult contemporary scholars trained in this methodology",
        "Apply established principles (Qiyas) carefully and correctly",
        "Seek guidance from those qualified to make such determinations"
      ],
      outcome: "Solutions that honor Islamic principles while addressing modern realities appropriately",
      color: "from-accent to-accent-light"
    },
    {
      title: "Community Building",
      icon: <Users className="w-6 h-6" />,
      scenario: "Establishing Islamic community activities and programs",
      approach: "Balanced Community Engagement",
      steps: [
        "Focus on activities that bring religious and social benefit",
        "Ensure all activities align with Islamic principles and values",
        "Learn from the example of the early Muslim community in Madinah",
        "Collaborate with other Muslims while maintaining core principles",
        "Balance religious obligations with community service and engagement"
      ],
      outcome: "Strong, principled communities that benefit both Muslims and broader society",
      color: "from-primary to-accent"
    },
    {
      title: "Personal Development",
      icon: <Lightbulb className="w-6 h-6" />,
      scenario: "Growing in Islamic knowledge and personal spiritual development",
      approach: "Structured Learning Path",
      steps: [
        "Begin with learning basic Islamic beliefs and practices correctly",
        "Study under qualified teachers who can guide proper understanding",
        "Focus on implementing what you learn in daily life",
        "Gradually advance to more complex topics with proper foundation",
        "Maintain consistent practice while continuing to learn"
      ],
      outcome: "Steady spiritual and intellectual growth based on authentic Islamic teachings",
      color: "from-secondary to-accent"
    },
    {
      title: "Family Life",
      icon: <Home className="w-6 h-6" />,
      scenario: "Applying Islamic principles in marriage, parenting, and family relationships",
      approach: "Prophetic Example in Family",
      steps: [
        "Study how the Prophet ﷺ and Companions managed family life",
        "Apply Islamic principles of kindness, justice, and responsibility",
        "Seek balance between religious obligations and family needs",
        "Educate family members through gentle guidance and good example",
        "Create a home environment that supports Islamic values"
      ],
      outcome: "Harmonious family life that embodies Islamic values and mutual respect",
      color: "from-accent to-primary"
    }
  ];

  return (
    <section ref={sectionRef} id="applications" className="section-padding bg-white">
      <div className="container-width">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              What Manhaj Salaf Actually Does
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8 rounded-full" />
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              Rather than focusing on what it opposes, let's see how Manhaj Salaf provides 
              practical guidance for real-life situations and contemporary challenges.
            </p>
          </div>

          {/* Scenario Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {practicalScenarios.map((scenario, index) => (
              <button
                key={index}
                onClick={() => setActiveScenario(index)}
                className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeScenario === index
                    ? 'bg-primary text-white shadow-lg transform scale-105'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
                aria-label={`View ${scenario.title} scenario`}
              >
                <span className="mr-2">{scenario.icon}</span>
                <span className="text-sm font-medium">{scenario.title}</span>
              </button>
            ))}
          </div>

          {/* Active Scenario Display */}
          <div className={`bg-gradient-to-br ${practicalScenarios[activeScenario].color} p-8 rounded-2xl text-white mb-12`}>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-white/20 rounded-full mr-4">
                    {practicalScenarios[activeScenario].icon}
                  </div>
                  <h3 className="text-2xl font-bold">{practicalScenarios[activeScenario].title}</h3>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold mb-3">Scenario:</h4>
                  <p className="leading-relaxed opacity-90">
                    {practicalScenarios[activeScenario].scenario}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold mb-3">{practicalScenarios[activeScenario].approach}:</h4>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <p className="font-medium opacity-95">
                      {practicalScenarios[activeScenario].outcome}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-4">Step-by-Step Approach:</h4>
                <ol className="space-y-3">
                  {practicalScenarios[activeScenario].steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        {stepIndex + 1}
                      </span>
                      <span className="text-sm leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* Key Characteristics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "Evidence-Based",
                description: "Every position is supported by Quranic verses, authentic Hadith, or scholarly consensus",
                icon: <Book className="w-6 h-6" />
              },
              {
                title: "Practical Wisdom",
                description: "Provides clear guidance for real-life situations and contemporary challenges",
                icon: <Lightbulb className="w-6 h-6" />
              },
              {
                title: "Scholarly Guidance",
                description: "Emphasizes learning from qualified teachers and established scholars",
                icon: <Users className="w-6 h-6" />
              },
              {
                title: "Balanced Approach",
                description: "Avoids extremes while maintaining commitment to authentic Islamic principles",
                icon: <Globe className="w-6 h-6" />
              }
            ].map((characteristic, index) => (
              <div key={index} className="bg-neutral-50 p-6 rounded-xl text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-full">
                    {characteristic.icon}
                  </div>
                </div>
                <h4 className="font-bold text-primary mb-2">{characteristic.title}</h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {characteristic.description}
                </p>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-geometric-light p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              A Living Methodology
            </h3>
            <p className="text-lg text-neutral-700 leading-relaxed max-w-3xl mx-auto">
              Manhaj Salaf isn't just theoretical—it's a practical approach to living Islam 
              authentically in any time and place. It provides clear guidance while respecting 
              the wisdom of scholarly tradition and the needs of contemporary Muslim communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticalApplicationsSection;