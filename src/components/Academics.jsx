import { BookOpen, GraduationCap, Microscope } from "lucide-react";

function Academics() {
  const programs = [
    {
      icon: BookOpen,
      title: "Primary Education",
      text: "A strong foundation focused on literacy, numeracy, creativity and character development.",
    },
    {
      icon: GraduationCap,
      title: "Secondary Education",
      text: "A structured learning environment that prepares students for academic success and future opportunities.",
    },
    {
      icon: Microscope,
      title: "Science & Technology",
      text: "Practical learning that encourages curiosity, problem-solving and innovation.",
    },
  ];

  return (
    <section
     id="academics"
     data-aos="fade-up"
     className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      data-aos="fade-up"
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-500 sm:text-sm sm:tracking-[0.25em]">
            Our Academics
          </p>

          <h2 className="mt-3 text-2xl font-bold leading-tight text-blue-950 sm:text-3xl md:text-4xl">
            Learning Designed for Every Stage
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-600 sm:mt-5 sm:text-base sm:leading-7">
            Our academic programs provide students with the knowledge,
            skills and confidence they need to grow and succeed.
          </p>
        </div>

        {/* Program Cards */}
        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <div
                key={program.title}
                className="rounded-2xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7 lg:p-8"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-950 text-yellow-400">
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-lg font-bold text-blue-950 sm:text-xl">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                  {program.text}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Academics;