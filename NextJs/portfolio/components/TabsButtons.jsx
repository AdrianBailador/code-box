import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const TabsButtons = () => {
    return (
        <div style={{ display: 'flex', gap: '1rem' }}>
            {

                <Tabs defaultValue="account" className="w-[400px]">
                    <TabsList>
                        <TabsTrigger value="account">Portfolio</TabsTrigger>
                        <TabsTrigger value="password">About</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">Make changes to your account here.</TabsContent>
                    <TabsContent value="password">Change your password here.</TabsContent>
                </Tabs>
            }
        </div>
    );
};

export default TabsButtons;


