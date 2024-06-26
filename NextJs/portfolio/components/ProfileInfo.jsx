// ProfileInfo.jsx
import SocialIcons from './SocialIcons';
import ProfileImage from "@/components/ProfileImage";

const ProfileInfo = () => {
    return (
        <div className={'w-full flex items-center justify-start mt-5'} >
            <div className={"flex items-center justify-center flex-wrap gap-2"}>
                <div className={"border-[3px] border-primary p-1.5 mr-4 rounded-full w-[125px] xl:h-[125px]"} style={{ borderRadius: '50%', overflow: 'hidden' }}>
                    <ProfileImage url={'/images/foto.png'} title={'My profile picture'} width={'120'} height={'120'} />
                </div>
                <div className={'profile-info flex flex-col gap-2 text-center md:text-left'}>
                    <div className="info">
                        <h1 className={'text-2xl lg:text-3xl xl:text-4xl text-card-foreground'}>Victor Alvarado</h1>
                        <p className={'italic text-muted-foreground'}>Software Engineer & FullStack Developer</p>
                    </div>
                    <SocialIcons/>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
