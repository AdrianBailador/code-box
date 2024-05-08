import {FaGithub, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";

export const navigation = [
    {
        id: "0",
        title: "Home",
        url: "/",
    },
    {
        id: "1",
        title: "Experience",
        url: "#",
    },
    {
        id: "3",
        title: "Education",
        url: "#",
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
        icon: <FaInstagram size={24}/>,
    },
    {
        id: "1",
        name: 'Twitter',
        url: 'https://twitter.com/tu_usuario',
        icon: <FaTwitter size={24}/>,
    },
    {
        id: "2",
        name: 'YouTube',
        url: 'https://www.youtube.com/c/tu_usuario',
        icon: <FaYoutube size={24}/>,
    },
    {
        id: "3",
        name: 'GitHub',
        url: 'http://github.com',
        icon: <FaGithub size={24}/>
    },
];

export const projects = [
    {
        slug: 'proyecto-1',
        title: 'Proyecto 1',
        description: 'Descripción del Proyecto 1',
        imageUrl: '/Logotemp.png',
    },
    {
        slug: 'proyecto-2',
        title: 'Proyecto 2',
        description: 'Descripción del Proyecto 2',
        imageUrl: '/Logotemp.png',
    },
    {
        slug: 'proyecto-3',
        title: 'Proyecto 3',
        description: 'Descripción del Proyecto 1',
        imageUrl: '/Logotemp.png',
    },
    {
        slug: 'proyecto-4',
        title: 'Proyecto 4',
        description: 'Descripción del Proyecto 2',
        imageUrl: '/Logotemp.png',
    },
    {
        slug: 'proyecto-5',
        title: 'Proyecto 5',
        description: 'Descripción del Proyecto 1',
        imageUrl: '/Logotemp.png',
    },
    {
        slug: 'proyecto-6',
        title: 'Proyecto 6',
        description: 'Descripción del Proyecto 2',
        imageUrl: '/Logotemp.png',
    },

];

export const personalDescription = {  
    id: '0',  
    description: 'Hola, Soy Adrian, Ingeniero Software, aprendiendo NEXT.JS, impartido por mi maestro Victor',
  };
  
  export const workExperience = [
    {
        id: '0',
      imageUrl: '/Logotemp.png',
      name: 'Microsoft',
      description: 'Desarrollador Web',
      items: ['Dotnet', 'Microservicios', 'BBDD'],
    },
  ];
  
  export const education = [
    {
      id: '0',
      imageUrl: '/Logotemp.png',
      name: 'Ingenieria de Software',
      description: 'Universidad de Valladolid',
      items: ['Java', 'SQL', 'Arquitectura'],
    },
  ];
  
  export const skills = [
    {
      id: '0',  
      imageUrl: '/Logotemp.png',
      name: 'Dotnet',
      description: '',
    },
    {
        id: '1',  
        imageUrl: '/Logotemp.png',
        name: 'Javascript',
        description: '',
      },
      {
        id: '2',  
        imageUrl: '/Logotemp.png',
        name: 'Next js',
        description: '',
      },
  ];
  
  