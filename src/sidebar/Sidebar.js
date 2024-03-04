import React from 'react'
import './sidebar.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

function Sidebar() {
    return (
        
        <div className='d-flex flex-column bg-dark text-white p-4'>
            <p href='d-flex align-items-center'>
                <i className='bi bi-bootstrap fs-5 me-2'></i>
                <span className='fs-4' >Tictactoe</span>
            </p>
            <hr className='text-secondary mt-2' />
            <ul className='nav nav-pills flex-column p-0 m-0' >
                <li className='nav-item p-1' >
                    <a href='' className='nav-link text-white' >
                        <i className='bi bi-speedometer me-2 fs-5'></i>
                        <span className='fs-5' >Edit Profile</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar