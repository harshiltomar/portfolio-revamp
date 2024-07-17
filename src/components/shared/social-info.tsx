import React from 'react'

export default function SocialInfo() {
  return (
    <div className='flex flex-col mt-5'>
        <text className='font-serif text-2xl font-extralight'>Harshil Tomar</text>
        <text className='text-zinc-500 '>Software Engineer | FullStack Developer with Passion for Problem Solving</text>
        <div className='flex mt-5'>
          <img className='mr-2' src="https://ansubkhan.com/images/icons/x.svg"/>
          <img src="https://ansubkhan.com/images/icons/github.svg"/>
          <img className='ml-2' src="https://ansubkhan.com/images/icons/linkedin.svg"/>
        </div>
    </div>
  )
}