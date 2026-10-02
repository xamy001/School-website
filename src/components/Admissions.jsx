import { CheckCircle } from "lucide-react";
function Admissions() {
  const requirements = [
    "Completed admission application form",
    "Recent passport photograph",
    "Birth certificate or age declaration",
    "Previous school report card",
    "Entrance assessment",
  ];
  return (
    <section
      id="admissions"
      data-aos="fade-up"
      className="bg-blue-950 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-12 lg:px-8 lg:gap-16">
        {/* Content */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400 sm:text-sm sm:tracking-[0.25em]">
            Admissions
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
            Give Your Child a Strong Start
          </h2>
          <p className="mt-5 text-sm leading-6 text-gray-200 sm:text-base sm:leading-7">
            We welcome families who are looking for a supportive and
            inspiring environment where students can learn, grow and
            develop the confidence they need for the future.
          </p>
          <a
            href="#contact"
            className="mt-7 inline-block w-full rounded-md bg-yellow-400 px-6 py-3 text-center text-sm font-semibold text-blue-950 transition hover:bg-yellow-300 sm:mt-8 sm:w-auto sm:text-base"
          >
            Start Admission Process
          </a>
        </div>
        {/* Requirements */}
        <div className="rounded-2xl bg-white p-5 shadow-lg sm:rounded-3xl sm:p-8">
          <h3 className="text-xl font-bold text-blue-950 sm:text-2xl">
            Admission Requirements
          </h3>
          <div className="mt-5 space-y-4 sm:mt-6">
            {requirements.map((requirement) => (
              <div
                key={requirement}
                className="flex items-start gap-3"
              >
                <CheckCircle
                  size={20}
                  className="mt-1 shrink-0 text-yellow-500 sm:h-[22px] sm:w-[22px]"
                />
                <p className="text-sm leading-6 text-gray-600 sm:text-base">
                  {requirement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Admissions;