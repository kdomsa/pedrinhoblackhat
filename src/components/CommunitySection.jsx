import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

// Import das imagens locais
import jaquetaFerrari from '@/assets/jaqueta-ferrari.webp';
import perfumeDior from '@/assets/perfume-dior.webp';
import cameraGoPro from '@/assets/camera-gopro.webp';
import iphone from '@/assets/iphone.webp';
import tecladoGamer from '@/assets/teclado-gamer.webp';
import hotwheels from '@/assets/hotwheels.webp';
import bonecoKaws from '@/assets/boneco-kaws.webp';
import airpods from '@/assets/airpods.webp';
import carteiraLV from '@/assets/carteira-lv.webp';
import relogio from '@/assets/relogio.webp';
import baseDior from '@/assets/base-dior.webp';
import malaRimowa from '@/assets/mala-rimowa.webp';
import bolsaLV from '@/assets/bolsa-lv.webp';
import parafusadeiraDeWalt from '@/assets/parafusadeira-dewalt.webp';
import bonecoLego from '@/assets/boneco-lego.webp';
import processadorI9 from '@/assets/processador-i9.webp';
import droneProfissional from '@/assets/drone-profissional.webp';
import tenisNike from '@/assets/tenis-nike.webp';
import molinetePesca from '@/assets/molinete-pesca.webp';

const productsData = [
  { name: "Drones", imgSrc: droneProfissional },
  { name: "Hardwares", imgSrc: processadorI9 },
  { name: "Ferramentas", imgSrc: parafusadeiraDeWalt },
  { name: "Bolsas", imgSrc: bolsaLV },
  { name: "Lego", imgSrc: bonecoLego },
  { name: "Mala", imgSrc: malaRimowa },
  { name: "Maquiagens", imgSrc: baseDior },
  { name: "Caça e Pesca", imgSrc: molinetePesca },
  { name: "Tênis", imgSrc: tenisNike },
  { name: "Roupas", imgSrc: jaquetaFerrari },
  { name: "Perfumes", imgSrc: perfumeDior },
  { name: "Câmeras", imgSrc: cameraGoPro },
  { name: "Iphones", imgSrc: iphone },
  { name: "Periféricos", imgSrc: tecladoGamer },
  { name: "Brinquedos", imgSrc: hotwheels },
  { name: "Decorações", imgSrc: bonecoKaws },
  { name: "Eletrônicos", imgSrc: airpods },
  { name: "Carteira", imgSrc: carteiraLV },
  { name: "Relógios", imgSrc: relogio },
];

const CommunitySection = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const duplicatedProducts = productsData.length > 0 ? [...productsData, ...productsData, ...productsData] : [];
  
  const itemsPerView = 6; 
  const itemWidthPercentage = productsData.length > 0 ? 100 / itemsPerView : 0; 
  const gapRem = 0.5; 
  
  let totalWidthOfOriginalSetPercentage = 0;
  if (productsData.length > 0 && itemWidthPercentage > 0) {
    const approximateItemWidthPx = 150; 
    const gapPx = gapRem * 16; 
    const gapPercentageBasedOnItem = (gapPx / approximateItemWidthPx) * 100;
    totalWidthOfOriginalSetPercentage = productsData.length * (itemWidthPercentage + gapPercentageBasedOnItem);
  }
  
  const marqueeVariants = {
    animate: {
      x: (totalWidthOfOriginalSetPercentage > 0 && duplicatedProducts.length > productsData.length) ? [`0%`, `-${totalWidthOfOriginalSetPercentage}%`] : [`0%`, `0%`],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: productsData.length > 0 ? (isMobile ? productsData.length * 1.5 : productsData.length * 5) : 60, 
          ease: "linear",
        },
      },
    },
  };

  const { ref: carouselRef, inView: carouselInView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="community-products" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16 px-4 sm:px-0"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-3 leading-tight sm:leading-normal px-2 sm:px-0">
            Você está a um passo de encontrar produtos até <span className="text-foreground block sm:inline" style={{textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.6)'}}>10x mais BARATOS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore as categorias mais populares entre nossos membros e veja o potencial de economia e lucro que te espera.
          </p>
        </motion.div>

        {duplicatedProducts.length > 0 && (
          <motion.div
            ref={carouselRef}
            className="relative w-full group"
            style={{ 
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 2%, black 98%, transparent 100%)", 
              maskImage: "linear-gradient(to right, transparent 0%, black 2%, black 98%, transparent 100%)"
            }}
            initial={{ opacity: 0 }}
            animate={carouselInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex"
              variants={carouselInView && totalWidthOfOriginalSetPercentage > 0 ? marqueeVariants : { animate: { x: "0%" } }}
              animate="animate"
              style={{ cursor: 'default' }}
            >
              {duplicatedProducts.map((product, index) => (
                <div
                  key={`${product.name}-${index}`}
                  className="flex-shrink-0 mx-2" 
                  style={{ 
                    width: `calc(${itemWidthPercentage}% - ${gapRem * 2}rem)`, 
                    minWidth: '150px', 
                    userSelect: 'none', 
                    WebkitUserSelect: 'none', 
                    MozUserSelect: 'none',
                    msUserSelect: 'none'
                  }}
                  draggable="false"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.1 }} 
                    transition={{ duration: 0.4, delay: index * 0.03 }}
                    className="p-1 h-full"
                  >
                    <Card className="h-full overflow-hidden transition-all duration-300 rounded-xl bg-transparent border-none shadow-none">
                      <CardContent className="flex flex-col items-center justify-start p-2 sm:p-4 text-center aspect-[3/4]">
                        <motion.img 
                          src={product.imgSrc} 
                          alt={product.name} 
                          className="w-full h-3/5 object-contain mb-2 sm:mb-3 rounded-md pointer-events-none"
                          draggable="false"
                          onDragStart={(e) => e.preventDefault()}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, amount: 0.1 }}
                          transition={{ duration: 0.5, delay: (index % productsData.length) * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        />
                        <h3 className="mt-1 sm:mt-2 text-xs sm:text-sm font-semibold text-white leading-tight">{product.name}</h3>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 md:mt-12 flex items-center justify-center bg-black p-3 sm:p-4 rounded-lg shadow-xl max-w-lg mx-4 sm:mx-auto border border-yellow-500/30"
        >
          <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 mr-3 flex-shrink-0" strokeWidth={2} />
          <p className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider text-center flex-1">
            VOCÊ PODE IMPORTAR QUALQUER PRODUTO LÍCITO.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default CommunitySection;