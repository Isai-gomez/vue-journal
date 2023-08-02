export const getEntriesByTerm = (state) => (term = '') => {
  if (term.length === 0) return state.entry
  return state.entry.filter((entry) =>
    entry.text.toLowerCase().includes(term.toLocaleLowerCase()),
  )
}

export const getEntriesById = (state) => (id = '') => {
  const entry = state.entry.find((entry) => entry.id === id)
  if (!entry) return
  return { ...entry }
}
