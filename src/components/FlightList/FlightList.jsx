import { Link } from "react-router-dom"
import Flight from "../Flight/Flight"
import "./FlightList.css"


function FlightList({data}) {
  return (
    <div>
      {data.length 
          ? data.map((flight) => <Flight id={flight.id} flight={flight}/>)             
          : <div className="page404">
            <p className="title">404 page not found</p>
            <Link to="/">
            <p>Seguir buscando vuelos</p>
            </Link>
          </div>
          }    
    </div>
  )
}

export default FlightList
