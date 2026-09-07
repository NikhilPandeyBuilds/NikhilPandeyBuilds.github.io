import React from 'react';
import { IconCheck } from './Icons';

export const Toast = ({ message }) => {
  if (!message) return null;

  return (
    <div className="toast-container" role="status" aria-live="polite">
      <div className="toast-message">
        <IconCheck size={18} style={{ color: 'var(--accent-emerald)' }} />
        <span>{message}</span>
      </div>
    </div>
  );
};
