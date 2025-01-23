function Home() {
  return (
    <div className="container mt-5">
      <div className="jumbotron text-center mb-4">
        <h1 className="display-4">Welcome to NewsBlog</h1>
        <p className="lead">Your daily source of the latest news and updates.</p>
        <hr className="my-4" />
        <p>Stay informed with our comprehensive coverage of current events.</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Read More</a>
      </div>
      <div className="row">
        <div className="col-md-4 px-4">
          <div className="card mb-4 shadow-sm">
            <img src="https://picsum.photos/300/150" className="card-img-top" alt="News" />
            <div className="card-body pb-4">
              <h5 className="card-title">News Title 1</h5>
              <p className="card-text">Brief description of the news article.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img src="https://picsum.photos/300/150" className="card-img-top" alt="News" />
            <div className="card-body">
              <h5 className="card-title">News Title 2</h5>
              <p className="card-text">Brief description of the news article.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img src="https://picsum.photos/300/150" className="card-img-top" alt="News" />
            <div className="card-body">
              <h5 className="card-title">News Title 3</h5>
              <p className="card-text">Brief description of the news article.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home