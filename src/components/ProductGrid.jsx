import { Box, SimpleGrid, Image, Text, VStack, Heading, Flex, useColorModeValue, HStack, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const products = [
  { id: 1, name: 'The Royal Emerald Drop', price: '$4,500', image: '/images/emerald_earrings.jpg', category: 'Earrings' },
  { id: 2, name: 'Midnight Sapphire Aura', price: '$8,200', image: '/images/sapphire_ring.jpg', category: 'Rings' },
  { id: 3, name: 'Minimalist Gold Cuff', price: '$1,800', image: '/images/gold_bracelet.jpg', category: 'Bracelets' },
  { id: 4, name: 'Diamond Cascade', price: '$12,500', image: '/images/diamond_necklace.jpg', category: 'Necklaces' },
  { id: 5, name: 'Classic Pearl Strand', price: '$3,200', image: '/images/pearl_necklace.jpg', category: 'Necklaces' },
  { id: 6, name: 'Crimson Heart Ruby', price: '$9,100', image: '/images/ruby_ring.jpg', category: 'Rings' },
  { id: 7, name: 'Eternity Diamond Tennis', price: '$15,000', image: '/images/tennis_bracelet.jpg', category: 'Bracelets' },
  { id: 8, name: 'Vintage Gold Solitaire', price: '$5,400', image: '/images/sapphire_ring.jpg', category: 'Rings' },
  { id: 9, name: 'Crystal Drop Earrings', price: '$2,100', image: '/images/emerald_earrings.jpg', category: 'Earrings' },
  { id: 10, name: 'Silver Choker Chain', price: '$1,200', image: '/images/diamond_necklace.jpg', category: 'Necklaces' },
  { id: 11, name: 'Diamond Halo Pendant', price: '$6,800', image: '/images/pearl_necklace.jpg', category: 'Necklaces' },
  { id: 12, name: 'Rose Gold Bangle', price: '$3,400', image: '/images/gold_bracelet.jpg', category: 'Bracelets' },
  { id: 13, name: 'Onyx Statement Ring', price: '$4,200', image: '/images/ruby_ring.jpg', category: 'Rings' },
  { id: 14, name: 'Platinum Tennis Bracelet', price: '$18,500', image: '/images/tennis_bracelet.jpg', category: 'Bracelets' },
  { id: 15, name: 'Sapphire Teardrop Pendant', price: '$7,300', image: '/images/sapphire_ring.jpg', category: 'Necklaces' },
  { id: 16, name: 'Golden Pearl Studs', price: '$1,900', image: '/images/pearl_necklace.jpg', category: 'Earrings' },
  { id: 17, name: 'Diamond Eternity Band', price: '$6,500', image: '/images/diamond_necklace.jpg', category: 'Rings' },
  { id: 18, name: 'Ruby Halo Earrings', price: '$5,800', image: '/images/emerald_earrings.jpg', category: 'Earrings' },
  { id: 19, name: 'Classic Gold Chain', price: '$900', image: '/images/gold_bracelet.jpg', category: 'Necklaces' },
  { id: 20, name: 'White Gold Cuff', price: '$2,700', image: '/images/tennis_bracelet.jpg', category: 'Bracelets' },
];

const ProductGrid = ({ category = 'All', searchQuery = '' }) => {
  const bg = useColorModeValue('brand.100', 'brand.900');
  const textColor = useColorModeValue('black', 'white');
  const mutedText = useColorModeValue('gray.600', 'gray.400');
  const cardShadow = useColorModeValue('lg', 'xl');

  const filteredProducts = products.filter(p => {
    const matchCategory = category === 'All' || p.category === category;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <Box py={20} px={{ base: 4, md: 12 }} bg={bg}>
      <VStack spacing={2} mb={12} textAlign="center">
        <Heading size="xl" color={textColor} fontWeight="light" letterSpacing="widest">
          {category === 'All' ? 'FEATURED CREATIONS' : category.toUpperCase()}
        </Heading>
        <Text color="brand.gold" letterSpacing="widest" fontSize="sm">HANDCRAFTED EXCELLENCE</Text>
      </VStack>
      
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
        {filteredProducts.map((product, index) => (
          <MotionBox
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            cursor="pointer"
            role="group"
          >
            <Box position="relative" overflow="hidden" rounded="md" boxShadow={cardShadow}>
              <Image 
                src={product.image} 
                alt={product.name} 
                objectFit="cover" 
                h="400px" 
                w="100%" 
                transition="transform 0.5s ease"
                _groupHover={{ transform: 'scale(1.05)' }}
              />
              <Flex position="absolute" top={0} left={0} w="100%" h="100%" bg="blackAlpha.400" opacity={0} transition="opacity 0.3s" _groupHover={{ opacity: 1 }} alignItems="center" justifyContent="center">
                <Text color="white" letterSpacing="widest" borderBottom="1px solid" borderColor="brand.gold" pb={1}>QUICK VIEW</Text>
              </Flex>
            </Box>
            <VStack mt={4} alignItems="flex-start" spacing={1} w="100%">
              <Text color={mutedText} fontSize="sm">{product.category}</Text>
              <Heading size="md" color={textColor} fontWeight="normal">{product.name}</Heading>
              <Text color="brand.gold">{product.price}</Text>
              <HStack w="100%" mt={2} spacing={2}>
                <Button size="sm" flex={1} variant="outline" colorScheme="yellow" borderColor="brand.gold" color={textColor} _hover={{ bg: 'brand.gold', color: 'black' }}>Add to Cart</Button>
                <Button size="sm" flex={1} bg="brand.gold" color="black" _hover={{ bg: 'yellow.400' }}>Buy Now</Button>
              </HStack>
            </VStack>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProductGrid;
