/* global chrome, jsPDF */

// Listen for messages from popup.js
chrome.runtime.onMessage.addListener((request) => {
    if (request.action === "exportCSV") {
        exportToCSV();
    } else if (request.action === "exportPDF") {
        exportToPDF();
    }
});

function exportToCSV() {
  chrome.storage.local.get(["wins"], (result) => {
    const wins = result.wins || [];
    if (wins.length === 0) {
      alert("No wins to export!");
      return;
    }

    const headers = ["Date", "Title", "Description"];
    const rows = wins.map(win => [
      new Date(win.date).toLocaleDateString(),
      `"${win.title.replace(/"/g, '""')}"`,
      `"${win.description.replace(/"/g, '""')}"`
    ]);

    const csvContent = [headers, ...rows]
      .map(row => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    
    chrome.downloads.download({
      url: url,
      filename: "work-wins.csv",
      saveAs: true
    });
  });
}

function exportToPDF() {
  chrome.storage.local.get(["wins"], (result) => {
    const wins = result.wins || [];
    if (wins.length === 0) {
      alert("No wins to export!");
      return;
    }

    const doc = new jsPDF();
    let yPos = 20;
    const pageHeight = doc.internal.pageSize.height;

    doc.setFontSize(20);
    doc.text("Work Wins", 20, yPos);

    wins.forEach(win => {
      yPos += 20;
      if (yPos > pageHeight - 20) {
        doc.addPage();
        yPos = 20;
      }
      doc.setFontSize(14);
      doc.text(win.title, 20, yPos);
      yPos += 10;
      doc.setFontSize(12);
      doc.text(new Date(win.date).toLocaleDateString(), 20, yPos);
      yPos += 10;
      doc.setFontSize(10);
      doc.text(win.description, 20, yPos, { maxWidth: 170 });
    });

    doc.save("work-wins.pdf");
  });
}
