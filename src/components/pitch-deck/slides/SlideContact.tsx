import { SlideSection } from "../SlideSection";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { itemVariants } from "../motion-variants";
import { useLanguage } from "@/contexts/LanguageContext";

export const SlideContact = () => {
  const { t } = useLanguage();
  const whatsappNumber = "5591993714041";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <SlideSection id="slide-contact">
      <motion.div 
        className="flex flex-col items-center justify-center text-center gap-8"
        variants={itemVariants}
      >
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('slideContact.title') as string}
        </motion.h2>
        
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-lg sm:text-xl rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <MessageCircle className="w-6 h-6" />
          {t('slideContact.button') as string}
        </motion.a>
        
        <motion.p
          className="text-muted-foreground text-sm sm:text-base max-w-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {t('slideContact.subtitle') as string}
        </motion.p>
      </motion.div>
    </SlideSection>
  );
};
