import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { EditIcon, TrashIcon, ClockIcon } from './icons';
import { Note } from '../types';
import { useApp } from '../hooks/useApp';
import './NotesList.css';

interface NoteCardProps {
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (id: string) => void;
}

function NoteCard({ note, onEdit, onDelete }: NoteCardProps) {
  const { t } = useTranslation();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date(date));
  };

  const handleDelete = () => {
    if (showDeleteConfirm) {
      onDelete(note.id);
      setShowDeleteConfirm(false);
    } else {
      setShowDeleteConfirm(true);
    }
  };

  return (
    <div className={`note-card category-${note.category}`}>
      <div className="note-header">
        <span className={`category-badge category-${note.category}`}>
          {t(`categories.${note.category}`)}
        </span>
        <div className="note-actions">
          <button
            className="action-btn edit-btn"
            onClick={() => onEdit(note)}
            title={t('notes.edit')}
          >
            <EditIcon size={14} />
          </button>
          <button
            className={`action-btn delete-btn ${showDeleteConfirm ? 'confirm' : ''}`}
            onClick={handleDelete}
            title={showDeleteConfirm ? t('notes.deleteConfirm') : t('notes.delete')}
          >
            <TrashIcon size={14} />
          </button>
        </div>
      </div>
      
      <div className="note-content">
        {note.content}
      </div>
      
      <div className="note-footer">
        <div className="note-date">
          <ClockIcon size={14} />
          <span>{t('notes.createdAt')}: {formatDate(note.createdAt)}</span>
        </div>
      </div>
      
      {showDeleteConfirm && (
        <div className="delete-confirm">
          <p>{t('notes.deleteConfirm')}</p>
          <div className="confirm-actions">
            <button
              className="confirm-btn delete"
              onClick={() => onDelete(note.id)}
            >
              {t('notes.delete')}
            </button>
            <button
              className="confirm-btn cancel"
              onClick={() => setShowDeleteConfirm(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

interface EditModalProps {
  note: Note;
  isOpen: boolean;
  onClose: () => void;
  onSave: (content: string) => void;
}

function EditModal({ note, isOpen, onClose, onSave }: EditModalProps) {
  const { t } = useTranslation();
  const [content, setContent] = useState(note.content);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onSave(content.trim());
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content edit-modal" onClick={(e) => e.stopPropagation()}>
        <h3>{t('notes.edit')}</h3>
        <form onSubmit={handleSubmit}>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="edit-textarea"
            rows={6}
            maxLength={2000}
            autoFocus
          />
          <div className="edit-actions">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" disabled={!content.trim()}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export function NotesList() {
  const { t } = useTranslation();
  const { state, actions } = useApp();
  const [editingNote, setEditingNote] = useState<Note | null>(null);

  const handleEdit = (note: Note) => {
    setEditingNote(note);
  };

  const handleSaveEdit = async (content: string) => {
    if (editingNote) {
      await actions.updateNote(editingNote.id, { content });
      setEditingNote(null);
    }
  };

  const handleDelete = async (id: string) => {
    await actions.deleteNote(id);
  };

  if (state.notes.length === 0) {
    return (
      <div className="empty-state">
        <p>{t('notes.noNotes')}</p>
      </div>
    );
  }

  return (
    <>
      <div className="notes-list">
        {state.notes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {editingNote && (
        <EditModal
          note={editingNote}
          isOpen={true}
          onClose={() => setEditingNote(null)}
          onSave={handleSaveEdit}
        />
      )}
    </>
  );
}