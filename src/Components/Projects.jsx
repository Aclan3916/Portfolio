import React from "react";
import {
  Box,
  Container,
  Heading,
  Grid,
  Text,
  Badge,
  Link,
  Image,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import FigmaWedding from "../assets/FigmaWedding.png"
import RunningLog from "../assets/RunLog.png";
import AnotherToDoApp from "../assets/AnotherToDoAppImage.png";
import TypeWriterHeading from "./TypeWriterHeading";
import ExpenseTracker from '../assets/ExpenseTracker.png'
import Arcade from '../assets/Arcade.png'

const Projects = () => {
  const projects = [
    {
      title: "Wedding Photography App",
      image: FigmaWedding,
      description: "A Figma Prototype for a wedding photography app that allows users to book photographers, view portfolios, and manage their wedding day timeline.",
      technologies: ["Figma"],
      demoLink: "https://www.figma.com/proto/omsZjCecE6lhQfyLYzxNVX/Photography-Page?node-id=3-28&t=PkLKkT9Ffsil1zKl-1",
    },
    {
      title: "Arcade",
      image: Arcade,
      description: "This React Arcade application is a web-based gaming platform built with React, TypeScript, and Vite that features classic games ",
      technologies: ["React", "TypeScript","Custom CSS", "ChatGPT images", "Vite", "gh-pages"],
      demoLink: "https://aclan3916.github.io/ReactArcade",
      githubLink: "https://github.com/Aclan3916/ReactArcade"
    },
    {
      title: "Another Todo App",
      image: AnotherToDoApp,
      description: "This is a simple to-do list app built with modern web technologies like React, Node.js, and Next.js. Users can add, edit, delete, and mark tasks as complete. It uses React for the frontend and Next.js API routes (powered by Node.js) for backend functionality. The app includes basic form validation, responsive UI styling, and user-friendly touches like a motivational quote toggle. It’s a great example of how to build a full-stack app with client-server interaction and clean, component-based design.",
      technologies: ["React", "Node.js", "Next.js", "Tailwind CSS"],
      demoLink: "https://another-to-do-app.vercel.app/",
      githubLink: "https://github.com/Aclan3916/Another-to-do-app/tree/main"
    },
    {
      title: "Running Log",
      image: RunningLog,
      description: "This is a basic application demonstrating CRUD functionality using React with Vite and Chakra UI, integrated with a Supabase database for creating, viewing, editing, and deleting run entries. Just a quick heads-up: I'm using Supabase as the database, and with the free plan, the database can pause if the app isn't accessed for seven days. If you run into any issues loading or saving data, it may simply be because the Supabase instance has temporarily paused.",
      technologies: ["React", "Supabase", "Vite", "Chakra UI"],
      demoLink: "https://aclan3916.github.io/react-running-log/",
      githubLink: "https://github.com/Aclan3916/react-running-log/tree/main"
    },
    {
      title: "Expense Tracker",
      image: ExpenseTracker,
      description: "This expense tracker app was built using React with functional components and hooks for state management.",
      technologies: ["React", "JavaScript","CSS"],
      demoLink: "https://aclan3916.github.io/ReactExpenseTracker/",
      githubLink: "https://github.com/Aclan3916/ReactExpenseTracker"
    }
  ];

  return (
    <Box 
      as="section" 
      py={20} 
      bg="transparent" // Changed from gray.50
    >
      <Container maxW="7xl">
        <Box
          id="typewriter-heading"
          textAlign="center"
          mb={16}
          overflow="hidden"
          whiteSpace="nowrap"
        >
          <TypeWriterHeading />
        </Box>
        
        <Grid 
          templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} 
          gap={10}
        >
          {projects.map((project, index) => (
            <Box
              key={index}
              position="relative"
              bg="rgba(255, 255, 255, 0.05)" // Changed from solid white
              _dark={{ bg: "rgba(0, 0, 0, 0.2)" }} // Changed dark mode background
              borderRadius="xl"
              overflow="hidden"
              boxShadow="xl"
              backdropFilter="blur(10px)" // Added glass effect
              border="1px solid"
              borderColor="rgba(255, 255, 255, 0.1)" // Added subtle border
            >
              <Image
                src={project.image}
                alt={project.title}
                w="100%"
                h="250px"
                objectFit="cover"
                transition="transform 0.3s ease"
                _groupHover={{ transform: "scale(1.05)" }}
              />
              
              <Box p={6}>
                <Heading 
                  as="h3" 
                  size="lg" 
                  mb={4}
                >
                  {project.title}
                </Heading>
                
                <Text 
                  mb={4} 
                  color="white" // Changed from gray.600
                  _dark={{ color: 'white' }} // Changed from gray.300
                >
                  {project.description}
                </Text>
                
                <Flex wrap="wrap" gap={2} mb={6}>
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      colorScheme="blue"
                      px={3}
                      py={1}
                      borderRadius="full"
                    >
                      {tech}
                    </Badge>
                  ))}
                </Flex>

                <Flex gap={4}>
                  {project.demoLink && (
                    <Link 
                      href={project.demoLink}
                      isExternal
                      target="_blank"
                      rel="noopener noreferrer"
                      display="flex"
                      alignItems="center"
                      gap={2}
                      color="white"
                    >
                      <Icon as={FaExternalLinkAlt} />
                      Live Demo
                    </Link>
                  )}
                  {project.githubLink && (
                    <Link 
                      href={project.githubLink}
                      isExternal
                      target="_blank"
                      rel="noopener noreferrer"
                      display="flex"
                      alignItems="center"
                      gap={2}
                      color="white"
                    >
                      <Icon as={FaGithub} />
                      View Code
                    </Link>
                  )}
                </Flex>
              </Box>
            </Box>
          ))}
        </Grid>
        
        <Text
          textAlign="center"
          fontSize="lg"
          color="whiteAlpha.800"
          mt={16}
          fontStyle="italic"
        >
          More exciting projects coming soon... Stay tuned!
        </Text>
      </Container>
    </Box>
  );
};

export default Projects;