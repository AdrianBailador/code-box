import React from 'react';
import Image from "next/image";
import Img1 from "@/public/images/pexels-veeterzy-303383.jpg";
import ImageExample from "@/components/ImageExample";

const ImageComponent = () => {

    return (
        <div>
            {/*Podemos trabajar directamente con el componente imagen, en el src, le pasamos la imagen que hemos importado previamente*/}
            <Image
                priority
                src={Img1}
                alt={"asdsf"}
                placeholder="blur"
            />

            {/*Podemos trabajar con el componente imagen, pasando en SRC el path de la imagen que queremos mostrar*/}
            <Image
                width={640}
                height={427}
                priority
                src={'/images/pexels-veeterzy-303383.jpg'}
                alt={"asdsf"}
            />

            <ImageExample path={'/images/pexels-veeterzy-303383.jpg'} description={'imagen como componente'} w={'640'} h={'427'}/>
        </div>
    );
};

export default ImageComponent;