import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Badge,
  Flex,
  Image,
} from "@chakra-ui/react";
import profileImage from "../assets/profileImage.png";
import { MdWork } from "react-icons/md";

const About = () => {
  const softSkills = [
    "Communication",
    "Problem-Solving",
    "Empathy & User-Centric Thinking",
    "Attention to Detail",
    "Adaptability & Learning"
  ];
    
  const technicalSkills = [
    "Blazor",
    "C#",
    ".NET",
    "Razor Pages",
    "PL/SQL",
    "React",
    "HTML5",
    "CSS3",
    "Node.js",
    "Figma"
  ];

  return (
    <Box as="section" py={10} id="about">
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6} alignItems="center">
          <VStack align="stretch" gap={4}>
            <Heading 
              as="h2"
              size="2xl"
              fontWeight="bold"
              color="white"
              mb={2}
            >
              The Person Behind the Work
            </Heading>
            
            <Text color="whiteAlpha.900" fontSize="lg" lineHeight="tall" mb={2}>
              Since graduating from the University of North Georgia, I've pursued my passion 
              for programming and now work as a Full Stack Software Engineer and UX/UI Lead, 
              blending technical expertise with user-focused design. I've tackled diverse 
              projects, adapting to different technologies and solving complex problems along 
              the way.
            </Text>
            
            <Text color="whiteAlpha.900" fontSize="lg" lineHeight="tall" mb={4}>
              As a UX/UI Lead, I focus on creating intuitive, user-friendly designs that 
              not only look great but also enhance functionality. I have hands-on experience 
              with Figma, Balsamiq, Adobe, and front-end frameworks, ensuring a balance 
              between aesthetics and usability.
            </Text>

            <VStack gap={4} align="stretch">
              <Box>
                <Heading as="h3" size="md" mb={2} color="#646cff">
                  Soft Skills
                </Heading>
                <Flex wrap="wrap" gap={2}>
                  {softSkills.map((skill, index) => (
                    <Badge
                      key={index}
                      px={3}
                      py={1}
                      bg="rgba(255, 255, 255, 0.05)"
                      color="white"
                      borderRadius="full"
                      fontSize="md"
                      _hover={{ 
                        transform: "translateY(-2px)",
                        bg: "rgba(255, 255, 255, 0.1)" 
                      }}
                      transition="all 0.2s"
                    >
                      {skill}
                    </Badge>
                  ))}
                </Flex>
              </Box>

              <Box>
                <Heading as="h3" size="md" mb={2} color="#646cff">
                  Technical Skills
                </Heading>
                <Flex wrap="wrap" gap={2}>
                  {technicalSkills.map((skill, index) => (
                    <Badge
                      key={index}
                      px={3}
                      py={1}
                      bg="rgba(255, 255, 255, 0.05)"
                      color="white"
                      borderRadius="full"
                      fontSize="md"
                      _hover={{ 
                        transform: "translateY(-2px)",
                        bg: "rgba(255, 255, 255, 0.1)" 
                      }}
                      transition="all 0.2s"
                    >
                      {skill}
                    </Badge>
                  ))}
                </Flex>
              </Box>
            </VStack>
          </VStack>

          <Box>
            <Image
              src={profileImage}
              alt="Audrey Clanton"
              borderRadius="none"
              boxShadow="xl"
              objectFit="cover"
            />
          </Box>
        </SimpleGrid>

        {/* New Journey Section */}
        <Box mt={16}>
          <Heading 
            as="h2"
            size="xl"
            color="white"
            mb={8}
            textAlign="left"
          >
            My Journey
          </Heading>
          
          <Flex gap={4} alignItems="flex-start">
            <Box 
              as={MdWork} 
              size="28px" 
              color="#646cff"
              mt={1}
            />
            <Box>
              <Text 
                color="white" 
                fontSize="lg" 
                fontWeight="bold"
                mb={2}
              >
                Software Engineer & UX/UI Lead
              </Text>
              <Text color="whiteAlpha.900" fontSize="lg" lineHeight="tall">
                Currently working on developing full-stack applications and leading UX/UI design initiatives. 
                Focusing on creating intuitive user experiences while implementing robust backend solutions.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default About;