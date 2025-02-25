export function WinForm() {
    return (
        <div className='win-form-container'>
            <div className='add-win-form'>
                <div className="form-title">Celebrate Your Work Win!</div>
                <input 
                    type='text' 
                    className='win-title-input sparkle-on-focus' 
                    placeholder='What did you accomplish today' 
                />
                <textarea 
                    className='win-description sparkle-on-focus' 
                    placeholder='Share the details of your achievement...'
                ></textarea>
                <button className='btn-add pulse-animation'>Celebrate This Win</button>
            </div>

            <div className="confetti-container" aria-hidden="true">
                {/* Confetti animation elements will go here */}
            </div>
        </div>
    );
}