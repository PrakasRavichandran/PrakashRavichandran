"use client";
import { Container } from "components/Container";
import Image from "next/image";

export default function Miscellaneous(): JSX.Element {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-3xl">
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-zinc-800 dark:text-zinc-100">
            Awards & Honors
          </h3>

          <ul className="list-disc list-outside ml-6">
            <li className="mb-2">
              <a
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                Awarded by various collegs & industries including <span className="font-semibold">SRM, KonguNadu, IMAYAM & GeoMarine BioTechnologies</span> for outstanding achievements in the field of 
                <span className="font-semibold">Bloom Energy using Solid Oxide Fuel Cells (SOFC) and IoT based Smart Classroom Automation</span> at a national-level technical symposium. Recognized 
                for innovative contributions and excellence in advancing sustainable energy solutions.
              </a>
            </li>
            <li className="mb-2">
              <a
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                I enthusiastically engaged in the prestigious <span className="font-semibold">AGRITHON-2k20</span>, a national-level Agriculture-based <span className="font-semibold">Hackathon</span> meticulously organized
                 by IEEE Student Branch 64491 in collaboration with the esteemed Hunter Industries. Embracing the challenge, I contributed to groundbreaking solutions, 
                 showcasing my prowess in driving technological innovation within the dynamic landscape of agriculture. 
                 
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <Container className="mt-9">
        <div className="max-w-3xl">
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-zinc-800 dark:text-zinc-100">
            Extracurricular Activities
          </h3>

          <ul className="list-disc list-outside ml-6">
            <li className="mb-2">
              <a
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                Active {" "}
                <span className="font-semibold">
                GitHub contributor
                </span>{" "}
                , working on diverse tech projects.
              </a>
            </li>
            <li className="mb-2">
              <a
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                Creating visually stunning designs in <span className="font-semibold">Figma</span>
              </a>
            </li>
            <li className="mb-2">
              <a
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                Building <span className="font-semibold">dynamic websites with JavaScript</span>, exploring <span className="font-semibold">data science in Python</span>
              </a>
            </li>
            <li className="mb-2">
              <a
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                Daily exploration of <span className="font-semibold">electronic and electrical hardware</span> innovations.
              </a>
            </li>
            <li className="mb-2">
              <a
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dedicated to <span className="font-semibold">bodybuilding</span> for physical and mental strength
              </a>
            </li>
            <li className="mb-2">
              <a
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                Passionate music enthusiast and <span className="font-semibold">keyboard player</span>.
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
}
