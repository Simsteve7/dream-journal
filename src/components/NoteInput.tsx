import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SendIcon } from './icons';
import { NoteCategory } from '../types';
import { useApp } from '../hooks/useApp';
import './NoteInput.css';

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (category: NoteCategory) => void;
}

function CategoryModal({ isOpen, onClose, onSelect }: CategoryModalProps) {
  const { t } = useTranslation();
  const categories: NoteCategory[] = ['dream', 'idea', 'thought', 'reminder', 'other'];

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>{t('categorize')}</h3>
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn category-${category}`}
              onClick={() => onSelect(category)}
            >
              {t(`categories.${category}`)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function NoteInput() {
  const { t } = useTranslation();
  const { actions } = useApp();
  const [content, setContent] = useState('');
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [pendingContent, setPendingContent] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Focus on the input when component mounts
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      setPendingContent(content.trim());
      setShowCategoryModal(true);
    }
  };

  const handleCategorySelect = async (category: NoteCategory) => {
    if (pendingContent) {
      await actions.addNote(pendingContent, category);
      setContent('');
      setPendingContent('');
      setShowCategoryModal(false);
      
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
    <>
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

      <CategoryModal
        isOpen={showCategoryModal}
        onClose={() => {
          setShowCategoryModal(false);
          setPendingContent('');
        }}
        onSelect={handleCategorySelect}
      />
    </>
  );
}