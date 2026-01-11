import { useLanguage } from '@/contexts/LanguageContext';
import { languages, type Language } from '@/i18n';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Globe } from 'lucide-react';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languages.find(l => l.code === language);

  return (
    <div className="fixed top-4 right-4 z-50 sm:top-6 sm:right-6">
      <div className="relative">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-background/60 backdrop-blur-md border border-border/40 hover:border-border/60 transition-colors shadow-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Globe className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
          <span className="text-sm font-medium">{currentLang?.flag}</span>
          <span className="text-xs text-muted-foreground hidden sm:inline">{currentLang?.code.toUpperCase()}</span>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40"
                onClick={() => setIsOpen(false)}
              />
              
              {/* Dropdown */}
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute top-full right-0 mt-2 z-50 min-w-[140px] rounded-2xl bg-background/90 backdrop-blur-md border border-border/40 shadow-xl overflow-hidden"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code as Language);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-accent/10 transition-colors ${
                      language === lang.code ? 'bg-accent/5 text-accent' : 'text-foreground'
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span className="text-sm font-medium">{lang.name}</span>
                  </button>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
