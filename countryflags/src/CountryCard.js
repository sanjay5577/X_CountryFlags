import {
    Card,
    CardMedia,
   
  } from "@mui/material";
  import React from "react";
  import "./CountryCard.css";
  

const CountryCard=({data})=>{
    // console.log(data);

    return(
        <div class="cardmain">
        <Card   sx={{ maxWidth: 145 , margin:"0px"}}>
          <div class="cardmedia">
          <CardMedia
        sx={{ height: 80 ,width:100,}}
        image={data.flags.png}
        alt={data.flags.alt}
        component ="img"
      />

          </div>
      
      <div  className="countryname">
       {data.name.official}
      </div>
      
    </Card>

        </div>
    )
}

export default CountryCard;