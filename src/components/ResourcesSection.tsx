import React, { useState, useEffect, useRef } from 'react';
import { Book, Users, Globe, Download, Star, ExternalLink, BookOpen, GraduationCap } from 'lucide-react';

const ResourcesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('beginner');
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

  const resourceCategories = {
    beginner: {
      title: "Getting Started",
      icon: <BookOpen className="w-6 h-6" />,
      resources: [
        {
          title: "The Three Fundamental Principles",
          author: "Sheikh Muhammad ibn Abdul Wahhab",
          description: "Essential foundation text covering basic Islamic beliefs and the methodology of the Salaf",
          type: "Book",
          difficulty: "Beginner",
          link: "#"
        },
        {
          title: "Kitab at-Tawheed",
          author: "Sheikh Muhammad ibn Abdul Wahhab", 
          description: "Comprehensive study of Islamic monotheism with Quranic and prophetic evidence",
          type: "Book",
          difficulty: "Beginner-Intermediate",
          link: "#"
        },
        {
          title: "Introduction to Manhaj Salaf",
          author: "Various Contemporary Scholars",
          description: "Modern explanations and introductions to the Salafi methodology for new learners",
          type: "Article Collection",
          difficulty: "Beginner",
          link: "#"
        },
        {
          title: "Basic Islamic Beliefs",
          author: "Sheikh Salih al-Fawzan",
          description: "Clear explanation of fundamental Islamic concepts and beliefs",
          type: "Book",
          difficulty: "Beginner",
          link: "#"
        }
      ]
    },
    intermediate: {
      title: "Building Knowledge",
      icon: <Book className="w-6 h-6" />,
      resources: [
        {
          title: "Sharh as-Sunnah",
          author: "Imam al-Barbahari",
          description: "Classical text on Sunni methodology and beliefs with contemporary explanations",
          type: "Classical Text",
          difficulty: "Intermediate",
          link: "#"
        },
        {
          title: "Al-Aqeedah al-Wasitiyyah",
          author: "Sheikh al-Islam Ibn Taymiyyah",
          description: "Comprehensive creed covering Islamic theology and methodology",
          type: "Classical Text",
          difficulty: "Intermediate",
          link: "#"
        },
        {
          title: "Principles of Fiqh",
          author: "Various Classical Scholars",
          description: "Understanding the principles used by early scholars in deriving Islamic rulings",
          type: "Study Guide",
          difficulty: "Intermediate-Advanced",
          link: "#"
        },
        {
          title: "Hadith Methodology",
          author: "Classical and Contemporary Scholars",
          description: "Learning how to verify and understand prophetic traditions",
          type: "Academic Course",
          difficulty: "Intermediate",
          link: "#"
        }
      ]
    },
    scholars: {
      title: "Learn from Teachers",
      icon: <Users className="w-6 h-6" />,
      resources: [
        {
          title: "Local Islamic Centers",
          author: "Community-Based Learning",
          description: "Find qualified teachers in your local community for personalized guidance",
          type: "In-Person",
          difficulty: "All Levels",
          link: "#"
        },
        {
          title: "Islamic Universities",
          author: "Academic Institutions",
          description: "Formal Islamic education from established universities and institutes",
          type: "Formal Education",
          difficulty: "All Levels",
          link: "#"
        },
        {
          title: "Online Islamic Academies",
          author: "Qualified Online Instructors",
          description: "Structured online courses from recognized scholars and institutions",
          type: "Online Course",
          difficulty: "All Levels",
          link: "#"
        },
        {
          title: "Scholar Lectures & Seminars",
          author: "Contemporary Scholars",
          description: "Audio and video lectures from established scholars explaining key concepts",
          type: "Audio/Video",
          difficulty: "All Levels",
          link: "#"
        }
      ]
    },
    advanced: {
      title: "Deep Study",
      icon: <GraduationCap className="w-6 h-6" />,
      resources: [
        {
          title: "Classical Tafsir Works",
          author: "Ibn Kathir, at-Tabari, al-Qurtubi",
          description: "Comprehensive Quranic commentaries from classical scholars",
          type: "Classical Commentary",
          difficulty: "Advanced",
          link: "#"
        },
        {
          title: "Major Hadith Collections",
          author: "Bukhari, Muslim, Abu Dawood, etc.",
          description: "Primary sources of prophetic traditions with scholarly commentary",
          type: "Hadith Collection",
          difficulty: "Advanced",
          link: "#"
        },
        {
          title: "Works of Ibn Taymiyyah",
          author: "Sheikh al-Islam Ibn Taymiyyah",
          description: "Comprehensive theological and jurisprudential works",
          type: "Classical Scholarship",
          difficulty: "Advanced",
          link: "#"
        },
        {
          title: "Contemporary Scholarly Research",
          author: "Modern Academic Scholars",
          description: "Recent research and analysis on Salafi methodology and its applications",
          type: "Academic Research",
          difficulty: "Advanced",
          link: "#"
        }
      ]
    }
  };

  const learningPath = [
    {
      stage: "Foundation",
      duration: "3-6 months",
      focus: "Basic beliefs, prayer, and fundamental concepts",
      goal: "Solid understanding of core Islamic practices and beliefs"
    },
    {
      stage: "Methodology",
      duration: "6-12 months", 
      focus: "Understanding how to approach Islamic texts and scholarship",
      goal: "Ability to recognize authentic sources and proper scholarly methods"
    },
    {
      stage: "Application",
      duration: "1-2 years",
      focus: "Applying principles to daily life and contemporary issues",
      goal: "Confident practice of Islam according to prophetic example"
    },
    {
      stage: "Advanced Study",
      duration: "Ongoing",
      focus: "Deep study of classical texts and specialized knowledge",
      goal: "Contributing to Islamic scholarship and community teaching"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'bg-success/10 text-success';
      case 'intermediate': case 'beginner-intermediate': return 'bg-warning/10 text-warning';
      case 'intermediate-advanced': case 'advanced': return 'bg-error/10 text-error';
      default: return 'bg-neutral-200 text-neutral-600';
    }
  };

  return (
    <section ref={sectionRef} id="resources" className="section-padding bg-white">
      <div className="container-width">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Learning Resources
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8 rounded-full" />
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              Your journey to understanding Manhaj Salaf begins with authentic sources and 
              qualified teachers. Here are recommended resources for every level of learning.
            </p>
          </div>

          {/* Resource Category Tabs */}
          <div className="flex flex-wrap justify-center mb-12 bg-neutral-100 p-2 rounded-xl max-w-2xl mx-auto">
            {Object.entries(resourceCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300 mx-1 mb-1 ${
                  activeCategory === key
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-neutral-600 hover:bg-neutral-200'
                }`}
                aria-label={`View ${category.title} resources`}
              >
                <span className="mr-2">{category.icon}</span>
                <span className="font-medium">{category.title}</span>
              </button>
            ))}
          </div>

          {/* Active Category Resources */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-primary mb-8">
              {resourceCategories[activeCategory as keyof typeof resourceCategories].title}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {resourceCategories[activeCategory as keyof typeof resourceCategories].resources.map((resource, index) => (
                <div key={index} className="bg-neutral-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-primary mb-1">{resource.title}</h4>
                      <p className="text-sm text-neutral-600 mb-2">by {resource.author}</p>
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">
                          {resource.type}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded ${getDifficultyColor(resource.difficulty)}`}>
                          {resource.difficulty}
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-neutral-400 flex-shrink-0 ml-4" />
                  </div>
                  
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    {resource.description}
                  </p>
                  
                  <button
                    className="text-primary hover:text-primary-dark font-medium text-sm flex items-center"
                    aria-label={`Access ${resource.title}`}
                  >
                    <Download className="w-4 h-4 mr-1" />
                    Access Resource
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Path Guide */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-center text-primary mb-8">
              Recommended Learning Path
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {learningPath.map((stage, index) => (
                <div key={index} className="bg-white p-6 rounded-xl relative">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full font-bold text-lg mb-4 mx-auto">
                    {index + 1}
                  </div>
                  
                  <h4 className="text-lg font-bold text-primary text-center mb-2">
                    {stage.stage}
                  </h4>
                  
                  <div className="text-center mb-4">
                    <span className="text-sm bg-secondary/10 text-secondary px-2 py-1 rounded">
                      {stage.duration}
                    </span>
                  </div>
                  
                  <p className="text-sm text-neutral-600 mb-3 text-center">
                    <strong>Focus:</strong> {stage.focus}
                  </p>
                  
                  <p className="text-xs text-neutral-500 text-center">
                    <strong>Goal:</strong> {stage.goal}
                  </p>
                  
                  {index < learningPath.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <div className="w-6 h-0.5 bg-primary/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-gradient-to-r from-warning/10 to-accent/10 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-primary mb-4 text-center">
              Important Learning Guidelines
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-primary mb-3">✓ Recommended Practices:</h4>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• Always verify sources and author credentials</li>
                  <li>• Learn from multiple qualified scholars</li>
                  <li>• Prioritize learning with teachers over self-study</li>
                  <li>• Start with basics before advancing to complex topics</li>
                  <li>• Practice what you learn in daily life</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-error mb-3">⚠ Things to Avoid:</h4>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• Learning complex theology without proper foundation</li>
                  <li>• Relying solely on internet resources without verification</li>
                  <li>• Jumping between different methodologies randomly</li>
                  <li>• Attempting to teach others before mastering basics</li>
                  <li>• Ignoring the importance of qualified instruction</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Final Call to Action */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Ready to Begin Your Learning Journey?
            </h3>
            <p className="text-lg text-neutral-600 mb-6 max-w-2xl mx-auto">
              Remember, seeking Islamic knowledge is a lifelong journey. Start with sincerity, 
              be patient with yourself, and always seek guidance from qualified teachers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('foundation')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
                aria-label="Review the foundation concepts"
              >
                <Star className="inline-block w-4 h-4 mr-2" />
                Review the Basics
              </button>
              <button
                onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline"
                aria-label="Read frequently asked questions"
              >
                <Globe className="inline-block w-4 h-4 mr-2" />
                Read Common Questions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;