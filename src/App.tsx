import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import FoundationSection from './components/FoundationSection';
import HistoricalSection from './components/HistoricalSection';
import PrinciplesSection from './components/PrinciplesSection';
import MisconceptionsSection from './components/MisconceptionsSection';
import PracticalApplicationsSection from './components/PracticalApplicationsSection';
import FAQSection from './components/FAQSection';
import ResourcesSection from './components/ResourcesSection';
import ProgressTracker from './components/ProgressTracker';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    'Hero',
    'Foundation', 
    'History',
    'Principles',
    'Misconceptions',
    'Applications',
    'FAQ',
    'Resources'
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Update active section based on scroll position
      const sectionElements = sections.map(section => 
        document.getElementById(section.toLowerCase())
      ).filter(Boolean);

      const currentSection = sectionElements.findIndex(element => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
      });

      if (currentSection !== -1) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStartLearning = () => {
    document.getElementById('foundation')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const handleSectionClick = (index: number) => {
    const sectionId = sections[index].toLowerCase();
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen">
      <ProgressTracker
        progress={scrollProgress}
        sections={sections}
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      />
      
      <div id="hero">
        <HeroSection onStartLearning={handleStartLearning} />
      </div>
      
      <div id="foundation">
        <FoundationSection />
      </div>
      
      <div id="history">
        <HistoricalSection />
      </div>
      
      <div id="principles">
        <PrinciplesSection />
      </div>
      
      <div id="misconceptions">
        <MisconceptionsSection />
      </div>
      
      <div id="applications">
        <PracticalApplicationsSection />
      </div>
      
      <div id="faq">
        <FAQSection />
      </div>
      
      <div id="resources">
        <ResourcesSection />
      </div>
    </div>
  );
}

export default App;