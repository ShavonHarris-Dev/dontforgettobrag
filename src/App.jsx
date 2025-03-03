import './App.css'
import { Header } from './components/Header'
import { WinForm } from './components/WinForm'
import { WinList } from './components/WinsList'
import { useState } from 'react'
import jsPDF from 'jspdf'

function App() {
  const [wins, setWins] = useState(() => {
  const storedWins = localStorage.getItem('wins');
  return storedWins ? JSON.parse(storedWins) : []; 
  })


 

function addWin(title, description) {
  const newWin = {
    id: crypto.randomUUID(),
    title,
    description,
    date: new Date().toISOString()
  };

  const updatedWins = [...wins, newWin];
  setWins(updatedWins);
  localStorage.setItem('wins', JSON.stringify(updatedWins))
}

function clearWins(){
  setWins([]);
  localStorage.removeItem('wins')
}


const exportToCSV = () => {
  if( wins.length === 0 ){
    alert('No wins to export')
    return;
  }

  const headers = ['Date', 'Title', 'Description'];

  const rows = wins.map(win => [
    new Date(win.date).toLocaleDateString(), 
    `"${win.title.replace(/"/g, '""')}"`,
    `"${win.description.replace(/"/g, '""')}"` 
  ]);

  const csvContent = [headers, ...rows]
  .map(row => row.join(',')) 
  .join('\n'); 

  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'work-wins.csv';
  document.body.appendChild(a); 
  a.click();
  document.body.removeChild(a); 
  URL.revokeObjectURL(url);
};


const exportToPDF = () => {
  const doc = new jsPDF();
  let yPos = 20; 
  const pageHeight = doc.internal.pageSize.height; 

  doc.setFontSize(20);
  doc.text('Work Wins', 20, yPos);
  
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

  doc.save('work-wins.pdf');
};



  return (
    <div className='wins-tracker confetti-container' aria-hidden="true">
        <>
          <Header exportToCSV={exportToCSV} exportToPDF={exportToPDF}/>
          <WinForm addWin={addWin}  />
          <WinList wins={wins} />
          <button onClick={clearWins}>Clear All Wins</button>

        </>
    </div>
  )
}

export default App
