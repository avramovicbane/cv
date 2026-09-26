import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ToolMarquee from "@/components/ToolMarquee";
import SectionHeading from "@/components/SectionHeading";
import Metrics from "@/components/Metrics";
import CaseStudies from "@/components/CaseStudies";
import Pillars from "@/components/Pillars";
import HowIWork from "@/components/HowIWork";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Learning from "@/components/Learning";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";

function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ToolMarquee />

        <Section id="impact">
          <SectionHeading
            index="01"
            eyebrow="Impact"
            title="Outcomes, not"
            accent="output."
            intro="The numbers I'm proudest of — and the two stories behind the biggest ones. Flip each case between before and after."
          />
          <Metrics />
          <div className="mt-8 sm:mt-12">
            <CaseStudies />
          </div>
        </Section>

        <Section id="what-i-do" className="bg-surface-2/40">
          <SectionHeading
            index="02"
            eyebrow="What I do"
            title="A Product Owner who can demo it, build it,"
            accent="and ship it."
            intro="My job spans the whole life of a product at a bank — from the sales room to the release train to the support queue."
          />
          <Pillars />
        </Section>

        <Section id="work">
          <SectionHeading
            index="03"
            eyebrow="How I work"
            title="Two loops I run"
            accent="every day."
            intro="One loop takes a bank from first demo to go-live. The other ships a new release every two weeks. Click through either one."
          />
          <HowIWork />
        </Section>

        <Section id="journey" className="bg-surface-2/40">
          <SectionHeading
            index="04"
            eyebrow="Journey"
            title="Release notes"
            accent="of a career."
            intro="From teaching web development, to selling software, to SAP programmes in Germany, to AI for banks — every version added something to the product-owner toolkit."
          />
          <Journey />
        </Section>

        <Section id="skills">
          <SectionHeading
            index="05"
            eyebrow="Skills"
            title="The"
            accent="toolkit."
            intro="Product craft, the full client lifecycle, and enough data and AI to build parts of the product myself."
          />
          <Skills />
        </Section>

        <Section id="learning" className="bg-surface-2/40">
          <SectionHeading
            index="06"
            eyebrow="Learning"
            title="Always in"
            accent="the next sprint."
            intro="What I'm working on next, and the certificates I've already earned — click any one to see it."
          />
          <Learning />
        </Section>

        <Contact />
      </main>
      <Footer />
      <CommandPalette />
    </>
  );
}
