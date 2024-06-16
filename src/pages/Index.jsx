import { Box, Container, Flex, Grid, Heading, Link, Text, VStack, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Header */}
      <Flex as="header" py={4} justifyContent="space-between" alignItems="center" borderBottom="1px solid #e2e8f0">
        <Flex alignItems="center">
          <Image src="/images/logo.png" alt="FT Times Logo" boxSize="50px" />
          <Heading as="h1" size="lg" ml={3}>FT Times</Heading>
        </Flex>
        <Flex>
          <Link href="#" mx={2}>Home</Link>
          <Link href="#" mx={2}>World</Link>
          <Link href="#" mx={2}>Business</Link>
          <Link href="#" mx={2}>Tech</Link>
          <Link href="#" mx={2}>Science</Link>
          <Link href="#" mx={2}>Health</Link>
        </Flex>
      </Flex>

      {/* Main Content */}
      <Grid templateColumns="repeat(3, 1fr)" gap={6} my={6}>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
          <Heading as="h2" size="md">Article 1</Heading>
          <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
          <Heading as="h2" size="md">Article 2</Heading>
          <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
          <Heading as="h2" size="md">Article 3</Heading>
          <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
        </Box>
      </Grid>

      {/* Footer */}
      <Flex as="footer" py={4} justifyContent="space-between" alignItems="center" borderTop="1px solid #e2e8f0">
        <Text>&copy; 2023 FT Times. All rights reserved.</Text>
        <Flex>
          <Link href="#" mx={2}>Contact</Link>
          <Link href="#" mx={2}>Privacy</Link>
          <Link href="#" mx={2}>Terms</Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;