// Form for adding wins
import PropTypes from "prop-types";

export function WinList({wins}){
return (
<div className='wins-list animate-on-load'>
    {/* Example win card */}
        {wins.map((win, index)=> (
            <div key={index} className='win-card'>
                 <div className='win-header'>
                 <h3 className='win-title'>{win}</h3> 
                 <span className='win-date'>Feb 24, 2025</span>
            </div>
        <p className='win-description'>
            Built a Chrome Extension to track wins
        </p>
    </div>
         ))}
         </div>
     );
 }

 WinList.propTypes = {
    wins: PropTypes.arrayOf(PropTypes.string).isRequired
 }
