/** @type {import('tailwindcss').Config} */
    module.exports = {
      darkMode: ['class'],
      content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{js,jsx}',
        './src/**/*.{js,jsx}',
        './index.html',
      ],
      theme: {
        container: {
          center: true,
          padding: '2rem',
          screens: {
            '2xl': '1400px',
          },
        },
        extend: {
          colors: {
            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            primary: {
              DEFAULT: 'hsl(var(--primary))',
              foreground: 'hsl(var(--primary-foreground))',
            },
            secondary: {
              DEFAULT: 'hsl(var(--secondary))',
              foreground: 'hsl(var(--secondary-foreground))',
            },
            destructive: {
              DEFAULT: 'hsl(var(--destructive))',
              foreground: 'hsl(var(--destructive-foreground))',
            },
            muted: {
              DEFAULT: 'hsl(var(--muted))',
              foreground: 'hsl(var(--muted-foreground))',
            },
            accent: {
              DEFAULT: 'hsl(var(--accent))',
              foreground: 'hsl(var(--accent-foreground))',
            },
            popover: {
              DEFAULT: 'hsl(var(--popover))',
              foreground: 'hsl(var(--popover-foreground))',
            },
            card: {
              DEFAULT: 'hsl(var(--card))',
              foreground: 'hsl(var(--card-foreground))',
            },
            // Custom colors from user request
            'brand-red': '#FF0000',
            'brand-black': '#000000',
            'brand-white': '#FFFFFF',
            'brand-light-gray': '#F5F5F5',
          },
          borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)',
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
          },
          keyframes: {
            'accordion-down': {
              from: { height: 0 },
              to: { height: 'var(--radix-accordion-content-height)' },
            },
            'accordion-up': {
              from: { height: 'var(--radix-accordion-content-height)' },
              to: { height: 0 },
            },
            'shimmer': {
              '0%': { transform: 'translateX(-100%) skewX(-45deg)' },
              '100%': { transform: 'translateX(200%) skewX(-45deg)' }
            },
            'float': {
              '0%, 100%': { transform: 'translateY(0px) translateX(0px)', opacity: '0.3' },
              '25%': { transform: 'translateY(-10px) translateX(5px)', opacity: '0.6' },
              '50%': { transform: 'translateY(-5px) translateX(-3px)', opacity: '0.4' },
              '75%': { transform: 'translateY(-15px) translateX(8px)', opacity: '0.7' }
            },
            'float-delayed': {
              '0%, 100%': { transform: 'translateY(0px) translateX(0px)', opacity: '0.2' },
              '33%': { transform: 'translateY(-8px) translateX(-6px)', opacity: '0.5' },
              '66%': { transform: 'translateY(-12px) translateX(4px)', opacity: '0.3' }
            },
          },
          animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
            'shimmer': 'shimmer 3s ease-in-out infinite',
            'float': 'float 6s ease-in-out infinite',
            'float-delayed': 'float-delayed 8s ease-in-out infinite',
          },
          backgroundImage: {
            'gradient-deep-blue-violet': 'linear-gradient(to right, #3b82f6, #8b5cf6)',
            'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
          }
        },
      },
      plugins: [require('tailwindcss-animate')],
    };