import { useEffect,useState } from "react"
import axios from "axios";
const GetEmployee=()=>{
    const [arr,setArr]=useState([]);
    const getData=async ()=>{
        const res=await axios.get("http://localhost:7000/getAll");
        const {data}=res;
        setArr(data);
    }
    useEffect(()=>{
        getData();
    },[]);
    return(
        <>
             <div className="container mt-5">
                <table border={1}>
                    <thead>
                        <tr>
                            <th>EID</th>
                            <th>ENAME</th>
                            <th>SALARY</th>
                            <th>DESINGATION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr.map((element,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{element.empId}</td>
                                        <td>{element.empName}</td>
                                        <td>{element.salary}</td>
                                        <td>{element.designation}</td>
                                        
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    <tfoot></tfoot>
                </table>
             </div>
        </>
    )
}
export default GetEmployee;
