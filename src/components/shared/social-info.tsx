import Image from 'next/image'
import React from 'react'

export default function SocialInfo() {
  return (
    <div className='flex flex-col mt-5'>
        <text className='font-serif text-2xl font-extralight'>Harshil Tomar</text>
        <text className='text-zinc-500'>Software Engineer | FullStack Developer with Passion for Problem Solving</text>
        <div className='flex mt-5'>
           
          <Image height={20} width={20}  alt='twitter icon' className='mr-2' src="https://ansubkhan.com/images/icons/x.svg"/>
           
          <Image height={20} width={20} alt='github icon' src="https://ansubkhan.com/images/icons/github.svg"/>
           
          <Image height={20} width={20} alt='linkedin icon' className='ml-2' src="https://ansubkhan.com/images/icons/linkedin.svg"/>
        </div>
    </div>
  )
}