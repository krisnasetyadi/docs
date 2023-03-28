'use client'
import { cn } from "@/lib/utils";
import { Copy } from "lucide-react";
import { ButtonHTMLAttributes, FC } from "react";
import Button from "./ui/button";
import { toast } from "./ui/toast";

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    valueToCopy: string,
}

const CopyButton: FC<CopyButtonProps>=({ valueToCopy, className, ...props })=> {
    return (
   <Button {...props} onClick={()=>{
    navigator.clipboard.writeText(valueToCopy)
    toast({title: 'Copied', message: 'API key copied to clipboard', type: 'success'})
   }}
   variant="ghost"
   className={className}
   >
    <Copy className="h-5 w-5" />
   </Button>
    )
}

export default CopyButton