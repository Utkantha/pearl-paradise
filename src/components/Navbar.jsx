import { Box, Flex, Heading, Spacer, Button, HStack, IconButton, useColorMode, useColorModeValue, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FiShoppingCart, FiSearch, FiMoon, FiSun } from 'react-icons/fi';

const Navbar = ({ setCategory, searchQuery, setSearchQuery }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)');
  const textColor = useColorModeValue('black', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200');

  return (
    <Box as="nav" bg={bg} backdropFilter="blur(10px)" position="sticky" top="0" zIndex="1000" py={4} px={8} borderBottom="1px solid" borderColor={borderColor}>
      <Flex alignItems="center">
        <Heading size="lg" letterSpacing="widest" color="brand.gold" fontWeight="bold" fontFamily="'Playfair Display', serif" cursor="pointer" onClick={() => { setCategory('All'); setSearchQuery(''); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          PEARL PARADISE
        </Heading>
        <Spacer />
        <HStack spacing={6} display={{ base: 'none', lg: 'flex' }}>
          <Button variant="link" color={textColor} fontWeight="normal" _hover={{ color: 'brand.gold' }} onClick={() => { setCategory('All'); setSearchQuery(''); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</Button>
          <Button variant="link" color={textColor} fontWeight="normal" _hover={{ color: 'brand.gold' }} onClick={() => { setCategory('Necklaces'); setSearchQuery(''); }}>Necklaces</Button>
          <Button variant="link" color={textColor} fontWeight="normal" _hover={{ color: 'brand.gold' }} onClick={() => { setCategory('Rings'); setSearchQuery(''); }}>Rings</Button>
          <Button variant="link" color={textColor} fontWeight="normal" _hover={{ color: 'brand.gold' }} onClick={() => { setCategory('Earrings'); setSearchQuery(''); }}>Earrings</Button>
          <Button variant="link" color={textColor} fontWeight="normal" _hover={{ color: 'brand.gold' }} onClick={() => { setCategory('Bracelets'); setSearchQuery(''); }}>Bracelets</Button>
          <Button variant="link" color={textColor} fontWeight="normal" _hover={{ color: 'brand.gold' }} onClick={() => document.getElementById('about-us').scrollIntoView({ behavior: 'smooth' })}>About Us</Button>
        </HStack>
        <Spacer />
        <HStack spacing={4}>
          <InputGroup w={{ base: '120px', md: '200px' }}>
            <InputLeftElement pointerEvents='none'>
              <FiSearch color="gray.300" />
            </InputLeftElement>
            <Input 
              type='text' 
              placeholder='Search...' 
              color={textColor} 
              borderColor={borderColor} 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              focusBorderColor="brand.gold"
            />
          </InputGroup>
          <IconButton aria-label="Cart" icon={<FiShoppingCart />} variant="ghost" color={textColor} _hover={{ color: 'brand.gold' }} />
          <IconButton aria-label="Toggle Color Mode" icon={colorMode === 'dark' ? <FiSun /> : <FiMoon />} onClick={toggleColorMode} variant="ghost" color={textColor} _hover={{ color: 'brand.gold' }} />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
