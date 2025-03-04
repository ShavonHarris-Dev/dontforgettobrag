import PropTypes from "prop-types";
import { useTheme } from './ThemeContext'

export function Header({exportToCSV, exportToPDF}) {
  const {theme, toggleTheme } = useTheme()
  
  return (
    <div className={`wins-tracker ${theme}-theme`}>
    <header className='header'>
      <h1 className='Tracked'><span className='trophy-icon'>🏆</span>Work Wins</h1>
      <div className='actions'>
        <button className='btn-export' onClick={exportToCSV}>Export CSV</button>
        <button className='btn-import' onClick={exportToPDF}>Export PDF</button>
        <button className='btn-theme' onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀️'} 
        </button>
      </div>
    </header>
    </div>
  );
}

Header.propTypes = {
  exportToCSV: PropTypes.func.isRequired,
  exportToPDF: PropTypes.func.isRequired
}