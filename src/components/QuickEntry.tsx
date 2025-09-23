import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LightningIcon, SendIcon } from './icons';
import { useApp } from '../hooks/useApp';
import './QuickEntry.css';

interface QuickEntryProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuickEntry({ isOpen, onClose }: QuickEntryProps) {
  const { t } = useTranslation();
  const { actions } = useApp();
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isOpen && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim() && !isSubmitting) {
      setIsSubmitting(true);
      try {
        await actions.addNote(content.trim(), 'dream');
        setContent('');
        onClose();
      } catch (error) {
        console.error('Error saving quick entry:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      e.preventDefault();
      handleSubmit(e as any);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="quick-entry-overlay" onClick={handleBackdropClick}>
      <div className="quick-entry-modal" onClick={(e) => e.stopPropagation()}>
        <div className="quick-entry-header">
          <div className="quick-entry-title">
            <LightningIcon size={18} />
            <h3>{t('quickEntry.title')}</h3>
          </div>
          <button
            className="quick-entry-close"
            onClick={onClose}
            type="button"
            aria-label={t('common.close')}
          >
            ×
          </button>
        </div>
        
        <form className="quick-entry-form" onSubmit={handleSubmit}>
          <textarea
            ref={textareaRef}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder={t('quickEntry.placeholder')}
            className="quick-entry-textarea"
            rows={4}
            maxLength={2000}
          />
          
          <div className="quick-entry-footer">
            <div className="quick-entry-hints">
              <span className="quick-entry-hint">{t('quickEntry.hint')}</span>
              <span className="char-counter">{content.length}/2000</span>
            </div>
            
            <div className="quick-entry-actions">
              <button
                type="button"
                className="quick-entry-btn secondary"
                onClick={onClose}
              >
                {t('common.cancel')}
              </button>
              <button
                type="submit"
                className="quick-entry-btn primary"
                disabled={!content.trim() || isSubmitting}
              >
                <SendIcon size={14} />
                {isSubmitting ? t('quickEntry.saving') : t('quickEntry.save')}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}