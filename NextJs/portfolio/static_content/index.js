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
        title: 'Proyecto 1',
        description: 'Descripción del Proyecto 1',
        imageUrl: '/Logotemp.png',
    },
    {
        title: 'Proyecto 2',
        description: 'Descripción del Proyecto 2',
        imageUrl: '/Logotemp.png',
    },
    {
        title: 'Proyecto 3',
        description: 'Descripción del Proyecto 1',
        imageUrl: '/Logotemp.png',
    },
    {
        title: 'Proyecto 4',
        description: 'Descripción del Proyecto 2',
        imageUrl: '/Logotemp.png',
    },
    {
        title: 'Proyecto 5',
        description: 'Descripción del Proyecto 1',
        imageUrl: '/Logotemp.png',
    },
    {
        title: 'Proyecto 6',
        description: 'Descripción del Proyecto 2',
        imageUrl: '/Logotemp.png',
    },

];