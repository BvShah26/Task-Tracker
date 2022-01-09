import React from 'react'
import SaveButton from './SaveButton'

function header(props) {
    return (
        <div className='container mt-3 mb-3 row'>
            <div className='col-9'><h1>{props.text}</h1></div>
            <div className='col-3'>
                <SaveButton text={props.Show?"Close":"Add"}
                color="white" 
                bgcolor={props.Show?"orange":"green"} btnClick={props.ClickEvent} />
            </div>
            
            
        </div>
    )
}

export default header
