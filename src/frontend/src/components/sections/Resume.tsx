import { Button } from "@/components/ui/button";
import { Award, Download, Mail, MapPin, Phone } from "lucide-react";

const profilePhoto =
  "/assets/uploads/image-019d273f-5bcb-726b-a4a1-196bcfedb0d3-3.png";

function WhatsAppIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function FacebookIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function Resume() {
  const handleDownload = () => {
    const resumeEl = document.getElementById("resume-content");
    if (!resumeEl) return;
    const origin = window.location.origin;
    const styleLinks = Array.from(document.styleSheets)
      .map((sheet) => sheet.href)
      .filter(Boolean)
      .map((href) => `<link rel="stylesheet" href="${href}">`)
      .join("\n");
    const resumeHtml = resumeEl.outerHTML;
    const printWindow = window.open("", "_blank", "width=960,height=700");
    if (!printWindow) {
      alert(
        "Pop-ups are blocked. Please allow pop-ups for this site and try again.",
      );
      return;
    }
    printWindow.document.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Ainomugisha John Labera — Resume</title>
  <base href="${origin}/" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
  ${styleLinks}
  <style>
    @page { margin: 0; size: A4 portrait; }
    * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; box-sizing: border-box; }
    html, body {
      margin: 0;
      padding: 0;
      width: 210mm;
      height: 297mm;
      background: white;
    }
    #resume-content {
      width: 210mm !important;
      min-height: 297mm !important;
      display: flex !important;
      flex-direction: column !important;
      box-shadow: none !important;
    }
    #resume-body {
      display: flex !important;
      flex: 1 1 0% !important;
      min-height: 0 !important;
    }
    #resume-sidebar {
      flex-shrink: 0 !important;
      width: 30% !important;
      align-self: stretch !important;
    }
    #resume-main {
      flex: 1 1 0% !important;
      background: #ffffff !important;
      align-self: stretch !important;
    }
  </style>
</head>
<body>
  ${resumeHtml}
  <script>
    window.addEventListener('load', function () {
      setTimeout(function () { window.print(); window.close(); }, 800);
    });
  </script>
