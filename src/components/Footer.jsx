import React from 'react';
    import { motion } from 'framer-motion';
    import { useInView } from 'react-intersection-observer';

    const Footer = () => {
      const currentYear = new Date().getFullYear();
      const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });

      return (
        <motion.footer
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-black text-gray-400 py-8"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center text-sm"
            >
              <p>&copy; {currentYear} CoinClub. Todos os direitos reservados.</p>
            </motion.div>
          </div>
        </motion.footer>
      );
    };

    export default Footer;