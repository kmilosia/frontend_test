import React, { useEffect } from 'react'
import useAlertStore from '../store/alertStore.js';
import '../styles/alert.scss'
import { IoAlertCircle } from 'react-icons/io5';

const Alert = ({id, message}) => {
    const removeAlert = useAlertStore((state) => state.removeAlert)
    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert(id)
        }, 3000)
        return () => clearTimeout(timeout)
    },[id,removeAlert])
  return (
    <div className='alert' role='alert'>
      <IoAlertCircle className='alert-icon' aria-hidden='true'/>
      <p>{message}</p>
    </div>
  )
}

export default Alert