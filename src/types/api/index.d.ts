import { type ZodIssue } from 'zod'

export interface CreateApiData { 
    error: String | ZodIssue[] | null,
    createdApiKey: Apikey | null
}

export interface RevokeApiData {
    error: String | ZodIssue[] | null,
    success: boolean
}