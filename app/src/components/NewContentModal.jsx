import React, { useState } from 'react'
import useContentStore from '../store/contentStore'

const NewContentModal = ({setIsModal}) => {
    const {addContent} = useContentStore()
    const [content, setContent] = useState('')
    const [error, setError] = useState('')
    const handleAddButton = () => {
        if (content.trim() === '') {
            setError('Treść nie może być pusta!');
            return;
        }
        addContent(content);
        setIsModal(false);
    };
  return (
    <div className='modal'>
            <h3>Dodaj nową treść</h3>
            <textarea placeholder='Treść' rows={8} value={content} onChange={(e) => setContent(e.target.value)}/>
            <div className='buttons'>
                <button onClick={() => setIsModal(false)}>Anuluj</button>
                <button onClick={handleAddButton}>Dodaj</button>
            </div>
            {error && <p className='error'>{error}</p>}
        </div>
  )
}

export default NewContentModal
