import Flight from "../Flight/Flight"
import { Box } from "@mui/material";

function FlightList({data}) {

  if (data.length === 0) {
    return ( 
      <Box display="flex" justifyContent="center"  height="50vh" alignItems="center">
        <div>No hay datos</div>
      </Box>

      );
  }

  return (
    <div>
      {data.map(flight => <Flight id={flight.id} flight={flight}/>)} 
    </div>
  )
}

export default FlightList
