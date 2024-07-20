"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracing-beam";

export default function Experience() {
  return (
    <>
    <div className="text-3xl font-serif">Experience</div>
    <TracingBeam className="px-6 w-full">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black dark:bg-white dark:text-black text-white rounded-full text-xl w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl mb-4")}>
              {item.title}
            </p>
            <div className=" prose prose-sm dark:prose-invert">
              {item.description}
            </div>          
          </div>
        ))}
      </div>
    </TracingBeam>
    </>
  );
}

const dummyContent = [
  {
    title: "SWE Intern",
    description: (
      <>
        <ul>
          <li>- Worked for Saudi Arab based banks handling Complex Js scripting in Deployment Web Archive for iforms</li>
          <li>- Handled and Deployed large scale SQL views and Procedures with abstraction for 1 lakh+ user DB</li>
          <li>- Deployed end to end UAT level java server side features in accelarator codebase from scratch for 20+ pre and post hook in Server JAR files handline validations, DB updations and documentation</li>
          <li className="mt-2 text-zinc-500">TechStack: Nextjs, AWS DynamoDB, Playwright</li>
        </ul>
      </>
    ),
    badge: "HiFive Community",
  },
  {
    title: "SDE Intern",
    description: (
      <>
        <ul>
          <li>- Worked for Saudi Arab based banks handling Complex Js scripting in Deployment Web Archive for iforms</li>
          <li>- Handled and Deployed large scale SQL views and Procedures with abstraction for 1 lakh+ user DB</li>
          <li>- Deployed end to end UAT level java server side features in accelarator codebase from scratch for 20+ pre and post hook in Server JAR files handline validations, DB updations and documentation</li>
          <li className="mt-2 text-zinc-500">TechStack: Java, JavaScript, Oracle SQL, Netbeans, Postman, SOAP and XML API</li>
        </ul>
      </>
    ),
    badge: "NewGen Software",
  },
  {
    title: "Frontend Engineer",
    description: (
      <>
        <ul>
          <li>- Built MVP UI Design with sub-routing and naivation within 3 weeks</li>
          <li>- Developed Reactjs Web Page with 5+ sections focused on Gradients and Smooth feel using Tailwinded</li>
          <li className="mt-2 text-zinc-500">TechStack: React.js, Tailwind, Figma.</li>
        </ul>
      </>
    ),
    badge: "Spotline",
  },
  {
    title: "UI/UX Designer",
    description: (
      <>
        <ul>
          <li>Curated a Low Fidelity User Interface, under the guidance of SAAS-based clients and worked in Figma and
          Sketchbook to fine-tune the UI design and Routing for upto 140+ screens</li>
          <li>Worked with 75+ clients globally ranging from Startup to Full-Fledges Companies while maintaining 4.9 rating</li>
          <li className="mt-2 text-zinc-500">TechStack: Figma, Adobe-XD, WebFlow</li>
        </ul>
      </>
    ),
    badge: "Fiverr",
  },
];
