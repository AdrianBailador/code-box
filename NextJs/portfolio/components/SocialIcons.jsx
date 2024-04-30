import {FaInstagram, FaTwitter, FaYoutube, FaGithub, FaTiktok} from 'react-icons/fa';
import Link from 'next/link';

const socialnetworks = [
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/tu_usuario',
        icon: <FaInstagram size={24}/>,
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/tu_usuario',
        icon: <FaTwitter size={24}/>,
    },
    {
        name: 'YouTube',
        url: 'https://www.youtube.com/c/tu_usuario',
        icon: <FaYoutube size={24}/>,
    },
    {
        name: 'GitHub',
        url: 'http://github.com',
        icon: <FaGithub size={24}/>
    },
]

const SocialIcons = () => {
    return (
        <div style={{display: 'flex', gap: '1rem'}}>
            {
                socialnetworks.map((networkS) => (
                    <Link
                        className={networkS.name}
                        href={networkS.url} key={networkS.name}
                        target="_blank"
                    >
                        {networkS.icon}
                    </Link>
                ))
            }
        </div>
    );
};

export default SocialIcons;
