import { Button } from "@/components/ui/button";
import { Award, Download, Mail, MapPin, Phone } from "lucide-react";

const heroImage = "/assets/generated/hero-uganda-landscape.dim_1920x1080.jpg";
const profilePhoto =
  "/assets/uploads/image-019d273f-5bcb-726b-a4a1-196bcfedb0d3-3.png";

export function Resume() {
  const handleDownload = () => {
    document.body.classList.add("printing-resume");
    window.print();
    // Remove class after print dialog closes
    window.addEventListener(
      "afterprint",
      () => {
        document.body.classList.remove("printing-resume");
      },
      { once: true },
    );
    // Fallback removal in case afterprint doesn't fire
    setTimeout(() => {
      document.body.classList.remove("printing-resume");
    }, 3000);
  };

  return (
    <section id="resume" className="py-20 bg-sand">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-gold" />
          <span className="text-brown text-xs tracking-[0.3em] uppercase font-medium">
            Who He Is
          </span>
        </div>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-forest uppercase tracking-wide mb-4">
          Resume
        </h2>
        <div className="w-16 h-1 bg-gold mb-8" />

        {/* Download button */}
        <div className="mb-8 no-print">
          <Button
            onClick={handleDownload}
            className="bg-forest hover:bg-forest-dark text-sand font-body font-semibold px-6 py-2 rounded-sm shadow-md"
            data-ocid="resume.primary_button"
          >
            <Download className="mr-2 h-4 w-4" /> Download PDF
          </Button>
        </div>

        {/* Resume Card */}
        <div
          id="resume-content"
          className="bg-white shadow-2xl overflow-hidden"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-6 px-8 py-8"
            style={{ backgroundColor: "#0B5A3A" }}
          >
            <div className="flex-shrink-0">
              <img
                src={profilePhoto}
                alt="Ainomugisha John Labera"
                crossOrigin="anonymous"
                className="w-28 h-28 rounded-full object-cover"
                style={{ border: "3px solid #D4A017" }}
              />
            </div>
            <div>
              <h1
                className="text-3xl font-bold tracking-widest uppercase"
                style={{
                  color: "#ffffff",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                AINOMUGISHA JOHN LABERA
              </h1>
              <p
                className="text-sm font-semibold tracking-widest uppercase mt-1"
                style={{ color: "#D4A017" }}
              >
                FREELANCE TOUR GUIDE | UGANDA
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="flex">
            {/* LEFT SIDEBAR */}
            <div
              className="w-[35%] flex-shrink-0 px-6 py-7 space-y-6"
              style={{ backgroundColor: "#0B5A3A", color: "#F6F1EA" }}
            >
              {/* Contact */}
              <section>
                <h3
                  className="text-xs font-bold tracking-widest uppercase mb-3 pb-1"
                  style={{
                    color: "#D4A017",
                    borderBottom: "1px solid rgba(212,160,23,0.4)",
                  }}
                >
                  Contact
                </h3>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-start gap-2">
                    <MapPin
                      size={13}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "#D4A017" }}
                    />
                    <span>Kampala &amp; Kabale, Uganda</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Phone
                      size={13}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "#D4A017" }}
                    />
                    <span>+256 751 348 639</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Phone
                      size={13}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "#D4A017" }}
                    />
                    <span>+256 781 881 037</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Mail
                      size={13}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "#D4A017" }}
                    />
                    <span>ainomugishajohnie@gmail.com</span>
                  </li>
                </ul>
              </section>

              {/* Expertise */}
              <section>
                <h3
                  className="text-xs font-bold tracking-widest uppercase mb-3 pb-1"
                  style={{
                    color: "#D4A017",
                    borderBottom: "1px solid rgba(212,160,23,0.4)",
                  }}
                >
                  Expertise
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Wildlife Safaris",
                    "Cultural Tours",
                    "Adventure Travel",
                    "Visitor Safety",
                    "Heritage Interpretation",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-0.5 rounded-sm font-medium"
                      style={{
                        backgroundColor: "rgba(212,160,23,0.2)",
                        color: "#F6F1EA",
                        border: "1px solid rgba(212,160,23,0.4)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              {/* Languages */}
              <section>
                <h3
                  className="text-xs font-bold tracking-widest uppercase mb-3 pb-1"
                  style={{
                    color: "#D4A017",
                    borderBottom: "1px solid rgba(212,160,23,0.4)",
                  }}
                >
                  Languages
                </h3>
                <ul className="space-y-1 text-xs">
                  {["English", "Luganda", "Rukiga", "Kinyarwanda"].map(
                    (lang) => (
                      <li key={lang} className="flex items-center gap-2">
                        <span style={{ color: "#D4A017" }}>•</span>
                        {lang}
                      </li>
                    ),
                  )}
                </ul>
              </section>

              {/* Certified */}
              <section>
                <div
                  className="rounded-sm p-3 text-xs"
                  style={{
                    border: "1px solid #D4A017",
                    backgroundColor: "rgba(212,160,23,0.08)",
                  }}
                >
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Award size={13} style={{ color: "#D4A017" }} />
                    <span
                      className="font-bold tracking-wide uppercase text-xs"
                      style={{ color: "#D4A017" }}
                    >
                      Certified
                    </span>
                  </div>
                  <p style={{ color: "#F6F1EA", lineHeight: 1.5 }}>
                    Level One Guiding Certificate — African Institute of Tourism
                    and Field Guiding
                  </p>
                </div>
              </section>

              {/* Education */}
              <section>
                <h3
                  className="text-xs font-bold tracking-widest uppercase mb-3 pb-1"
                  style={{
                    color: "#D4A017",
                    borderBottom: "1px solid rgba(212,160,23,0.4)",
                  }}
                >
                  Educational Background
                </h3>
                <div className="space-y-3 text-xs">
                  <div>
                    <p className="font-semibold" style={{ color: "#D4A017" }}>
                      University
                    </p>
                    <p style={{ color: "#F6F1EA" }}>
                      Kampala International University
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: "#D4A017" }}>
                      A-Level
                    </p>
                    <p style={{ color: "#F6F1EA" }}>Kigezi College Butobere</p>
                    <p style={{ color: "rgba(246,241,234,0.65)" }}>
                      Uganda Advanced Certificate of Education
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: "#D4A017" }}>
                      O-Level
                    </p>
                    <p style={{ color: "#F6F1EA" }}>
                      Kabale Brainstorm High School
                    </p>
                    <p style={{ color: "rgba(246,241,234,0.65)" }}>
                      Uganda Certificate of Education
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: "#D4A017" }}>
                      Primary
                    </p>
                    <p style={{ color: "#F6F1EA" }}>
                      St. Maria Goretti Nursery &amp; Preparatory School
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* RIGHT MAIN */}
            <div
              className="flex-1 px-8 py-7 space-y-7 relative"
              style={{
                backgroundImage: `url('${heroImage}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay for readability */}
              <div
                className="absolute inset-0"
                style={{ backgroundColor: "rgba(246,241,234,0.93)" }}
              />
              <div className="relative z-10 space-y-7">
                {/* Biography */}
                <section>
                  <h2
                    className="text-base font-bold tracking-widest uppercase mb-1"
                    style={{
                      color: "#0B5A3A",
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    Professional Biography
                  </h2>
                  <div
                    className="h-0.5 w-12 mb-3"
                    style={{ backgroundColor: "#D4A017" }}
                  />
                  <div
                    className="space-y-3 text-sm leading-relaxed"
                    style={{ color: "#3a2a1a" }}
                  >
                    <p>
                      I am an experienced Ugandan freelance Tour Guide with over
                      eight years of professional experience working with Monkey
                      Adventures, Authentic Africa Safaris, and Birdnest Resort
                      Tours and Travel Ltd. I specialize in wildlife safaris,
                      cultural tours and adventure travel across Uganda and
                      Rwanda.
                    </p>
                    <p>
                      I hold a Level One Guiding Certificate from the African
                      Institute of Tourism and Field Guiding, which equips me
                      with strong guiding, visitor safety and interpretation
                      skills. Johnie is known for his friendly personality, deep
                      local knowledge and passion for sharing Uganda and
                      Rwanda's nature and cultural heritage with visitors. I am
                      based in Kabale and Kampala Uganda and I enjoy travelling
                      and exploring new destinations.
                    </p>
                  </div>
                </section>

                {/* Professional Overview */}
                <section>
                  <h2
                    className="text-base font-bold tracking-widest uppercase mb-1"
                    style={{
                      color: "#0B5A3A",
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    Professional Overview
                  </h2>
                  <div
                    className="h-0.5 w-12 mb-3"
                    style={{ backgroundColor: "#D4A017" }}
                  />
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Role", value: "Freelance Tour Guide" },
                      { label: "Experience", value: "8 Years" },
                      {
                        label: "Companies",
                        value:
                          "Monkey Adventures · Authentic Africa Safaris · Birdnest Resort Tours & Travel Ltd",
                      },
                      {
                        label: "Certification",
                        value:
                          "Level One Guiding — African Institute of Tourism and Field Guiding",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="p-3 rounded-sm"
                        style={{
                          backgroundColor: "rgba(11,90,58,0.07)",
                          border: "1px solid rgba(11,90,58,0.15)",
                        }}
                      >
                        <p
                          className="text-xs font-bold uppercase tracking-wide mb-0.5"
                          style={{ color: "#7A4B2A" }}
                        >
                          {item.label}
                        </p>
                        <p className="text-xs" style={{ color: "#1a1a1a" }}>
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Work Experience */}
                <section>
                  <h2
                    className="text-base font-bold tracking-widest uppercase mb-1"
                    style={{
                      color: "#0B5A3A",
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    Work Experience
                  </h2>
                  <div
                    className="h-0.5 w-12 mb-3"
                    style={{ backgroundColor: "#D4A017" }}
                  />
                  <div className="space-y-4">
                    {[
                      {
                        company: "Monkey Adventures",
                        role: "TOUR & SAFARI GUIDE",
                        description:
                          "Led immersive wildlife and adventure tours in Uganda's national parks and forests.",
                      },
                      {
                        company: "Birdnest Resort Tours & Travel Ltd",
                        role: "TOUR GUIDE & TRAVEL CONSULTANT",
                        description:
                          "Guided international visitors on premium safari experiences.",
                      },
                      {
                        company: "Authentic Africa Safaris",
                        role: "FREELANCE SAFARI GUIDE",
                        description:
                          "Delivered cultural and nature-based tours specialising in heritage sites.",
                      },
                    ].map((exp, i) => (
                      <div
                        key={exp.company}
                        className="flex gap-3"
                        data-ocid={`resume.item.${i + 1}`}
                      >
                        <div
                          className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: "#D4A017" }}
                        />
                        <div>
                          <p
                            className="text-sm font-bold"
                            style={{ color: "#0B5A3A" }}
                          >
                            {exp.company}
                          </p>
                          <p
                            className="text-xs font-semibold tracking-wider uppercase"
                            style={{ color: "#7A4B2A" }}
                          >
                            {exp.role}
                          </p>
                          <p
                            className="text-xs mt-0.5"
                            style={{ color: "#3a2a1a" }}
                          >
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
