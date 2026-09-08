import { Box, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  const bg = useColorModeValue('brand.100', 'brand.900');
  const [category, setCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Box minH="100vh" bg={bg} transition="background-color 0.2s">
      <Navbar setCategory={setCategory} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Hero category={category} />
      <ProductGrid category={category} searchQuery={searchQuery} />
      <Footer />
    </Box>
  );
}

export default App;
