import Flight from "../Flight/Flight"


function FlightList({data}) {
  return (
    <div>
      {data.map(flight => <Flight id={flight.id} flight={flight}/>)} 
    </div>
  )
}

export default FlightList
