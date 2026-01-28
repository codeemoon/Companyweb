
import { ScrollReveal } from "../ScrollReveal";
import SEO from "../SEO";

function FirstSection() {
  return (
    <section className="w-full flex flex-col p-6 md:p-10">
      <SEO 
        title="About Pillow | Top Software Company in Chhattisgarh & UP" 
        description="Learn about Pillow, the innovative software company bridging technology and business. Operating in Bhilai, Durg, and Prayagraj."
        keywords="About Pillow, Software Company Profile, Bhilai Tech Company"
      />
      <ScrollReveal as="header">
        <h1 className="text-5xl md:text-7xl lg:text-[96px] text-[#292929] font-normal leading-tight mb-8 md:mb-14 break-words">
            We highly focus on <br />result
        </h1>
      </ScrollReveal>

      <div className="flex flex-col 2xl:flex-row items-start gap-12 2xl:gap-32">
        <video 
          src="/video/videoForOurCompany.mp4" 
          className="w-full 2xl:w-200 h-auto object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
        />
        <article className="flex flex-col text-lg md:text-[24px] font-medium w-full 2xl:max-w-87.5">
          <ScrollReveal>
             <p className="text-[#7f7f7f]">
                From very first idea to end of implementation we always inovate the product with our amazing taem.
             </p>
          </ScrollReveal>
          <ScrollReveal>
             <p className="text-[#0a0a0a] mt-4">
                We are fortunate for being involved with your amazing idea and tranform it to leading bussiness.
             </p>
          </ScrollReveal>
          <ScrollReveal>
              <blockquote className="mt-8 md:mt-12 text-4xl md:text-6xl font-bold font-serif tracking-wider text-[#292929]">
                &ldquo;PILLOW&rdquo;
              </blockquote>
          </ScrollReveal>
        </article>
      </div>
    </section>
  )
}

export default FirstSection