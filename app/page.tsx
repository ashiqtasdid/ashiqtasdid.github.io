import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Md. Ashiquzzaman Khan - Developer, Streamer, Artist, Entrepreneur, Writer",
  description:
    "Meet Md. Ashiquzzaman Khan, also known as AshiqTasdid - a versatile entrepreneur, developer, artist, streamer, and writer. As the current CEO of Spectex Inc., Ashiq excels in the tech industry. Beyond technology, he is a renowned writer and artist, with a special talent for songwriting.",
  twitter: {
    card: "summary_large_image",
    site: "@theashiqtasdid",
    creator: "@theashiqtasdid",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ashiq.github.io",
    title:
      "Md. Ashiquzzaman Khan - Developer, Streamer, Artist, Entrepreneur, Writer",
    description:
      "Meet Md. Ashiquzzaman Khan, also known as AshiqTasdid - a versatile entrepreneur, developer, artist, streamer, and writer. As the current CEO of Spectex Inc., Ashiq excels in the tech industry. Beyond technology, he is a renowned writer and artist, with a special talent for songwriting.",
    siteName: "Md. Ashiquzzaman Khan - Developer, Streamer, Artist, Entrepreneur, Writer",
    images: [
      {
        url: "https://cdn.spectex.xyz/images/web/ashiqtasdid_portfolio.png",
        width: 800,
        height: 600,
        alt: "Ashiq Tasdid",
      },
    ],
  },
  metadataBase: new URL("https://ashiq.github.io"),
  alternates: {
    canonical: "https://ashiq.github.io",
    languages: {
      'en-US': 'https://ashiq.github.io',
      'bn-BD': 'https://ashiq.github.io/',
      'in-ID': 'https://ashiq.github.io/',
      'ja-JP': 'https://ashiq.github.io/',
    },
  },
 
};

const Home = () => {
  return (
    <main className="bg-gradient-to-tl from-slate-900 to-slate-800">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
