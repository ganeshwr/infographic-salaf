import React, { useState, useEffect, useRef } from 'react';
import { Map, Calendar, Users, BookOpen, Globe } from 'lucide-react';

const HistoricalSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeEra, setActiveEra] = useState(0);
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

  const historicalEras = [
    {
      period: "Prophetic Era",
      years: "610-632 CE",
      location: "Makkah & Madinah",
      description: "Foundation of Islamic methodology through revelation and prophetic example",
      keyFigures: ["Prophet Muhammad ﷺ"],
      achievements: ["Quran revelation", "Sunnah establishment", "First Muslim community"],
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-primary to-primary-light"
    },
    {
      period: "Rashidun Caliphate", 
      years: "632-661 CE",
      location: "Arabian Peninsula & Beyond",
      description: "Righteous leadership following prophetic methodology",
      keyFigures: ["Abu Bakr", "Umar", "Uthman", "Ali"],
      achievements: ["Quran compilation", "Islamic expansion", "Legal precedents"],
      icon: <Users className="w-6 h-6" />,
      color: "from-secondary to-secondary-light"
    },
    {
      period: "Scholarly Development",
      years: "661-820 CE", 
      location: "Damascus, Baghdad, Madinah",
      description: "Systematic preservation and transmission of knowledge",
      keyFigures: ["Imam Malik", "Ibn Sirin", "Al-Awza'i"],
      achievements: ["Hadith collection", "Fiqh development", "Tafsir works"],
      icon: <Calendar className="w-6 h-6" />,
      color: "from-accent to-accent-light"
    },
    {
      period: "Global Spread",
      years: "820-1100 CE",
      location: "Worldwide",
      description: "Transmission of Salafi methodology across Muslim lands",
      keyFigures: ["Ahmad ibn Hanbal", "Ibn Taymiyyah's predecessors"],
      achievements: ["Preservation during trials", "Geographic expansion", "Scholarly networks"],
      icon: <Globe className="w-6 h-6" />,
      color: "from-primary to-accent"
    }
  ];

  const geographicalCenters = [
    { name: "Madinah", description: "Center of prophetic teaching", importance: "Primary source" },
    { name: "Makkah", description: "Birthplace of Islam", importance: "Spiritual center" },
    { name: "Damascus", description: "Umayyad scholarly activity", importance: "Early expansion" },
    { name: "Baghdad", description: "Abbasid knowledge hub", importance: "Systematic compilation" },
    { name: "Cairo", description: "Later scholarly center", importance: "Preservation efforts" }
  ];

  return (
    <section ref={sectionRef} id="history" className="section-padding bg-gradient-to-br from-neutral-50 to-neutral-100">
      <div className="container-width">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Historical Continuity
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8 rounded-full" />
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              Manhaj Salaf isn't a modern movement—it's the continuous, unbroken chain of Islamic 
              understanding that has existed since the time of Prophet Muhammad ﷺ.
            </p>
          </div>

          {/* Interactive Timeline */}
          <div className="mb-16">
            <div className="flex flex-col lg:flex-row justify-center mb-8 space-y-2 lg:space-y-0 lg:space-x-2">
              {historicalEras.map((era, index) => (
                <button
                  key={index}
                  onClick={() => setActiveEra(index)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeEra === index 
                      ? 'bg-primary text-white shadow-lg transform scale-105' 
                      : 'bg-white text-primary hover:bg-primary/10'
                  }`}
                  aria-label={`View ${era.period} details`}
                >
                  {era.period}
                </button>
              ))}
            </div>

            {/* Active Era Details */}
            <div className={`bg-gradient-to-r ${historicalEras[activeEra].color} p-8 rounded-2xl text-white`}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-white/20 rounded-full mr-4">
                      {historicalEras[activeEra].icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{historicalEras[activeEra].period}</h3>
                      <p className="opacity-90">{historicalEras[activeEra].years}</p>
                    </div>
                  </div>
                  <p className="text-lg mb-6 leading-relaxed">
                    {historicalEras[activeEra].description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-bold mb-2">Key Location:</h4>
                    <p className="flex items-center">
                      <Map className="w-4 h-4 mr-2" />
                      {historicalEras[activeEra].location}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="mb-6">
                    <h4 className="font-bold mb-3">Notable Figures:</h4>
                    <ul className="space-y-2">
                      {historicalEras[activeEra].keyFigures.map((figure, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-white rounded-full mr-3" />
                          {figure}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">Major Achievements:</h4>
                    <ul className="space-y-2">
                      {historicalEras[activeEra].achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-white rounded-full mr-3" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Geographical Centers */}
          <div className="bg-white p-8 rounded-2xl card-shadow">
            <h3 className="text-2xl font-bold text-center text-primary mb-8">
              Centers of Learning & Transmission
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {geographicalCenters.map((center, index) => (
                <div key={index} className="p-4 border border-neutral-200 rounded-lg hover:border-primary transition-colors duration-300">
                  <h4 className="font-bold text-primary mb-2">{center.name}</h4>
                  <p className="text-sm text-neutral-600 mb-2">{center.description}</p>
                  <div className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">
                    {center.importance}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Continuity Message */}
          <div className="mt-12 text-center p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl">
            <h3 className="text-2xl font-bold text-primary mb-4">
              An Unbroken Chain
            </h3>
            <p className="text-lg text-neutral-700 leading-relaxed max-w-3xl mx-auto">
              From the Prophet ﷺ to today, this methodology has been preserved and transmitted 
              by sincere scholars across centuries and continents. It's not a modern interpretation, 
              but the original understanding maintained through careful scholarship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoricalSection;