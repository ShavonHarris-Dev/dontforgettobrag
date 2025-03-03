import PropTypes from "prop-types";

export function Header({exportToCSV, exportToPDF}) {
  return (
    <div className='wins-tracker celebration-theme'>
    <header className='header'>
      <h1 className='Tracked'><span className='trophy-icon'>🏆</span>Work Wins</h1>
      <div className='actions'>
        <button className='btn-export' onClick={exportToCSV}>Export CSV</button>
        <button className='btn-import' onClick={exportToPDF}>Export PDF</button>
        {/* TODO: Image upload? */}

      </div>
    </header>

    </div>
  
  );
}

Header.propTypes = {
  exportToCSV: PropTypes.func.isRequired,
  exportToPDF: PropTypes.func.isRequired
}