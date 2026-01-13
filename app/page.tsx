import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Image from "next/image";
import Recognition from "@/components/Recognition";
import ContactMe from "@/components/ContactMe";
import { Contact } from "lucide-react";
import Head from "next/head";
import Header from "@/components/Header";
import Credentials from "@/components/Credentials";

export default function Home() {
  return (
    <div>
      <main className="bg-white w-full h-min-h-screen p-8">
        <Header/>
        <About/>
        <Skills/>
        <Credentials/>
        <Projects/>
        <Education/>
        <Experience/>
        <Recognition/>
        <ContactMe/>
      </main>
    </div>
  );
}
