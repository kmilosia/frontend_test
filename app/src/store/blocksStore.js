import {create} from 'zustand';

//store for blocks state elements
const useBlocksStore = create((set) => ({
    showName: true,
    selectedRadioButton: '',
    textContent: [],
    setShowName: (value) => {
        set(() => ({showName: value}))
    },
    setSelectedRadioButton: (value) => {
        set(() => ({selectedRadioButton: value}))
    },
    setTextContent: (value) => {
        set(() => ({ textContent: value }));
    },
    //reset all state after reset settings button was clicked
    resetState: () => {
        set({showName: false, selectedRadioButton: '', textContent: []})
    },
    //function to delete option from block three if the option was deleted from localstorage
    deleteFromTextContent: (position) => {
        set((state) => {
            const updatedTextContent = state.textContent.filter(content => content.position !== position)
            return { textContent: updatedTextContent }
        })
    }
}))

export default useBlocksStore;