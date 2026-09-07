import React from 'react';
import { achievements } from '../data/siteData';
import { IconAward, IconTerminal, IconUsers, IconCode, IconShield, IconGlobe, IconCpu } from './Icons';

export const Achievements = () => {
  const getAchievementIcon = (iconName) => {
    switch (iconName) {
      case 'award':
        return <IconAward size={22} />;
      case 'terminal':
        return <IconTerminal size={22} />;
      case 'users':
        return <IconUsers size={22} />;
      case 'shield':
        return <IconShield size={22} />;
      case 'globe':
        return <IconGlobe size={22} />;
      case 'cpu':
        return <IconCpu size={22} />;
      default:
        return <IconCode size={22} />;
    }
  };

  return (
    <section className="section" id="achievements" aria-labelledby="achievements-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Verified Distinctions</span>
          <h2 id="achievements-heading" className="section-title">Achievements & Distinctions</h2>
          <p className="section-subtitle">
            Notable competition awards, team finalist distinctions, and collegiate leadership appointments.
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((item) => (
            <div key={item.id} className="glass-card achievement-card">
              <div>
                <div className="achievement-top">
                  <div className="achievement-icon" aria-hidden="true">
                    {getAchievementIcon(item.icon)}
                  </div>
                  <span className={`badge ${item.badge.includes('Award') ? 'badge-amber' : 'badge-cyan'}`}>
                    {item.badge}
                  </span>
                </div>
                <h3 className="achievement-title">{item.title}</h3>
              </div>
              <p className="achievement-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
