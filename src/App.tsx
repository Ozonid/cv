import {
    Card,
    CardBody,
    CardHeader,
    Flex,
    Heading,
    Icon,
    Link,
    ListItem,
    Stack,
    StackDivider,
    Text,
    UnorderedList,
} from '@chakra-ui/react';
import {
    RiBriefcase4Fill,
    RiChatVoiceFill,
    RiCodeBoxFill,
    RiFlashlightFill,
    RiGithubFill,
    RiLinkedinBoxFill,
    RiMailFill,
    RiSurveyFill,
} from 'react-icons/ri';

interface Experience {
    company: string;
    title: string;
    from: string;
    to: string;
    description: string[];
    projects?: Project[];
    technologies?: string[];
}

interface Project {
    description: string;
    technologies: string[];
}

const experience: Experience[] = [
    {
        company: 'NDVR',
        title: 'Senior Frontend Engineer',
        from: '02.2022',
        to: '03.2024',
        description: [
            'NDVR provides high net worth wealth management tools and advice for families looking to optimize their wealth.',

            `First I was a member of the general frontend team responsible for the client facing UI and a back-office tool for user and household management.
            My main projects were creating an onboarding wizard to ease data collection process for customers, improving the general quality of the website codebase
            and taking over, fully refactoring and extending the features of the advisory tool.`,

            `For the last 9 months I joined the portfolio management team responsible for the underlying trading and reporting infrastructure that was lacking any kind of UI at the time.
            My responsibility was to work closely with the quant engineers to build up a highly customizable, all-in-one application for our portfolio managers,
            to allow easy access to our existing reporting and historical data via multiple complex listing pages and a custom widget system (for securities, portfolios, trades, pricing, positions etc.)
            and make scaling our trading operations a possibility with various tools (optimizer, trade blotter, bond calculator).`,
        ],
        technologies: [
            'React',
            'TypeScript',
            'Redux',
            'Chakra UI',
            'OpenAPI',
            'Python',
            'FastAPI',
            'AWS',
            'Kubernetes',
            'Apache Airflow',
            'Redshift',
        ],
    },
    {
        company: 'greehill',
        title: 'Full Stack Developer',
        from: '06.2021',
        to: '11.2021',
        description: [
            'greehill is a digital greenery management and city planning tool.',
            `After finishing its pilot project with Singapore, the company decided to focus its attention on developing its own product.
            As one of the two full stack engineers working on the project my main focus was to plan and implement a demo UI with as much “wow factor”
            as possible while also hitting really strict deadlines. During development we had to tackle some peculiar problems like managing different map projections, 2D map handling with lots of data points and 3D rendering.`,
        ],
        technologies: ['React', 'Mapbox', 'Three.js', 'CSS modules', 'Node.js', 'Fastify', 'PostgreSQL', 'PostGIS'],
    },
    {
        company: 'Bitrise',
        title: 'Frontend Developer',
        from: '04.2020',
        to: '06.2021',
        description: [
            'Bitrise is a mobile-first CI/CD platform.',
            `As the company just started migrating the old Angular codebase to React when I joined, I took part in defining a migration path and also owned this project at some point.
            As a member of one of the product teams I spent most of my time working on the new and legacy frontend codebase and on the monolithic Ruby application.
            I also took part in organizing internal React workshops and “standard setting” meetings.`,
        ],
        technologies: ['React', 'TypeScript', 'Angular 6+', 'Angular.js', 'HTML/CSS', 'Ruby+Rails', 'Heroku'],
    },
    {
        company: 'RisingStack',
        title: 'Full-Stack Developer',
        from: '05.2019',
        to: '04.2020',
        description: ['RisingStack is a Node.js Consulting & Development company.'],
        projects: [
            {
                description:
                    'Message Broadcast provides cross channel interactions with customers by allowing businesses to send high volumes of email, sms and voice messages. Our job was to rewrite their existing infrastructure using modern frameworks and techniques.',
                technologies: ['React+MobX', 'HTML/SCSS', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'Redis'],
            },
        ],
    },
    {
        company: 'Sonrisa Technologies',
        title: 'Frontend Developer',
        from: '08.2017',
        to: '05.2019',
        description: ['Sonrisa is a software development agency.'],
        projects: [
            {
                description:
                    'Jumio is one of the leading identity verification providers. I was supporting the migration of their "netwerify web" application and its back-office admin tool to Angular 4+.',
                technologies: ['Angular 4+', 'HTML/SCSS'],
            },
        ],
    },
    {
        company: 'RisingStack',
        title: 'Full-Stack Developer',
        from: '02.2015',
        to: '08.2017',
        description: ['RisingStack is a Node.js Consulting & Development company.'],
        projects: [
            {
                description:
                    'SureFire is a mortgage CRM application from an Atlanta-based company called TopOfMind. Apart from refactoring and implementing missing functionalities, my main task was to improve the user experience with handling large forms and tables.',
                technologies: ['Angular.js', 'HTML/SCSS'],
            },
            {
                description: `Trace by RisingStack was a SaaS monitoring solution that specialized on Node.js and Microservices Monitoring.
                I was responsible for displaying the various metrics in a user-friendly way while making the customization of various features intuitive`,
                technologies: ['Angular.js', 'React', 'HTML/LESS', 'Koa', 'Redis', 'PostgreSQL', 'Kubernetes'],
            },
            {
                description: `Concaria was a demo/simulator application for LogMeIn's IoT cloud platform called Xively.
                The project scope was to overhaul the existing codebase and to add new features to handle real-time events coming from the simulator backend.`,
                technologies: ['Angular.js', 'HTML/LESS', 'Express', 'Socket.io'],
            },
            {
                description:
                    'Emarsys is one of the biggest marketing platforms used by many companies around the world. I worked on a DNS/domain configurator and an email template creator tool.',
                technologies: ['Angular.js', 'HTML/CSS', 'Koa'],
            },
            {
                description: `Farmhedge is an app for Irish farmers funded by the University of Limerick focused on simplifying the purchase and distribution of farming goods.
                The project included developing an admin site, a suitable backend and a hybrid mobile app that could be deployed to both android and iOS devices.`,
                technologies: ['Ionic', 'Angular.js', 'HTML/CSS', 'Express', 'MongoDB'],
            },
        ],
    },
];

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
                    <Experience key={idx} data={data} />
                ))}
            </Stack>
        </Stack>
    );
};

const Experience = ({ data }: { data: Experience }) => {
    return (
        <Card>
            <CardHeader pb={0}>
                <Stack gap={0}>
                    <Text lineHeight={1} fontWeight="bold">
                        {data.company} - {data.title}
                    </Text>
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
                                <Text>Projects</Text>
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
                                <Text>Key technologies</Text>
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
