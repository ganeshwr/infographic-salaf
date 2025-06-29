import React from 'react';
import { Globe } from 'lucide-react';
import { useTranslation, Language } from '../hooks/useTranslation';

const LanguageSwitcher: React.FC = () => {
  const { language, switchLanguage } = useTranslation();

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' }
  ];

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative group">
        <button
          className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm border border-neutral-200 rounded-lg px-3 py-2 shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Change language"
        >
          <Globe className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-neutral-700">
            {languages.find(lang => lang.code === language)?.flag}
          </span>
        </button>
        
        <div className="absolute top-full right-0 mt-2 bg-white border border-neutral-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[180px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLanguage(lang.code)}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-neutral-50 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                language === lang.code ? 'bg-primary/5 text-primary' : 'text-neutral-700'
              }`}
              aria-label={`Switch to ${lang.name}`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm font-medium">{lang.name}</span>
              {language === lang.code && (
                <div className="ml-auto w-2 h-2 bg-primary rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;