// ProfileInfo.jsx
import SocialIcons from './SocialIcons';
import ProfileImage from "@/components/ProfileImage";
import ProfileActionButtons from "@/components/ProfileActionButtons";


const ProfileInfo = () => {
  return (
    <div className={'flex items-center justify-center mt-5'} >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ borderRadius: '50%', overflow: 'hidden', marginRight: '1rem' }}>
           <ProfileImage url={'/foto.png'} title={'My profile picture'} width={'100'} height={'100'} />
        </div>
        <div className={'profile-info flex flex-col gap-2'}>
          <div className="info">
            <h1 className={'text-2xl text-gray-700 font-bold'}>Victor and Adri</h1>
            <p className={'italic'}>FullStack Developer</p>
          </div>
          <SocialIcons/>
          
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
