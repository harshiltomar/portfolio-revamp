import React from 'react'
import Experience from '../micro/experience-list'
import Image from 'next/image'

export default function About() {
  return (
    <div>
       
      <Image height={402} width={1055} alt='profile pic' className='rounded-3xl' src="https://user-images.githubusercontent.com/10498744/210012254-234538ff-d198-48aa-8964-37e6fd45d227.gif"/>
      <div className='mt-10'>
        <text className='text-3xl font-serif'>Hello there! I&apos;m Harshil Tomar ✨</text>
        <ul className='mt-2'>
          <li className='text-zinc-500'>- I enjoy turning abstract ideas into tangible solutions through coding.</li>
          <li className='text-zinc-500'>- On a quest to expand my programming knowledge and skills in diverse tools and frameworks.</li>
        </ul>
      </div>
      <div className='mt-5'>
        <Experience/>
      </div>
    </div>
  )
}

