import React from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import ProjectList from "@/components/ProjectList";
import ProjectExperience from './ProjectExperience';
import Link from 'next/link'

const TabsButtons = () => {
    return (
        <Tabs defaultValue="portfolio" className="w-full ">
            <TabsList className={"bg-tabs w-full px-4 py-10 rounded-2xl"}>
                <TabsTrigger className={"w-full py-4 rounded-2xl"} value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger className={"w-full py-4 rounded-xl"} value="about">About</TabsTrigger>
            </TabsList>
            <TabsContent className={"flex flex-col items-center"} value="portfolio">
                <ProjectList/>
                <Link className="text-white rounded-lg bg-primary px-4 py-2" href={"/"}>
                    View All Projects
                </Link>
            </TabsContent>
            <TabsContent value="about">
                <ProjectExperience/>
            </TabsContent>
        </Tabs>
    );
};

export default TabsButtons;