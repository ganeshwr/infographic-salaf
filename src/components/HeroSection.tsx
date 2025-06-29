import React, { useState, useEffect } from 'react';
import { BookOpen, Heart, Users, Star } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

interface HeroSectionProps {
  onStartLearning: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onStartLearning }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary-light to-accent overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-10" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-bounce-slow">
        <BookOpen className="text-secondary w-8 h-8 opacity-30" />
      </div>
      <div className="absolute top-40 right-20 animate-pulse-slow">
        <Star className="text-secondary w-6 h-6 opacity-30" />
      </div>
      <div className="absolute bottom-32 left-20 animate-bounce-slow animation-delay-400">
        <Heart className="text-secondary w-7 h-7 opacity-30" />
      </div>
      <div className="absolute bottom-20 right-10 animate-pulse-slow animation-delay-600">
        <Users className="text-secondary w-8 h-8 opacity-30" />
      </div>

      <div className="container-width section-padding text-center text-white relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">
            {t('hero.title')}
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8 rounded-full" />
          <p className="text-xl md:text-2xl mb-8 text-neutral-100 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <p className="text-lg mb-12 text-neutral-200 max-w-2xl mx-auto">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onStartLearning}
              className="btn-secondary text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300"
              aria-label={t('hero.startLearning')}
            >
              <BookOpen className="inline-block w-5 h-5 mr-2" />
              {t('hero.startLearning')}
            </button>
            <button
              onClick={() => document.getElementById('misconceptions')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-4"
              aria-label={t('hero.clearMisconceptions')}
            >
              {t('hero.clearMisconceptions')}
            </button>
          </div>

          {/* Key Statistics */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">1400+</div>
              <div className="text-neutral-200">{t('hero.yearsOfTradition')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">3</div>
              <div className="text-neutral-200">{t('hero.blessedGenerations')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">∞</div>
              <div className="text-neutral-200">{t('hero.opportunitiesToLearn')}</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;