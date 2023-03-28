import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import { FC } from "react";
import { formatDistance } from 'date-fns'
import LargeHeading from "./ui/largeheading";
import Paragraph from "./ui/paragraph";
import { Input } from "./ui/input";
import Table from "./table";
import ApiKeyOptions from "./api-key-options";

const ApiDashboard = async ({}) => {
    const user = await getServerSession(authOptions)
    if(!user) notFound()

    const apiKeys = await db.apiKey.findMany({
        where: {userId: user.user.id}
    })
    const activeApiKey = apiKeys.find((apiKey) => apiKey.enabled)

    if (!activeApiKey) notFound()

    const userRequest = await db.apiRequest.findMany({
        where: {
            apiKeyId: {
                in: apiKeys.map((key) => key.id),
            }
        }
    })
    const serializableRequests = userRequest.map((req) => ({
        ...req,
        timestamp: formatDistance(new Date(req.timestamp), new Date()),
    }))
    console.log('serializable', serializableRequests)
    return (
        <div className="container flex flex-col gap-6">
            <LargeHeading>Welcome Back, {user.user.name}</LargeHeading>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center">
                <Paragraph>Youre API key:</Paragraph>
                <Input className="w-fit truncate" readOnly value={activeApiKey.key} />
                {/* add option to create new / revoke */}
                <ApiKeyOptions apiKeyId={activeApiKey.id} apiKeyKey={activeApiKey.key} />
            </div>

            <Paragraph className="text-center md:text-left mt-2 -mb-4"> Your Api History </Paragraph>
            <Table userRequests={serializableRequests} />
        </div>
    )
}

export default ApiDashboard