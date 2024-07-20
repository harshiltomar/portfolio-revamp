import React from 'react'
import { BlogCard } from '../micro/blog-card'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Link from 'next/link'

export default function Blogs() {
  return (
    // <div className='flex'>
    //   <BlogCard/>
    //   <BlogCard/>
    // </div>
    <section className="w-full mt-10">
      <div className="container px-4 md:px-6">
        <div className="space-y-8">
          <div className="space-y-1">
            <h2 className="text-3xl font-serif">My Latest Blog Posts</h2>
            <p className="text-zinc-500">
              Check out my latest blog posts on Medium.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
          <Card className="group">
              <CardHeader>
                <CardTitle>Here is what I learnt in my 1 month of Remote SWE Internship</CardTitle>
                <CardDescription>
                  As I approached the end of my college, I embarked on a remote Software Engineering internship with Hifive, a prominent US-based company specializing in hotel tipping management services working with amazing clients like Radisson Blue, Hyatt, Courtyard and many more. My journey began with anticipation as I met my mentor, Ani . We swiftly set up essential tools like GitHub AWS etc .
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-black px-4 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Read More &rarr;
                </Link>
              </CardFooter>
            </Card>
            <Card className="group">
              <CardHeader>
                <CardTitle>How I Landed a Dream Remote Internship !</CardTitle>
                <CardDescription>
                  After multiple internships and a range of experiences in software development, I was excited to share my recent journey through a rigorous recruitment process for a Remote Internship. Here is how it all unfolded. The first round was a brief 30–40 minute screening where we discussed the role and relevant tech stacks. This role was for a full-stack SWE Internship, focusing on Next.js, TypeScript, and Postgres with AWS.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link
                  href="https://medium.com/@harshiltomar20/how-i-landed-a-dream-remote-internship-14eaac20ba68"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-black px-4 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Read More &rarr;
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

