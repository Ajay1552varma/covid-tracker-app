import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap';
function Practice() {
    const [disp,setapp]=useState([]);

    useEffect(() => {
      axios.get('https://api.covid19india.org/v4/min/data.min.json')
      .then(res=>{
          console.log(res.data)
          setapp(res.data.UP.districts)
      })
    },[]);
    return (
        <div>
         <h1>Covid-19 UP Districts Data</h1>
         <Table striped bordered hover>
 <thead>
   <tr>
     <th>Serial</th>
     <th>District</th>
     <th>Confirmed</th>
     <th>Deaths</th>
     <th>Recovered</th>
     <th>Tasted</th>
     <th>Vaccinated</th>

   </tr>
 </thead>
 <tbody>

          <tr>
        <td>1</td>
        <td>Agra</td>
        <td>{disp?.Agra?.total.confirmed}</td>
        <td>{disp?.Agra?.total.deceased}</td>
        <td>{disp?.Agra?.total.recovered}</td>
        <td>{disp?.Agra?.total.tested}</td>
        <td>{disp?.Agra?.total.vaccinated}</td>
        </tr>

        <tr>
        <td>2</td>
        <td>Bahraich</td>
        <td>{disp?.Bahraich?.total.confirmed}</td>
        <td>{disp?.Bahraich?.total.deceased}</td>
        <td>{disp?.Bahraich?.total.recovered}</td>
        <td>{disp?.Bahraich?.total.tested}</td>
        <td>{disp?.Bahraich?.total.vaccinated}</td>
        </tr>

        <tr>
        <td>3</td>
        <td>Barabanki</td>
        <td>{disp?.Barabanki?.total.confirmed}</td>
        <td>{disp?.Barabanki?.total.deceased}</td>
        <td>{disp?.Barabanki?.total.recovered}</td>
        <td>{disp?.Barabanki?.total.tested}</td>
        <td>{disp?.Barabanki?.total.vaccinated}</td>
        </tr>

        <tr>
        <td>4</td>
        <td>Gonda</td>
        <td>{disp?.Gonda?.total.confirmed}</td>
        <td>{disp?.Gonda?.total.deceased}</td>
        <td>{disp?.Gonda?.total.recovered}</td>
        <td>{disp?.Gonda?.total.tested}</td>
        <td>{disp?.Gonda?.total.vaccinated}</td>
        </tr>

        <tr>
        <td>5</td>
        <td>Gorakhpur</td>
        <td>{disp?.Gorakhpur?.total.confirmed}</td>
        <td>{disp?.Gorakhpur?.total.deceased}</td>
        <td>{disp?.Gorakhpur?.total.recovered}</td>
        <td>{disp?.Gorakhpur?.total.tested}</td>
        <td>{disp?.Gorakhpur?.total.vaccinated}</td>
        </tr>

        <tr>
        <td>6</td>
        <td>Lucknow</td>
        <td>{disp?.Lucknow?.total.confirmed}</td>
        <td>{disp?.Lucknow?.total.deceased}</td>
        <td>{disp?.Lucknow?.total.recovered}</td>
        <td>{disp?.Lucknow?.total.tested}</td>
        <td>{disp?.Lucknow?.total.vaccinated}</td>
        </tr>

        <tr>
        <td>7</td>
        <td>Shrawasti</td>
        <td>{disp?.Shrawasti?.total.confirmed}</td>
        <td>{disp?.Shrawasti?.total.deceased}</td>
        <td>{disp?.Shrawasti?.total.recovered}</td>
        <td>{disp?.Shrawasti?.total.tested}</td>
        <td>{disp?.Shrawasti?.total.vaccinated}</td>
        </tr>

        <tr>
        <td>8</td>
        <td>Mau</td>
        <td>{disp?.Mau?.total.confirmed}</td>
        <td>{disp?.Mau?.total.deceased}</td>
        <td>{disp?.Mau?.total.recovered}</td>
        <td>{disp?.Mau?.total.tested}</td>
        <td>{disp?.Mau?.total.vaccinated}</td>
        </tr>

        <tr>
        <td>9</td>
        <td>Varanasi</td>
        <td>{disp?.Varanasi?.total.confirmed}</td>
        <td>{disp?.Varanasi?.total.deceased}</td>
        <td>{disp?.Varanasi?.total.recovered}</td>
        <td>{disp?.Varanasi?.total.tested}</td>
        <td>{disp?.Varanasi?.total.vaccinated}</td>
        </tr>

        <tr>
        <td>10</td>
        <td>Ayodhya</td>
        <td>{disp?.Ayodhya?.total.confirmed}</td>
        <td>{disp?.Ayodhya?.total.deceased}</td>
        <td>{disp?.Ayodhya?.total.recovered}</td>
        <td>{disp?.Ayodhya?.total.tested}</td>
        <td>{disp?.Ayodhya?.total.vaccinated}</td>
        </tr>


 </tbody>
</Table>  

        </div>
    )
}

export default Practice