import { useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import "../styles/DownloadButton.css";

function DownloadButton() {
  function handleDownloadPdf() {
    const input = document.getElementById("cv-content"); // Confirm this matches the ID
    if (!input) {
      alert("Element not found. Please check the ID.");
      return;
    }

    // Target elements for temporary style adjustment
    const elements = document.querySelectorAll(".main-content__section-title");

    // Store original styles to revert back after canvas generation
    const originalStyles = [];
    elements.forEach((element, index) => {
      originalStyles[index] = element.style.paddingBottom; // Store the original padding
      element.style.paddingBottom = "0.8em"; // Temporarily change padding for PDF generation
    });

    // Increase the scale for a higher quality image capture
    const scale = 2; // Adjust this value as needed, higher for better quality

    html2canvas(input, {
      scrollY: -window.scrollY,
      useCORS: true,
      logging: true,
      letterRendering: true,
      scale: scale, // Apply the scale factor here
    })
      .then((canvas) => {
        // Immediately revert the styles after canvas generation
        elements.forEach((element, index) => {
          element.style.paddingBottom = originalStyles[index]; // Revert to original padding
        });

        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "p",
          unit: "pt",
          format: "letter",
        });

        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight(); // Adjust for content scaling

        // Adjust scaling to account for the new scale factor
        const contentScale = Math.min(
          pageWidth / (canvas.width / scale),
          pageHeight / (canvas.height / scale)
        );
        const scaledWidth = (canvas.width / scale) * contentScale;
        const scaledHeight = (canvas.height / scale) * contentScale;

        // Calculate vertical position to center the content
        const yPos = (pdf.internal.pageSize.getHeight() - scaledHeight) / 2;

        pdf.addImage(imgData, "PNG", 0, yPos, scaledWidth, scaledHeight);

        pdf.save("CV_Download.pdf");
      })
      .catch((error) => {
        console.error("Error generating PDF:", error);
        alert("Error generating PDF. Check the console for details.");

        // Ensure styles are reverted in case of an error during canvas generation
        elements.forEach((element, index) => {
          element.style.paddingBottom = originalStyles[index];
        });
      });
  }

  return (
    /* 1- DOWNLOAD BUTTON */
    <button
      className="DownloadButton"
      type="button"
      onClick={handleDownloadPdf}
    ></button>
  );
}

export default DownloadButton;
