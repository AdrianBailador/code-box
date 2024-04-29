import { FaInstagram, FaTwitter, FaYoutube, FaGithub, FaTiktok } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <a href="https://www.instagram.com/tu_usuario" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={24} />
      </a>
      <a href="https://twitter.com/tu_usuario" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={24} />
      </a>
      <a href="https://www.youtube.com/c/tu_usuario" target="_blank" rel="noopener noreferrer">
        <FaYoutube size={24} />
      </a>
      <a href="https://github.com/tu_usuario" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} />
      </a>
      <a href="https://www.tiktok.com/@tu_usuario" target="_blank" rel="noopener noreferrer">
        <FaTiktok size={24} />
      </a>
    </div>
  );
};

export default SocialIcons;
