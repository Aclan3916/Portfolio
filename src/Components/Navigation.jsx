import React, { useState } from "react";
import { Box, Flex, Spacer, Container } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Navigation = () => {
  // const [activeLink, setActiveLink] = useState('header');

  // const handleClick = (id) => {
  //   setActiveLink(id);
  // };

  return (
<Box borderBottom="1px" color="white" py={4}>
  <Container maxW="container.lg">
    <Flex align="center">
      <RouterLink to="/">
        <Box fontSize="lg"
          fontWeight="bold"
          color="#646cff"
          _hover={{ color: "white" }}>
          {'< Audrey />'}
        </Box>
      </RouterLink>
      <Spacer />
      <Flex gap={4}>
        <RouterLink to="/about">
          <Box color="white" 
          fontWeight="medium"
           _hover={{ color: '#646cff' }}>About 
           </Box>
        </RouterLink>
        <RouterLink to="/projects">
          <Box color="white" 
          fontWeight="medium"
           _hover={{ color: '#646cff' }}>Projects
           </Box>
        </RouterLink>
        <RouterLink to="/contact">
          <Box color="white" 
          fontWeight="medium"
           _hover={{ color: '#646cff' }}>Contact
           </Box>
        </RouterLink>
        <RouterLink to="/recommendations">
          <Box color="white" 
          fontWeight="medium"
           _hover={{ color: '#646cff' }}>Recommendations
           </Box>
        </RouterLink>
      </Flex>
    </Flex>
  </Container>
</Box>



    // <header className="header">
    //   <h3>{'< Audrey />'}</h3>
    //   <nav className="nav-container">
    //     {['about', 'projects', 'contact'].map((item) => (
    //       <a
    //         key={item}
    //         href={`#${item}`}
    //         className={`nav-link ${activeLink === item ? 'active' : ''}`}
    //         onClick={() => handleClick(item)}
    //       >
    //         {item.charAt(0).toUpperCase() + item.slice(1)}
    //       </a>
    //     ))}
    //   </nav>
    // </header>
  );
};

export default Navigation;
