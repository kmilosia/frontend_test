import React, { useState } from 'react'
import useContentStore from '../store/contentStore'
import useBlocksStore from '../store/blocksStore'

const ContentInput = ({item}) => {
    const {deleteContent, editContent} = useContentStore()
    const {deleteFromTextContent} = useBlocksStore()
    const [isEdited, setIsEdited] = useState(false)
    const [editedValue, setEditedValue] = useState(item.content)
    //edit button changes state so instead of text, input appears as well as button to save changes
    const handleEditButton = () => {
        editContent(item.position, editedValue)
        setIsEdited(false)
    }
    //delete position from localstorage/contentstore array as well as from textcontent array in block three if it exists there
    const handleDeleteButton = () => {
      deleteContent(item.position)
      deleteFromTextContent(item.position)
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
        <button type='button' onClick={handleDeleteButton}>Usuń</button>
    </div>
</li>
  )
}

export default ContentInput
