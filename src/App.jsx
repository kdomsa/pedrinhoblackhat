import React, { useEffect } from 'react';
    import Header from '@/components/Header';
    import HeroSection from '@/components/HeroSection';
    import KeyFeaturesSection from '@/components/KeyFeaturesSection';
    import TestimonialsSection from '@/components/TestimonialsSection';
    import OverviewSection from '@/components/OverviewSection';
    import LearningAreasSection from '@/components/LearningAreasSection';
import CommunitySection from '@/components/CommunitySection';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import SupportSection from '@/components/SupportSection';
import Footer from '@/components/Footer';
    import { Toaster } from '@/components/ui/toaster';
    import { motion } from 'framer-motion';
    import { useInView } from 'react-intersection-observer';
    // ImageDisplaySection não é mais importado pois seu conteúdo foi movido e o componente se tornou vazio.
    // import ImageDisplaySection from '@/components/ImageDisplaySection';

    // Enhanced AnimatedSection with multiple animation types
    export const AnimatedSection = ({ children, className, threshold = 0.1, delay = 0, animationType = "fadeUp" }) => {
      const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: threshold, 
      });

      const animationVariants = {
        fadeUp: {
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 }
        },
        fadeIn: {
          initial: { opacity: 0 },
          animate: { opacity: 1 }
        },
        slideLeft: {
          initial: { opacity: 0, x: -50 },
          animate: { opacity: 1, x: 0 }
        },
        slideRight: {
          initial: { opacity: 0, x: 50 },
          animate: { opacity: 1, x: 0 }
        },
        scale: {
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 }
        }
      };

      const variant = animationVariants[animationType] || animationVariants.fadeUp;
    
      return (
        <motion.section
          ref={ref}
          initial={variant.initial}
          animate={inView ? variant.animate : variant.initial}
          transition={{ duration: 0.8, ease: "easeOut", delay: delay }}
          className={className}
        >
          {children}
        </motion.section>
      );
    };
    
    // Enhanced AnimatedTextElement with more animation options
    export const AnimatedTextElement = ({ children, className, delay = 0.2, el = "p", threshold = 0.1, animationType = "fadeUp" }) => {
      const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: threshold,
      });
      const MotionElement = motion[el];

      const textAnimations = {
        fadeUp: {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 }
        },
        fadeIn: {
          initial: { opacity: 0 },
          animate: { opacity: 1 }
        },
        slideLeft: {
          initial: { opacity: 0, x: -30 },
          animate: { opacity: 1, x: 0 }
        },
        slideRight: {
          initial: { opacity: 0, x: 30 },
          animate: { opacity: 1, x: 0 }
        },
        scale: {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 }
        }
      };

      const animation = textAnimations[animationType] || textAnimations.fadeUp;

      return (
        <MotionElement
          ref={ref}
          className={className}
          initial={animation.initial}
          animate={inView ? animation.animate : animation.initial}
          transition={{ duration: 0.6, ease: "easeOut", delay }}
        >
          {children}
        </MotionElement>
      );
    };

    // New AnimatedImage component for smooth image loading
    export const AnimatedImage = ({ src, alt, className, delay = 0, threshold = 0.1, animationType = "scale" }) => {
      const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: threshold,
      });

      const imageAnimations = {
        fadeUp: {
          initial: { opacity: 0, y: 40 },
          animate: { opacity: 1, y: 0 }
        },
        fadeIn: {
          initial: { opacity: 0 },
          animate: { opacity: 1 }
        },
        scale: {
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 }
        },
        zoomIn: {
          initial: { opacity: 0, scale: 1.2 },
          animate: { opacity: 1, scale: 1 }
        }
      };

      const animation = imageAnimations[animationType] || imageAnimations.scale;

      return (
        <motion.img
          ref={ref}
          src={src}
          alt={alt}
          className={className}
          initial={animation.initial}
          animate={inView ? animation.animate : animation.initial}
          transition={{ duration: 0.7, ease: "easeOut", delay }}
        />
      );
    };


    function App() {
      useEffect(() => {
        document.title = "Coin Club";
      }, []);

      return (
        <div className="flex flex-col min-h-screen bg-background font-sans relative"> {/* Added relative for absolute header */}
          <Header /> 
          <main className="flex-grow">
            {/* 1ª Seção */}
            <HeroSection /> 
            
            {/* 2ª Seção - Agora contém o banner "VOCÊ PODE IMPORTAR QUALQUER PRODUTO LÍCITO." */}
            <AnimatedSection threshold={0.1} delay={0.1} animationType="fadeUp"><CommunitySection /></AnimatedSection>
            
            {/* 3ª Seção */}
            <AnimatedSection threshold={0.05} delay={0.1} animationType="slideLeft"><KeyFeaturesSection /></AnimatedSection>
            
            {/* 4ª Seção */}
            <AnimatedSection threshold={0.1} delay={0.1} animationType="scale"><TestimonialsSection /></AnimatedSection>
            
            {/* 5ª Seção - Visão geral */}
            <AnimatedSection threshold={0.1} delay={0.1} animationType="fadeUp"><OverviewSection /></AnimatedSection>
            
            {/* 6ª Seção */}
            <AnimatedSection threshold={0.1} delay={0.1} animationType="slideRight"><LearningAreasSection /></AnimatedSection>
            
            {/* ImageDisplaySection foi removida pois seu conteúdo foi movido e a seção ficou vazia */}
            {/* <AnimatedSection threshold={0.1} delay={0.05}><ImageDisplaySection /></AnimatedSection> */}
            
            {/* Seção de Preços */}
            <AnimatedSection threshold={0.1} delay={0.1} animationType="scale"><PricingSection /></AnimatedSection>
            
            {/* Seção de FAQ */}
            <AnimatedSection threshold={0.1} delay={0.1} animationType="fadeUp"><FaqSection /></AnimatedSection>
            
            {/* Seção de Suporte */}
            <AnimatedSection threshold={0.1} delay={0.1} animationType="slideLeft"><SupportSection /></AnimatedSection>
          </main>
          <AnimatedSection threshold={0.1} delay={0.1} animationType="fadeUp"><Footer /></AnimatedSection>
          {/* <Toaster /> */}
        </div>
      );
    }

    export default App;