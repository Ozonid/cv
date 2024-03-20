import { Card, CardBody, Flex, Heading, Icon, Link, Stack, Text } from '@chakra-ui/react';
import { RiChatVoiceFill, RiCodeBoxFill, RiGithubFill, RiLinkedinBoxFill, RiMailFill } from 'react-icons/ri';

export const App = () => {
    return (
        <Stack width="80%" marginX="auto" maxWidth="1000px" py={6} gap={6}>
            <Flex justifyContent="space-between">
                <Stack gap={0}>
                    <Heading textTransform="uppercase">Kiss Dávid</Heading>
                    <Flex alignItems="center" gap={1} color="gray.700">
                        <Icon as={RiCodeBoxFill} />
                        <Text>Frontend Developer | Full-Stack (Node.js, React)</Text>
                    </Flex>
                    <Flex alignItems="center" gap={1} color="gray.700">
                        <Icon as={RiChatVoiceFill} />
                        <Text>Fluent in English and Hungarian</Text>
                    </Flex>
                </Stack>

                <Stack gap={0} justifyContent="space-between">
                    <Flex alignItems="center" gap={1} color="gray.700">
                        <Icon as={RiLinkedinBoxFill} />
                        <Link target="_blank" href="https://www.linkedin.com/in/david-k-858702a2/">
                            linkedin.com/in/david-k-858702a2/
                        </Link>
                    </Flex>
                    <Flex alignItems="center" gap={1} color="gray.700">
                        <Icon as={RiGithubFill} />
                        <Link target="_blank" href="https://github.com/Ozonid">
                            github.com/Ozonid
                        </Link>
                    </Flex>
                    <Flex alignItems="center" gap={1} color="gray.700">
                        <Icon as={RiMailFill} />
                        <Text>kissd1990@gmail.com</Text>
                    </Flex>
                </Stack>
            </Flex>

            <Card>
                <CardBody background="gray.100">
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
        </Stack>
    );
};

// KEY PROJECTS
// Zinema was basically an IMDB for Bollywood with built-in movie listings and cinema finders for India. The scope of the project was creating an admin site for managing various resources and a backend to support that. We also had to crawl various sites and databases for movies and listing from provided sites.
// Angular.js, HTML, CSS, Express, MySQL
// Second Screen was a companion app for major TV channels’ morning and talk shows. Viewers were presented with real-time polls and additional information via the app. We were responsible for developing an admin site to manage the content sent during these shows with an interactive UI. We also created the backend for it and we had to make sure it can handle the load under multiple ongoing live votes.
// Angular.js, HTML, CSS, Express, MySQL, Redis
// Farmhedge is an app for Irish farmers funded by the University of Limerick. The registered agricultural providers were able to create deals that would show up in the app and farmers could organize batch orders. This way they were able to save money on fertilizers, feeds, medicine etc. and made the demand more manageable and predictable for providers. The app would also provide useful hints and tips for farmers based on present and historical weather conditions. The project was an end-to-end solution, it included developing an admin site, a suitable backend and a hybrid mobile app that could be deployed to both android and iOS devices.
// Ionic, Angular.js, HTML, CSS, Express, MongoDB
// Emarsys is one of the biggest marketing platforms used by many companies around the world. We helped them on multiple occasions develop new features or improve existing ones. I took part in two of those projects.
// The first one was about giving clients an automated guide setting up their DNS configuration for email sending that took weeks before introducing the tool.
// The other one was the email template selector that cut the onboarding process of new customers by a sizable amount by providing the possibility to select and customize a starter template for their email campaigns. I was working on the frontend application in both cases.
// Angular.js, HTML, CSS, Koa
// Concaria was a demo application for LogMeIn’s IoT cloud platform called Xively (acquired by Google later). The app was a simulation showing how controlling and maintaining smart devices (eg. industrial air purifier, smart jacket) connected to the platform would work. The project scope was to improve the existing codebase (we ended up with a complete overhaul) and adding new features to handle real-time events coming from the simulator backend.
// Angular.js, HTML, LESS, Express, Socket.io
// Trace by RisingStack was a SaaS monitoring solution that specialized on Node.js and Microservices Monitoring. It was entirely planned and developed within RisingStack from early 2015 to late 2017, until it was acquired by Keymetrics. My main responsibility was developing the UI to ensure that data arriving from multiple microservices were displayed in the most useful and understandable way while showing multiple parameters of the system and making customization of different features intuitive.
// Angular.js, React, HTML, LESS, Koa, Redis, PostgreSQL, Kubernetes
// SureFire is a mortgage CRM application from an Atlanta-based company called TopOfMind. Apart from refactoring and implementing missing functionalities, my main task was to improve the user experience with handling large forms and tables.
// Angular.js, HTML, CSS
// Jumio is one of the leading identity verification providers.
// My first project was to create the UI part of the latest version of their web application netwerify web 4.0, making it compatible with most browsers while maintaining responsiveness of the site.
// The second assignment was to reimplement their obsolete admin site in a modern framework. The admin had both back office functionality and client facing parts so it was quite a challenge to provide a streamlined UI solution while maintaining support for the various use cases of different permission levels.
// Angular 4+, HTML, SCSS
// Message Broadcast provides cross channel interactions with customers by allowing businesses to send high volumes of email, sms and voice messages. Our job was to rewrite their existing infrastructure using modern frameworks and techniques. The project included creating multiple microservices with various underlying databases, worker processes and an admin interface.
// React+MobX, HTML, SCSS, Express, MongoDB, MySQL, Redis
// Bitrise is a mobile-first CI/CD platform.
// As the company just started migrating the old Angular codebase to React when I joined, I took part in defining a migration path and also owned this project at some point. As a member of one of the product teams I spent most of my time working on the new and legacy frontend codebase and on the monolithic Ruby application. I also took part in organizing internal React workshops and “standard setting” meetings.
// React, Typescript, Angular 6+, Angular.js, HTML, CSS, Ruby+Rails
// greehill is a work in progress greenery management and city planning tool
// After finishing its pilot project with Singapore, the company decided to focus its attention on developing its own product. As one of the two full stack engineers working on the project my main focus was to plan and implement a demo UI with as much “wow factor” as possible while also hitting really strict deadlines. During development we had to tackle some peculiar problems like managing different map projections, 2D map handling with lots of data points and 3D rendering.
// React, Mapbox, Three.js, CSS modules, Fastify, Potgres, PostGIS

// EDUCATION

// 2009-14 Budapest University of Technology and Economics,
//                 Chemical Engineering - Polymer Technology BSc (terminated)

// EMPLOYMENT HISTORY

// 2022-             Senior Software Developer at NDVR
// 2021 - 2021  Full Stack Developer at greehill
// 2020 - 2021  Frontend Developer at Bitrise
// 2019 - 2020  Full Stack Developer at RisingStack
// 2017 - 2019  Frontend Developer at Sonrisa International Inc.
// 2015 - 2017  Full Stack Developer at RisingStack
