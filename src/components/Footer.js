import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='container'>
            <div className='row mt-2'>
                <div className='col-4'></div>
                <div className='col-5'>
                    <p>Developed By Bhavya Shah</p>
                    <Link to='/about'>About Us</Link>
                </div>
                <div className='col-3'></div>
            </div>


        </footer>
    )
}

export default Footer
