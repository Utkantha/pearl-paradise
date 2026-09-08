import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
  },
  colors: {
    brand: {
      900: '#1a202c', // Dark bg
      800: '#2d3748',
      700: '#4a5568',
      100: '#f7fafc', // Light bg
      gold: '#d4af37',
      silver: '#c0c0c0',
    },
  },
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },
});

export default theme;
