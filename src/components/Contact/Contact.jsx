import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const EMAIL = "lensegudisa094@gmail.com";

const emptyForm = { name: "", email: "", message: "" };

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const service = searchParams.get("service");
    if (!service) return;
    setForm((current) => ({
      ...current,
      message: current.message || `Hi Lense, I would like to talk about ${service}.`,
    }));
  }, [searchParams]);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setSent(false);
  };

  const validate = () => {
    const next = {};
    if (form.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Enter a valid email address.";
    }
    if (form.message.trim().length < 10) {
      next.message = "Message should be at least 10 characters.";
    }
    return next;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSent(false);
      return;
    }

    const subject = encodeURIComponent(`Portfolio message from ${form.name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`
    );
    const mailto = document.createElement("a");
    mailto.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    mailto.click();

    setSent(true);
    setForm(emptyForm);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Send a message and your email app will open with it ready to send.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-2xl relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 rounded-full bg-red-400/40 blur-2xl scale-110" />
            </div>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="relative flex flex-col gap-5 bg-white/80 dark:bg-zinc-900/90 p-8 sm:p-10 rounded-3xl border border-gray-200 dark:border-zinc-700 backdrop-blur-sm w-full shadow-lg"
            >
              {sent && (
                <p className="rounded-xl bg-green-50 text-green-800 px-4 py-3 text-sm" role="status">
                  Your email app should open with this message. If it does not,
                  write directly to {EMAIL}.
                </p>
              )}

              <div>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={updateField}
                  placeholder="Your Name"
                  aria-invalid={Boolean(errors.name)}
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-zinc-700 outline-none bg-white dark:bg-zinc-950 text-gray-800 dark:text-zinc-100 placeholder-gray-400 focus:border-red-500 transition-all"
                />
                {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={updateField}
                  placeholder="Your Email"
                  aria-invalid={Boolean(errors.email)}
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-zinc-700 outline-none bg-white dark:bg-zinc-950 text-gray-800 dark:text-zinc-100 placeholder-gray-400 focus:border-red-500 transition-all"
                />
                {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={updateField}
                  placeholder="Your Message"
                  aria-invalid={Boolean(errors.message)}
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-zinc-700 outline-none resize-none bg-white dark:bg-zinc-950 text-gray-800 dark:text-zinc-100 placeholder-gray-400 focus:border-red-500 transition-all"
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-medium text-base transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 2L11 13" />
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                </svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
