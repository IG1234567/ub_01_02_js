import React from 'react';
import './styles.css';

function ProductList() {
  return (
    <div>
      <header className="bg-dark text-white text-center py-3">
        <h1>Maža internetinė parduotuvė</h1>
        <nav className="mt-3">
          <ul className="nav">
            <li className="nav-item"><a className="nav-link" href="#">Namai</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Spa Vonios</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Krepšelis</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Vartotojo Paskyra</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mt-4">
        <section id="product-list">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h2 className="card-title">Spa Vonios</h2>
                  <p className="card-text">Įsigykite kokybiškas spa vonias mėgautis po ilgų darbo dienų.</p>
                  <button className="btn btn-primary">Įdėti į krepšelį</button>
                </div>
              </div>
            </div>
            {/* Galite pridėti daugiau produktų čia */}
          </div>
        </section>
      </main>

      <footer className="bg-dark text-white text-center py-2">
        <p>&copy; 2023 Maža internetinė parduotuvė</p>
      </footer>
    </div>
  );
}

export default ProductList;
