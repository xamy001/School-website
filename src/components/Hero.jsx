function Hero() {
  return (
    <section
      id="home"
      data-aos="fade-up"
      className="relative flex min-h-screen items-center overflow-hidden bg-blue-950"
    >
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=2000&q=80"
        alt="Students in a classroom"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-blue-950/75"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-32 sm:px-6 sm:py-36 lg:px-8 lg:py-40">
        <div className="max-w-3xl">
          {/* Tagline */}
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400 sm:text-sm sm:tracking-[0.3em]">
            Inspiring Minds. Building Futures.
          </p>

          {/* Heading */}
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Where Every Child
            <span className="block text-yellow-400">
              Learns, Grows & Thrives.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-sm leading-6 text-gray-200 sm:mt-6 sm:text-base sm:leading-7 md:text-lg">
            Welcome to Xamy International School, where quality education,
            character development and a passion for learning come together to
            prepare students for a brighter future.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
            <a
              href="#admissions"
              className="w-full rounded-md bg-yellow-400 px-6 py-3 text-center text-sm font-semibold text-blue-950 transition hover:bg-yellow-300 sm:w-auto sm:px-7 sm:text-base"
            >
              Apply for Admission
            </a>

            <a
              href="#about"
              className="w-full rounded-md border border-white px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-blue-950 sm:w-auto sm:px-7 sm:text-base"
            >
              Discover Our School
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;