import React, { useState, useEffect, useRef } from 'react';
import { Users, BookOpen, Calendar, MapPin } from 'lucide-react';

const FoundationSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTimeline, setActiveTimeline] = useState(0);
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

  const timelineData = [
    {
      period: "1st Generation",
      timeframe: "610-661 CE",
      description: "The Companions (Sahabah)",
      details: "Those who met Prophet Muhammad ﷺ, believed in him, and died as Muslims. They received direct instruction and witnessed the revelation.",
      icon: <Users className="w-6 h-6" />,
      color: "bg-primary"
    },
    {
      period: "2nd Generation", 
      timeframe: "661-740 CE",
      description: "The Followers (Tabi'un)",
      details: "Students of the Companions who learned from them directly. They preserved and transmitted the teachings with accuracy.",
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-secondary"
    },
    {
      period: "3rd Generation",
      timeframe: "740-820 CE", 
      description: "Followers of Followers (Tabi' Tabi'in)",
      details: "Students of the Tabi'un who continued the chain of authentic transmission and scholarly methodology.",
      icon: <Calendar className="w-6 h-6" />,
      color: "bg-accent"
    }
  ];

  return (
    <section ref={sectionRef} id="foundation" className="section-padding bg-white">
      <div className="container-width">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              What is Manhaj Salaf?
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8 rounded-full" />
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              Manhaj Salaf (منهج السلف) literally means "the methodology of the predecessors." 
              It refers to understanding and practicing Islam according to the way of the Salaf as-Salih 
              (السلف الصالح) - the righteous predecessors.
            </p>
          </div>

          {/* Definition Card */}
          <div className="bg-gradient-to-r from-primary-light to-accent p-8 rounded-2xl text-white mb-16 islamic-border">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Core Definition</h3>
                <p className="text-lg leading-relaxed">
                  Following the understanding and practice of Islam as demonstrated by the first three 
                  generations of Muslims, who were praised by Prophet Muhammad ﷺ as the best of people.
                </p>
                <div className="mt-6 p-4 bg-white/10 rounded-lg">
                  <p className="arabic-text text-2xl mb-2">خَيْرُ النَّاسِ قَرْنِي</p>
                  <p className="text-sm italic">"The best of people are my generation" - Hadith</p>
                </div>
              </div>
              <div className="flex justify-center">
                <MapPin className="w-32 h-32 text-secondary opacity-50" />
              </div>
            </div>
          </div>

          {/* Interactive Timeline */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-primary mb-12">
              The Three Blessed Generations
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeTimeline === index ? 'scale-105' : 'hover:scale-102'
                  }`}
                  onClick={() => setActiveTimeline(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveTimeline(index);
                    }
                  }}
                  aria-label={`Learn about ${item.period}`}
                >
                  <div className={`p-6 rounded-xl ${item.color} text-white card-shadow`}>
                    <div className="flex items-center justify-center mb-4">
                      <div className="p-3 bg-white/20 rounded-full">
                        {item.icon}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-center mb-2">{item.period}</h4>
                    <p className="text-center text-sm opacity-90 mb-3">{item.timeframe}</p>
                    <p className="text-center font-medium">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Active Timeline Details */}
            <div className="mt-8 p-6 bg-neutral-50 rounded-xl border-l-4 border-primary">
              <h4 className="text-xl font-bold text-primary mb-3">
                {timelineData[activeTimeline].period}: {timelineData[activeTimeline].description}
              </h4>
              <p className="text-neutral-700 leading-relaxed">
                {timelineData[activeTimeline].details}
              </p>
            </div>
          </div>

          {/* Key Principles Preview */}
          <div className="bg-geometric-light rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center text-primary mb-8">
              Why Follow Their Methodology?
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                  <p><strong>Divine Testimony:</strong> Allah praised them in the Quran</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                  <p><strong>Prophetic Praise:</strong> Muhammad ﷺ testified to their excellence</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                  <p><strong>Direct Access:</strong> Closest to the original source</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0" />
                  <p><strong>Purity of Understanding:</strong> Free from later innovations</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0" />
                  <p><strong>Comprehensive Guidance:</strong> Complete way of life</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0" />
                  <p><strong>Proven Results:</strong> Successfully implemented Islam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundationSection;