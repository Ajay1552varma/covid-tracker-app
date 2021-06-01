import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap';
function Covidapp() {
    const [disp,setapp]=useState([]);

    useEffect(() => {
      axios.get('https://api.covid19india.org/data.json')
      .then(res=>{
          console.log(res.data.statewise)
          setapp(res.data.statewise)
      })
    },[]);
   
    return (
        <div>
          
         <h1>Covid-19 Statewise Data</h1>
          <Table striped bordered hover responsive="sm"> 
  <thead>
    <tr>
      <th>Serial</th>
      <th>Pradesh</th>
      <th>Active</th>
      <th>Confirmed</th>
      <th>Deceased</th>
      <th>Recovered</th>
    </tr>
  </thead>
  <tbody>
    {
      disp.map((cur,ind)=>{
        return(
          <tr key={ind}>
        <td>{ind}</td>
        <td>{cur.state}</td>
        <td>{cur.active}</td>
        <td>{cur.confirmed}</td>
        <td>{cur.deaths}</td>
        <td>{cur.recovered}</td>
        </tr>
      
        ) 
      })
    }
    
  </tbody>
</Table>

          
        </div>
    )
}

export default Covidapp
