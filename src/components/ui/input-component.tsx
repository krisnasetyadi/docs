/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/named */
'use client';
import React, { FC, useState } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { IconType } from 'react-icons';

interface InputProps {
  name: string;
  label: string;
  type?: string;
  disabled?: boolean;
  addOnLeft?: boolean;
  addOnRight?: boolean;
  thousandSeperator?:boolean;
  value?: any;
  icon?: IconType;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: FC<InputProps> = ({
  name,
  label,
  type = "text",
  disabled,
  addOnLeft,
  addOnRight,
  thousandSeperator,
  value,
  icon: Icon,
  register,
  errors,
}) => {

  const [formattedValue, setFormattedValue] = useState('')
  console.log('formattedValue', formattedValue)

  return (
    <div className="w-full relative">
      {addOnLeft && Icon && <Icon size="24" className="text-neutral-700 absolute top-5 left-2" />}
      <input
        disabled={disabled}
        {...register(name)}
        placeholder=" "
        type={type}
        className={`peer w-full p-4 pt-6 font-light bg-white border-2 
        rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed ${
          addOnLeft ? 'pl-9' : 'pl-4'
        } ${addOnRight ? 'pr-9' : 'pr-4'} ${
          errors[name]
            ? 'border-rose-500 focus:border-rose-500'
            : 'border-neutral-300 focus:border-black'
        }`}
        value={value || formattedValue }
        onChange={(e) => {
          if(thousandSeperator && e.target.value) {
            const inputValue = e.target.value;
          // Remove all non-digit characters from the input value
          // const numericValue = inputValue.replace(/\D/g, '');
          const numericValue = e.target.value
          // Format the numeric value with a thousands separator and two decimal places
          // number.toLocaleString('en-US', { maximumFractionDigits: 2 }).replace(',', '.')
          const formattedNumber = parseFloat(numericValue).toLocaleString('en-US');
          // Update the state with the formatted value
            console.log('formattedNumber', formattedNumber)
            setFormattedValue(formattedNumber)
          }
        }}
      />
      {addOnRight && Icon && <Icon size="24" className="text-neutral-700 absolute top-5 right-2" />}
      <label
        className={`
        absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0]
         ${addOnLeft ? 'left-9' : 'left-4'}
         ${addOnRight ? 'right-9' : 'right-4'}
         peer-placeholder-shown:scale-100
         peer-placeholder-shown:translate-y-0
         peer-focus:scale-75
         peer-focus:-translate-y-4
         ${errors[name] ? 'text-rose-500' : 'text-zinc-400'}`}
      >
        {label}
      </label>
      {Object.entries(errors).length > 0 && (
      <span className='text-rose-500'>{`${errors[name]?.message}`}</span> )}
    </div>
  );
};

export default Input;
