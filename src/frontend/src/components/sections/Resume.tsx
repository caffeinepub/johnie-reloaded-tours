import { Button } from "@/components/ui/button";
import { Award, Download, Mail, MapPin, Phone } from "lucide-react";

const profilePhoto =
  "/assets/uploads/image-019d273f-5bcb-726b-a4a1-196bcfedb0d3-3.png";

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
                  className="text-base font-bold tracking-widest uppercase mb-1"
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
                  className="space-y-4 text-base leading-loose"
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
                    Institute of Tourism and Field Guiding, which equips me with
                    strong guiding, visitor safety and interpretation skills.
                    Based in Kabale and Kampala, Uganda.
                  </p>
                </div>
              </section>

              {/* Educational Background */}
              <section>
                <h2
                  className="text-base font-bold tracking-widest uppercase mb-1"
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
                <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
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
                    <p className="text-xs mt-0.5" style={{ color: "#7a6a5a" }}>
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
                    <p className="text-xs mt-0.5" style={{ color: "#7a6a5a" }}>
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
