import {
    Card,
    CardBody,
    CardHeader,
    Flex,
    Icon,
    Link,
    ListItem,
    Stack,
    StackDivider,
    Text,
    UnorderedList,
} from '@chakra-ui/react';
import { RiFlashlightFill, RiSurveyFill } from 'react-icons/ri';

import { Experience } from './experience';

export const ExperienceBlock = ({ data }: { data: Experience }) => {
    return (
        <Card>
            <CardHeader pb={0}>
                <Stack gap={0}>
                    <Link
                        href={data.url}
                        lineHeight={1}
                        fontWeight="bold"
                        color="teal.200"
                        target="_blank"
                        textDecor="underline"
                        width="fit-content"
                    >
                        {data.company} - {data.title}
                    </Link>
                    <Text fontSize="small" color="gray.400">
                        {data.from} - {data.to}
                    </Text>
                </Stack>
            </CardHeader>

            <CardBody>
                <Stack gap={6}>
                    <Stack divider={<StackDivider />}>
                        {data.description.map((chunk, idx) => (
                            <Text key={idx}>{chunk}</Text>
                        ))}
                    </Stack>

                    {data.projects && (
                        <Stack gap={0}>
                            <Flex align="center" gap={1}>
                                <Icon as={RiSurveyFill} />
                                <Text textDecor="underline">Projects</Text>
                            </Flex>
                            <UnorderedList pl={6} fontSize="small">
                                {data.projects.map(({ description, technologies }, idx) => (
                                    <ListItem key={idx} mb={2}>
                                        <Stack gap={0}>
                                            <Text>{description}</Text>
                                            <Text fontWeight="bold">{technologies.join(', ')}</Text>
                                        </Stack>
                                    </ListItem>
                                ))}
                            </UnorderedList>
                        </Stack>
                    )}

                    {data.technologies && (
                        <Stack gap={0}>
                            <Flex align="center" gap={1}>
                                <Icon as={RiFlashlightFill} />
                                <Text textDecor="underline">Key technologies</Text>
                            </Flex>
                            <Text fontSize="small" fontWeight="bold">
                                {data.technologies.join(', ')}
                            </Text>
                        </Stack>
                    )}
                </Stack>
            </CardBody>
        </Card>
    );
};
