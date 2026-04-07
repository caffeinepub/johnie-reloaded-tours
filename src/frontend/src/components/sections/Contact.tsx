import { siteContent } from "@/data/content";
import { CheckCircle, Facebook, Instagram } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

// WhatsApp SVG icon
function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      role="img"
      aria-label="WhatsApp"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>WhatsApp</title>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

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

        {/* Social & contact links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <a
            href={`https://wa.me/${siteContent.whatsapp.replace("+", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#25D366] text-sm font-medium px-4 py-2 rounded-full transition-all duration-200"
          >
            <WhatsAppIcon size={16} />
            {siteContent.whatsappDisplay}
          </a>
          <a
            href={siteContent.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/15 text-sand/80 hover:text-gold text-sm font-medium px-4 py-2 rounded-full transition-all duration-200"
          >
            <Instagram size={15} />
            Johnie Reloaded
          </a>
          <a
            href={siteContent.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/15 text-sand/80 hover:text-gold text-sm font-medium px-4 py-2 rounded-full transition-all duration-200"
          >
            <Facebook size={15} />
            Johnie Reloaded
          </a>
        </motion.div>

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
