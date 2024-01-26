import { useEffect, useState } from "react"
import axios from "axios";
import {Grid} from "@mui/material";
import CountryCard from "./CountryCard";

export default function App(){

    const [flagsdata , setFlagsData]=useState([]);

    useEffect(()=>{
        performAPICall()
      .then((flags) => {
        if(flags.length){
          console.log(flags)
          setFlagsData(flags);
          console.log(flagsdata);
        }
        
      })
      .catch(() => {
        console.log('Error occured when fetching flags data');
      });
  }, []);


  const performAPICall = async()=>{
    try{
        const apiData = await axios.get('https://restcountries.com/v3.1/all');
        console.log(apiData.data)
        
        return apiData.data;

    }catch(e){
      console.log(e.message);

    }
  }

    return(
        <>
        <Grid container spacing={2} layout={'row'} mt={2} sx={{ marginLeft:"50px", marginRight:"50px", width:"90vw"}}>
        {flagsdata.length !==0 && flagsdata.map((data) => (
          <Grid  item  sm={3} lg={12/7}>
            <CountryCard data={data}/>
          </Grid>
        ))}
        </Grid>  
        </>
    )
}

