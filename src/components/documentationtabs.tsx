'use client'

import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import SimpleBar from 'simplebar-react'
import Code from "./code";
import { nodejs, python } from "@/helpers/documentation-code";

const DocumentationTabs: FC = ({}) => {
    return (
        <Tabs defaultValue="nodejs" className="max-w-2xl w-full " >
            <TabsList>
                <TabsTrigger value="nodejs">Node jS</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
            </TabsList>
            <TabsContent value="nodejs">
                <SimpleBar>
                <Code animated language="javascript" code={nodejs} show />
                </SimpleBar>
            </TabsContent>
            <TabsContent value="python">
             <SimpleBar>
                <Code animated language="python" code={python} show />
             </SimpleBar>
            </TabsContent>
        </Tabs>
    )
}

export default DocumentationTabs