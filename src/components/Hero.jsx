import { Box, Flex, Heading, Text, Button, VStack, useColorModeValue } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = ({ category = 'All' }) => {
  const getBackgroundImage = () => {
    switch(category) {
      case 'Rings': return "url('/images/ruby_ring.jpg')";
      case 'Earrings': return "url('/images/emerald_earrings.jpg')";
      case 'Bracelets': return "url('/images/tennis_bracelet.jpg')";
      case 'Necklaces': return "url('/images/pearl_necklace.jpg')";
      default: return "url('/images/diamond_necklace.jpg')";
    }
  };

  const getHeroTitle = () => {
    if (category === 'All') return 'PEARL PARADISE';
    return `EXQUISITE ${category.toUpperCase()}`;
  };

  return (
    <Box position="relative" h="70vh" w="100%" overflow="hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={category}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: getBackgroundImage(), backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
        />
      </AnimatePresence>
      <Box position="absolute" top="0" left="0" w="100%" h="100%" bg="blackAlpha.600" />
      <Flex position="relative" zIndex="1" h="100%" alignItems="center" justifyContent="center" textAlign="center" px={4}>
        <VStack spacing={6}>
          <AnimatePresence mode="wait">
            <motion.div key={`title-${category}`} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.8 }}>
              <Heading as="h1" size="4xl" color="brand.gold" fontWeight="bold" fontFamily="'Playfair Display', serif" letterSpacing="widest">
                {getHeroTitle()}
              </Heading>
            </motion.div>
          </AnimatePresence>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
            <Text fontSize="xl" color="gray.200" maxW="2xl">
              Discover our curated collection of fine jewelry. Each piece tells a story of unparalleled craftsmanship and timeless beauty.
            </Text>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}>
            <Button size="lg" bg="brand.gold" color="black" _hover={{ bg: 'yellow.400' }} rounded="none" px={10} py={7} fontSize="md" letterSpacing="wider">
              EXPLORE COLLECTION
            </Button>
          </motion.div>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Hero;
