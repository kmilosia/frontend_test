import React, { useState } from 'react'
import useContentStore from '../store/contentStore'
import '../styles/storageManagement.scss'
import NewContentModal from '../components/NewContentModal'
import ContentInput from '../components/ContentInput'

const StorageManagement = () => {
    const {contentArray} = useContentStore()
    const [isModal, setIsModal] = useState(false)
  return (
    <div className='storage-wrapper'>
      <h1>Zarządzaj treścią</h1>
      <button className='add-new-button' onClick={() => setIsModal(true)}>Dodaj nowy obiekt</button>
      <ul>
        {contentArray?.map((item) => (
           <ContentInput item={item} key={item.position}/>
        ))}
        </ul>
        {isModal && 
        <NewContentModal setIsModal={setIsModal} />
        }
    </div>
  )
}

export default StorageManagement