</body>
</html>`);
    printWindow.document.close();
  };

  return (
    <section id="resume" className="py-20 bg-sand">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="mb-8">
          <Button
            onClick={handleDownload}
            className="bg-forest hover:bg-forest-dark text-sand font-body font-semibold px-6 py-2 rounded-sm shadow-md"
            data-ocid="resume.primary_button"
          >
            <Download className="mr-2 h-4 w-4" /> Download PDF
          </Button>
        </div>

        <div
          id="resume-content"
          className="bg-white shadow-2xl"
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
                FREELANCE TOUR GUIDE
              </p>
            </div>
          </div>

          {/* Body */}
          <div id="resume-body" className="flex">
            {/* Sidebar */}
            <div
              id="resume-sidebar"
              className="w-[30%] flex-shrink-0 px-6 py-7 space-y-6"
              style={{ backgroundColor: "#0B5A3A", color: "#F6F1EA" }}
            >
              <section>
                <h3
                  className="text-sm font-bold tracking-widest uppercase mb-3 pb-1"
                  style={{
                    color: "#D4A017",
                    borderBottom: "1px solid rgba(212,160,23,0.4)",
                  }}
                >
                  Contact
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <MapPin
                      size={15}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "#D4A017" }}
                    />
                    <span>Kampala &amp; Kabale, Uganda</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "#D4A017" }}
                    >
                      <WhatsAppIcon size={15} />
                    </span>
                    <span>+256 751 348 639</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Phone
                      size={15}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "#D4A017" }}
                    />
                    <span>+256 781 881 037</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Mail
                      size={15}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "#D4A017" }}
                    />
                    <span>ainomugishajohnie@gmail.com</span>
                  </li>
                </ul>
              </section>

              {/* Social Links */}
              <section>
                <h3
                  className="text-sm font-bold tracking-widest uppercase mb-3 pb-1"
                  style={{
                    color: "#D4A017",
                    borderBottom: "1px solid rgba(212,160,23,0.4)",
                  }}
                >
                  Socials
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <span style={{ color: "#1877F2" }}>
                      <FacebookIcon size={15} />
                    </span>
                    <span>Johnie Reloaded</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span style={{ color: "#E1306C" }}>
                      <InstagramIcon size={15} />
                    </span>
                    <span>Johnie Reloaded</span>
                  </li>
                </ul>
              </section>

              <section>
                <h3
                  className="text-sm font-bold tracking-widest uppercase mb-3 pb-1"
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
                      className="text-sm px-2 py-0.5 rounded-sm font-medium"
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

              <section>
                <h3
                  className="text-sm font-bold tracking-widest uppercase mb-3 pb-1"
                  style={{
                    color: "#D4A017",
                    borderBottom: "1px solid rgba(212,160,23,0.4)",
                  }}
                >
                  Languages
                </h3>
                <ul className="space-y-1.5 text-sm">
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

              <section>
                <div
                  className="rounded-sm p-3 text-sm"
                  style={{
                    border: "1px solid #D4A017",
                    backgroundColor: "rgba(212,160,23,0.08)",
                  }}
                >
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Award size={14} style={{ color: "#D4A017" }} />
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
            </div>

            {/* Right Main */}
            <div
              id="resume-main"
              className="flex-1 px-8 py-7"
              style={{ backgroundColor: "#ffffff" }}
            >
              {/* Biography */}
              <section className="mb-8">
                <h2
                  className="text-lg font-bold tracking-widest uppercase mb-1"
                  style={{
                    color: "#0B5A3A",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  Professional Biography
                </h2>
                <div
                  className="h-0.5 w-12 mb-4"
                  style={{ backgroundColor: "#D4A017" }}
                />
                <div
                  className="space-y-4 text-base leading-relaxed"
                  style={{
                    color: "#3a2a1a",
                    fontSize: "1rem",
                    lineHeight: "1.8",
                  }}
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
                    Institute of Tourism and Field Guiding, which equips me with
                    strong guiding, visitor safety and interpretation skills.
                    Based in Kabale and Kampala, Uganda.
                  </p>
                </div>
              </section>

              {/* Educational Background */}
              <section>
                <h2
                  className="text-lg font-bold tracking-widest uppercase mb-1"
                  style={{
                    color: "#0B5A3A",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  Educational Background
                </h2>
                <div
                  className="h-0.5 w-12 mb-4"
                  style={{ backgroundColor: "#D4A017" }}
                />
                <div className="grid grid-cols-2 gap-x-6 gap-y-5 text-base">
                  <div>
                    <p
                      className="font-semibold text-xs uppercase tracking-wide mb-0.5"
                      style={{ color: "#D4A017" }}
                    >
                      University
                    </p>
                    <p style={{ color: "#3a2a1a" }}>
                      Kampala International University
                    </p>
                  </div>
                  <div>
                    <p
                      className="font-semibold text-xs uppercase tracking-wide mb-0.5"
                      style={{ color: "#D4A017" }}
                    >
                      A-Level
                    </p>
                    <p style={{ color: "#3a2a1a" }}>Kigezi College Butobere</p>
                    <p className="text-sm mt-0.5" style={{ color: "#7a6a5a" }}>
                      Uganda Advanced Certificate of Education
                    </p>
                  </div>
                  <div>
                    <p
                      className="font-semibold text-xs uppercase tracking-wide mb-0.5"
                      style={{ color: "#D4A017" }}
                    >
                      O-Level
                    </p>
                    <p style={{ color: "#3a2a1a" }}>
                      Kabale Brainstorm High School
                    </p>
                    <p className="text-sm mt-0.5" style={{ color: "#7a6a5a" }}>
                      Uganda Certificate of Education
                    </p>
                  </div>
                  <div>
                    <p
                      className="font-semibold text-xs uppercase tracking-wide mb-0.5"
                      style={{ color: "#D4A017" }}
                    >
                      Primary
                    </p>
                    <p style={{ color: "#3a2a1a" }}>
                      St. Maria Goretti Nursery &amp; Preparatory School
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
