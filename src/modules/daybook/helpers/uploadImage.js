import axios from 'axios'

export const uploadImage = async (file) => {
  if (!file) return
  try {
    const fromData = new FormData()
    fromData.append('upload_preset', 'vue-image')
    fromData.append('file', file)
    const url = 'https://api.cloudinary.com/v1_1/dtdwuylnx/image/upload'
    const { data } = await axios.post(url, fromData)
    console.log(data)
    return data.secure_url
  } catch (error) {
    console.error('Error al cargar la imagen revisar log')
    console.error(error)
    return null
  }
}
