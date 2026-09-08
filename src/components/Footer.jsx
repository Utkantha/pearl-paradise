import { Box, Flex, Text, VStack, HStack, IconButton, Divider, useColorModeValue } from '@chakra-ui/react';
import { FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi';

const Footer = () => {
  const bg = useColorModeValue('gray.100', 'black');
  const textColor = useColorModeValue('black', 'white');
  const mutedText = useColorModeValue('gray.600', 'gray.400');
  const borderColor = useColorModeValue('gray.300', 'whiteAlpha.300');

  return (
    <Box id="about-us" bg={bg} py={12} px={{ base: 4, md: 12 }}>
      <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align={{ base: 'center', md: 'flex-start' }}>
        <VStack align={{ base: 'center', md: 'flex-start' }} spacing={4} mb={{ base: 8, md: 0 }}>
          <Text fontSize="3xl" color="brand.gold" letterSpacing="widest" fontWeight="bold" fontFamily="'Playfair Display', serif">PEARL PARADISE</Text>
          <Text color={mutedText} fontSize="sm" maxW="300px" textAlign={{ base: 'center', md: 'left' }}>
            Elevating everyday moments with exquisite designer jewelry crafted for the modern aesthete.
          </Text>
        </VStack>
        
        <HStack spacing={16}>
          <VStack align="flex-start" spacing={3}>
            <Text color={textColor} fontWeight="bold" letterSpacing="wider">SHOP</Text>
            <Text color={mutedText} _hover={{ color: 'brand.gold', cursor: 'pointer' }}>Necklaces</Text>
            <Text color={mutedText} _hover={{ color: 'brand.gold', cursor: 'pointer' }}>Earrings</Text>
            <Text color={mutedText} _hover={{ color: 'brand.gold', cursor: 'pointer' }}>Rings</Text>
            <Text color={mutedText} _hover={{ color: 'brand.gold', cursor: 'pointer' }}>Bracelets</Text>
          </VStack>
          <VStack align="flex-start" spacing={3} maxW="350px">
            <Text color={textColor} fontWeight="bold" letterSpacing="wider">ABOUT US</Text>
            <Text color={mutedText} fontSize="sm">
              Pearl Paradise is a premier destination for luxury designer jewelry. We curate the finest diamonds, pearls, and precious gems for our exclusive clientele, crafting timeless elegance.
            </Text>
            <Text color={textColor} fontWeight="bold" mt={2}>Call Us: +1 (800) 123-4567</Text>
            <Text color={mutedText} _hover={{ color: 'brand.gold', cursor: 'pointer' }}>Our Story</Text>
            <Text color={mutedText} _hover={{ color: 'brand.gold', cursor: 'pointer' }}>Contact</Text>
          </VStack>
        </HStack>
      </Flex>
      
      <Divider borderColor={borderColor} my={8} />
      
      <Flex justify="space-between" align="center" direction={{ base: 'column', md: 'row' }}>
        <Text color={mutedText} fontSize="sm">© 2026 PEARL PARADISE. All rights reserved.</Text>
        <HStack spacing={4} mt={{ base: 4, md: 0 }}>
          <IconButton aria-label="Instagram" icon={<FiInstagram />} variant="ghost" color={mutedText} _hover={{ color: 'brand.gold' }} rounded="full" />
          <IconButton aria-label="Twitter" icon={<FiTwitter />} variant="ghost" color={mutedText} _hover={{ color: 'brand.gold' }} rounded="full" />
          <IconButton aria-label="Facebook" icon={<FiFacebook />} variant="ghost" color={mutedText} _hover={{ color: 'brand.gold' }} rounded="full" />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;
