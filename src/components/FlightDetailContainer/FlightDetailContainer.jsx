import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

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

      
        console.log(data,'listDet')

        let priceFilter = data.filter(item => item.id === id)
        const { grandTotal, currency } = priceFilter[0].price
        console.log(grandTotal, currency)
    
        const detail = (id,data) => {
          let filter = data.filter(flight => flight.id === id)
          console.log(filter[0].itineraries)
          return filter[0].itineraries         
}

          useEffect(() => {
            setFlightDetail(detail(id,data)) 
          } , [id]) 
     
  return (
    <>   
      {isloading ? <Loader/> :
      <div style={{ margin: 60 }}>
        <Typography gutterBottom variant="h4" component="div" className='title'>
              Detalle del vuelo:
        </Typography>
      <div>
        <Divider variant="middle" style={{ margin: 20 }}/>
          {flightDetail.map((flight, flightIdx) => (
            <div id={flight.id}>
             <Typography gutterBottom variant="h6" component="div" className='subtitle' style={{ margin: 20 }}>{flightIdx == 0 ? "Vuelo de ida" : "Vuelo de regreso" }</Typography>
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
                  <p>Duración: {segment.duration.split('PT')[1].replace(/H/g, ' hrs ').replace(/M/g, ' mins ')}</p>
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
            <Divider variant="middle" style={{ margin: 30 }}/>
            <Typography gutterBottom variant="h5" component="div" className='price'>Precio total € {grandTotal}</Typography>
      </div>
      </div>}
    </>
  )
}
     
      


export default FlightDetailContainer

          