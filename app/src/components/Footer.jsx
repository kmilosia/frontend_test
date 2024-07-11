import React, { useEffect, useRef, useState } from 'react'
import '../styles/footer.scss'
import { FaChevronDown, FaChevronUp, FaChevronRight } from 'react-icons/fa'
import useBlocksStore from '../store/blocksStore'
import { Link } from 'react-router-dom'

const Footer = () => {
  const {showName, setShowName, resetState} = useBlocksStore()
    const [expanded, setExpanded] = useState(false)
    const optionsContainerRef = useRef(null)
    //listener to automatically close expanded footer container if user clicks outside of the container
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (optionsContainerRef.current && !optionsContainerRef.current.contains(event.target)){
          setExpanded(false)
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      //clean the effect
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [])
  return (
    <footer>
      <div ref={optionsContainerRef} className={`options-container ${expanded ? 'expanded' : ''}`}>
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
