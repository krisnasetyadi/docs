import { FC } from "react";
import type { Metadata } from "next";
import LargeHeading from '@/ui/largeheading'
import Paragraph from "@/ui/paragraph";
import DocumentationTabs from "@/components/documentationtabs";
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
                    Making a request
                </LargeHeading>
                <Paragraph>
                    api/v1/similarity
                </Paragraph>
                <DocumentationTabs />
            </div>
        </div>
    )
}

export default page