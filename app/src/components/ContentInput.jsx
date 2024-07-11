import React, { useState } from 'react'
import useContentStore from '../store/contentStore'

const ContentInput = ({item}) => {
    const {deleteContent, editContent} = useContentStore()
    const [isEdited, setIsEdited] = useState(false)
    const [editedValue, setEditedValue] = useState(item.content)
    const handleEditButton = () => {
        editContent(item.position, editedValue)
        setIsEdited(false)
    }
  return (
    <li>
    <div className="content-column">
        {isEdited ? <textarea rows={8} value={editedValue} onChange={(e) => setEditedValue(e.target.value)}/> :
        <p>{item.content}</p>
        }
    </div>
    <div className="actions-column">
        {isEdited ? <button type='button' onClick={handleEditButton}>Zapisz</button> :
        <button type='button' onClick={() => setIsEdited(true)}>Edytuj</button>}
        <button type='button' onClick={() => deleteContent(item.position)}>Usuń</button>
    </div>
</li>
  )
}

export default ContentInput
