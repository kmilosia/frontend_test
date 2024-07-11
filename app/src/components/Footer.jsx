import React, { useState } from 'react'
import '../styles/footer.scss'
import { FaChevronDown, FaChevronUp, FaChevronRight } from 'react-icons/fa'
import useBlocksStore from '../store/blocksStore'
import { Link } from 'react-router-dom'

const Footer = () => {
  const {showName, setShowName, resetState} = useBlocksStore()
    const [expanded, setExpanded] = useState(false)
  return (
    <footer>
      <div className={`options-container ${expanded ? 'expanded' : ''}`}>
        <button className='expanded-footer-button' onClick={()=>resetState()}><FaChevronRight className='icon' /><span>ZRESETUJ USTAWIENIA</span></button>
        <button className='expanded-footer-button' onClick={() => setShowName(!showName)}><FaChevronRight className='icon' /><span>{showName ? 'SCHOWAJ' : 'POKAŻ'} DANE OSOBOWE</span></button>
        <Link to='/storage-management' className='expanded-footer-button'><FaChevronRight className='icon' /><span>ZARZĄDZAJ TREŚCIĄ</span></Link>
      </div>
      <div className='main-footer-content'>
        <div className='css-logo-container'>
          <div />
          <p>CSS<br/>IS<br/>AWESOME</p>
        </div>
        <div className='horizontal-line-container'>
          <div>
            <span/>
            <p>nabthat</p>
            <span/>
          </div>
        </div>
        <div className='button-container'>
          <button type='button' onClick={() => setExpanded(!expanded)}>
            <span>POKAŻ</span>
            {expanded ? <FaChevronDown className='icon'/> : <FaChevronUp className='icon'/>}
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
