'use client'

import { FC, useState } from "react";
import Button from "@/ui/button";
import { signIn } from "next-auth/react";
import { toast } from "./ui/toast";

interface SignInButtonPops {}

const SignInButton: FC<SignInButtonPops> =({}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const signInWithGoogle = async () => {
        setIsLoading(true)

        try {
            await signIn('google')
        } catch (error) {
            toast({title: 'Error Signing In', message: 'Please try again later', type: "error"})
        }
    }
    return (
        <Button onClick={signInWithGoogle} isLoading={isLoading}>
            Sign In
        </Button>
    )
}

export default SignInButton