import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SendIcon } from './icons';
import { useApp } from '../hooks/useApp';
import './NoteInput.css';

export function NoteInput() {
  const { t } = useTranslation();
  const { actions } = useApp();
  const [content, setContent] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Focus on the input when component mounts
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      await actions.addNote(content.trim(), 'dream');
      setContent('');
      
      // Refocus the input after saving
      if (textareaRef.current) {
        textareaRef.current.focus();
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  return (
    <form className="note-input-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <textarea
          ref={textareaRef}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={t('placeholder')}
          className="note-textarea"
          rows={3}
          maxLength={2000}
        />
        <button
          type="submit"
          className="submit-btn"
          disabled={!content.trim()}
        >
          <SendIcon size={16} />
          <span>{t('submit')}</span>
        </button>
      </div>
      <div className="char-counter">
        {content.length}/2000
      </div>
    </form>
  );
}