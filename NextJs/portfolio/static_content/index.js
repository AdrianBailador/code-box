import {RiGithubFill, RiInstagramFill, RiTwitterFill, RiYoutubeFill} from "@remixicon/react";


export const navigation = [
    {
        id: "0",
        title: "Home",
        url: "/",
    },
    {
        id: "1",
        title: "Projects",
        url: "/projects",
    },
    {
        id: "3",
        title: "Education",
        url: "/education",
        onlyMobile: false,
    },
    {
        id: "4",
        title: "Blog",
        url: "#",
        onlyMobile: false,
    },
];

export const socialNetworks = [
    {
        id: "0",
        name: 'Instagram',
        url: 'https://www.instagram.com/tu_usuario',
        icon: <RiInstagramFill size={24}/>,
    },
    {
        id: "1",
        name: 'Twitter',
        url: 'https://twitter.com/tu_usuario',
        icon: <RiTwitterFill size={24}/>,
    },
    {
        id: "2",
        name: 'YouTube',
        url: 'https://www.youtube.com/c/tu_usuario',
        icon: <RiYoutubeFill size={24}/>,
    },
    {
        id: "3",
        name: 'GitHub',
        url: 'http://github.com',
        icon: <RiGithubFill size={24}/>
    },
];

export const projects = [
    {
        id: "0",
        slug: "file_sharing_app_concept",
        title: "File Sharing App Concept",
        description: "A file sharing app concept that allows users to share files with other users. The app is designed to be simple and easy to use. Users can upload files, create folders, and share files with other users. " +
            "The app also has a built-in chat feature that allows users to communicate with each other. The app is " +
            "designed to be responsive and works on all devices. The app is built using React, Node.js, and MongoDB.",
        imageUrl: "/images/file_sharing.jpeg",
        url: '',
        categories: ["mobile", "ui design"]
    },
    {
        id: "1",
        slug: "nft_marketplace_concept",
        title: "NFT Marketplace Concept",
        description: "A concept for an NFT marketplace that allows users to buy and sell NFTs. The marketplace is " +
            "designed to be simple and easy to use. Users can browse NFTs, view details about each NFT, and purchase " +
            "NFTs using cryptocurrency. The marketplace also has a built-in wallet feature that allows users to store " +
            "their NFTs securely. The marketplace is designed to be responsive and works on all devices. The marketplace " +
            "is built using React, Node.js, and Ethereum.",
        imageUrl: "/images/ntf_concept.jpeg",
        url: '',
        categories: ["web", "ui design", "nft", "blockchain"]
    },
    {
        id: "2",
        slug: "fitness_app_concept",
        title: "Fitness App Concept",
        description: "A fitness app concept that allows users to track their workouts, set fitness goals, and monitor " +
            "their progress. The app is designed to be simple and easy to use. Users can create custom workout plans, " +
            "track their workouts, and view their progress over time. The app also has a built-in social feature that " +
            "allows users to connect with other users and share their progress. The app is designed to be responsive and " +
            "works on all devices. The app is built using React Native, Node.js, and MongoDB.",
        imageUrl: '/images/fitness_concept.jpeg',
        url: '',
        categories: ["mobile", "ui design", "web"]
    },
    {
        id: "3",
        slug: "suhsi_app_concept",
        title: 'Suhsi App Concept',
        description: "A sushi ordering app concept that allows users to order sushi from their favorite restaurants. " +
            "The app is designed to be simple and easy to use. Users can browse sushi menus, place orders, and pay for " +
            "their orders using the app. The app also has a built-in loyalty program that rewards users for ordering " +
            "sushi. The app is designed to be responsive and works on all devices. The app is built using React Native, " +
            "Node.js, and MongoDB.",
        imageUrl: "/images/sushi_app_concept.jpeg",
        url: '',
        categories: ["mobile", "ui design", "food"]
    },
    {
        id: "4",
        slug: "task_manager_concept",
        title: 'Takes Manager Concept',
        description: "A task manager app concept that allows users to create tasks, set deadlines, and track their " +
            "progress. The app is designed to be simple and easy to use. Users can create tasks, set deadlines, and " +
            "mark tasks as complete. The app also has a built-in calendar feature that allows users to view their tasks " +
            "by date. The app is designed to be responsive and works on all devices. The app is built using React, Node.js, " +
            "and MongoDB.",
        imageUrl: '/images/task_manager_concept.jpeg',
        url: '',
        categories: ["web", "ui design", "development"]
    },
    {
        id: "5",
        slug: "finance_app_concept",
        title: 'Financial App Concept',
        description: "A financial app concept that allows users to track their expenses, set budgets, and manage their " +
            "finances. The app is designed to be simple and easy to use. Users can add expenses, set budgets, and view " +
            "reports of their spending. The app also has a built-in notification feature that alerts users when they " +
            "exceed their budget. The app is designed to be responsive and works on all devices. The app is built using " +
            "React, Node.js, and MongoDB.",
        imageUrl: "/images/finance_app_concept.jpeg",
        url: '',
        categories: ["web", "ui design"]
    },

];

export const personalDescription = {
    id: '0',
    description: 'Hola, Soy Adrian, Ingeniero Software, aprendiendo NEXT.JS, impartido por mi maestro Victor',
  };

  export const workExperience = [
    {
        id: '0',
      startdate: '2000',
      endDate: '2001',
      currentJob: true,
      company: 'Microsoft',
      country: 'US',
      title: 'Backend Dev',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      items: ['Dotnet', 'Microservicios', 'BBDD'],
    },
    {
        id: '1',
      startdate: '2002',
      endDate: '2007',
      currentJob: false,
      company: 'Google',
      country: 'US',
      title: 'Front Dev',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      items: ['Dotnet', 'Microservicios'],
    },
  ];

  export const education = [
    {
      id: '0',
      startdate: '2002',
      endDate: '2007',
      currentUni: false,
      title: 'Ingenieria de Software',
      university: 'Universidad de Valladolid',
      country: 'Spain',
    },
    {
        id: '1',
        startdate: '2006',
        endDate: '2009',
        currentUni: false,
        title: 'Ingenieria Mobile',
        university: 'Universidad de Salamanca',
        country: 'Spain',
      },
  ];

  export const hardSkills = [
    {
      id: '0',
      imageUrl: '/html5.png',
      name: 'html',
      description: '30 projects',
    },
    {
        id: '1',
        imageUrl: '/js.png',
        name: 'Javascript',
        description: '10 projects',
      },
      {
        id: '2',
        imageUrl: '/react.png',
        name: 'React js',
        description: '35 projects',
      },
      {
        id: '3',
        imageUrl: '/Logotemp.png',
        name: 'Next js',
        description: '5 projects',
      },
    ];

      export const softSkills = [
        {
          id: '0',
          description: 'Fast Learning',
        },
        {
            id: '1',
            description: 'Creative thinking',
          },
          {
            id: '2',
            description: 'Team Work',
          },
          {
            id: '3',
            description: 'Empathy',
          },
          {
            id: '4',
            description: 'Problem Resolution',
          },
          {
            id: '5',
            description: 'Time Management',
          },
  ];

