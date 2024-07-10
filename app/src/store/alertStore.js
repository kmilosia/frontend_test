import {create} from 'zustand';

const useAlertStore = create((set) => ({
  alerts: [],
  nextId: 1,
  addAlert: (message) => {
    set((state) => ({
      alerts: [...state.alerts, { id: state.nextId, message }],
      nextId: state.nextId + 1,
    }))
  },
  removeAlert: (id) => {
    set((state) => ({ alerts: state.alerts.filter((alert) => alert.id !== id)}))
  },
}))

export default useAlertStore;