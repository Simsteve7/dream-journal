import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GlobeIcon, UserIcon } from './icons';
import { useApp } from '../hooks/useApp';
import './Header.css';

interface LanguageSelectorProps {
  isOpen: boolean;
  onClose: () => void;
}

function LanguageSelector({ isOpen, onClose }: LanguageSelectorProps) {
  const { i18n } = useTranslation();
  
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
  ];

  if (!isOpen) return null;

  const handleLanguageChange = async (langCode: string) => {
    await i18n.changeLanguage(langCode);
    onClose();
  };

  return (
    <>
      <div className="dropdown-backdrop" onClick={onClose} />
      <div className="language-dropdown" onClick={(e) => e.stopPropagation()}>
        {languages.map((lang) => (
          <button
            key={lang.code}
            className={`language-option ${i18n.language === lang.code ? 'active' : ''}`}
            onClick={() => handleLanguageChange(lang.code)}
          >
            <span className="flag">{lang.flag}</span>
            <span>{lang.name}</span>
          </button>
        ))}
      </div>
    </>
  );
}

interface AuthMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function AuthMenu({ isOpen, onClose }: AuthMenuProps) {
  const { t } = useTranslation();
  const { state } = useApp();

  if (!isOpen) return null;

  const authProviders = [
    { key: 'google', name: t('auth.google'), color: '#DB4437' },
    { key: 'facebook', name: t('auth.facebook'), color: '#4267B2' },
    { key: 'github', name: t('auth.github'), color: '#333' },
    { key: 'microsoft', name: t('auth.microsoft'), color: '#0078D4' }
  ];

  return (
    <>
      <div className="dropdown-backdrop" onClick={onClose} />
      <div className="auth-dropdown" onClick={(e) => e.stopPropagation()}>
        {state.user ? (
          <div className="user-info">
            <div className="user-details">
              <span className="user-name">{state.user.name}</span>
              <span className="user-email">{state.user.email}</span>
            </div>
            <button className="auth-btn signout">
              {t('auth.signOut')}
            </button>
          </div>
        ) : (
          <>
            <div className="auth-header">
              <h4>{t('auth.syncData')}</h4>
            </div>
            {authProviders.map((provider) => (
              <button
                key={provider.key}
                className="auth-btn"
                style={{ borderLeft: `4px solid ${provider.color}` }}
              >
                {provider.name}
              </button>
            ))}
            <div className="auth-divider">
              <span>or</span>
            </div>
            <button className="auth-btn local-only" onClick={onClose}>
              {t('auth.localOnly')}
            </button>
          </>
        )}
      </div>
    </>
  );
}

export function Header() {
  const { t } = useTranslation();
  const { state } = useApp();
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const [showAuthMenu, setShowAuthMenu] = useState(false);

  return (
    <header className="app-header">
      <div className="header-content">
        <div className="header-left">
          <h1 className="app-title">{t('title')}</h1>
          <p className="app-subtitle">{t('subtitle')}</p>
        </div>
        
        <div className="header-right">
          <button
            className="header-btn"
            onClick={() => setShowLanguageSelector(!showLanguageSelector)}
            title={t('settings.language')}
          >
            <GlobeIcon size={18} />
          </button>
          
          <button
            className="header-btn"
            onClick={() => setShowAuthMenu(!showAuthMenu)}
            title={state.user ? state.user.name : t('auth.signIn')}
          >
            <UserIcon size={18} />
            {state.user && <div className="user-indicator" />}
          </button>
        </div>
      </div>

      <LanguageSelector
        isOpen={showLanguageSelector}
        onClose={() => setShowLanguageSelector(false)}
      />

      <AuthMenu
        isOpen={showAuthMenu}
        onClose={() => setShowAuthMenu(false)}
      />
    </header>
  );
}