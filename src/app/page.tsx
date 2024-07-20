import { ModeToggle } from "@/components/micro/theme-toggle";
import Navbar from "@/components/shared/navbar";
import SocialInfo from "@/components/shared/social-info";
import Tabsroute from "@/components/shared/tabs-route";


import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-5 px-64">
      <Navbar/> 
      <SocialInfo/>
      <div className="mt-5 w-full">
        <hr className="border-zinc-500 my-4" />
      </div>
      <div>
        <Tabsroute/>
      </div>
    </main>
  );
}
