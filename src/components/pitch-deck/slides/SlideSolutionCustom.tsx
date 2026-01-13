import { SlideSection } from "../SlideSection";
import { MessageSquare, Sparkles } from "lucide-react";
import { motion, LayoutGroup, useInView } from "framer-motion";
import { itemVariants, cardVariants, gridContainerVariants } from "../motion-variants";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTypingEffect } from "@/hooks/use-typing-effect";
import { useState, useRef, useEffect } from "react";

type AnimationPhase = 'idle' | 'typing' | 'transforming' | 'complete';

export const SlideSolutionCustom = () => {
  const { t, language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });
  
  const [animationPhase, setAnimationPhase] = useState<AnimationPhase>('idle');
  const [buttonOrder, setButtonOrder] = useState([0, 1, 2, 3]);
  const [highlightedButton, setHighlightedButton] = useState<number | null>(null);

  const buttons = t('slideSolutionCustom.buttons') as string[];
  
  // Get the prompt text based on language
  const typingText = language === 'pt' 
    ? "Faz o botão da sobremesa dourado e move-o para o topo"
    : "Make the dessert button gold and move it to the top";

  const { displayedText, isTyping } = useTypingEffect({
    text: typingText,
    speed: 45,
    delay: 1000,
    enabled: isInView && (animationPhase === 'idle' || animationPhase === 'typing'),
    onComplete: () => {
      setAnimationPhase('transforming');
    },
  });

  // Start typing phase when in view
  useEffect(() => {
    if (isInView && animationPhase === 'idle') {
      setAnimationPhase('typing');
    }
  }, [isInView]);

  // Handle transformation after typing completes
  useEffect(() => {
    if (animationPhase === 'transforming') {
      // Small delay before transformation starts
      const timeout1 = setTimeout(() => {
        // Highlight the button (turn gold)
        setHighlightedButton(0); // Sobremesa is at index 0
      }, 500);

      // Then swap positions
      const timeout2 = setTimeout(() => {
        // Swap Sobremesa (index 0) with Prato Principal (index 2)
        setButtonOrder([2, 1, 0, 3]);
        setAnimationPhase('complete');
      }, 900);

      return () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
      };
    }
  }, [animationPhase]);

  // Get button style based on animation state
  const getButtonStyle = (originalIndex: number) => {
    const isHighlighted = highlightedButton === originalIndex || 
      (animationPhase === 'complete' && originalIndex === 0);
    
    if (isHighlighted) {
      return 'bg-gradient-to-br from-amber-400/80 to-amber-500/80 text-amber-950 ring-2 ring-amber-400/50 shadow-lg shadow-amber-400/20';
    }
    return 'bg-muted/50 text-muted-foreground hover:bg-muted';
  };

  return (
    <SlideSection id="slide-custom" className="bg-secondary/20">
      <motion.div className="mb-4 sm:mb-6 md:mb-8" variants={itemVariants}>
        <span className="tesla-label">{t('slideSolutionCustom.label') as string}</span>
        <h2 className="slide-title mt-2">
          {t('slideSolutionCustom.title') as string}
        </h2>
      </motion.div>
      
      <motion.div 
        ref={containerRef}
        className="slide-grid-2 items-center gap-6"
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Mock POS Interface */}
        <motion.div 
          className="tesla-card p-0 overflow-hidden"
          variants={cardVariants}
        >
          {/* Header */}
          <div className="bg-accent/10 px-4 py-2 border-b border-accent/20">
            <span className="text-sm font-medium text-accent">{t('slideSolutionCustom.appName') as string}</span>
          </div>

          {/* Buttons Grid with LayoutGroup for smooth position animations */}
          <div className="p-4 sm:p-6">
            <LayoutGroup>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {buttonOrder.map((originalIndex) => (
                  <motion.button
                    key={buttons[originalIndex]}
                    layoutId={`btn-${originalIndex}`}
                    className={`p-3 sm:p-4 rounded-lg text-sm font-medium transition-colors duration-400 ${getButtonStyle(originalIndex)}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    layout
                    transition={{
                      layout: {
                        duration: 0.5,
                        ease: [0.25, 0.4, 0.25, 1],
                      },
                    }}
                  >
                    {buttons[originalIndex]}
                  </motion.button>
                ))}
              </div>
            </LayoutGroup>
          </div>

          {/* Chat Input with typing animation */}
          <div className="border-t border-border p-3">
            <div className="flex items-center gap-2 tesla-card p-2.5 bg-muted/30">
              <MessageSquare className="w-4 h-4 text-accent flex-shrink-0" strokeWidth={1.5} />
              <span className="text-xs text-muted-foreground italic flex-1 min-h-[1.25rem]">
                {displayedText ? `"${displayedText}` : ''}
                {isTyping && (
                  <motion.span
                    className="inline-block w-0.5 h-3 bg-accent ml-0.5 align-middle"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  />
                )}
                {displayedText && !isTyping && '"'}
              </span>
              <Sparkles 
                className={`w-4 h-4 text-accent flex-shrink-0 transition-all duration-300 ${
                  isTyping ? 'animate-pulse' : ''
                } ${animationPhase === 'transforming' ? 'scale-125 text-amber-400' : ''}`}
                strokeWidth={1.5} 
              />
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div className="space-y-4" variants={itemVariants}>
          <p className="text-sm text-muted-foreground leading-relaxed font-light sm:text-base lg:text-lg">
            {t('slideSolutionCustom.description') as string}
          </p>
          <div className="tesla-dark-card p-4">
            <p className="text-base font-medium text-foreground sm:text-lg">
              "{t('slideSolutionCustom.quote') as string}"
            </p>
          </div>
        </motion.div>
      </motion.div>
    </SlideSection>
  );
};
