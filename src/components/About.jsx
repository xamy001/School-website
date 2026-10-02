function About() {
  const management = [
    {
      name: "Dr. David Okafor",
      role: "Principal",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80",
      intro:
        "Dr. Okafor provides strategic leadership for the school, focusing on academic excellence, student development and a positive learning environment.",
    },
    {
      name: "Mrs. Grace Williams",
      role: "Vice Principal, Academic",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=80",
      intro:
        "Mrs. Williams oversees academic programs and works closely with teachers to maintain high standards of teaching, learning and student achievement.",
    },
    {
      name: "Mr. Daniel Eze",
      role: "Vice Principal, Administration",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=80",
      intro:
        "Mr. Eze coordinates the school's administrative operations and helps maintain a safe, organized and supportive environment for students and staff.",
    },
  ];

  return (
    <section
      id="about"
      data-aos="fade-up"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* About Content */}
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">

          {/* Content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-500 sm:text-sm sm:tracking-[0.25em]">
              About Us
            </p>

            <h2 className="mt-3 text-2xl font-bold leading-tight text-blue-950 sm:mt-4 sm:text-3xl lg:text-4xl">
              Nurturing Excellence in Every Learner
            </h2>

            <p className="mt-5 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
              At Xamy International School, we believe every child deserves a
              learning environment that inspires confidence, curiosity and
              growth. Our school combines academic excellence with strong moral
              values, creativity and a supportive community.
            </p>

            <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
              We focus on developing the whole child through quality teaching,
              engaging experiences and a culture built on respect, discipline
              and achievement.
            </p>
          </div>

          {/* Statistics */}
          <div className="rounded-2xl bg-blue-50 p-5 shadow-sm sm:rounded-3xl sm:p-8">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">

              <div className="rounded-xl bg-white p-4 shadow-sm sm:rounded-2xl sm:p-5">
                <p className="text-2xl font-bold text-blue-950 sm:text-3xl">
                  15+
                </p>
                <p className="mt-2 text-xs text-gray-600 sm:text-sm">
                  Years of excellence
                </p>
              </div>

              <div className="rounded-xl bg-white p-4 shadow-sm sm:rounded-2xl sm:p-5">
                <p className="text-2xl font-bold text-blue-950 sm:text-3xl">
                  20+
                </p>
                <p className="mt-2 text-xs text-gray-600 sm:text-sm">
                  Expert teachers
                </p>
              </div>

              <div className="rounded-xl bg-white p-4 shadow-sm sm:rounded-2xl sm:p-5">
                <p className="text-2xl font-bold text-blue-950 sm:text-3xl">
                  900+
                </p>
                <p className="mt-2 text-xs text-gray-600 sm:text-sm">
                  Happy students
                </p>
              </div>

              <div className="rounded-xl bg-white p-4 shadow-sm sm:rounded-2xl sm:p-5">
                <p className="text-2xl font-bold text-blue-950 sm:text-3xl">
                  98%
                </p>
                <p className="mt-2 text-xs text-gray-600 sm:text-sm">
                  Student satisfaction
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* School Management */}
        <div className="mt-20 sm:mt-24">

          {/* Management Heading */}
          <div className="mx-auto max-w-2xl text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-500 sm:text-sm sm:tracking-[0.25em]">
              School Management
            </p>

            <h3 className="mt-3 text-2xl font-bold text-blue-950 sm:text-3xl lg:text-4xl">
              Meet Our School Management
            </h3>

            <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
              Our management team is committed to creating an environment
              where every student can learn, grow and achieve their full
              potential.
            </p>

          </div>

          {/* Management Cards */}
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {management.map((member) => (
              <div
                key={member.name}
                data-aos="fade-up"
                className="group overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-gray-100 transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* Management Image */}
                <div className="relative h-80 overflow-hidden">

                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-transparent" />

                  {/* Role Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="rounded-full bg-yellow-400 px-4 py-2 text-xs font-bold text-blue-950 shadow-md">
                      {member.role}
                    </span>
                  </div>

                </div>

                {/* Management Information */}
                <div className="p-6">

                  <h4 className="text-xl font-bold text-blue-950">
                    {member.name}
                  </h4>

                  <div className="mt-3 h-1 w-10 rounded-full bg-yellow-400" />

                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {member.intro}
                  </p>

                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;