import { ModeToggle } from "@/components/micro/theme-toggle";
import Navbar from "@/components/shared/Navbar";
import SocialInfo from "@/components/shared/social-info";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-5 px-64">
      <Navbar/> 
      <SocialInfo/>
    </main>
  );
}
