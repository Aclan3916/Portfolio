import React from "react";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Tag,
  VStack,
  useColorModeValue,
  Divider
} from "@chakra-ui/react";

const Skills = () => {
  const softSkills = [
    {
      title: "Communication",
      description: "Effective collaboration and clear documentation"
    },
    {
      title: "Problem-Solving",
      description: "Analytical thinking and creative solutions"
    },
    {
      title: "User-Centric Thinking",
      description: "Empathetic design and user experience focus"
    },
    {
      title: "Attention to Detail",
      description: "Precise and thorough implementation"
    },
    {
      title: "Adaptability",
      description: "Quick learning and flexible approach"
    }
  ];

  const technicalSkills = [
    { name: "Blazor", color: "blue" },
    { name: "C#", color: "purple" },
    { name: ".NET", color: "teal" },
    { name: "Razor Pages", color: "pink" },
    { name: "PL/SQL", color: "orange" },
    { name: "React", color: "cyan" },
    { name: "HTML5", color: "red" },
    { name: "CSS3", color: "blue" },
    { name: "Node.js", color: "green" },
    { name: "Figma", color: "purple" }
  ];

  const bgColor = useColorModeValue("rgba(255, 255, 255, 0.05)", "rgba(0, 0, 0, 0.05)");

  return (
    <Box as="section" id="skills" py={20}>
      <Container maxW="container.xl">
        <VStack spacing={12} align="stretch">
          <Heading 
            as="h2" 
            size="2xl" 
            textAlign="center"
            color="#646cff"
            fontWeight="300"
          >
            Skills & Expertise
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Heading as="h3" size="lg" mb={6} color="#646cff">
                Soft Skills
              </Heading>
              <VStack spacing={6} align="stretch">
                {softSkills.map((skill, index) => (
                  <Box 
                    key={index} 
                    p={5} 
                    bg={bgColor} 
                    borderRadius="lg"
                    transition="all 0.3s"
                    _hover={{ transform: "translateY(-2px)", shadow: "md" }}
                  >
                    <Text fontSize="lg" fontWeight="500" mb={2}>
                      {skill.title}
                    </Text>
                    <Text fontSize="sm" opacity={0.8}>
                      {skill.description}
                    </Text>
                  </Box>
                ))}
              </VStack>
            </Box>

            <Box>
              <Heading as="h3" size="lg" mb={6} color="#646cff">
                Technical Skills
              </Heading>
              <SimpleGrid columns={3} spacing={3}>
                {technicalSkills.map((skill, index) => (
                  <Tag
                    key={index}
                    size="lg"
                    variant="subtle"
                    colorScheme={skill.color}
                    p={2}
                    textAlign="center"
                    borderRadius="md"
                    transition="all 0.3s"
                    _hover={{ transform: "translateY(-2px)" }}
                  >
                    {skill.name}
                  </Tag>
                ))}
              </SimpleGrid>
            </Box>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Skills;