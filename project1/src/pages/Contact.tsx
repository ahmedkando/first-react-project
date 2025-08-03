import { useState } from 'react'
import StarDivider from '../components/StarDivider'

export default function Contact() {
  const [formData, setFormData] = useState({
    userName: '',
    userAge: '',
    userEmail: '',
    userPassword: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <main className="py-5 bg-white min-vh-100">
      <div className="container">
        <StarDivider title="CONTACT"/>

        <form onSubmit={handleSubmit} className="mx-auto mt-5" style={{ maxWidth: '600px' }}>
          <div className="mb-4">
            <input
              type="text"
              className="form-control border-bottom border-dark rounded-0"
              placeholder="Username"
              name="userName"
              value={formData.userName}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              className="form-control border-bottom border-dark rounded-0"
              placeholder="Age"
              name="userAge"
              value={formData.userAge}
              onChange={handleInputChange}
            />
          </div>


          <div className="mb-4">
            <input
              type="email"
              className="form-control border-bottom border-dark rounded-0"
              placeholder="Email"
              name="userEmail"
              value={formData.userEmail}
              onChange={handleInputChange}
            />
          </div>

      
          <div className="mb-4">
            <input
              type="password"
              className="form-control border-bottom border-dark rounded-0"
              placeholder="Password"
              name="userPassword"
              value={formData.userPassword}
              onChange={handleInputChange}
            />
          </div>

    
          <div className="text-center">
            <button type="submit" className="btn btn-success px-4 py-2">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}
