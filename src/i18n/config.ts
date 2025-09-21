import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      title: 'Dream Journal',
      subtitle: 'Record and explore your dreams',
      placeholder: 'Describe your dream...',
      submit: 'Save Dream',
      categorize: 'Save Dream',
      categories: {
        dream: 'Dream'
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
        noNotes: 'No dreams recorded yet. Start writing about your dreams!',
        deleteConfirm: 'Are you sure you want to delete this dream?',
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
      subtitle: 'Registra y explora tus sueños',
      placeholder: 'Describe tu sueño...',
      submit: 'Guardar Sueño',
      categorize: 'Guardar Sueño',
      categories: {
        dream: 'Sueño'
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
        noNotes: '¡Aún no hay sueños registrados. Empieza a escribir sobre tus sueños!',
        deleteConfirm: '¿Estás seguro de que quieres eliminar este sueño?',
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
      subtitle: 'Enregistrez et explorez vos rêves',
      placeholder: 'Décrivez votre rêve...',
      submit: 'Enregistrer le Rêve',
      categorize: 'Enregistrer le Rêve',
      categories: {
        dream: 'Rêve'
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
        noNotes: 'Aucun rêve enregistré encore. Commencez à écrire sur vos rêves !',
        deleteConfirm: 'Êtes-vous sûr de vouloir supprimer ce rêve ?',
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
      subtitle: 'Erfassen und erkunden Sie Ihre Träume',
      placeholder: 'Beschreiben Sie Ihren Traum...',
      submit: 'Traum Speichern',
      categorize: 'Traum Speichern',
      categories: {
        dream: 'Traum'
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
        noNotes: 'Noch keine Träume aufgezeichnet. Fangen Sie an, über Ihre Träume zu schreiben!',
        deleteConfirm: 'Sind Sie sicher, dass Sie diesen Traum löschen möchten?',
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