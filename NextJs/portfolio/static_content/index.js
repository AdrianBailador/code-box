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
        id: "0",
        title: 'Proyecto 1',
        description: 'Descripción del Proyecto 1',
        imageUrl: '/p1.png',
        url: '',
        categories: ["mobile", "ui design"]
    },
    {
        id: "1",
        title: 'Proyecto 2',
        description: 'Descripción del Proyecto 2',
        imageUrl: '/p2.png',
        url: '',
        categories: ["web", "ui design"]
    },
    {
        id: "2",
        title: 'Proyecto 3',
        description: 'Descripción del Proyecto 1',
        imageUrl: '/p3.jpeg',
        url: '',
        categories: ["mobile", "ui design", "web"]
    },
    {
        id: "3",
        title: 'Proyecto 4',
        description: 'Descripción del Proyecto 2',
        imageUrl: '/p4.jpeg',
        url: '',
        categories: ["mobile", "ui design"]
    },
    {
        id: "4",
        title: 'Proyecto 5',
        description: 'Descripción del Proyecto 1',
        imageUrl: '/p5.jpeg',
        url: '',
        categories: ["web", "ui design"]
    },
    {
        id: "5",
        title: 'Proyecto 6',
        description: 'Descripción del Proyecto 2',
        imageUrl: '/p6.jpeg',
        url: '',
        categories: ["web", "ui design"]
    },

];