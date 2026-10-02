import { CalendarDays, ArrowRight } from "lucide-react";

function NewsEvents() {
  const events = [
    {
      date: "15",
      month: "OCT",
      title: "New Academic Session Begins",
      text: "We welcome our students back as we begin another exciting academic session.",
    },
    {
      date: "25",
      month: "OCT",
      title: "Inter-House Sports Competition",
      text: "Students will come together for a fun-filled day of sports, teamwork and healthy competition.",
    },
    {
      date: "08",
      month: "NOV",
      title: "Parents & Teachers Meeting",
      text: "Parents and guardians are invited to meet with teachers and discuss student progress.",
    },
  ];

  return (
    <section
      id="news"
      data-aos="fade-up"
      className="bg-gray-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-500 sm:text-sm sm:tracking-[0.25em]">
              News & Events
            </p>

            <h2 className="mt-3 text-2xl font-bold leading-tight text-blue-950 sm:text-3xl lg:text-4xl">
              What's Happening at Xamy
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
              Stay updated with important school announcements, upcoming
              events and activities happening within our school community.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-2 font-semibold text-blue-900 transition hover:text-yellow-500"
          >
            View More
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Events */}
        <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.title}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-4 bg-blue-950 px-6 py-5 text-white">
                <div className="rounded-xl bg-yellow-400 px-4 py-2 text-center text-blue-950">
                  <p className="text-2xl font-bold leading-none">
                    {event.date}
                  </p>

                  <p className="mt-1 text-xs font-bold">
                    {event.month}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-200">
                  <CalendarDays size={17} />
                  <span>School Event</span>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <h3 className="text-lg font-bold text-blue-950 sm:text-xl">
                  {event.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                  {event.text}
                </p>

                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-900 transition hover:text-yellow-500"
                >
                  Learn More
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default NewsEvents;
