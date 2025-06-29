import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openQuestions, setOpenQuestions] = useState<Set<number>>(new Set([0])); // First question open by default
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

  const toggleQuestion = (index: number) => {
    const newOpen = new Set(openQuestions);
    if (newOpen.has(index)) {
      newOpen.delete(index);
    } else {
      newOpen.add(index);
    }
    setOpenQuestions(newOpen);
  };

  const faqData = [
    {
      question: "How is Manhaj Salaf different from other Islamic approaches?",
      answer: "Manhaj Salaf emphasizes understanding Islam through the lens of the first three generations (Salaf as-Salih) who were closest to the Prophet ﷺ. While other approaches might prioritize later scholarly developments, philosophical interpretations, or cultural adaptations, this methodology prioritizes the understanding of those who learned directly from the Prophet ﷺ and his Companions. It's not about rejecting all later scholarship, but about using the early generations' understanding as the primary filter for evaluating religious matters.",
      category: "Methodology"
    },
    {
      question: "Can I follow this approach while living in the modern world?",
      answer: "Absolutely. Manhaj Salaf distinguishes between religious practices (which should remain as they were originally taught) and worldly affairs (where innovation and progress are not only allowed but encouraged). Muslims following this approach work in all modern professions, use contemporary technology, and engage with current social and economic systems. The methodology applies to understanding religious texts and practices, not to limiting beneficial worldly advancement.",
      category: "Modern Life"
    },
    {
      question: "What about the four madhabs (schools of Islamic jurisprudence)?",
      answer: "The four madhabs (Hanafi, Maliki, Shafi'i, Hanbali) are respected scholarly frameworks developed by great scholars. Many scholars who follow Manhaj Salaf have studied within these traditional schools. The key difference is that when there's a clear text from Quran or authentic Sunnah that contradicts a particular position, the text takes precedence. The madhabs themselves were built on this principle - their founders always said that if their opinion contradicted a clear authentic text, the text should be followed instead.",
      category: "Scholarship"
    },
    {
      question: "How do I start learning more about this approach?",
      answer: "Begin with learning basic Islamic beliefs and practices from qualified teachers. Start with foundational texts like 'The Three Fundamental Principles' and 'Kitab at-Tawheed.' Find local scholars or online resources from established institutions. Focus on building a strong foundation in Quran memorization, understanding of Hadith, and basic Islamic principles. Always prioritize learning from qualified teachers over self-study, especially in the beginning stages.",
      category: "Getting Started"
    },
    {
      question: "Who are recognized contemporary scholars in this methodology?",
      answer: "There are many respected scholars worldwide who follow this methodology, including Sheikh Abdul Aziz ibn Baz (rahimahullah), Sheikh Muhammad ibn Uthaymeen (rahimahullah), Sheikh Salih al-Fawzan, Sheikh Rabee' al-Madkhali, and many others. It's important to learn from multiple qualified scholars and to verify their credentials and acceptance by the scholarly community. Local scholars who have studied under established teachers are often the best starting point for most students.",
      category: "Scholars"
    },
    {
      question: "Does this approach discourage asking questions or thinking critically?",
      answer: "Not at all. Authentic scholarship encourages asking questions and seeking understanding. The Companions themselves asked many questions to understand their religion better. What this methodology emphasizes is asking questions to qualified people and not accepting answers that contradict clear Islamic texts. Critical thinking is encouraged within the framework of Islamic principles and under proper guidance. The goal is to understand deeply, not to accept blindly.",
      category: "Learning"
    },
    {
      question: "How does this approach handle differences of opinion among scholars?",
      answer: "Valid scholarly differences (ikhtilaf) are recognized and respected, especially when they occur among qualified scholars and are based on legitimate evidence. The early Salaf themselves had differences in secondary matters. However, this methodology emphasizes that differences must be based on proper evidence and methodology. When there's clear text from Quran or authentic Sunnah, or when there's consensus among the early generations, these take precedence over individual opinions.",
      category: "Differences"
    },
    {
      question: "Is this approach compatible with interfaith dialogue and cooperation?",
      answer: "Yes, absolutely. Islam teaches respectful interaction with people of other faiths, and this methodology doesn't change that. Muslims can and should engage in dialogue, cooperation on common social issues, and peaceful coexistence while maintaining their own beliefs and practices. The methodology emphasizes clarity in belief and practice, which actually facilitates honest and respectful dialogue since everyone knows where you stand.",
      category: "Interfaith"
    }
  ];

  const categories = Array.from(new Set(faqData.map(item => item.category)));

  return (
    <section ref={sectionRef} id="faq" className="section-padding bg-gradient-to-br from-neutral-50 to-neutral-100">
      <div className="container-width">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8 rounded-full" />
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              Common questions about Manhaj Salaf, answered with clarity and scholarly backing. 
              These address real concerns and curiosities from sincere learners.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqData.map((faq, index) => (
              <div key={index} className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30"
                  aria-expanded={openQuestions.has(index)}
                  aria-label={`Toggle question: ${faq.question}`}
                >
                  <div className="flex items-center flex-1">
                    <div className="flex-shrink-0 mr-4">
                      <HelpCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-neutral-800 pr-4">
                        {faq.question}
                      </h3>
                      <span className="text-xs text-neutral-500 font-medium">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    {openQuestions.has(index) ? (
                      <ChevronUp className="w-5 h-5 text-neutral-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-neutral-400" />
                    )}
                  </div>
                </button>
                
                {openQuestions.has(index) && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <div className="pl-9 border-l-2 border-primary/20">
                      <p className="text-neutral-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Access Categories */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-primary mb-6">Browse by Category</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const categoryIndex = faqData.findIndex(item => item.category === category);
                    if (categoryIndex !== -1) {
                      toggleQuestion(categoryIndex);
                      // Scroll to the question
                      setTimeout(() => {
                        const element = document.querySelector(`[aria-label*="${faqData[categoryIndex].question}"]`);
                        element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }, 100);
                    }
                  }}
                  className="px-4 py-2 bg-white text-primary border border-primary/30 rounded-lg hover:bg-primary hover:text-white transition-colors duration-200 text-sm font-medium"
                  aria-label={`Jump to ${category} questions`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Additional Help */}
          <div className="mt-16 bg-white p-8 rounded-2xl card-shadow text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg text-neutral-600 mb-6 max-w-2xl mx-auto">
              The best way to learn is from qualified teachers. Don't hesitate to seek 
              knowledge from established scholars and educational institutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
                aria-label="Go to resources section"
              >
                Find Learning Resources
              </button>
              <button
                onClick={() => document.getElementById('foundation')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline"
                aria-label="Review the foundation section"
              >
                Review the Basics
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;