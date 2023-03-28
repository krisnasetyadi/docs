import { FC } from "react";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import RequestApiKey from "@/components/request-api-key";
import ApiDashboard from "@/components/api-dashboard";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
    title: 'Similarity API | Dashboard',
    description: 'Free & open-source text similarity API'
}

const Page = async () => {
    const user = await getServerSession(authOptions)
    if (!user) return notFound()
    const apiKey = await db.apiKey.findFirst({
        where: { userId: user.user.id, enabled: true }
    })
    return (
        <div className="max-w-7xl mx-auto mt-16">
            {apiKey ?
            //  @ts-expect-error Server Component
            <ApiDashboard/> : <RequestApiKey/>}
        </div>
    )
}

export default Page