'use client';
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6">
      <section className="max-w-3xl mx-auto text-center mt-16">
        <Image
          src="/IMG_1032.JPG"
          alt="Elmira Kalhor"
          width={160}
          height={160}
          className="rounded-full mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold mb-2">Elmira Kalhor</h1>
        <p className="text-lg text-gray-600 mb-8">
          Economist & Engineer | Data-Driven Research | Resilience, Equity, and Innovation
        </p>
        <a
          href="/ElmiraKalhor_R.docx"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          download
        >
          Download CV
        </a>
      </section>

      <section id="about" className="max-w-3xl mx-auto mb-16 mt-20">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="text-gray-700">
          I’m a researcher with dual PhDs in Economics and Civil Engineering. My work spans policy, infrastructure, disaster resilience,
          and social equity—drawing from both data science and systems thinking. Previously at Princeton, I’ve led data-intensive
          projects using GIS, IMPLAN, and machine learning.
        </p>
      </section>

      <section id="experience" className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Postdoctoral Researcher, Princeton University (2019–2022)</li>
          <li>Doctoral Researcher – Economics, University of New Mexico (2016–2019)</li>
          <li>Doctoral Researcher – Engineering, University of New Mexico (2012–2017)</li>
        </ul>
      </section>

      <section id="projects" className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4">Projects & Publications</h2>
        <p className="text-gray-700 mb-2">
          - Disaster Displacement Modeling using Cellphone and Census Data (Princeton)
        </p>
        <p className="text-gray-700 mb-2">
          - Wildfire Risk Assessment and Investment Modeling (UNM)
        </p>
        <p className="text-gray-700 mb-2">
          - <a href="https://doi.org/10.1016/j.autcon.2011.08.014" className="text-blue-600 underline" target="_blank">Stochastic time–cost optimization using non-dominated archiving ant colony approach</a>, Automation in Construction (2011)
        </p>
      </section>

      <section id="blog" className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4">Blog</h2>
        <p className="text-gray-700">
          Coming soon – reflections on data-driven decision-making, equity, and innovation.
        </p>
      </section>

      <section id="contact" className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-700 mb-2">
          Email: <a href="mailto:elmira.kalhor@gmail.com" className="text-blue-600 underline">elmira.kalhor@gmail.com</a>
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://github.com/ekalhor"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              className="w-5 h-5 inline-block max-w-[20px]"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/elmira-kalhor"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
              className="w-5 h-5 inline-block max-w-[20px]"
            />
          </a>
        </div>
      </section>

      <footer className="text-center text-gray-400 text-sm mt-20">
        © {new Date().getFullYear()} Elmira Kalhor
      </footer>
    </main>
  );
}
