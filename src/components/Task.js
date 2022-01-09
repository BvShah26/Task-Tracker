import React from 'react'
import { FaTimes } from 'react-icons/fa'

//Destructing as it's object.. so it will be easy to access
function Task({ task, OnDelete, OnToggle }) {
    return (
            <div className={`card mt-3 bg-light ${task.reminder ? 'remindMe' : '' }`}  onDoubleClick={() => OnToggle(task.id)} >
                <div className="card-body">
                    <div className="card-title">
                        <div className='row'>
                            <div className='col-10'>
                                <h4>{task.text}</h4>
                                <p className="card-text">{task.Date}</p>
                            </div>
                            <div className='col-2'>
                                <h1><FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => OnDelete(task.id)} /></h1>
                            </div>
                        </div>
                        </div>
                </div>
                {/* {task.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => OnDelete(task.id)} /> */}
                {/* onClick={OnDelete(task.id)} if we do only this then click event of
                 all task's button will be excuted at a same time... evene without clicking */}

                {/* So use onClick={()=>eventname}  */}

                {/* Do this if props not Destructured */}
                {/* {props.task.text} */}
            {/* <p>{task.reminder ? "Yes" : "No"}</p> */}
        </div>
    )
}

const styles={
    margin:'2px',
     backgroundColor: '#c0c0c0',
     
}

export default Task
