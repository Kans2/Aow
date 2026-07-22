import Image from "next/image";

export default function AuthenticateSkillsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side stacked images */}
          <div className="relative w-full md:w-1/3 h-[400px] md:h-[500px] mt-8 md:mt-0">
            {/* Top Image */}
            <div className="group absolute top-4 left-4 md:left-0 w-[65%] aspect-[4/5] transform -rotate-6 transition-all duration-500 ease-out z-10 hover:rotate-0 hover:scale-110 hover:z-30 hover:shadow-[0_0_40px_rgba(0,65,141,0.6)] rounded-2xl border-4 border-white overflow-hidden cursor-pointer">
              <Image
                src="/images/homepage/skills_1.png"
                alt="Professional working at night"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Shine Effect */}
              <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-[150%] skew-x-[-30deg] transition-transform duration-1000 ease-out group-hover:translate-x-[150%]" />
            </div>
            {/* Bottom Image */}
            <div className="group absolute bottom-4 right-4 md:right-0 w-[65%] aspect-[4/5] transform rotate-6 transition-all duration-500 ease-out z-20 hover:rotate-0 hover:scale-110 hover:z-30 hover:shadow-[0_0_40px_rgba(0,65,141,0.6)] rounded-2xl border-4 border-white overflow-hidden cursor-pointer">
              <Image
                src="/images/homepage/skills_2.png"
                alt="Professional in tech environment"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Shine Effect */}
              <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-[150%] skew-x-[-30deg] transition-transform duration-1000 ease-out group-hover:translate-x-[150%]" />
            </div>
          </div>

          {/* Center content */}
          <div className="w-full md:w-1/3 flex flex-col justify-center items-center text-center my-12 md:my-0 z-30 px-2 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00418d] mb-6 leading-tight">
              <span className="whitespace-nowrap">Authenticate Skills,</span>
              <br />
              <span className="whitespace-nowrap">Simplify Hiring</span>
            </h2>
            <p className="text-gray-700 leading-relaxed text-balance text-base md:text-lg">
              SkillKwiz ensures professionals are evaluated accurately in their
              chosen fields. Our secure testing centers provide authenticated
              skill assessments, giving you instant access to verified
              reports—eliminating the need for lengthy technical interviews.
            </p>
          </div>

          {/* Right side stacked images */}
          <div className="relative w-full md:w-1/3 h-[400px] md:h-[500px] mb-8 md:mb-0">
            {/* Top Image */}
            <div className="group absolute top-4 right-4 md:right-0 w-[65%] aspect-[4/5] transform rotate-6 transition-all duration-500 ease-out z-10 hover:rotate-0 hover:scale-110 hover:z-30 hover:shadow-[0_0_40px_rgba(247,62,93,0.6)] rounded-2xl border-4 border-white overflow-hidden cursor-pointer">
              <Image
                src="/images/homepage/skills_3.png"
                alt="Professional at workstation"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Shine Effect */}
              <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-[150%] skew-x-[-30deg] transition-transform duration-1000 ease-out group-hover:translate-x-[150%]" />
            </div>
            {/* Bottom Image */}
            <div className="group absolute bottom-4 left-4 md:left-0 w-[65%] aspect-[4/5] transform -rotate-6 transition-all duration-500 ease-out z-20 hover:rotate-0 hover:scale-110 hover:z-30 hover:shadow-[0_0_40px_rgba(247,62,93,0.6)] rounded-2xl border-4 border-white overflow-hidden cursor-pointer">
              <Image
                src="/images/homepage/skills_4.png"
                alt="Business professional looking at digital interface"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Shine Effect */}
              <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-[150%] skew-x-[-30deg] transition-transform duration-1000 ease-out group-hover:translate-x-[150%]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
