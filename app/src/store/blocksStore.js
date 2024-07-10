import {create} from 'zustand';

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
    resetState: () => {
        set({showName: false, selectedRadioButton: '', textContent: []})
    }
}))

export default useBlocksStore;