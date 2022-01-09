import { useState } from 'react'

import React from 'react'
function AddTask(props) {


    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const [reminder, setReminder] = useState(false);

    const SaveData = (e) => {
        e.preventDefault(); //Prevent Page From Refreshing 
        //possible thanks to React

        if (!text) {
            alert("Enter Task");
            return;
        }

        props.onAdd({ text, date, reminder });

        setText('');
        setDate('');
        setReminder(false);
    }

    return (
        <div className='container mt-3 ms-5'>
            <form className='' onSubmit={SaveData} >
                <div className='row mt-2'>
                    <div className='col-4'><h5>Task</h5></div>
                    <div className='col-8'>
                        <div className='row'>
                            <div className='col-8'>
                                <input type='text' className='form-control' value={text} onChange={(e) => setText(e.target.value)} placeholder='Text' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row mt-2'>
                    <div className='col-4'><h5>Date</h5></div>
                    <div className='col-8'>
                        <div className='row'>
                            <div className='col-8'>
                                <input type='text' className='form-control' value={date} onChange={(e) => setDate(e.target.value)} placeholder='Day' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row mt-2'>
                    <div className='col-4'><h5>Set Reminder</h5></div>
                    <div className='col-8'>
                    <div className='row'>
                            <div className='col-8'>
                            <input type='checkbox' className='form-check ' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-4'></div>
                    <div className='col-4'><input type="submit" className='btn btn-primary' value="Save" /></div>
                    <div className='col-4'></div>
                </div>
                {/* checked={reminder} Default Check False  */}
                
            </form>
        </div>
    )
}

export default AddTask