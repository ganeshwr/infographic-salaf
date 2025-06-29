import React, { useState, useEffect, useRef } from 'react';
import { AlertTriangle, CheckCircle, RefreshCw, Eye } from 'lucide-react';

const MisconceptionsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
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

  const toggleCard = (index: number) => {
    const newFlipped = new Set(flippedCards);
    if (newFlipped.has(index)) {
      newFlipped.delete(index);
    } else {
      newFlipped.add(index);
    }
    setFlippedCards(newFlipped);
  };

  const misconceptions = [
    {
      misconception: "Manhaj Salaf is the same as Wahhabism",
      reality: "Historical Distinction",
      explanation: "Manhaj Salaf is a methodology that has existed since the early centuries of Islam, focusing on following the understanding of the first three generations. Wahhabism refers to a specific 18th-century reform movement in Arabia. While there may be some overlap, they have different historical origins and contexts.",
      details: "Many scholars who follow Manhaj Salaf existed centuries before Muhammad ibn Abd al-Wahhab. The methodology emphasizes scholarly consensus and established principles of Islamic jurisprudence, while being distinct from any particular modern movement or political group."
    },
    {
      misconception: "All followers make Takfir (declare others as non-Muslims)",
      reality: "Strict Scholarly Conditions",
      explanation: "Authentic Manhaj Salaf actually emphasizes extreme caution in matters of Takfir. Classical scholars established very strict conditions and procedures that must be met before such serious judgments can be made, and this is typically done only by qualified scholars after thorough investigation.",
      details: "The early Salaf were known for their caution in this matter. They established principles like ensuring the person understands the issue, has access to knowledge, is not under compulsion, and many other conditions. Individual Muslims are not authorized to make such declarations."
    },
    {
      misconception: "Anti-modern and against all progress",
      reality: "Distinction Between Religious and Worldly Matters",
      explanation: "Manhaj Salaf distinguishes between religious innovations (which are rejected) and beneficial worldly innovations (which are accepted). Many followers are professionals in modern fields, use technology, and contribute to societal advancement while maintaining traditional religious practices.",
      details: "The methodology encourages beneficial knowledge and technological advancement. What it opposes is introducing new practices into the religion itself. Muslims following this approach work in all fields - medicine, engineering, education, and technology."
    },
    {
      misconception: "Intolerant of scholarly differences",
      reality: "Recognition of Valid Differences",
      explanation: "Classical Salafi scholarship recognizes legitimate differences of opinion (Ikhtilaf) among qualified scholars. What it opposes are differences that contradict clear texts or the consensus of the early generations, while respecting valid scholarly disagreement in matters of interpretation.",
      details: "The early Salaf themselves had differences in secondary matters while maintaining unity in core beliefs. This methodology actually provides a framework for handling differences respectfully while maintaining essential unity."
    },
    {
      misconception: "A new sect or modern movement",
      reality: "Continuous Historical Methodology",
      explanation: "Rather than being a new sect, Manhaj Salaf represents a continuous approach to Islamic scholarship that has existed since the time of the Prophet ﷺ and the early generations. It's a methodology for understanding Islam, not a separate group or organization.",
      details: "This approach has been followed by scholars throughout Islamic history, including Imam Ahmad, Ibn Taymiyyah, Ibn Qayyim, and many others across different centuries and regions. It's a scholarly methodology, not an organizational movement."
    },
    {
      misconception: "Rejects all forms of Islamic scholarship",
      reality: "Builds Upon Classical Scholarship",
      explanation: "Manhaj Salaf actually emphasizes learning from the rich tradition of Islamic scholarship, particularly from the early generations. It values and builds upon the works of classical scholars while using their methodology to address contemporary issues.",
      details: "Followers study extensively from classical works of Tafsir, Hadith, Fiqh, and other Islamic sciences. The approach is to understand these sciences through the lens and methodology of the early scholars, not to reject scholarship altogether."
    }
  ];

  return (
    <section ref={sectionRef} id="misconceptions" className="section-padding bg-gradient-to-br from-neutral-50 to-neutral-100">
      <div className="container-width">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Clearing Misconceptions
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8 rounded-full" />
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              Unfortunately, many misconceptions exist about Manhaj Salaf. Let's address these 
              misunderstandings with clear, factual explanations based on scholarly evidence.
            </p>
            <div className="flex items-center justify-center mt-6 text-accent">
              <Eye className="w-5 h-5 mr-2" />
              <span className="text-sm">Click cards to reveal the truth</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {misconceptions.map((item, index) => (
              <div key={index} className="flip-card">
                <div 
                  className={`flip-card-inner ${flippedCards.has(index) ? 'flipped' : ''}`}
                  onClick={() => toggleCard(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleCard(index);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Learn about misconception: ${item.misconception}`}
                >
                  {/* Front of card - Misconception */}
                  <div className="flip-card-front bg-gradient-to-br from-red-500 to-red-600 text-white">
                    <div className="p-3 bg-white/20 rounded-full mb-4">
                      <AlertTriangle className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold mb-4 text-center">Common Misconception</h4>
                    <p className="text-center leading-relaxed mb-6 text-sm px-2">"{item.misconception}"</p>
                    <div className="flex items-center justify-center text-sm opacity-80 mt-auto">
                      <RefreshCw className="w-4 h-4 mr-1" />
                      Click to see the truth
                    </div>
                  </div>

                  {/* Back of card - Reality */}
                  <div className="flip-card-back bg-gradient-to-br from-green-500 to-green-600 text-white">
                    <div className="p-3 bg-white/20 rounded-full mb-4">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold mb-3 text-center">{item.reality}</h4>
                    <p className="text-sm leading-relaxed mb-4 px-1">{item.explanation}</p>
                    <div className="text-xs opacity-90 italic leading-relaxed px-1">
                      {item.details}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-white p-8 rounded-2xl card-shadow text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Want to Learn More?
            </h3>
            <p className="text-lg text-neutral-600 mb-6 max-w-2xl mx-auto">
              Understanding comes through proper education from qualified sources. 
              Don't let misconceptions cloud your judgment - seek authentic knowledge.
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
                onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline"
                aria-label="Go to FAQ section"
              >
                Read Common Questions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MisconceptionsSection;