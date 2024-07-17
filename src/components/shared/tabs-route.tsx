import React from 'react'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import About from '../pages/about-page'
import Blogs from '../pages/blogs-page'
import Projects from '../pages/projects-page'
import Contact from '../pages/contact-page'

export default function Tabsroute() {
  return (
    <Tabs defaultValue="About" className="space-y-4">
        <TabsList>
        <TabsTrigger value="About">About</TabsTrigger>
        <TabsTrigger value="Blogs">Blogs</TabsTrigger>
        <TabsTrigger value="Projects">Projects</TabsTrigger>
        <TabsTrigger value="Contact">Contact</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
            <About/>
        </TabsContent>
        <TabsContent value="transactions" className='space-y-4'>
            <Blogs/>
        </TabsContent>
        <TabsContent value="Projects" className='space-y-4'>
            <Projects/>
        </TabsContent>
        <TabsContent value="Contact" className='space-y-4'>
            <Contact/>
        </TabsContent>
    </Tabs>
  )
}
