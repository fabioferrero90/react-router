import { useParams, useNavigate, useLocation } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"

function PostPage() {
  const { id } = useParams()
  const baseUrl = import.meta.env.VITE_API_URL
  const [post, setPost] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()
  const { postIds } = location.state || { postIds: [] }

  const fetchPost = () => {
    axios.get(`${baseUrl}/posts/${id}`)
      .then(res => {
        setPost(res.data)
      })
      .catch(error => console.error(error))
  }

  const handleImageUrl = (url) => {
    if (url.startsWith('/imgs/posts/')) {
      return `${baseUrl}${url}`
    }
    return url
  }

  useEffect(() => {
    fetchPost()
  }, [id])

  const deletePost = () => {
    axios.delete(`${baseUrl}/posts/${id}`)
      .then(() => {
        navigate(-1)
      })
  }

  const currentIndex = postIds.indexOf(parseInt(id))
  const prevId = postIds[currentIndex - 1]
  const nextId = postIds[currentIndex + 1]

  return (
    <div className="container mt-5">
      {post ? (
        <div className="card my-4">
          <div className="post card-body">
            <div className="buttons-row d-flex justify-content-between">
              <button className="btn btn-warning" onClick={() => navigate('/')}>Torna Indietro</button>
              <button className="btn btn-danger" onClick={deletePost}>Elimina Post</button>
            </div>
            <img className="my-4" src={handleImageUrl(post.image)} alt={post.title} />
            <h1 className="card-title">{post.title}</h1>
            <p className="card-text">{post.content}</p>
            <p className="card-text"><strong>Tag:</strong> {post.tags.join(',')}</p>
            <div className="navbuttons-row d-flex justify-content-center">
              {prevId && <button className="btn btn-secondary" onClick={() => navigate(`/${prevId}`, { state: { postIds } })}>Precedente</button>}
              {nextId && <button className="btn btn-secondary" onClick={() => navigate(`/${nextId}`, { state: { postIds } })}>Successivo</button>}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default PostPage