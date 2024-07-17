import React from 'react'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"

export default function Tabsroute() {
  return (
    <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
        <TabsTrigger value="overview">About</TabsTrigger>
        <TabsTrigger value="transactions">Blogs</TabsTrigger>
        <TabsTrigger value="employees">Uses</TabsTrigger>
        <TabsTrigger value="analytics" disabled>Contact</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
            About
        </TabsContent>
        <TabsContent value="transactions" className='space-y-4'>
            Blogs
        </TabsContent>
        <TabsContent value="employees" className='space-y-4'>
            Uses
        </TabsContent>
    </Tabs>
  )
}
