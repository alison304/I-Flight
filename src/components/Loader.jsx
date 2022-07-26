import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


function Loader() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
            <CircularProgress />
    </Box> 
  )
}

export default Loader