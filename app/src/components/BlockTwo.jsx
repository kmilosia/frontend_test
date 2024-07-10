import React from 'react'
import useAlertStore from '../store/alertStore';
import useBlocksStore from '../store/blocksStore';
import { pageText } from '../data/mockData';

const BlockTwo = () => {
    const addAlert = useAlertStore((state) => state.addAlert)
    const { selectedRadioButton, textContent, setTextContent } = useBlocksStore()
    //action for button that adds extra text to the content inside block three
    const handleAddButton = () => {
      //if no chosen radio button option don't proceed with action and alert
      if(selectedRadioButton === ''){
        addAlert("Wybierz odpowiednią opcję!")
        return
      }
        let contentObject = null
        if (selectedRadioButton === 'option-one') {
          contentObject = pageText.find(item => item.id === 1)
        } else if (selectedRadioButton === 'option-two') {
          contentObject = pageText.find(item => item.id === 2)
        }else if(selectedRadioButton === 'option-random'){
          //checking for available objects inside the mock data which can be used to draw random number
            const availableOptions = pageText.map(item => item.id).filter(id => !textContent.some(obj => obj.id === id))
            //otherwise alert that all options were already taken
            if (availableOptions.length === 0) {
                addAlert("Wszystkie możliwe opcje znajdują się już w bloku.");
                return;
            }
            //draw random number and find the object with that id inside the mock data
            const randomId = availableOptions[Math.floor(Math.random() * availableOptions.length)]
            contentObject = pageText.find(item => item.id === randomId)
        }
        //check if the chosen text with chosen id is already in the block three content
        if (contentObject && !textContent.some(obj => obj.id === contentObject.id)) {
          //if no, update the array and add chosen object
            const newTextContent = [...textContent, contentObject]
            //sort alphabetically the array
            newTextContent.sort((a, b) => a.content.localeCompare(b.content))
            //push the sorted array to the text in block three
            setTextContent(newTextContent)
        } else{
          //if chosen option is already in the block, show alert
            addAlert("Opcja znajduje się już w bloku z tekstem.")
        }
    }
    //action for replacing text in block three with chosen option
    const handleReplaceButton = () => {
        //if no chosen radio button option don't proceed with action and alert
        if(selectedRadioButton === ''){
          addAlert("Wybierz odpowiednią opcję!")
          return
        }
        let contentObject = null
        if (selectedRadioButton === 'option-one') {
          contentObject = pageText.find(item => item.id === 1)
        } else if (selectedRadioButton === 'option-two') {
          contentObject = pageText.find(item => item.id === 2)
        } else if(selectedRadioButton === 'option-random'){
          //draw random number according to the length of the array with mock data
            const randomId = Math.floor(Math.random() * pageText.length) + 1
            contentObject = pageText.find(item => item.id === randomId)
        }
        //update the array with text for block three
        setTextContent([contentObject])
    }
  return (
      <section className='block-two'>
        <h2>BLOK DRUGI</h2>
        <div>
          <button onClick={handleReplaceButton}>ZASTĄP</button>
          <button onClick={handleAddButton}>DOKLEJ</button>
        </div>
      </section>
  )
}

export default BlockTwo
