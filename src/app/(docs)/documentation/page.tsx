import { FC } from "react";
import type { Metadata } from "next";
import LargeHeading from '@/ui/largeheading'
import Paragraph from "@/ui/paragraph";
// import DocumentationTabs from "@/components/documentationtabs";
import DocumentationComponent from "@/components/documentation-component";
import 'simplebar-react/dist/simplebar.min.css'

export const metadata: Metadata = {
    title: 'Similarity API | Documentation',
    description: 'Free & open-source text similarity API'
}

interface pageProps {}

const page: FC<pageProps> = ({}) => {
    return (
        <div className="container max-w-7xl mx-auto mt-12">
            <div className="flex flex-col items-center gap-6">
                <LargeHeading>
                    Input Components
                </LargeHeading>
                <Paragraph>
                    tried to advanced reusable input component
                </Paragraph>
                <DocumentationComponent />
                {/* <DocumentationTabs /> */}
            </div>
        </div>
    )
}

export default page