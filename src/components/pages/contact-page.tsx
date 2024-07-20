import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'

export default function Contact() {
  return (
    <div className="w-full max-w-3xl mx-auto py-12 md:py-20">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Get in Touch</h1>
        <p className="text-muted-foreground text-lg">
          Have a question or want to work together? Fill out the form below and I'll get back to you as soon as
          possible.
        </p>
      </div>
      <form className="mt-10 space-y-6">
        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" placeholder="John Doe" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@example.com" required />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" type="text" placeholder="Project inquiry" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" rows={5} placeholder="How can I help you today?" required />
        </div>
        <div className="flex justify-center">
          <Button type="submit" className="w-full max-w-xs">
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}