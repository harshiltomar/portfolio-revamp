"use client";
import React, { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { toast } from '../ui/use-toast';
import { ToastAction } from '../ui/toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    fetch('https://getform.io/f/brolgyla', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        if (response.ok) {
          //alert('Form submitted successfully');
          toast({
            title: 'Form submitted successfully',
            description: "Hey ! Thanks for the Submission, will get to you Soon : )",
          })
        } else {
          //alert('Form submission failed');
          toast({
            title: 'Form submitted failed',
            description: "Hey, couldn't send the mail. Ping me at harshiltomar20@gmail.com",
            action: (
              <ToastAction altText="Mail Send !">
                <a href='mailto:harshiltomar20@gmail.com' target='_blank' >Send Mail &rarr;</a>
              </ToastAction>
            ),
          })
        }
      })
      .catch((error) => {
        alert('An error occurred: ' + error.message);
      });
  };

  return (
    <div className="w-full max-w-3xl mx-auto py-12 md:py-20">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Get in Touch</h1>
        <p className="text-muted-foreground text-lg">
          Have a question or want to work together? Fill out the form below and I will get back to you as soon as
          possible.
        </p>
      </div>
      <form onSubmit={handleFormSubmit} className="mt-10 space-y-6">
        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" type="text" placeholder="Project inquiry" value={formData.subject} onChange={handleChange} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" rows={5} placeholder="How can I help you today?" value={formData.message} onChange={handleChange} required />
        </div>
        <div className="flex justify-center">
          <Button type="submit" className="w-full max-w-xs">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
