import Image from 'next/image';

const ProfileImage = ({url, title, width, height}) => {
    return (
        <Image src={url} alt={title} width={width} height={height}/>
    );
};

export default ProfileImage;