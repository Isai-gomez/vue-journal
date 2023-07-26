// }
export const setEntry = (state, entries) => {
  state.entry = [...state.entry, ...entries]
  state.isLoading = false
}
export const updateEntry = (state, entries) => {
  const idx = state.entry.map((e) => e.id).indexOf(entries.id)
  state.entry[idx] = entries
}
export const addEntry = (state, entry) => {
  
  const {text, picture}=entry;
  if(!text & !picture) return 
  
  state.entry = [entry, ...state.entry]
}
export const deleteEntry = (state, id) => {
  state.entry = state.entry.filter((item) => item.id !== id)
}
