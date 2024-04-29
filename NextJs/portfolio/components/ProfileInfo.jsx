// ProfileInfo.jsx
import Image from 'next/image';
import SocialIcons from './SocialIcons';


const ProfileInfo = () => {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      marginTop: '1cm'
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ borderRadius: '50%', overflow: 'hidden', marginRight: '1rem' }}>
          <Image src="/foto.png" 
          alt="Foto de perfil" 
          width={100} 
          height={100} />
        </div>
        <div>
          <h2>Victor and Adri</h2>
          <p>FullStack Developer</p>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
