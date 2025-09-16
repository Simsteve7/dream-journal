import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      title: 'Dream Journal',
      subtitle: 'Capture your ideas and dreams',
      placeholder: 'What\'s on your mind? Enter your dream or idea...',
      submit: 'Save Note',
      categorize: 'Categorize Note',
      categories: {
        dream: 'Dream',
        idea: 'Idea',
        thought: 'Thought',
        reminder: 'Reminder',
        other: 'Other'
      },
      auth: {
        signIn: 'Sign In',
        signOut: 'Sign Out',
        google: 'Sign in with Google',
        facebook: 'Sign in with Facebook',
        github: 'Sign in with GitHub',
        microsoft: 'Sign in with Microsoft',
        localOnly: 'Continue without sync',
        syncData: 'Sync your data across devices'
      },
      notes: {
        noNotes: 'No notes yet. Start writing!',
        deleteConfirm: 'Are you sure you want to delete this note?',
        delete: 'Delete',
        edit: 'Edit',
        createdAt: 'Created at'
      },
      settings: {
        language: 'Language',
        theme: 'Theme',
        storage: 'Storage',
        local: 'Local only',
        cloud: 'Cloud sync'
      }
    }
  },
  es: {
    translation: {
      title: 'Diario de Sueños',
      subtitle: 'Captura tus ideas y sueños',
      placeholder: '¿Qué tienes en mente? Escribe tu sueño o idea...',
      submit: 'Guardar Nota',
      categorize: 'Categorizar Nota',
      categories: {
        dream: 'Sueño',
        idea: 'Idea',
        thought: 'Pensamiento',
        reminder: 'Recordatorio',
        other: 'Otro'
      },
      auth: {
        signIn: 'Iniciar Sesión',
        signOut: 'Cerrar Sesión',
        google: 'Iniciar con Google',
        facebook: 'Iniciar con Facebook',
        github: 'Iniciar con GitHub',
        microsoft: 'Iniciar con Microsoft',
        localOnly: 'Continuar sin sincronizar',
        syncData: 'Sincroniza tus datos entre dispositivos'
      },
      notes: {
        noNotes: 'No hay notas aún. ¡Empieza a escribir!',
        deleteConfirm: '¿Estás seguro de que quieres eliminar esta nota?',
        delete: 'Eliminar',
        edit: 'Editar',
        createdAt: 'Creado el'
      },
      settings: {
        language: 'Idioma',
        theme: 'Tema',
        storage: 'Almacenamiento',
        local: 'Solo local',
        cloud: 'Sincronización en la nube'
      }
    }
  },
  fr: {
    translation: {
      title: 'Journal des Rêves',
      subtitle: 'Capturez vos idées et rêves',
      placeholder: 'À quoi pensez-vous ? Entrez votre rêve ou idée...',
      submit: 'Enregistrer la Note',
      categorize: 'Catégoriser la Note',
      categories: {
        dream: 'Rêve',
        idea: 'Idée',
        thought: 'Pensée',
        reminder: 'Rappel',
        other: 'Autre'
      },
      auth: {
        signIn: 'Se Connecter',
        signOut: 'Se Déconnecter',
        google: 'Se connecter avec Google',
        facebook: 'Se connecter avec Facebook',
        github: 'Se connecter avec GitHub',
        microsoft: 'Se connecter avec Microsoft',
        localOnly: 'Continuer sans synchronisation',
        syncData: 'Synchronisez vos données sur tous les appareils'
      },
      notes: {
        noNotes: 'Aucune note encore. Commencez à écrire !',
        deleteConfirm: 'Êtes-vous sûr de vouloir supprimer cette note ?',
        delete: 'Supprimer',
        edit: 'Modifier',
        createdAt: 'Créé le'
      },
      settings: {
        language: 'Langue',
        theme: 'Thème',
        storage: 'Stockage',
        local: 'Local uniquement',
        cloud: 'Synchronisation cloud'
      }
    }
  },
  de: {
    translation: {
      title: 'Traumtagebuch',
      subtitle: 'Erfassen Sie Ihre Ideen und Träume',
      placeholder: 'Was beschäftigt Sie? Geben Sie Ihren Traum oder Ihre Idee ein...',
      submit: 'Notiz Speichern',
      categorize: 'Notiz Kategorisieren',
      categories: {
        dream: 'Traum',
        idea: 'Idee',
        thought: 'Gedanke',
        reminder: 'Erinnerung',
        other: 'Andere'
      },
      auth: {
        signIn: 'Anmelden',
        signOut: 'Abmelden',
        google: 'Mit Google anmelden',
        facebook: 'Mit Facebook anmelden',
        github: 'Mit GitHub anmelden',
        microsoft: 'Mit Microsoft anmelden',
        localOnly: 'Ohne Synchronisation fortfahren',
        syncData: 'Synchronisieren Sie Ihre Daten geräteübergreifend'
      },
      notes: {
        noNotes: 'Noch keine Notizen. Fangen Sie an zu schreiben!',
        deleteConfirm: 'Sind Sie sicher, dass Sie diese Notiz löschen möchten?',
        delete: 'Löschen',
        edit: 'Bearbeiten',
        createdAt: 'Erstellt am'
      },
      settings: {
        language: 'Sprache',
        theme: 'Design',
        storage: 'Speicher',
        local: 'Nur lokal',
        cloud: 'Cloud-Synchronisation'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;