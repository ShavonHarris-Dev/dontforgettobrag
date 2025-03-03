// Form for adding wins
import PropTypes from "prop-types";

export function WinList({wins}){
return (
<div className='wins-list animate-on-load'>
        {wins.map((win)=> (
            <div key={win.id} className='win-card'>
                 <div className='win-header'>
                 <h3 className='win-title'>{win.title}</h3> 
                 <span className='win-date'>
                    {new Date(win.date).toLocaleDateString('en-US',{
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                        })}
                    </span>
            </div>
        <p className='win-description'>
            {win.description}
        </p>
    </div>
         ))}
         </div>
     );
 }
 WinList.propTypes = {
    wins: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
      })
    ).isRequired
  };