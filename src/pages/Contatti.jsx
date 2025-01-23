function Contatti() {
  return (
      <div className="container mt-5">
        <h2>Contattaci</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nome</label>
            <input type="text" className="form-control" id="name" placeholder="Inserisci il tuo nome" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Inserisci la tua email" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Messaggio</label>
            <textarea className="form-control" id="message" rows="3" placeholder="Inserisci il tuo messaggio"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Invia</button>
        </form>
      </div>
  )
}

export default Contatti