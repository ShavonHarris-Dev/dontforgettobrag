import {useState} from 'react'
import PropTypes from 'prop-types'

export function WinForm(  {addWin} ) {

    const [accomplishment, setAccomplishment] = useState('')
    const [description, setDescription] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        if(!accomplishment || !description) return;
       addWin(accomplishment, description);
       setAccomplishment('');
       setDescription('');
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
                        setAccomplishment(e.target.value)
                    }}
                />
                <textarea 
                    className='win-description sparkle-on-focus' 
                    placeholder='Share the details of your achievement...'
                    value={description}
                    onChange={(e) => {setDescription(e.target.value)}}
                ></textarea>
                <button className='btn-add pulse-animation' onClick={handleSubmit}>Celebrate This Win</button>
            </div>
        </div>
    );
}

WinForm.propTypes = {
    addWin:PropTypes.func.isRequired,
    addDescription:PropTypes.func.isRequired
}