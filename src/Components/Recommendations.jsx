import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { FaQuoteLeft } from 'react-icons/fa';

const recommendations = [
  {
    name: "Noah Pate",
    role: "Full Stack Software Engineer",
    content: ["Few people bring the kind of positivity and expertise to a team that Audrey does. I’ve had the privilege of working with her since 2021, collaborating both in person and remotely. Over those four years, she consistently impressed me with her dedication to the job, troubleshooting ability, and willingness to help in every situation. Audrey brings a wealth of expertise in C#, Blazor, PL/SQL, and UI/UX design. She served as the UI/UX lead on multiple projects we worked on together and managed to surpass users’ expectations every time. Her attention to detail in every aspect of the job made her someone I knew I could count on, no matter the situation.",
"Audrey’s rare blend of technical know-how, willingness to collaborate, and infectious positive attitude makes her an indispensable member of any team.", 
"She’s not just an incredible colleague but an all-around incredible person—someone I’d work with again in a heartbeat. If you ever have the chance to work with her, I’d highly recommend you take it."
    ]
},
  {
    name: "David Howard",
    role: "Software Engineer",
    content: ["Since joining Audrey in 2020 as a Junior Developer and progressing to a Mid-Level Developer, she has consistently demonstrated exceptional technical expertise, problem-solving skills, and a commitment to delivering high-quality solutions. Throughout her tenure, Audrey has continuously expanded her skill set, streamlining workflows and enhancing team efficiency. Her strong UI/UX skills ensure that every implementation meets business requirements while delivering a high standard of usability and design. She has repeatedly proven her ability to deliver projects on time, collaborate effectively, and elevate those around her.",
"Having worked in both hybrid and remote environments, Audrey is a highly reliable and resourceful developer, always ready to provide technical support and guidance when needed. Any organization fortunate enough to hire Audrey can do so with complete confidence, knowing she will bring technical excellence, strong problem-solving abilities, and a proactive approach to any development team. I have no doubt that she will excel in her next position and continue to make a meaningful impact wherever she goes."
]
  },
  {
    name: "Joshua Harrell",
    role: "Senior Software Architect",
    content: ["Audrey specialized in creating and enhancing user interfaces and experiences using technologies such as C#, Blazor (both server-side and WebAssembly), CSS/SASS, Javascript/JQuery, and Bootstrap. She played a key role in the development of several applications that have been central to our clients’ success. Audrey's expertise in UI design, combined with a deep understanding of user experience principles, allowed her to create intuitive and user-friendly interfaces that were integral to the overall success of these projects. In addition to her UI expertise, Audrey has extensive experience working with service-oriented architectures implemented using both WebAPIs and WCF Services. Audrey is also very familiar with SQL, Entity Framework, and several reporting tools including Telerik Reports and Crystal Reports.",
        "Audrey is an incredibly reliable, independent, and hard-working developer. She consistently delivered high-quality work on time and demonstrated great attention to detail, particularly in the development of UI components that adhered to both design specifications and usability best practices. She was able to balance both technical and design considerations to ensure that the end-product was not only functional but also pleasant to use.",
        "Audrey was also an excellent team player. She always displayed great communication skills, professionalism, and a willingness to share knowledge. Audrey was also able to work independently with minimal supervision, and in our hybrid work environment, she proved to be highly effective, meeting deadlines and exceeding expectations on a regular basis.",
        "I have no doubt that Audrey will be an asset to any team. She has a rare combination of technical skills, design expertise, and a strong work ethic that would make her a valuable addition to any company."
        ],
  },
  {
    name: "Russell Pate",
    role: "Senior Project Manager",
    content: [ "I was Audrey’s manager while she worked at Bright Idea Technology Solutions. During that time, I've found Audrey to be a reliable, intelligent, and extremely competent developer. On a recent project Audrey was assigned the role of UX Designer and not only developed a subset of the UI components for a suite of applications but also code reviewed the UI development tasks of the rest of the team to ensure consistency and compliance with design standards.",
        "Audrey has shown the ability to work both independently and in a team environment. During the COVID lock down Audrey worked remotely 100% and completed all of her tasks on time and to specification. For the past 3 years we have worked in a hybrid environment. While in the office Audrey worked successfully in a team environment and was respected and liked by all of her coworkers.",
        "I would have no hesitation in hiring Audrey and am confident that she will be a highly regarded employee where ever she works."
    ]
  },
  {
    name: "Marcus Bolden",
    role: "Senior Software Engineer",
    content: ["I had the pleasure of working closely with Audrey on multiple projects, who served as both a Full-Stack Engineer and UX Lead. Audrey’s technical expertise, user-centered design approach, and organization always stood out. She has a rare ability to seamlessly integrate clean, efficient code with intuitive user experiences.",
        "Audrey is a proactive communicator and always goes the extra mile to ensure her work aligns with both technical and user goals. Her collaborative nature and passion for quality make her an invaluable team member. She is very kind and capable of getting along with anyone she works with. I highly recommend Audrey for any role that requires strong technical skills and a deep understanding of user experience.",
    ]
  }
];

const Recommendations = () => {
  return (
    <Box as="section" py={20} bg="blackAlpha.400">
      <Container maxW="7xl">
        <VStack spacing={12}>
          <VStack spacing={4}>  {/* Added wrapper VStack for heading group */}
            <Heading 
              as="h2"
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
              color="white"
              textAlign="center"
            >
              What The People Are Saying
            </Heading>
            <Text
              color="whiteAlpha.700"
              fontSize={{ base: "sm", md: "md" }}
              fontStyle="italic"
              textAlign="center"
            >
              I promise these are not sponsored or paid for
            </Text>
          </VStack>

          <VStack spacing={12} w="100%">
            {recommendations.map((recommendation, index) => (
              <Flex
                key={index}
                w="100%"
                direction={{ base: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' }}
                gap={8}
                align="center"
              >
                {/* Content Box */}
                <Box
                  flex="2"
                  bg="rgba(255, 255, 255, 0.05)"
                  p={8}
                  borderRadius="lg"
                  position="relative"
                  transition="all 0.3s"
                  _hover={{
                    transform: "translateY(-5px)",
                    bg: "rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <Icon
                    as={FaQuoteLeft}
                    color="#646cff"
                    w={8}
                    h={8}
                    position="absolute"
                    top={4}
                    left={4}
                    opacity={0.4}
                  />
                  
                  <VStack spacing={4} align="stretch">
                    {recommendation.content.map((paragraph, pIndex) => (
                      <Text
                        key={pIndex}
                        color="whiteAlpha.900"
                        fontSize="xs"
                        lineHeight="tall"
                        pt={pIndex === 0 ? 8 : 2}
                      >
                        {pIndex === 0 ? '"' : ''}{paragraph}{pIndex === recommendation.content.length - 1 ? '"' : ''}
                      </Text>
                    ))}
                  </VStack>
                </Box>

                {/* Name and Role Box */}
                <VStack
                  flex="1"
                  spacing={2}
                  align={{ base: "center", md: index % 2 === 0 ? "start" : "end" }}
                  textAlign={{ base: "center", md: index % 2 === 0 ? "left" : "right" }}
                >
                  <Text
                    color="white"
                    fontWeight="bold"
                    fontSize="2xl"
                  >
                    {recommendation.name}
                  </Text>
                  <Text
                    color="#646cff"
                    fontSize="lg"
                  >
                    {recommendation.role}
                  </Text>
                </VStack>
              </Flex>
            ))}
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Recommendations;