const pdfPath = "assets/CV_Edoardo_Mangia.pdf"; // Replace with the path to your PDF file

const pdfDiv = document.getElementById("pdf-viewer");

PDFJSLib.getDocument(pdfPath).promise.then((pdf) => {
  // Document loaded successfully
  const firstPage = pdf.getPage(1); // You can adjust the page number here
  firstPage.then((page) => {
    const scale = 1.5; // Adjust zoom level as needed
    const viewport = page.getViewport({ scale: scale });

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderContext = {
      canvasContext: context,
      viewport: viewport
    };

    page.render(renderContext).promise.then(() => {
      pdfDiv.appendChild(canvas);
    });
  });
})
.catch((error) => {
  // Handle PDF loading errors
  console.error("Error loading PDF:", error);
  pdfDiv.innerHTML = "Error loading PDF";
});