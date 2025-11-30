import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedTitle from '@/components/AnimatedTitle';
import { AnimatedTextElement } from '@/App';

const FaqSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqData = [
    {
      question: "Qual o prazo de entrega?",
      answer: "A entrega da loja na redirecionadora leva de 2 a 3 dias e para chegar até sua casa de 10 a 20 dias."
    },
    {
      question: "Em quanto tempo vou receber o curso?",
      answer: "Você recebe o acesso ao curso imediatamente após a confirmação do pagamento em seu e-mail."
    },
    {
      question: "Consigo fazer tudo pelo celular?",
      answer: "Sim! O curso foi desenvolvido para ser totalmente acessível via celular, permitindo que você aprenda onde e quando quiser."
    },
    {
      question: "Por quanto tempo terei acesso ao curso?",
      answer: "Você terá acesso vitalício ao curso e a todas as atualizações futuras do conteúdo."
    },
    {
      question: "Como acessar a plataforma?",
      answer: "Após a compra, você receberá um e-mail com suas credenciais de acesso e o link direto para a plataforma."
    },
    {
      question: "O que vou aprender com o curso?",
      answer: "Você aprenderá todo o processo de importação, desde a escolha dos produtos até a revenda, incluindo fornecedores, logística, impostos e estratégias de lucro."
    }
  ];

  return (
    <section id="faq" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <AnimatedTitle 
            text="DÚVIDAS FREQUENTES" 
            className="text-3xl md:text-4xl font-extrabold text-foreground"
          />
        </div>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4" defaultValue="item-0">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-card rounded-xl shadow-sm border border-border overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-foreground hover:no-underline px-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed px-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;