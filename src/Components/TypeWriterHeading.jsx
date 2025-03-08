import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { keyframes } from "@emotion/react";

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: white }
`;

const TypeWriterHeading = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#typewriter-heading');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      textAlign="center"
      mb={16}
      overflow="hidden"
      whiteSpace="nowrap"
    >
      <Box
        as="h1"
        id="typewriter-heading"
        display="inline-block"
        position="relative"
        fontSize={{ base: "3xl", md: "5xl" }}
        fontWeight="bold"
        color="white"
        overflow="hidden"
        whiteSpace="nowrap"
        borderRight="0.15em solid white"
        margin="0 auto"
        letterSpacing="0.15em"
        animation={`
          ${typing} 3.5s steps(40, end),
          ${blinkCaret} .75s step-end infinite
        `}
      >
        Where Ideas Take Shape
      </Box>
    </Box>
  );
};

export default TypeWriterHeading;