export interface Experience {
    company: string;
    url: string;
    title: string;
    from: string;
    to?: string;
    description: string;
    projects: string[];
    technologies: string[];
}

export const experience: Experience[] = [
    {
        company: 'Raiqon',
        url: 'https://raiqon.com/',
        title: 'Senior Frontend Engineer',
        from: '07.2024',
        description: 'provides AI based solutions for automotive clients',
        projects: [
            `I am responsible for the development of various UI tools and widgets that seamlessly extend our clients' ALM platform based on (sometimes vague) requirements.
            I have to ensure that our features are presented in a clear and concise way, the data-rich interfaces are easy to understand and provide meaningful help for users,
            and the complicated flows and processes are intuitive to use.`,
            `My other project is a PDF converter UI that allows users to convert uploaded PDF documents to ReqIF format that can be imported into various tools to speed up data ingestion.
            To limit the ambiguity of the transformation, the platform provides a way for users to review, change and approve annotations provided by our ML pipeline.`,
        ],
        technologies: ['React', 'TypeScript', 'TanStack', 'Chakra UI', 'Vite', 'jQuery'],
    },
    {
        company: 'NDVR',
        url: 'https://ndvr.com/',
        title: 'Senior Frontend Engineer',
        from: '02.2022',
        to: '03.2024',
        description: 'is a wealth management company that builds and manages custom portfolios',
        projects: [
            `In the UI team my main projects were creating an onboarding wizard to ease data collection process for customers, and taking over, fully refactoring and extending the features of the advisory tool.`,

            `In the portfolio management team I was responsible for the creation of a brand new UI for the underlying trading and reporting infrastructure.
            I worked closely with a team of quant engineers to build a highly customizable, all-in-one application for our portfolio managers,
            to allow easy access to our reporting data and make scaling our trading operations a possibility with various tools.`,
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
        description: 'is a digital greenery management and city planning tool',
        projects: [
            `As the product was in its very early stage, my job was to create a functioning MVP that delivered as much “wow factor” as possible while also hitting really strict deadlines.
            During development we had to tackle some peculiar problems like managing different map projections, 2D map handling with numerous data points and 3D rendering.`,
        ],
        technologies: ['React', 'Mapbox', 'Three.js', 'CSS modules', 'Node.js', 'Fastify', 'PostgreSQL', 'PostGIS'],
    },
    {
        company: 'Bitrise',
        url: 'https://bitrise.io/',
        title: 'Frontend Developer',
        from: '04.2020',
        to: '06.2021',
        description: 'is a mobile-first CI/CD platform',
        projects: [
            `As the company just started migrating the old Angular codebase to React when I joined, I took part in defining a migration path and also owned this project at some point.
            I also took part in organizing internal React workshops and “standard setting” meetings.`,
            'As a member of one of the product teams I spent most of my time working on the workflow editor tool and the pipelines UI.',
        ],
        technologies: ['React', 'TypeScript', 'Angular 6+', 'Angular.js', 'HTML/CSS', 'Ruby+Rails', 'Heroku'],
    },
    {
        company: 'RisingStack',
        url: 'https://risingstack.com/',
        title: 'Full-Stack Developer',
        from: '05.2019',
        to: '04.2020',
        description: 'is a Node.js consulting & development company',
        projects: [
            'Message Broadcast sends high volumes of email, sms and voice messages. Our job was to rewrite their existing infrastructure using modern frameworks and techniques.',
        ],
        technologies: ['React+MobX', 'HTML/SCSS', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'Redis'],
    },
    {
        company: 'Sonrisa Technologies',
        url: 'https://www.sonrisa.hu/',
        title: 'Frontend Developer',
        from: '08.2017',
        to: '05.2019',
        description: 'is a software development agency',
        projects: [
            `"Consultant Tool" was an app for MLM company associates. I was part of a small team designing and developing a prototype app.`,
            'At Jumio I helped with the migration of their "netwerify web" application and its back-office admin tool to Angular 4+.',
        ],
        technologies: ['Angular 4+', 'HTML/SCSS'],
    },
    {
        company: 'RisingStack',
        url: 'https://risingstack.com/',
        title: 'Full-Stack Developer',
        from: '02.2015',
        to: '08.2017',
        description: 'is a Node.js consulting & development company',
        projects: [
            `Trace by RisingStack was a Node.js microservice monitoring tool. I was responsible for displaying various metrics in a user-friendly way while making the customization of our features intuitive`,
            'Various consultancy and development projects',
        ],
        technologies: [
            'Node.js',
            'Angular.js',
            'HTML/CSS/SCSS/LESS',
            'Express',
            'Koa',
            'Hapi',
            'Socket.io',
            'MongoDB',
            'MySQL',
            'Redis',
            'PostgreSQL',
            'Kubernetes',
        ],
    },
];
