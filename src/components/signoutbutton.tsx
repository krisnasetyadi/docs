'use client'

import { FC, useState } from "react";
import Button from "@/ui/button";
import { signOut } from "next-auth/react";
import { toast } from "./ui/toast";

interface SignOutButtonPops {}

const SignOutButton: FC<SignOutButtonPops> =({}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const singOutUser = async () => {
        setIsLoading(true)

        try {
            await signOut()
        } catch (error) {
            toast({title: 'Error Signing Out', message: 'Please try again later', type: "error"})
        }
    }
    return (
        <Button onClick={singOutUser} isLoading={isLoading}>
            Sign In
        </Button>
    )
}

export default SignOutButton