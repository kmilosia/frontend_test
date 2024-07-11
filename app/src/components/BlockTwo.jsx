import React from 'react'
import useAlertStore from '../store/alertStore';
import useBlocksStore from '../store/blocksStore';
import useContentStore from '../store/contentStore';

const BlockTwo = () => {
    const addAlert = useAlertStore((state) => state.addAlert)
    const {contentArray} = useContentStore()
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
          contentObject = contentArray.find(item => item.position === 1)
          //checks if array has option one and if not throws alert
          if(!contentObject){
            addAlert("Opcja pierwsza nie istnieje, przejdź do panelu zarządzania treścią aby dodać nową treść!")
            return    
          }
        } else if (selectedRadioButton === 'option-two') {
          //checks if array has option two and if not throws alert
          contentObject = contentArray.find(item => item.position === 2)
          if(!contentObject){
            addAlert("Opcja pierwsza nie istnieje, przejdź do panelu zarządzania treścią aby dodać nową treść!")
            return    
          }
        }else if(selectedRadioButton === 'option-random'){
          //checks if array has any option at all and if not throws alert
          if(!contentArray.length){
            addAlert("Tablica z treścią jest pusta,przejdź do panelu zarządzania treścią aby dodać nową treść!")
            return    
          }
          //checking for available objects inside the mock data which can be used to draw random number
            const availableOptions = contentArray.map(item => item.position).filter(position => !textContent.some(obj => obj.position === position))
            //otherwise alert that all options were already taken
            if (availableOptions.length === 0) {
                addAlert("Wszystkie możliwe opcje znajdują się już w bloku.");
                return;
            }
            //draw random number and find the object with that position inside the content array
            const randomNumber = availableOptions[Math.floor(Math.random() * availableOptions.length)]
            contentObject = contentArray.find(item => item.position === randomNumber)
        }
        //check if the chosen text with chosen id is already in the block three content
        if (contentObject && !textContent.some(obj => obj.position === contentObject.position)) {
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
          contentObject = contentArray.find(item => item.position === 1)
          //checks if array has option one and if not throws alert
          if(!contentObject){
            addAlert("Opcja pierwsza nie istnieje, przejdź do panelu zarządzania treścią aby dodać nową treść!")
            return    
          }
        } else if (selectedRadioButton === 'option-two') {
          //checks if array has option two and if not throws alert
          contentObject = contentArray.find(item => item.position === 2)
          if(!contentObject){
            addAlert("Opcja druga nie istnieje, przejdź do panelu zarządzania treścią aby dodać nową treść!")
            return    
          }
        } else if(selectedRadioButton === 'option-random'){
          //checks if array has any option at all and if not throws alert
          if(!contentArray.length){
            addAlert("Tablica z treścią jest pusta,przejdź do panelu zarządzania treścią aby dodać nową treść!")
            return    
          }
          //draw random number according to the length of the content array
            const randomNumber = Math.floor(Math.random() * contentArray.length) + 1
            contentObject = contentArray.find(item => item.position === randomNumber)
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
