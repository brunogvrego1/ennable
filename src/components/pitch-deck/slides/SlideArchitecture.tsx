import { SlideSection } from "../SlideSection";
import { Blocks, Sparkles, Database, Package, Receipt, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { itemVariants, cardVariants, gridContainerVariants } from "../motion-variants";
import { useLanguage } from "@/contexts/LanguageContext";

export const SlideArchitecture = () => {
  const { t } = useLanguage();

  const coreModules = [
    { icon: Package, key: 'orders' },
    { icon: Database, key: 'inventory' },
    { icon: Receipt, key: 'billing' },
  ];

  return (
    <SlideSection id="slide-architecture">
      <motion.div className="mb-4 sm:mb-6 md:mb-8" variants={itemVariants}>
        <span className="tesla-label">{t('slideArchitecture.label') as string}</span>
        <h2 className="slide-title mt-2">
          {t('slideArchitecture.title') as string}
        </h2>
      </motion.div>
      
      <motion.div 
        className="flex flex-col gap-4 sm:gap-6 max-w-3xl mx-auto"
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Mini Apps - Top Layer */}
        <motion.div 
          className="tesla-card p-4 sm:p-6 border-t-2 border-accent"
          variants={cardVariants}
        >
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-accent" strokeWidth={1.5} />
            <h3 className="font-medium text-sm sm:text-base">{t('slideArchitecture.miniAppsTitle') as string}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {(t('slideArchitecture.miniApps') as string[]).map((app, idx) => (
              <motion.span
                key={idx}
                className="px-3 py-1.5 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
              >
                {app}
              </motion.span>
            ))}
            <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-muted text-muted-foreground">
              + {t('slideArchitecture.more') as string}
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-3 sm:text-sm">
            {t('slideArchitecture.miniAppsDescription') as string}
          </p>
        </motion.div>

        {/* Arrow */}
        <motion.div 
          className="flex justify-center"
          variants={itemVariants}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground/50" />
        </motion.div>

        {/* Core Modules - Bottom Layer */}
        <motion.div 
          className="tesla-dark-card p-4 sm:p-6"
          variants={cardVariants}
        >
          <div className="flex items-center gap-2 mb-3">
            <Blocks className="w-4 h-4 text-cyan-400" strokeWidth={1.5} />
            <h3 className="font-medium text-sm sm:text-base">{t('slideArchitecture.coreTitle') as string}</h3>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {coreModules.map((module, idx) => (
              <motion.div 
                key={idx}
                className="tesla-card p-3 text-center bg-background/50"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
              >
                <module.icon className="w-5 h-5 mx-auto text-cyan-400 mb-1" strokeWidth={1.5} />
                <span className="text-xs font-medium">{t(`slideArchitecture.modules.${module.key}`) as string}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3 sm:text-sm">
            {t('slideArchitecture.coreDescription') as string}
          </p>
        </motion.div>

        {/* Callout */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <p className="text-sm text-muted-foreground font-medium sm:text-base">
            "{t('slideArchitecture.callout') as string}"
          </p>
        </motion.div>
      </motion.div>
    </SlideSection>
  );
};
