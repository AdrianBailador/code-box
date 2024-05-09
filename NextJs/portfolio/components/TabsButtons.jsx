import React from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import ProjectList from "@/components/ProjectList";

const TabsButtons = () => {
    return (
        <Tabs defaultValue="portfolio" className="w-full ">
            <TabsList className={"bg-tabsContainer w-full px-4 py-10 rounded-2xl"}>
                <TabsTrigger className={"w-full py-4 rounded-2xl"} value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger className={"w-full py-4 rounded-xl"} value="about">About</TabsTrigger>
            </TabsList>
            <TabsContent value="portfolio">
                <ProjectList/>
            </TabsContent>
            <TabsContent value="about">
                <h1>About Me</h1>
            </TabsContent>
        </Tabs>
    );
};

export default TabsButtons;