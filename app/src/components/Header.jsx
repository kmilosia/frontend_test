import React from 'react'
import '../styles/header.scss'
import { FaHtml5 } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useBlocksStore from '../store/blocksStore';

const Header = () => {
  const {showName} = useBlocksStore()
  return (
    <header role='header' aria-label='Website header'>
      <Link to='/' className='logo-link' aria-label='Home'><span><FaHtml5 aria-hidden="true"/></span></Link>
      <div className='header-text'>
        <p>Zadanie <strong>rekrutacyjne</strong></p>
        {showName && <p>Klaudia Miłoszewska</p>}
      </div>
    </header>
  )
}

export default Header
