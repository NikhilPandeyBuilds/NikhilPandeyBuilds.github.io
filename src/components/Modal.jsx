import React, { useEffect } from 'react';
import { IconClose } from './Icons';

export const Modal = ({ title, subtitle, onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick} role="presentation">
      <div className="modal-box" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div className="modal-header">
          <div>
            <h3 id="modal-title" style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.2rem' }}>
              {title}
            </h3>
            {subtitle && (
              <p style={{ fontSize: '0.875rem', color: 'var(--accent-cyan)' }}>
                {subtitle}
              </p>
            )}
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <IconClose size={18} />
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};
