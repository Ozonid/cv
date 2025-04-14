import { Box, Flex, Icon, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { RiFlashlightFill } from 'react-icons/ri';

import { Experience } from './experience';

export const ExperienceBlock = ({ data, noBorder }: { data: Experience; noBorder: boolean }) => {
    return (
        <Box borderBottom={noBorder ? undefined : '1px dotted black'} pb={3}>
            <Text>
                <Link href={data.url} fontWeight="bold" color="teal.500" target="_blank" width="fit-content">
                    {data.company}
                </Link>{' '}
                <Text as="span">{data.description}</Text>
            </Text>

            <Text fontSize="sm" color="gray.800" fontStyle="italic">
                {data.title} [{data.from} - {data.to}]
            </Text>

            <Box pl={2} my={1}>
                <UnorderedList pl={4} fontSize="xs">
                    {data.projects.map((project, idx) => (
                        <ListItem key={idx}>
                            <Text>{project}</Text>
                        </ListItem>
                    ))}
                </UnorderedList>
            </Box>

            <Flex gap={1} alignItems="center">
                <Icon as={RiFlashlightFill} />

                <Text fontSize="xs" fontWeight="bold">
                    {data.technologies.join(', ')}
                </Text>
            </Flex>
        </Box>
    );
};
