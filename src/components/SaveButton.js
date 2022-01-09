import React from 'react'
import PropTypes from 'prop-types'

function SaveButton(props) {
    return (
        <div>
            <button style={{color:props.color,backgroundColor:props.bgcolor}}
            onClick={props.btnClick}
            className='btn btn-lg'
            >
                {props.text}</button>   
        </div>
    )
}SaveButton.propTypes = {
    btnClick:PropTypes.func,
}

export default SaveButton

