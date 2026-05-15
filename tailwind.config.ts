import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Headings - Inter (modern, professional)
        'heading': ['Inter-Bold', 'system-ui', 'sans-serif'],
        'inter': ['Inter-Regular', 'system-ui', 'sans-serif'],
        
        // Body - Poppins (friendly, readable)
        'body': ['Poppins-Regular', 'system-ui', 'sans-serif'],
        'poppins': ['Poppins-Regular', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Heading Sizes
        'h1': ['32px', { lineHeight: '40px', fontWeight: '700', fontFamily: 'Inter-Bold' }],
        'h2': ['28px', { lineHeight: '36px', fontWeight: '700', fontFamily: 'Inter-Bold' }],
        'h3': ['24px', { lineHeight: '32px', fontWeight: '600', fontFamily: 'Inter-SemiBold' }],
        'h4': ['20px', { lineHeight: '28px', fontWeight: '600', fontFamily: 'Inter-SemiBold' }],
        
        // Body Sizes
        'body-lg': ['16px', { lineHeight: '24px', fontWeight: '500', fontFamily: 'Poppins-Medium' }],
        'body-md': ['14px', { lineHeight: '20px', fontWeight: '500', fontFamily: 'Poppins-Regular' }],
        'body-sm': ['12px', { lineHeight: '16px', fontWeight: '500', fontFamily: 'Poppins-Regular' }],
      },
    },
  },
  plugins: [],
} satisfies Config;
