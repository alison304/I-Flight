import { Link } from 'react-router-dom'
import "./Flight.css"

function Flight({flight}) {
  return (
    <div className="flight-container">
        <div className="flight">
          <div className="travel-flight">
              {/* <p>imagen producto</p> */}
              <div className="origin-flight">
                <p>Ida:</p>
                <div className="origin-init">
                  <div>inicio</div>
                  <div> 20:06</div>
                </div>
                <div className="origin-route">
                  <p>Duracion</p>
                  <hr/>
                  <p>Sin escalas</p>
                </div>
                <div className="origin-fin">
                  <div>final</div>
                  <div> 07:05</div>
                </div>
                {/* <p>Escala</p>
                <p>Maleta</p> */}
              </div>
              <div className="destination-flight">
                <p>Reg:</p>
                <div className="destination-init">
                  <div>final</div>
                  <div> 18:00</div>
                </div>
                <div className="origin-route">
                  <p>Duracion</p>
                  <hr/>
                  <p>Sin escalas</p>
                </div>
                <div className="destination-fin">
                  <div>inicio</div>
                  <div> 04:42</div>
                </div>
                {/* <p>Escala</p> */}
              </div>
              {/* <div className="days-flight">
              <p>Cantidad de dias</p>
              </div> */}
          </div>
          <div className="total-flight">
            {/* <p>Moneda</p> */}
            {/* <p>Precio</p>
            <p>Impuestos</p> */}
            <div>${flight.price.grandTotal}</div>
            <Link to={`/detail/${flight.id}`}>
            <button>Seleccionar</button>
            </Link>
          </div>
        </div>
        
    </div>
  )
}

export default Flight