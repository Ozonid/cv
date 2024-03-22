export interface Experience {
    company: string;
    url: string;
    title: string;
    from: string;
    to: string;
    description: string[];
    projects?: Project[];
    technologies?: string[];
}

export interface Project {
    description: string;
    technologies: string[];
}

export const experience: Experience[] = [
    {
        company: 'NDVR',
        url: 'https://ndvr.com/',
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
            'TanStack',
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
        url: 'https://www.greehill.com/',
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
        url: 'https://bitrise.io/',
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
        url: 'https://risingstack.com/',
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
        url: 'https://www.sonrisa.hu/',
        title: 'Frontend Developer',
        from: '08.2017',
        to: '05.2019',
        description: ['Sonrisa is a software development agency.'],
        projects: [
            {
                description: `"Consultant Tool" was a dedicated site for MLM company members to help them with sales opportunity suggestions. I was part of the
                    engineering team tasked to design the system and the product itself and helped to build the frontend of the prototype.`,
                technologies: ['Angular 4+', 'HTML/SCSS'],
            },
            {
                description:
                    'Jumio is one of the leading identity verification providers. I was supporting the migration of their "netwerify web" application and its back-office admin tool to Angular 4+.',
                technologies: ['Angular 4+', 'HTML/SCSS'],
            },
        ],
    },
    {
        company: 'RisingStack',
        url: 'https://risingstack.com/',
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
            {
                description: `Second Screen was a companion app for TV channels' morning shows to show live polls and additional information about the ongoing topics.
                My responsibility was putting together an admin site to manage and schedule the appearing content and results.`,
                technologies: ['Ionic', 'Angular.js', 'HTML/CSS', 'Express', 'MongoDB'],
            },
            {
                description: `Zinema was an IMDB equivalent for Bollywood movies. We created a backend capable of scraping data from different sources
                and an admin site to manage movie data and theater listings.`,
                technologies: ['Ionic', 'Angular.js', 'HTML/CSS', 'Express', 'MongoDB'],
            },
        ],
    },
];
