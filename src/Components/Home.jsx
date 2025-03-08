import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Button
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { keyframes } from "@emotion/react"
import { FiGithub, FiLinkedin } from 'react-icons/fi';

// Blinking cursor animation
const blink = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const MotionBox = motion(Box);

const Home = () => {
  return (
    <Box 
      as="section" 
      minH="100vh" 
      display="flex" 
      alignItems="center" 
      position="relative"
      overflow="hidden"
      id="home"
    >
      {/* Background elements */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="radial-gradient(circle at top right, rgba(100, 108, 255, 0.08), transparent 40%)"
      />
      
      <Container maxW="7xl">
        <VStack align="stretch" spacing={6}>
          <Box>
            <Text 
              color="#646cff" 
              fontSize="xl" 
              fontFamily="monospace"
              mb={3}
            >
              Hello, World! I'm
            </Text>
            
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
              fontWeight="bold"
              color="white"
              lineHeight="shorter"
              mb={4}
            >
              Audrey E. Clanton
              <Box 
                as="span" 
                animation={`${blink} 1s step-end infinite`}
                color="#646cff"
              >
                _
              </Box>
            </Heading>

            <Heading
              as="h2"
              fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
              fontWeight="normal"
              color="whiteAlpha.900"
              lineHeight="tall"
              maxW="800px"
            >
              Full Stack Software Engineer & UX/UI Lead crafting elegant solutions to complex problems
            </Heading>
          </Box>

          <HStack spacing={4} pt={8}>
            <Button
              as="a"
              href="#projects"
              size="lg"
              bg="#646cff"
              color="white"
              _hover={{
                bg: "rgba(100, 108, 255, 0.8)",
                transform: "translateY(-2px)",
              }}
              transition="all 0.2s"
            >
              View My Work
            </Button>
            
            <HStack spacing={4}>
              <Button
                as="a"
                href="https://github.com/Aclan3916"
                target="_blank"
                size="lg"
                variant="ghost"
                color="white"
                leftIcon={<FiGithub />}
                _hover={{
                  bg: "rgba(255, 255, 255, 0.1)",
                  transform: "translateY(-2px)",
                }}
                transition="all 0.2s"
              >
                GitHub
              </Button>
              
              <Button
                as="a"
                href="https://www.linkedin.com/in/audreyclanton/"
                target="_blank"
                size="lg"
                variant="ghost"
                color="white"
                leftIcon={<FiLinkedin />}
                _hover={{
                  bg: "rgba(255, 255, 255, 0.1)",
                  transform: "translateY(-2px)",
                }}
                transition="all 0.2s"
              >
                LinkedIn
              </Button>
            </HStack>
          </HStack>

          {/* Code snippet decoration */}
          <MotionBox
            position="absolute"
            right={{ base: "-100px", lg: "0" }}
            bottom={{ base: "-50px", lg: "0" }}
            fontFamily="monospace"
            fontSize="sm"
            color="whiteAlpha.400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <pre>
              {`const developer = {
  name: 'Audrey',
  type: 'Full Stack',
  passion: 'Creating Impact'
};`}
            </pre>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default Home;