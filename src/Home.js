import React,{useState,useEffect} from 'react'
import { Table } from 'react-bootstrap';
import './Style.css';
import axios from 'axios'
function Home() {
    const [disp,setapp]=useState([]);

   useEffect(() => {
     axios.get('https://api.covid19india.org/data.json')
     .then(res=>{
         console.log(res.data.statewise[0])
         setapp(res.data.statewise[0])
     })
   },[]);
    return (
        <div>
            <h1 className="h1">Covid-19 India Tracker</h1>
             <div className="card1">
                 <div className="card2">
                    <p className="india">Our Country</p> 
                    <p className="a">India</p>
                 </div>
                 <div className="card2">
                     <p className="card_name">Active Case</p>
                         <p className="india">{disp.active}</p>
                 </div>

                 <div className="card2">
                         <p className="card_name">Confirmed</p>
                         <p className="india">{disp.confirmed}</p>
                     </div>

                     <div className="card2">
                         <p className="card_name">Total Deaths</p>
                         <p className="india">{disp.deaths}</p>
                     </div>

                     <div className="card2">
                         <p className="card_name">Last updated</p>
                         <p className="india">{disp.lastupdatedtime}</p>
                     </div>

                     <div className="card2">
                         <p className="card_name">Total recovered</p>
                         <p className="india">{disp.recovered}</p>
                     </div>
             </div>



        </div>
    )
}

export default Home