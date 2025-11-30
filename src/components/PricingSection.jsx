import React from 'react';
import { Check, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const PricingSection = () => {
  const hotmartLink = "https://pay.kiwify.com.br/gBUF1fs?afid=UdaR7o5W";
  
  return (
    <section id="pricing" className="py-16 md:py-24 relative overflow-hidden gmin-h-[60vh]">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      

      {/* Floating Light Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
              left: `${Math.random() * 100}%`,
              top: `100%`,
              boxShadow: '0 0 6px rgba(255,255,255,0.6)',
            }}
            animate={{
              y: [0, -window.innerHeight - 100],
              opacity: [0, 0.8, 0.8, 0],
              scale: [0.5, 1, 1, 0.5],
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center relative">
          {/* Card principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-lg mx-auto"
          >
            {/* Glassmorphism Card */}
            <div 
              className="relative backdrop-blur-xl bg-black/40 border border-white/10 rounded-3xl p-8 shadow-2xl"
              style={{ 
                background: 'linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4))',
                boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)',
              }}
            >
              {/* Shimmer Effect */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-20"
                style={{
                  background: 'linear-gradient(110deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)',
                  animation: 'shimmer 3s infinite',
                }}
              />
              
              <div className="relative z-20">
                {/* Header Premium */}
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 backdrop-blur-sm rounded-2xl p-4 mb-6 text-center border border-purple-300 shadow-lg shadow-purple-500/30">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl md:text-3xl font-bold text-white tracking-wider"
                  >
                    ACESSO ANUAL
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-white/90 mt-2"
                  >
                    Acesso completo por 12 meses.
                  </motion.p>
                </div>

                {/* Preço */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center mb-6"
                >
                  <p className="text-gray-400 line-through text-lg mb-2">De R$497</p>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    R$347<span className="text-lg font-medium text-gray-300">/ano</span>
                  </div>
                  <p className="text-gray-300">ou 12x de R$ 35,89</p>
                </motion.div>

                {/* Lista de benefícios */}
                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-3 mb-8"
                >
                  {[
                    "Acesso imediato (se pago no cartão de crédito ou PIX)",
                    "Acesso a todas as atualizações do curso",
                    "Acompanhamento individual no WhatsApp",
                    "Acesso ao treinamento por 1 ano",
                    "Canal no Telegram"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-white text-sm leading-tight text-left flex-1">{feature}</span>
                    </li>
                  ))}
                </motion.ul>

                {/* Botão FAZER PARTE */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Button
                    size="lg"
                    className="w-full bg-white text-black hover:bg-gray-100 font-bold py-4 px-8 text-lg transition-all duration-500 rounded-full shadow-lg hover:shadow-[0_0_40px_rgba(255,255,255,0.8)] active:shadow-[0_0_60px_rgba(255,255,255,1)] border border-white/50"
                    asChild
                  >
                    <motion.a
                      href={hotmartLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      animate={{ boxShadow: ['0 0 20px rgba(255,255,255,0.5)', '0 0 40px rgba(255,255,255,0.8)', '0 0 20px rgba(255,255,255,0.5)'] }}
                      transition={{ boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
                      className="inline-flex items-center justify-center"
                    >
                      <span className="tracking-wider font-bold">FAZER PARTE</span>
                    </motion.a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;