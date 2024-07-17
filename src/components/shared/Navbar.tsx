import React from 'react'
import { ModeToggle } from '../micro/theme-toggle'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Navbar() {
  return (
    <div className="flex flex-row items-center justify-between">
            <Avatar className='h-16 w-16'>
            <AvatarImage src="https://avatars.githubusercontent.com/u/110554721?v=4" />
            <AvatarFallback>Harshil Tomar</AvatarFallback>
            </Avatar>
            <ModeToggle/>
    </div>
  )
}
