import {Fragment,useEffect,useState} from 'react'
import {Table} from 'react-bootstrap'

function Assignment(){
        
        const [data,setdata]=useState("");
        const [value,setValue]=useState(0);
        const [arry,setarry]= useState([]);
        const [hash,setHash] = useState([]);
        useEffect(()=>{
            fetch("https://raw.githubusercontent.com/invictustech/test/main/README.md")
            .then(res=>res.text().then(resp=>{
              
           setdata(resp);
           console.log(value);
           console.log(data);
           }));
        },)
          function result()
        {
            
           
            const findMostFrequent = (str = '', num = 1) => {
                const strArr = str.split(' ');
                const map={};
                strArr.forEach(word => {
                   if(map.hasOwnProperty(word)){
                      map[word]++;
                   }else{
                      map[word] = 1;
                   }
                });
                const frequencyArr = Object.keys(map).map(key => [key, map[key]]);
                console.log(frequencyArr);
                frequencyArr.sort((a, b) => b[1] - a[1]);
                setHash(map);
        const temp= frequencyArr.slice(0, num).map(el => el[0]);
        setarry(temp);
             };

             findMostFrequent(data,value);
          }
    return(
        <Fragment>
            <br/>
            <input type="number" id="ajay" name="input" onChange={(e)=>setValue(e.target.value)} placeholder="Enter the value"/>
            <br/>
            <br/><button onClick={result}>Fetch data</button>

            <br/><br/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Frequency of occureence</th>
                       <th>Words</th>
                    </tr>
                    {
                        arry.map((item,index)=>
                            <tr key={index}>
                        <td>{hash[item]}</td>
                                <td>{item}</td>
                              
                            </tr>
                        )
                    }
                </thead>
            </Table>
        </Fragment>
    )
}
export default Assignment;