'use client';
import Image from "next/image";
import { Github, Linkedin } from 'lucide-react';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function HomePage() {
  return (
    <main className={`min-h-screen bg-white text-zinc-800 font-sans leading-relaxed px-6 ${inter.variable}`}>

      {/* Centered photo at top */}
      <section className="w-full flex justify-center mt-12 mb-10">
        <Image
          src="/IMG_1032.JPG"
          alt="Elmira Kalhor"
          width={320}
          height={320}
          className="rounded-full shadow-md"
        />
      </section>

      {/* Name and title */}
      <section className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-semibold mb-3">Elmira Kalhor</h1>
        <p className="text-xl text-zinc-600">Quantitative Research Scientist</p>
      </section>

      {/* Resume Link */}
      <section className="max-w-2xl mx-auto text-center mb-20">
        <a
          href="/ElmiraKalhor_R.docx"
          className="text-lg font-medium text-blue-700 underline hover:text-blue-900"
          download
        >
          My Resume
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-2xl mx-auto mb-20 px-2">
        <h2 className="text-3xl font-bold mb-4">About</h2>
        <p className="text-lg text-zinc-700 text-justify">
          Data-driven researcher with dual PhDs in Economics and Engineering, specializing in data science, analytics, and policy evaluation.
          Expertise in statistical modeling, causal inference, geospatial analytics, and machine learning for impact assessment and optimization
          across diverse domains, including disaster resilience, energy policy, pricing analysis, and operations research. Adept at large-scale
          data processing, predictive modeling, automation, and decision-support frameworks to drive actionable insights.
        </p>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-2xl mx-auto mb-20 px-2">
        <h2 className="text-3xl font-bold mb-4">Experience</h2>
        <ul className="list-disc list-inside text-lg text-zinc-700 space-y-2">
          <li>Postdoctoral Researcher, Princeton University (2019–2022)</li>
          <li>Doctoral Researcher – Economics, University of New Mexico (2016–2019)</li>
          <li>Doctoral Researcher – Engineering, University of New Mexico (2012–2017)</li>
        </ul>
      </section>

      {/* Blog Section */}
      <section id="blog" className="max-w-2xl mx-auto mb-20 px-2">
        <h2 className="text-3xl font-bold mb-4">Blog</h2>
        <p className="text-lg text-zinc-700 italic">Coming soon</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-2xl mx-auto mb-20 text-center px-2">
        <p className="text-lg text-zinc-700 mb-8">Contact me at elmiraDOTkalhorATgmailDOTcom</p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/ekalhor"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-600 hover:text-blue-700"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/elmira-kalhor"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-600 hover:text-blue-700"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </section>

      <footer className="text-center text-zinc-400 text-sm mt-20">
        © {new Date().getFullYear()} Elmira Kalhor
      </footer>
    </main>
  );
}