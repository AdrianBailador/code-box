import Image from "next/image";

const ImageExample = ({path, description, w, h}) => {

    return (
            <Image
                width={w}
                height={h}
                priority
                src={path}
                alt={description}
            />
    );
};

export default ImageExample;