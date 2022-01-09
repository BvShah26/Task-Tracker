import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className='container row'>
            <div className='col-7'></div>
            <div className='col-4 border border-1 border-success m-3 mt-5'>
                <h4 className='mt-2 ms-3'>Bhavya Shah</h4>
                <p className='ms-3 mt-2'>Task Tracker Assignment - React JS</p>
                <p className='ms-3 mt-2'>Roll No 169 - A</p>
                <Link className='ms-3 mt-2' to='/'>Home</Link>
            </div>
            <div className='col-1'></div>

        </div>
    )
}

export default About
