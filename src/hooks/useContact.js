import { useState } from 'react'
const initialState = {
  name: '',
  email: '',
  phone: '',
  sponsor: '',
}
export function useContact() {
  const [formData, setFormData] = useState(initialState)
  const handleSubmit = (event) => {
    event.preventDefault()
    const message = t('contact.message')
    const whatsappUrl = `https://wa.me/5583991646039?text=${encodeURIComponent(
      message
    )}`
    window.open(whatsappUrl, '_blank')
  }

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }
  return { handleSubmit, handleInputChange, formData }
}
