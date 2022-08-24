import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import FlightList from "../FlightList/FlightList"
import { useSearchParams } from "react-router-dom";
import {complete, loading, errorDetail, } from "../../redux/slices/detail";
import {  useSelector } from "react-redux";
import Loader from "../Loader";


function FlightListContainer() {
  const data = useSelector(complete);
  const isloading = useSelector(loading);
  const error = useSelector(errorDetail);
    const [searchparams] = useSearchParams();
    console.log(searchparams.get("fechaIda"));
    console.log(searchparams.get("fechaRegreso"));  
    console.log(searchparams.get("origen"));  
    console.log(data,'list')

  return (
    <div style={{ margin: 80 }}>
        {isloading ? <Loader/> 
                   : 
                   <div>
                    <Typography gutterBottom variant="h4" component="div" className='title'>
                        Vuelos disponibles:
                    </Typography>
                    <Divider variant="middle" style={{ margin: 20 }}/>
                    <FlightList data ={data} />
                   </div>}
    </div>
  )

}
export default FlightListContainer 



