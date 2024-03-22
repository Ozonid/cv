import { Card, CardBody, Flex, Heading, Icon, Link, Stack, Text } from '@chakra-ui/react';
import {
    RiBriefcase4Fill,
    RiChatVoiceFill,
    RiCodeBoxFill,
    RiGithubFill,
    RiLinkedinBoxFill,
    RiMailFill,
} from 'react-icons/ri';

import { experience } from './experience';
import { ExperienceBlock } from './ExperienceBlock';

export const App = () => {
    return (
        <Stack width="80%" marginX="auto" maxWidth="1000px" py={6} gap={6}>
            <Flex justifyContent="space-between">
                <Stack gap={0}>
                    <Heading textTransform="uppercase">Dávid Kiss</Heading>
                    <Flex alignItems="center" gap={1} color="gray.400" fontSize="small">
                        <Icon as={RiCodeBoxFill} />
                        <Text>Frontend Developer | Full-Stack (Node.js, React)</Text>
                    </Flex>
                    <Flex alignItems="center" gap={1} color="gray.400" fontSize="small">
                        <Icon as={RiChatVoiceFill} />
                        <Text>Fluent in English and Hungarian</Text>
                    </Flex>
                </Stack>

                <Stack gap={0} justifyContent="space-around" fontSize="small">
                    <Flex alignItems="center" gap={1} color="gray.400">
                        <Icon as={RiLinkedinBoxFill} />
                        <Link target="_blank" href="https://www.linkedin.com/in/david-k-858702a2/">
                            linkedin.com/in/david-k-858702a2/
                        </Link>
                    </Flex>
                    <Flex alignItems="center" gap={1} color="gray.400">
                        <Icon as={RiGithubFill} />
                        <Link target="_blank" href="https://github.com/Ozonid">
                            github.com/Ozonid
                        </Link>
                    </Flex>
                    <Flex alignItems="center" gap={1} color="gray.400">
                        <Icon as={RiMailFill} />
                        <Text>kissd1990@gmail.com</Text>
                    </Flex>
                </Stack>
            </Flex>

            <Card>
                <CardBody>
                    <Text>
                        After spending 5 years at agencies I decided to move onto product development. With a strong
                        affinity towards the frontend, I take pride in delivering high quality solutions without
                        compromising the user experience. I'm not afraid to delve into unknown domains and technologies
                        and I'm always looking for new challanges and problems to solve. I work comfortably both in a
                        team and individually and I like to take an active part in improving the project(s) under my
                        ownership.
                    </Text>
                </CardBody>
            </Card>

            <Stack>
                <Flex alignItems="center" gap={1}>
                    <Icon as={RiBriefcase4Fill} />
                    <Text fontSize="large" fontWeight="medium">
                        Experience
                    </Text>
                </Flex>

                {experience.map((data, idx) => (
                    <ExperienceBlock key={idx} data={data} />
                ))}
            </Stack>
        </Stack>
    );
};
