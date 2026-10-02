import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xzezqyok", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully! We will get back to you soon.");

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert(
          "Sorry, your message could not be sent. Please try again."
        );
      }
    } catch (error) {
      alert(
        "Something went wrong. Please check your internet connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      data-aos="fade-up"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-500 sm:text-sm sm:tracking-[0.25em]">
            Contact Us
          </p>

          <h2 className="mt-3 text-2xl font-bold leading-tight text-blue-950 sm:text-3xl lg:text-4xl">
            We'd Love to Hear From You
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
            Have a question about admissions, academics or school life?
            Reach out to our team and we'll be happy to assist you.
          </p>
        </div>

        {/* Contact Content */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:mt-12">

          {/* Contact Information */}
          <div className="rounded-2xl bg-blue-950 p-6 text-white sm:p-8">
            <h3 className="text-2xl font-bold">
              Get in Touch
            </h3>

            <p className="mt-4 text-sm leading-6 text-gray-200 sm:text-base sm:leading-7">
              Our team is available to answer questions from parents,
              guardians and prospective students.
            </p>

            <div className="mt-8 space-y-6">

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-blue-950">
                  <MapPin size={21} />
                </div>

                <div>
                  <p className="font-semibold">Our Location</p>
                  <p className="mt-1 text-sm text-gray-300">
                    Port Harcourt, Rivers State, Nigeria
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-blue-950">
                  <Phone size={21} />
                </div>

                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="mt-1 text-sm text-gray-300">
                    +234 800 000 0000
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-blue-950">
                  <Mail size={21} />
                </div>

                <div>
                  <p className="font-semibold">Email</p>
                  <p className="mt-1 break-all text-sm text-gray-300">
                    info@xamyinternationalschool.com
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">

              {/* Name */}
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-blue-950">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-yellow-400"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-blue-950">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-yellow-400"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-blue-950">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+234..."
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-yellow-400"
                />
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-blue-950">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="How can we help you?"
                  required
                  className="w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-yellow-400"
                ></textarea>
              </div>

            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-950 px-6 py-3 font-semibold text-white transition hover:bg-blue-900 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
              <Send size={18} />
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;