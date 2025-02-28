import {useState} from 'react'
import PropTypes from 'prop-types'

export function WinForm(  {addWin} ) {

    const [accomplishment, setAccomplishment] = useState('')

    console.log(accomplishment)

    function handleSubmit(e){
        e.preventDefault()
        if(!accomplishment) return;
       addWin(accomplishment)
       setAccomplishment('')
    }

   
    return (
        <div className='win-form-container'>
            <div className='add-win-form'>
                <div className="form-title">Celebrate Your Work Win!</div>
                <input 
                    type='text' 
                    className='win-title-input sparkle-on-focus' 
                    placeholder='What did you accomplish today' 
                    value={accomplishment}
                    onChange={(e)=> {
                        console.log(e.target.value)
                        setAccomplishment(e.target.value)
                    }}
                />
                <textarea 
                    className='win-description sparkle-on-focus' 
                    placeholder='Share the details of your achievement...'
                ></textarea>
                <button className='btn-add pulse-animation' onClick={handleSubmit}>Celebrate This Win</button>
            </div>

            <div className="confetti-container" aria-hidden="true">
                {/* Confetti animation elements will go here */}
            </div>
        </div>
    );
}

WinForm.propTypes = {
    addWin:PropTypes.func.isRequired
}