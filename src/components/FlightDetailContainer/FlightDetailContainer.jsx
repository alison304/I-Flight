import FlightDetail from "../FlightDetail/FlightDetail"
import {flights} from "../../data/data"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";



    const findFlight = (id) => {
        return new Promise ((resolve) =>{
          setTimeout(() => {
              const flightDet = id ? flights.find(flight => flight.id === id) : flights
              resolve (flightDet)
          },2000);
        });
      }
      
      
      function FlightDetailContainer({}) {
      
        const [flight, setFlight] = useState([]);
        const[loading, setLoading] = useState([true]);
        const {id} = useParams()
      
        useEffect(() =>{
          findFlight(id)
          .then((resp) =>{setFlight(resp)})
          .catch((err) =>{console.log(err)})
          .finally(() => setLoading(false))
        },[])

  if (loading) {
    return ( 
    <Box display="flex" justifyContent="center">
      <CircularProgress />
    </Box>
    );
  }
        
  return (
    <div>    
         <FlightDetail flight={flight}/>
    </div>
  )
}

export default FlightDetailContainer