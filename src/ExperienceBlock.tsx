import { Box, Flex, Icon, Link, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react';
import { RiFlashlightFill } from 'react-icons/ri';

import { Experience } from './experience';

export const ExperienceBlock = ({ data, noBorder }: { data: Experience; noBorder: boolean }) => {
    return (
        <Stack gap={1} borderBottom={noBorder ? undefined : '1px dotted black'} pb={3}>
            <Flex gap={2} alignItems="center">
                <Link href={data.url} fontWeight="bold" color="teal.500" target="_blank" width="fit-content">
                    {data.company} - {data.title}
                </Link>
                <Text fontSize="small" color="gray.800">
                    [{data.from} - {data.to}]
                </Text>
            </Flex>

            <Box px={3}>
                <Stack gap={0}>
                    <UnorderedList pl={4} fontSize="small">
                        {data.projects.map((project, idx) => (
                            <ListItem key={idx}>
                                <Text>{project}</Text>
                            </ListItem>
                        ))}
                    </UnorderedList>
                </Stack>
            </Box>

            {
                <Flex gap={1} alignItems="center">
                    <Flex align="center" gap={1}>
                        <Icon as={RiFlashlightFill} />
                    </Flex>
                    <Text fontSize="small" fontWeight="bold">
                        {data.technologies.join(', ')}
                    </Text>
                </Flex>
            }
        </Stack>
    );
};
