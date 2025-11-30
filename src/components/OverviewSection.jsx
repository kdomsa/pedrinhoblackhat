import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';
import AnimatedTitle from '@/components/AnimatedTitle';

const OverviewSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    {
      left: [
        "Importe pela 1ª vez em 30 min",
        "Sem taxas ocultas ou surpresas", 
        "Canal de comunicação",
        "Inspeção de qualidade incluída"
      ],
      right: [
        "Seguro total para sua mercadoria",
        "Suporte rápido sempre que precisar",
        "Produtos em até 15 dias úteis",
        "Sem pedido mínimo obrigatório"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-br from-white/80 via-white/70 to-white/60 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <AnimatedTitle 
            text="Visão geral"
            el="h2"
            className="text-5xl md:text-6xl font-black text-black mb-8 drop-shadow-xl"
            delay={0.1}
          />
          <p className="text-2xl md:text-3xl text-black/90 max-w-4xl mx-auto font-bold tracking-wide leading-tight">
            Faça parte e desbloqueie privilégios únicos
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-2xl border border-white/30" style={{backgroundColor: '#0a0a0a'}}>
            {/* Efeito de fumaça branca - Base radial */}
            <div className="absolute inset-0 bg-gradient-radial from-white/40 via-white/20 to-transparent opacity-80 animate-pulse"></div>
            
            {/* Camadas de névoa diagonal */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/35 via-white/15 to-transparent opacity-70"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-white/30 via-white/10 to-transparent opacity-60"></div>
            
            {/* Efeitos de partículas circulares */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/25 rounded-full blur-xl opacity-60 animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-white/20 rounded-full blur-lg opacity-50 animate-pulse"></div>
            <div className="absolute top-2/3 right-1/4 w-16 h-16 bg-white/30 rounded-full blur-md opacity-70 animate-pulse"></div>
            
            {/* Efeito de brilho shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            
            {/* Névoa sutil de fundo */}
            <div className="absolute inset-0 bg-gradient-conic from-white/10 via-transparent to-white/5 opacity-50"></div>
            <div className="relative z-10">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Coluna Esquerda */}
              <div className="space-y-6">
                {benefits[0].left.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-black rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-100 text-base md:text-lg font-medium leading-relaxed">
                      {benefit}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Coluna Direita */}
              <div className="space-y-6">
                {benefits[0].right.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-black rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-100 text-base md:text-lg font-medium leading-relaxed">
                      {benefit}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OverviewSection;