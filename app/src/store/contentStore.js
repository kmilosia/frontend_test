import { create } from 'zustand';

const useContentStore = create((set) => ({
    //loading the array initially from localstorage if there is some data, otherwise initialize empty array
    contentArray: (() => {
        const storedContent = localStorage.getItem('contentArray')
        return storedContent ? JSON.parse(storedContent) : []
    })(),
    //add new content to the array with incremented position
    addContent: (content) => {
        set((state) => {
            const newPosition = state.contentArray.length + 1
            const newContent = { position: newPosition, content }
            //update the changes in localstorage
            const updatedContent = [...state.contentArray, newContent]
            localStorage.setItem('contentArray', JSON.stringify(updatedContent))
            return { contentArray: updatedContent }
        })
    },
    //delete object from array according to the position
    deleteContent: (position) => {
        set((state) => {
            const updatedContent = state.contentArray.filter(item => item.position !== position)
                .map(item => {
                    if (item.position > position) {
                        return { ...item, position: item.position - 1 }
                    }
                    return item
                })
            //update the changes in localstorage
            localStorage.setItem('contentArray', JSON.stringify(updatedContent))
            return { contentArray: updatedContent }
        })
    },
    //edit object in the array of given position and new content string
    editContent: (position, newContent) => {
        set((state) => {
            const updatedContent = state.contentArray.map(item =>
                item.position === position ? { ...item, content: newContent } : item
            )
            //update the changes in localstorage
            localStorage.setItem('contentArray', JSON.stringify(updatedContent))
            return { contentArray: updatedContent }
        })
    },

}));

export default useContentStore;
