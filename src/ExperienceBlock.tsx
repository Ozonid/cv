import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    Icon,
    Link,
    ListItem,
    Stack,
    Text,
    UnorderedList,
} from '@chakra-ui/react';
import { RiFlashlightFill } from 'react-icons/ri';

import { Experience } from './experience';

export const ExperienceBlock = ({ data }: { data: Experience }) => {
    return (
        <Card>
            <CardHeader py={3} background="whiteAlpha.50">
                <Stack gap={0}>
                    <Link href={data.url} fontWeight="bold" color="teal.200" target="_blank" width="fit-content">
                        {data.company} - {data.title}
                    </Link>
                    <Text fontSize="small" color="gray.400">
                        {data.from} - {data.to}
                    </Text>
                </Stack>
            </CardHeader>

            <CardBody>
                <Accordion allowToggle>
                    <AccordionItem border={0}>
                        <AccordionButton p={0}>
                            <Box as="span" flex="1" textAlign="left">
                                {data.description}
                            </Box>

                            <Button
                                size="xs"
                                colorScheme=""
                                variant="outline"
                                fontWeight="regular"
                                rightIcon={<AccordionIcon />}
                            >
                                projects
                            </Button>
                        </AccordionButton>

                        <AccordionPanel p={0} pt={4}>
                            <Stack gap={0}>
                                <UnorderedList pl={4} fontSize="small">
                                    {data.projects.map((project, idx) => (
                                        <ListItem key={idx} mb={2}>
                                            <Text>{project}</Text>
                                        </ListItem>
                                    ))}
                                </UnorderedList>
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </CardBody>

            {
                <CardFooter background="whiteAlpha.50">
                    <Stack gap={0}>
                        <Flex align="center" gap={1}>
                            <Icon as={RiFlashlightFill} />
                            <Text textDecor="underline">Key technologies</Text>
                        </Flex>
                        <Text fontSize="small" fontWeight="bold">
                            {data.technologies.join(', ')}
                        </Text>
                    </Stack>
                </CardFooter>
            }
        </Card>
    );
};
