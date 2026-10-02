import {
  Trophy,
  Users,
  Palette,
  Dumbbell,
} from "lucide-react";
function SchoolLife() {
  const activities = [
    {
      icon: Trophy,
      title: "Clubs & Competitions",
      text: "Students participate in academic competitions, debates, quizzes and school clubs that build confidence and teamwork.",
    },
    {
      icon: Users,
      title: "Student Community",
      text: "We encourage friendship, collaboration and respect through activities that bring students together.",
    },
    {
      icon: Palette,
      title: "Arts & Creativity",
      text: "Students explore their creativity through music, arts, drama and other cultural activities.",
    },
    {
      icon: Dumbbell,
      title: "Sports & Fitness",
      text: "Our students stay active through sports, physical education and recreational activities.",
    },
  ];
  return (
    <section
      id="school-life"
      data-aos="fade-up"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-500 sm:text-sm sm:tracking-[0.25em]">
            School Life
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-blue-950 sm:text-3xl lg:text-4xl">
            More Than Just the Classroom
          </h2>
          <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
            We believe students learn and grow through experiences beyond
            their classrooms. Our school community encourages creativity,
            friendship, leadership and personal development.
          </p>
        </div>
        {/* Activities */}
        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div
                key={activity.title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg sm:p-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-950 text-yellow-400">
                  <Icon size={27} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-blue-950">
                  {activity.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                  {activity.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default SchoolLife;