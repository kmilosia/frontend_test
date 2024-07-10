import React from 'react'
import useBlocksStore from '../store/blocksStore'

const RadioButton = ({value, title}) => {
    const { selectedRadioButton, setSelectedRadioButton } = useBlocksStore()
    const handleRadioButtonChange = (e) => {
        setSelectedRadioButton(e.target.value)
    }
  return (
    <label className="radio-container">
        <input 
        role='radio'
        type="radio" 
        name="radio" 
        value={value} 
        checked={selectedRadioButton === value}
        onChange={handleRadioButtonChange}
        />
        <span className="checkmark" />
        <p>{title}</p>
    </label>
  )
}

export default RadioButton
