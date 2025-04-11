'use client';
import Image from "next/image";
import { Github, Linkedin } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-zinc-800 font-serif leading-relaxed p-6">
      <section className="max-w-3xl mx-auto text-center mt-16">
        <Image
          src="/IMG_1032.JPG"
          alt="Elmira Kalhor"
          width={160}
          height={160}
          className="rounded-full mx-auto mb-6 shadow-md"
        />
        <h1 className="text-5xl font-semibold mb-3 tracking-tight">Elmira Kalhor</h1>
        <p className="text-xl text-zinc-600 mb-8 italic">
          Economist & Engineer | Data-Driven Research | Resilience, Equity, and Innovation
        </p>
        <a
          href="/ElmiraKalhor_R.docx"
          className="inline-block px-5 py-2 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800 transition"
          download
        >
          Download CV
        </a>
      </section>

      <section id="about" className="max-w-3xl mx-auto mb-20 mt-24">
        <h2 className="text-3xl font-semibold mb-6 border-b pb-2 border-gray-200">About</h2>
        <p className="text-lg text-zinc-700">
          I’m a researcher with dual PhDs in Economics and Civil Engineering. My work spans policy, infrastructure, disaster resilience,
          and social equity—drawing from both data science and systems thinking. Previously at Princeton, I’ve led data-intensive
          projects using GIS, IMPLAN, and machine learning.
        </p>
      </section>

      <section id="experience" className="max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-6 border-b pb-2 border-gray-200">Experience</h2>
        <ul className="list-disc list-inside text-lg text-zinc-700">
          <li>Postdoctoral Researcher, Princeton University (2019–2022)</li>
          <li>Doctoral Researcher – Economics, University of New Mexico (2016–2019)</li>
          <li>Doctoral Researcher – Engineering, University of New Mexico (2012–2017)</li>
        </ul>
      </section>

      <section id="projects" className="max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-6 border-b pb-2 border-gray-200">Projects & Publications</h2>
        <ul className="text-lg text-zinc-700 space-y-2">
          <li>- Disaster Displacement Modeling using Cellphone and Census Data (Princeton)</li>
          <li>- Wildfire Risk Assessment and Investment Modeling (UNM)</li>
          <li>
            - <a href="https://doi.org/10.1016/j.autcon.2011.08.014" className="text-blue-600 underline hover:text-blue-800" target="_blank">
              Stochastic time–cost optimization using non-dominated archiving ant colony approach
            </a>, <span className="italic">Automation in Construction</span> (2011)
          </li>
        </ul>
      </section>

      <section id="blog" className="max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-6 border-b pb-2 border-gray-200">Blog</h2>
        <p className="text-lg text-zinc-700 italic">
          Coming soon – reflections on data-driven decision-making, equity, and innovation.
        </p>
      </section>

      <section id="contact" className="max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-6 border-b pb-2 border-gray-200">Contact</h2>
        <p className="text-lg text-zinc-700 mb-4">
          Email: <a href="mailto:elmira.kalhor@gmail.com" className="text-blue-600 underline hover:text-blue-800">elmira.kalhor@gmail.com</a>
        </p>
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
