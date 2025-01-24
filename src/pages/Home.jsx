import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

function Home() {
  const baseUrl = import.meta.env.VITE_API_URL
  const [posts, setPosts] = useState(null)
  const navigate = useNavigate()

  function fetchPosts() {
    axios.get(`${baseUrl}/posts`)
      .then(res => {
        setPosts(res.data)
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
    fetchPosts()
  }, [])

  const postIds = posts ? posts.map(post => post.id) : []

  return (
    <div className="container mt-5">
      <div className="jumbotron text-center mb-4">
        <h1 className="display-4">Benvenuto nel blog</h1>
        <p className="lead">La vostra fonte quotidiana di notizie e aggiornamenti.</p>
        <hr className="my-4" />
      </div>
      <div className="row">
        {posts && posts.map(post => (
          <div className="col-md-4 px-4" key={post.id}>
            <div className="postscard card mb-4 shadow-sm d-flex flex-column justify-content-between">
              <img src={handleImageUrl(post.image)} className="card-img-top" alt={post.title} />
              <div className="card-body pb-4">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
                <p className="card-text"><strong>Tag:</strong> {post.tags.join(',')}</p>
                <button className="btn btn-primary" onClick={() => navigate(`/${post.id}`, { state: { postIds } })}>Leggi Articolo</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home