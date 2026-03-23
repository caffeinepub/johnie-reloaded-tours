import { useState } from "react";

export function usePdfDownload() {
  const [loading, setLoading] = useState(false);

  const download = async () => {
    setLoading(true);
    const html2pdf = (await import("html2pdf.js")).default;

    const navbar = document.querySelector("header");
    const pdfBtns = Array.from(document.querySelectorAll("[data-pdf-hide]"));
    if (navbar) navbar.style.display = "none";
    for (const el of pdfBtns) {
      (el as HTMLElement).style.display = "none";
    }

    window.scrollTo(0, 0);

    const element = document.querySelector("main") || document.body;

    const opt = {
      margin: 0,
      filename: "Ainomugisha-John-Labera-Resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, logging: false },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    await html2pdf().set(opt).from(element).save();

    if (navbar) navbar.style.display = "";
    for (const el of pdfBtns) {
      (el as HTMLElement).style.display = "";
    }
    setLoading(false);
  };

  return { download, loading };
}
