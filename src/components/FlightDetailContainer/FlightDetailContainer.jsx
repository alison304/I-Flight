import { useEffect, useState } from "react";
import { formatInTimeZone } from 'date-fns-tz'
import { es } from 'date-fns/locale'
import { useParams } from "react-router-dom";
import {complete, loading, errorDetail, } from "../../redux/slices/detail";
import {  useSelector } from "react-redux";
import "./FlightDetail.css"
      
      function FlightDetailContainer({}) {
        const [flightDetail, setFlightDetail] = useState([]);
        const isloading = useSelector(loading);
        const data = useSelector(complete);
        const {id} = useParams()
        

        let priceFilter = data.filter(item => item.id === id)
        const { grandTotal, currency } = priceFilter[0].price
        console.log(grandTotal, currency)

    
        const detail = (id,data) => {
          let filter = data.filter(flight => flight.id === id)
          /* console.log(filter[0].price) */
          console.log(filter[0].itineraries)
          return filter[0].itineraries         
}

          useEffect(() => {
            setFlightDetail(detail(id,data)) 
          } , [id]) 

        
        console.log(data,'detail')
     
  return (
    <>   
      {isloading ? <Loader/> :
      <div>

      <div>
        <h2 className="title">Tu vuelo seleccionado:</h2>
          {flightDetail.map((flight) => (
            <div id={flight.id}>
            {flight.segments.map((segment) => (
          <>
            <div className="detail-container">    
            <div className="flight-origin">
            <div className="origin-init-detail">
                  <p>Partida {segment.departure.iataCode}</p>
                  {formatInTimeZone(
                    segment.departure.at,
                    'America/Santiago',
                    'dd MMMM yyyy hh:mm a',
                    { locale : es }
                    )}
            </div>
            <div className="origin-route-detail">
                  <p>Duración: {flight.duration.split('PT')[1].replace(/H/g, ' hrs ').replace(/M/g, ' mins ')}</p>
                  <hr/>
            </div>
            <div className="origin-fin-detail">
                  <p>Llegada {segment.arrival.iataCode}</p>
                  {formatInTimeZone(
                    segment.arrival.at,
                    'America/Santiago',
                    'dd MMMM yyyy hh:mm a',
                    { locale : es }
                    )}
            </div>
            </div>
            </div>
          </>))}
            </div>))}
      </div>
            <p className="price">Precio total € {grandTotal}</p>
      </div>}
    </>
  )
}
     
      


export default FlightDetailContainer

          