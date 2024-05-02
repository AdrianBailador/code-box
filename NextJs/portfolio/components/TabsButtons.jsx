import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProjectCard from "./ProjectCard";


const TabsButtons = () => {
    return (


        <div className="profile-action-buttons flex gap-2" style={{ display: 'flex', gap: '1rem' }}>
            {

                <Tabs defaultValue="account" className="w-[400px]">
                    <TabsList>
                        <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                        <TabsTrigger value="about">About</TabsTrigger>
                    </TabsList>
                    <TabsContent value="portfolio"><ProjectCard/></TabsContent>
                    <TabsContent value="about"></TabsContent>
                </Tabs>
            }
        </div>
    );
};

export default TabsButtons;


