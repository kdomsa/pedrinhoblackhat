import React from 'react';
import { AnimatedTextElement } from '@/App';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const SupportSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="pt-10 pb-16 md:pt-10 md:pb-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center">
          <AnimatedTextElement 
            el="h2" 
            className="text-3xl md:text-4xl font-extrabold text-foreground mb-6"
            delay={0.1}
          >
            Ficou alguma dúvida?
          </AnimatedTextElement>
          
          <AnimatedTextElement 
            el="p" 
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            delay={0.2}
          >
            Fale diretamente com nosso suporte. Estamos aqui para ajudar você!
          </AnimatedTextElement>
          
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center"
          >
            <a 
              href="http://wa.me/5511933539520"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-black px-4 py-2 rounded-full font-medium text-sm hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] flex items-center gap-2"
            >
              FALAR COM SUPORTE
              <ArrowRight 
                size={16} 
                className="transition-transform duration-300 group-hover:translate-x-1" 
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;