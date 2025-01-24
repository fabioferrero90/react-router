import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function NewPost() {

  const baseUrl = import.meta.env.VITE_API_URL
  const baseForm = { title: '', content: '', image: '', tags: '' }
  const [formData, setFormData] = useState(baseForm)
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tags = formData.tags.split(',').map(tag => tag.trim())
    const newPost = { ...formData, tags : tags}
    axios.post(`${baseUrl}/posts`, newPost)
      .then(res => {
        navigate('/');
      });
  };

  return (
    <div className="container mt-5">
      <h2>Crea Nuovo Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Titolo</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">Contenuto</label>
          <textarea
            className="form-control"
            id="content"
            name="content"
            rows="3"
            value={formData.content}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">URL Immagine</label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">Tags (separati da virgola)</label>
          <input
            type="text"
            className="form-control"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Pubblica Articolo</button>
      </form>
    </div>
  )
}

export default NewPost