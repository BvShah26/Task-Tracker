import React from 'react'
import Task from './Task'

function Tasks(props) {
    return (
        <div>
            {
                props.data.map((t) =>
                //Getting OnDelete as a prop from App.js
                //And now sending it as a prop.OnDelete to it's child Task.js
                    <Task key={t.id} task={t} OnDelete={props.OnDelete}
                     OnToggle={props.OnToggle} />
                )
            }
        </div>
    )
}

Tasks.propTypes = {

}

export default Tasks

