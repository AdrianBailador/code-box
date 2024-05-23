import Head from 'next/head'
import ProfileInfo from "@/components/ProfileInfo";
import ProfileActionButtons from "@/components/ProfileActionButtons";
import TabsButtons from "@/components/TabsButtons";

export default function Home() {
    return (
        <>
            <Head>
                <title>Portfolio Adrian Bailador</title>
                <meta name="description" content="DESCRIPCION" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://localhost:3000/" />
                <meta property="og:title" content="Portfolio Adrian Bailador" />
                <meta property="og:description" content="+7 years of experience in developing web and Android mobile applications for multinational companies. Working as a full-stack engineer and trying to build easy-to-use and resilient interfaces for the web. My tools of the trade include ReactJS, Astro Build, NodeJS, Laravel, Yii2, MySQL, and MongoDB. Involved in the full product life cycle from early concept, through technical design, to delivering and maintaining the finished product." />
                <meta property="og:image" content="/images/foto.png" />
            </Head>
            <ProfileInfo/>
            <ProfileActionButtons/>
            <TabsButtons/>
        </>
    );
}
