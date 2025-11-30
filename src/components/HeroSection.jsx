import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AnimatedTitle from '@/components/AnimatedTitle';
import { AnimatedTextElement } from '@/App';
import heroImage from '@/assets/hero-image.webp';

const PulsingDot = () => (
  <motion.div
    className="h-3 w-3 bg-green-400 rounded-full mr-2" 
    animate={{
      scale: [1, 1.15, 1, 1.15, 1],
      opacity: [1, 0.6, 1, 0.6, 1],
    }}
    transition={{
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const HeroSection = () => {
  const [memberCount, setMemberCount] = React.useState(0);
  const [hasAnimated, setHasAnimated] = React.useState(false);
  const hotmartLink = "https://go.hotmart.com/E103200025X?ap=8360";
  
  React.useEffect(() => {
    if (!hasAnimated) {
      const duration = 2000; // 2 segundos
      const start = Date.now();
      const targetValue = 500;
      
      const animate = () => {
        const now = Date.now();
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        
        const currentValue = Math.floor(progress * targetValue);
        setMemberCount(currentValue);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setHasAnimated(true);
        }
      };
      
      animate();
    }
  }, [hasAnimated]);
  
  return (
    <section id="hero" className="relative pt-48 pb-12 md:pt-56 md:pb-16 flex items-center justify-center min-h-[90vh] sm:min-h-[85vh] bg-background">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-30"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <motion.div 
          className="w-full max-w-4xl bg-cover bg-center p-6 py-12 sm:p-10 sm:py-16 md:p-12 md:py-20 lg:p-16 lg:py-24 rounded-xl shadow-2xl relative overflow-hidden" 
          style={{ 
            backgroundImage: `url(${heroImage})`, 
            backgroundSize: window.innerWidth < 768 ? 'cover' : '100%',
            backgroundPosition: window.innerWidth < 768 ? 'center center' : 'center'
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} 
        >
          <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
          <div className="relative z-10 text-left">
            <AnimatedTextElement
              el="div"
              delay={0.5} 
              className="flex items-center text-sm font-bold uppercase text-white mb-5" 
              yOffset={0}
            >
              <PulsingDot />
              +{memberCount} MEMBROS ATIVOS AGORA
            </AnimatedTextElement>

            <AnimatedTitle 
              text="APRENDA A IMPORTAR DO EUA E CHINA!" 
              el="h1"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase mb-4 sm:mb-6 tracking-tight text-white leading-tight sm:leading-normal" 
              delay={0.7} 
              stagger={0.02}
            />
            
            <AnimatedTextElement
              el="p"
              delay={0.9} 
              className="text-sm sm:text-base md:text-lg font-bold uppercase text-gray-200 max-w-2xl mb-8 sm:mb-10 leading-tight sm:leading-relaxed px-2 sm:px-0" 
              yOffset={0}
            >
              COIN CLUB CONECTA PESSOAS DO BRASIL INTEIRO COM UM OBJETIVO: FAZER DINHEIRO COM SOLIDEZ E CONSISTÊNCIA OU IMPORTAR COM INTELIGÊNCIA PARA ECONOMIZAR
            </AnimatedTextElement>

            <AnimatedTextElement
              el="div"
              delay={1.1} 
              yOffset={0}
            >
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 border border-transparent text-lg font-bold py-4 px-10 rounded-full shadow-md hover:shadow-lg relative overflow-hidden group"
                asChild
              >
                <motion.a
                  href={hotmartLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px 8px rgba(255, 255, 255, 0.3)", 
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    scale: [1, 1.03, 1],
                    boxShadow: [
                      "0 0 10px 3px rgba(255, 255, 255, 0.2)",
                      "0 0 20px 8px rgba(255, 255, 255, 0.3)",
                      "0 0 10px 3px rgba(255, 255, 255, 0.2)",
                    ],
                  }}
                  transition={{
                    scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                    boxShadow: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="inline-flex items-center justify-center" 
                >
                  FAZER PARTE
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300" style={{ mixBlendMode: 'overlay' }}></span>
                </motion.a>
              </Button>
            </AnimatedTextElement>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;