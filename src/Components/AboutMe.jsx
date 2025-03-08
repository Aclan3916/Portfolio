import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Badge,
  Flex,
  Icon,
  Image
} from '@chakra-ui/react';
import { FaCode, FaLaptopCode } from 'react-icons/fa';
import { keyframes } from "@emotion/react"
import profileImage from '../assets/profileImage.png'; // adjust path as needed

// Animation for the code symbols
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const AboutMe = () => {
  const softSkills = [
    "Problem Solving",
    "Team Leadership",
    "Communication",
    "Agile Methodology",
    "Project Management",
    "Mentoring",
    "Time Management",
    "Adaptability"
  ];

  const techSkills = [
    "JavaScript",
    "React",
    "Node.js",
    "TypeScript",
    "C#",
    "SQL",
    "Git",
    "REST APIs",
    "HTML/CSS",
    "AWS",
    "Docker",
    "MongoDB"
  ];

  return (
    <Box as="section" py={20} position="relative" overflow="hidden">
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="radial-gradient(circle at top right, rgba(100, 108, 255, 0.08), transparent 40%)"
      />

      <Container maxW="7xl">
        <VStack spacing={12} position="relative">
          <Icon
            as={FaCode}
            position="absolute"
            top={-6}
            right="15%"
            color="#646cff"
            w={8}
            h={8}
            animation={`${float} 3s ease-in-out infinite`}
          />
          
          <VStack spacing={6} align="start" w="full">
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight="bold"
              color="white"
              textAlign="right"
            >
              The Human Behind The Code
            </Heading>
            
            <Text color="whiteAlpha.900" fontSize="lg" lineHeight="tall" textAlign="right">
            Hello! I'm Audrey, a passionate Full Stack Software Engineer and UX/UI Lead with a love for creating elegant solutions to complex problems. My journey in tech began at the University of North Georgia, and since then, I've been on an exciting path of continuous learning and growth.

I've tackled diverse projects, adapting to different technologies and solving complex problems along the way. As a UX/UI Lead, I focus on creating intuitive, user-friendly designs that not only look great but also enhance functionality.

  </Text>
            <Text color="whiteAlpha.900" fontSize="lg" lineHeight="tall" textAlign="right">
              When I'm not coding, you can find me exploring new technologies, running, or mentoring aspiring developers. I believe in writing clean, maintainable code and creating intuitive user experiences.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} w="full">
            <Box>
              <VStack align="start" spacing={6}>
                <Heading 
                  as="h2" 
                  fontSize="2xl" 
                  color="white"
                  display="flex"
                  alignItems="center"
                  gap={2}
                >
                  <Icon as={FaLaptopCode} color="#646cff" />
                  Technical Skills
                </Heading>
                <Flex wrap="wrap" gap={2}>
                  {techSkills.map((skill) => (
                    <Badge
                      key={skill}
                      px={3}
                      py={1}
                      bg="rgba(100, 108, 255, 0.1)"
                      color="#646cff"
                      borderRadius="full"
                      _hover={{
                        bg: "rgba(100, 108, 255, 0.2)",
                        transform: "translateY(-2px)",
                      }}
                      transition="all 0.2s"
                    >
                      {skill}
                    </Badge>
                  ))}
                </Flex>
              </VStack>
            </Box>

            <Box>
              <VStack align="start" spacing={6}>
                <Heading 
                  as="h2" 
                  fontSize="2xl" 
                  color="white"
                  display="flex"
                  alignItems="center"
                  gap={2}
                >
                  <Icon as={FaCode} color="#646cff" />
                  Soft Skills
                </Heading>
                <Flex wrap="wrap" gap={2}>
                  {softSkills.map((skill) => (
                    <Badge
                      key={skill}
                      px={3}
                      py={1}
                      bg="rgba(255, 255, 255, 0.05)"
                      color="white"
                      borderRadius="full"
                      _hover={{
                        bg: "rgba(255, 255, 255, 0.1)",
                        transform: "translateY(-2px)",
                      }}
                      transition="all 0.2s"
                    >
                      {skill}
                    </Badge>
                  ))}
                </Flex>
              </VStack>
            </Box>
          </SimpleGrid>

          <Box 
            position="relative" 
            w="full" 
            maxW="400px"  // Changed from 600px to 400px
            mx="auto" 
            mt={16}
          >
            <Image
              src={profileImage}
              alt="Audrey Clanton"
              borderRadius="lg"
              boxShadow="xl"
              w="full"
              h="auto"
            />
            <Box
              position="absolute"
              bottom={4}
              right={4}
              bg="rgba(0, 0, 0, 0.7)"
              p={3}
              borderRadius="md"
              backdropFilter="blur(5px)"
            >
              <Text
                color="white"
                fontSize="lg"
                fontWeight="medium"
              >
                Here's a picture of me
              </Text>
            </Box>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default AboutMe;