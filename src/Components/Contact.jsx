import React, { useState } from "react";
import {
  VStack,
  Heading,
  Input,
  Textarea,
  Button,
  Box,
  Container,
  Text,
  HStack,
  Link,
  Icon,
  Alert,
} from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { FaPhone, FaLinkedin, FaInfoCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null); // Add this state for message status

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields'
      });
      return;
    }

    try {
      // Create mailto URL with form data
      const mailtoUrl = `mailto:aclan3916@gmail.com?subject=I saw your Portfolio and want to connect!&body=%0D%0A${formData.message}`;
      
      // Open email client
      window.location.href = mailtoUrl;
      
      setStatus({
        type: 'success',
        message: 'Opening your email client...'
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Error:', error);
      setStatus({
        type: 'error',
        message: 'Failed to open email client. Please try again.'
      });
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Box as="section" py={20}>
      <Container maxW="7xl">
        {status && (
          <Alert 
            status={status.type}
            variant="subtle"
            bg={status.type === 'error' ? "rgba(255, 0, 0, 0.15)" : "rgba(100, 108, 255, 0.15)"}
            color="white"
            borderRadius="xl"
            mb={6}
          >
            <Icon as={FaInfoCircle} color="white" mr={3} />
            {status.message}
          </Alert>
        )}
        <Box display="flex" flexDir={{ base: "column", lg: "row" }} gap={10}>
          {/* Left Section - Heading */}
          <VStack 
            flex="1" 
            align={{ base: "center", lg: "flex-start" }} 
            spacing={4}
            justify="center"
          >
            <Heading
              as="h2"
              size="6xl"
              fontWeight="bold"
              lineHeight="shorter"
              textAlign={{ base: "center", lg: "left" }}
            >
              Let's Connect
            </Heading>
            <Text 
              fontSize="xl" 
              color="whiteAlpha.800"
              textAlign={{ base: "center", lg: "left" }}
              mb={6}
            >
              Whether it’s a cool project, a wild idea, or just a friendly chat—I’m in! Email me, hit me up on LinkedIn, or call me!
            </Text>

            {/* New Contact Icons */}
            <HStack 
              spacing={6} 
              align="center" 
              justify={{ base: "center", lg: "flex-start" }}
              w="full"
            >
              <Link 
                href="tel:+16783328851"
                _hover={{ color: "#646cff" }}
                transition="all 0.2s"
              >
                <Icon 
                  as={FaPhone} 
                  w={6} 
                  h={6} 
                  color="whiteAlpha.900"
                  _hover={{ transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                />
              </Link>
              
              <Link 
                href="https://www.linkedin.com/in/audreyclanton/" 
                isExternal
                _hover={{ color: "#646cff" }}
                transition="all 0.2s"
              >
                <Icon 
                  as={FaLinkedin} 
                  w={6} 
                  h={6} 
                  color="whiteAlpha.900"
                  _hover={{ transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                />
              </Link>
            </HStack>
          </VStack>

          {/* Right Section - Form */}
          <Box
            as="form"
            onSubmit={handleSubmit}
            p={8}
            borderRadius="2xl"
            bg="rgba(255, 255, 255, 0.03)"
            backdropFilter="blur(10px)"
            border="1px solid"
            borderColor="rgba(255, 255, 255, 0.1)"
            flex="1"
            width="100%"
          >
            <VStack spacing={6} align="stretch" width="100%">
              <FormControl isRequired>
                <FormLabel color="white">Name</FormLabel>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  bg="rgba(255, 255, 255, 0.05)"
                  border="none"
                  color="white"
                  borderRadius="xl"
                  height="50px"
                  _placeholder={{ color: "whiteAlpha.500" }}
                  _hover={{ bg: "rgba(255, 255, 255, 0.08)" }}
                  _focus={{ 
                    bg: "rgba(255, 255, 255, 0.08)",
                    boxShadow: "none" 
                  }}
                  width="100%"
                  minWidth="300px"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="white">Email</FormLabel>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  bg="rgba(255, 255, 255, 0.05)"
                  border="none"
                  color="white"
                  borderRadius="xl"
                  height="50px"
                  _placeholder={{ color: "whiteAlpha.500" }}
                  _hover={{ bg: "rgba(255, 255, 255, 0.08)" }}
                  _focus={{ 
                    bg: "rgba(255, 255, 255, 0.08)",
                    boxShadow: "none" 
                  }}
                  width="100%"
                  minWidth="300px"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="white">Message</FormLabel>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={6}
                  bg="rgba(255, 255, 255, 0.05)"
                  border="none"
                  color="white"
                  borderRadius="xl"
                  _placeholder={{ color: "whiteAlpha.500" }}
                  _hover={{ bg: "rgba(255, 255, 255, 0.08)" }}
                  _focus={{ 
                    bg: "rgba(255, 255, 255, 0.08)",
                    boxShadow: "none" 
                  }}
                  width="100%"
                  minWidth="300px"
                />
              </FormControl>

              <Box display="flex" justifyContent="flex-end" width="100%">
                <Button
                  type="submit"
                  size="md"
                  width="auto"
                  isLoading={isLoading}
                  bg="rgba(100, 108, 255, 0.08)"
                  color="white"
                  borderColor="#646cff"
                  border="1px solid"
                  borderRadius="xl"
                  px={8}
                  py={6}
                  _hover={{
                    transform: "translateY(-2px)",
                    shadow: "md",
                    bg: "rgba(100, 108, 255, 0.15)"
                  }}
                  ml="auto"
                >
                  Send Message
                </Button>
              </Box>
            </VStack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;