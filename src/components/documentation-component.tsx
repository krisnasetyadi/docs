'use client'

import { FC } from 'react'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form'
import { BsCurrencyDollar } from 'react-icons/bs'
import { yupResolver } from '@hookform/resolvers/yup'
import InputComponent from './ui/input-component'
import * as yup from 'yup'
import Button from './ui/button'

interface DocumentationComponentProps {

}

type FormData = {
    components: string
}

const schema = yup.object().shape({
    components: yup.string().required()
})

const DocumentationComponent: FC<DocumentationComponentProps> = () => {
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<FieldValues>({
        resolver: yupResolver(schema)
    })

    const onSubmit:SubmitHandler<FieldValues> = (data) => {
        console.log('data', data)
    }
    return (
        <div className='h-[500px] w-2/3 bg-white'>
            <form className='flex p-10' onSubmit={handleSubmit(onSubmit)}>
            <InputComponent 
              type="number"
              name="components"  
              label="Components" 
            //   value={123}
              register={register}
              errors={errors}
              addOnLeft
              thousandSeperator
            //   addOnRight

              icon={BsCurrencyDollar}
            />
            <Button type='submit' className='btn btn-md rounded-[20px] font-bold text-white px-8 ml-4'>Submit</Button>
            </form>
        </div>
    )
}

export default DocumentationComponent