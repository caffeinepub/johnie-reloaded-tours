import { siteContent } from "@/data/content";
import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^@]+@[^@]+\.[^@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-brown py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold/60" />
            <span className="text-gold/70 text-xs tracking-[0.3em] uppercase font-medium">
              Get In Touch
            </span>
            <div className="h-px w-10 bg-gold/60" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-sand uppercase tracking-wide">
            Contact & Booking
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-5" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-8">
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                data-ocid="contact.success_state"
              >
                <CheckCircle size={56} className="text-gold" />
                <h3 className="font-display text-2xl font-bold text-sand">
                  Thank You!
                </h3>
                <p className="text-sand/70">Our team will be in touch soon.</p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                  className="text-gold text-sm underline hover:text-gold-light transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                data-ocid="contact.modal"
              >
                <h3 className="font-display text-2xl font-bold text-sand mb-6">
                  Book a Safari
                </h3>
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sand/80 text-xs tracking-widest uppercase mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sand placeholder:text-sand/40 focus:outline-none focus:border-gold transition-colors text-sm"
                      data-ocid="contact.input"
                    />
                    {errors.name && (
                      <p
                        className="text-red-400 text-xs mt-1"
                        data-ocid="contact.error_state"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sand/80 text-xs tracking-widest uppercase mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sand placeholder:text-sand/40 focus:outline-none focus:border-gold transition-colors text-sm"
                      data-ocid="contact.input"
                    />
                    {errors.email && (
                      <p
                        className="text-red-400 text-xs mt-1"
                        data-ocid="contact.error_state"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sand/80 text-xs tracking-widest uppercase mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      placeholder="Tell us about your ideal Uganda experience..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                      rows={5}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sand placeholder:text-sand/40 focus:outline-none focus:border-gold transition-colors text-sm resize-none"
                      data-ocid="contact.textarea"
                    />
                    {errors.message && (
                      <p
                        className="text-red-400 text-xs mt-1"
                        data-ocid="contact.error_state"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold-light text-forest-dark font-bold text-sm tracking-widest uppercase px-6 py-4 rounded-lg transition-all duration-200 shadow-gold"
                    data-ocid="contact.submit_button"
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
