import React from 'react';
import { myPrinciples } from '../data/siteData';

export const Principles = () => {
  return (
    <section className="section" id="principles" aria-labelledby="principles-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Guiding Operating Philosophy</span>
          <h2 id="principles-heading" className="section-title">My Principles</h2>
          <p className="section-subtitle">
            Core beliefs and mental models that guide my engineering work, discipline, decision-making, and long-term orientation.
          </p>
        </div>

        <div className="principles-grid">
          {myPrinciples.map((principle) => (
            <div key={principle.number} className="glass-card principle-card">
              <div>
                <span className="principle-num">{principle.number}</span>
                <h3 className="principle-title">{principle.title}</h3>
              </div>
              <p className="principle-desc">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
