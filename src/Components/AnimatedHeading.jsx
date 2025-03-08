import React from 'react';
import { Box } from '@chakra-ui/react';
import { keyframes } from "@emotion/react"

const waveAcross = keyframes`
  0%, 100% { 
    transform: translateX(0px) translateY(0px);
  }
  50% { 
    transform: translateX(20px) translateY(-10px);
  }
`;

const AnimatedHeading = () => {
  return (
    <Box
      position="relative"
      textAlign="center"
      fontSize={{ base: "4xl", md: "6xl" }}
      fontWeight="bold"
      mb={16}
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={2}
    >
      <Box
        as="span"
        display="inline-block"
        color="white"
        animation={`${waveAcross} 3s ease-in-out infinite`}
        style={{ transformOrigin: "justify-left" }}
      >
        Where Ideas Take Shape
      </Box>
      <Box 
        as="span" 
        display="block"
        bgGradient="linear(to-r, #646cff, #9089fc)"
        bgClip="text"
        animation={`${waveAcross} 3s ease-in-out infinite 0.5s`}
        color="white"
      >
       
      </Box>
    </Box>
  );
};

export default AnimatedHeading;