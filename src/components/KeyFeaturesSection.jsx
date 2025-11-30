import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ShieldOff, Rocket, ShieldCheck, CreditCard, TrendingUp, PackagePlus } from 'lucide-react';

const iconStyle = "h-10 w-10 text-white mb-4 filter drop-shadow-[0_2px_2px_rgba(255,255,255,0.2)]";
const miniIconStyle = "h-6 w-6 text-white filter drop-shadow-[0_1px_1px_rgba(255,255,255,0.15)]";


const featuresData = [
  {
    icon: <ShieldOff className={iconStyle} strokeWidth={1.5} />,
    title: "Livre-se de taxas",
    description: "Sistema inteligente de autodeclaração, faça você mesmo a declaração de valores e reduza as taxas alfandegárias, sem precisar do programa Remessa Conforme.",
  },
  {
    icon: <Rocket className={iconStyle} strokeWidth={1.5} />,
    title: "1ª Importação em 30 min",
    description: "Sabemos que o tempo é valioso, por isso, o primeiro módulo foi criado para que você rapidamente configure sua conta, cadastre o endereço, compre o produto, organize o envio e acompanhe o rastreamento.",
  },
  {
    icon: <ShieldCheck className={iconStyle} strokeWidth={1.5} />,
    title: "Seguro de Envio",
    description: "Todos os pacotes enviados pelo nosso sistema contam com 100% de seguro. Em caso de extravio ou até mesmo roubo durante o transporte, seu dinheiro é reembolsado em, no máximo, 24 horas.",
  },
];

const miniFeaturesData = [
  {
    icon: <CreditCard className={miniIconStyle} strokeWidth={1.5} />,
    text: "Parcele sua importação em até 12x",
  },
  {
    icon: <TrendingUp className={miniIconStyle} strokeWidth={1.5} />,
    text: "Para economizar ou lucrar",
  },
  {
    icon: <PackagePlus className={miniIconStyle} strokeWidth={1.5} />,
    text: "Importe novo ou usado",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const miniCardVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1 + 0.3, 
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const KeyFeaturesSection = () => {
  return (
    <section id="key-features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
            Vantagens Exclusivas do <span className="text-foreground" style={{textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.6)'}}>Coin Club</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra como transformamos a importação em uma experiência simples, rápida e segura.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <motion.custom
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="h-full"
              el={Card}
            >
              <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
                <CardHeader className="items-center text-center pt-8 pb-4">
                  {feature.icon}
                  <CardTitle className="text-xl font-semibold text-card-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground text-sm leading-relaxed flex-grow px-6 pb-8">
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            </motion.custom>
          ))}
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {miniFeaturesData.map((miniFeature, index) => (
            <motion.div
              key={`mini-${index}`}
              custom={index}
              variants={miniCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="flex items-center justify-center p-3 bg-card rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow duration-200"
            >
              {miniFeature.icon}
              <p className="ml-3 text-sm font-medium text-card-foreground">{miniFeature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;