import React from 'react'
import useAlertStore from '../store/alertStore.js';
import Alert from '../components/Alert';
import '../styles/alert.scss'

const AlertStack = () => {
    const alerts = useAlertStore((state) => state.alerts)
  return (
    <div className='alert-stack'>
        <div className='alert-element'>
            {alerts.map((item) => {
                return <Alert key={item.id} id={item.id} message={item.message} />
            })}
        </div>
    </div>
  )
}

export default AlertStack