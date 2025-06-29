import React from 'react';

interface ProgressTrackerProps {
  progress: number;
  sections: string[];
  activeSection: number;
  onSectionClick: (index: number) => void;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  progress,
  sections,
  activeSection,
  onSectionClick,
}) => {
  return (
    <>
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <div className="scroll-indicator hidden lg:flex flex-col">
        {sections.map((section, index) => (
          <div
            key={section}
            className={`scroll-dot ${index === activeSection ? 'active' : ''}`}
            onClick={() => onSectionClick(index)}
            title={section}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onSectionClick(index);
              }
            }}
            aria-label={`Go to ${section} section`}
          />
        ))}
      </div>
    </>
  );
};

export default ProgressTracker;