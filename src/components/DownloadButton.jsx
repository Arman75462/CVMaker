import { useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Loader from "./Loader.jsx";
import "../styles/DownloadButton.css";

function DownloadButton() {
  const [isLoading, setIsLoading] = useState(false); // Use boolean to manage loading state

  function handleDownloadPdf() {
    const input = document.getElementById("cv-content");
    if (!input) {
      alert("Element not found. Please check the ID.");
      return;
    }

    setIsLoading(true); // Start loading

    // Target elements for temporary style adjustment
    const elements = document.querySelectorAll(".main-content__section-title");

    // Store original styles to revert back after canvas generation
    const originalStyles = [];
    elements.forEach((element, index) => {
      originalStyles[index] = element.style.paddingBottom; // Store the original padding
      element.style.paddingBottom = "0.8em"; // Temporarily change padding for PDF generation
    });

    // Increase the scale for a higher quality image capture
    const scale = 5; // Adjust this value as needed, higher for better quality

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
        // Calculate the PDF page size dynamically based on the canvas size
        const canvasWidthInPts = (canvas.width / scale) * (72 / 96); // Convert pixels to points
        const canvasHeightInPts = (canvas.height / scale) * (72 / 96); // Convert pixels to points

        // Initialize jsPDF with dynamic dimensions
        const pdf = new jsPDF({
          orientation: canvasWidthInPts > canvasHeightInPts ? "l" : "p",
          unit: "pt",
          format: [canvasWidthInPts, canvasHeightInPts],
        });

        pdf.addImage(imgData, "PNG", 0, 0, canvasWidthInPts, canvasHeightInPts);
        pdf.save("CV_Download.pdf");

        setIsLoading(false); // Stop loading after PDF is saved
      })
      .catch((error) => {
        console.error("Error generating PDF:", error);
        alert(
          "Error generating PDF. Try again. If it doesn't work, please email the cretaor of this website."
        );

        // Ensure styles are reverted in case of an error during canvas generation
        elements.forEach((element, index) => {
          element.style.paddingBottom = originalStyles[index];
        });

        setIsLoading(false); // Ensure loading stops even if there's an error
      });
  }

  return (
    /* 1- DOWNLOAD BUTTON */
    <button
      className="DownloadButton"
      type="button"
      onClick={handleDownloadPdf}
      style={{
        padding: isLoading ? "1em" : "2em",
        backgroundImage: isLoading
          ? null
          : "url(/src/assets/download-icon.svg)",
      }}
    >
      {isLoading ? <Loader /> : null}
    </button>
  );
}

export default DownloadButton;
