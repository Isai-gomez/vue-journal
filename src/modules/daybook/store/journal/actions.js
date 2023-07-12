import journalApi from '@/api/journalApi'
export const loadEntries = async ({ commit }) => {
  const { data } = await journalApi.get('/entries.json')
  if (!data) {
    commit('setEntry', [])
    return
  }
  const entry = []
  for (let id of Object.keys(data)) {
    entry.push({
      id,
      ...data[id],
    })
  }
  commit('setEntry', entry)
}
export const updateEntry = async ({ commit }, entries) => {
  const { date, text, picture } = entries
  const dataToUpdate = { date, text, picture }
  await journalApi.put(`/entries/${entries.id}.json`, dataToUpdate)
  commit('updateEntry', { ...entries })
}
export const createEntry = async ({ commit }, entry) => {
  const { date, text, picture } = entry
  const dataToSave = { date, text, picture }
  const { data } = await journalApi.post(`/entries/.json`, dataToSave)
  dataToSave.id = data.name
  commit('addEntry', { ...dataToSave })
  return data.name
}
export const deleteEntry = async ({ commit }, id) => {
  await journalApi.delete(`/entries/${id}.json`)
  commit('deleteEntry', id)
  return id
}
