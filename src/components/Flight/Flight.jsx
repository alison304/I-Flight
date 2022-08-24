import Button from '@mui/material/Button';

import { Link } from 'react-router-dom'
import { useSearchParams } from "react-router-dom";

import "./Flight.css"

function Flight({flight}) {

  const [searchparams] = useSearchParams();

  const origen = searchparams.get("origen");
  const destino = searchparams.get("destino");

  
  return (
    <div className="flight-container">
        <div className="flight">
          <div className="travel-flight">
              <div className="origin-flight">
                <div className="origin-init">
                  <p>Origen: {origen}</p>
                </div>
                <div className="origin-route">
                  <hr/>
                </div>
                <div className="origin-fin">
                <p>Destino: {destino}</p>
                </div>
              </div>
              <div className="destination-flight">
                <div className="origin-route">
                  <p>Cantidad de asientos disponibles: {flight.numberOfBookableSeats}</p>
                  <p>Último día para reservar: {flight.lastTicketingDate}</p>
                </div>
              </div>
          </div>
          <div className="total-flight">
            <p>Precio total</p>
            <p>€ {flight.price.grandTotal}</p>
            <Link to={`/detail/${flight.id}`}>
            <Button variant="contained">Seleccionar</Button>
            </Link>
          </div>
        </div>
        
    </div>
  )
}

export default Flight