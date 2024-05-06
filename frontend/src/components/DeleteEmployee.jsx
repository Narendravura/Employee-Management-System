
import axios from "axios";
import { useRef, useState } from "react";
const DeleteEmployee=()=>{
    const [num,setNum]=useState(null);
    const ref1=useRef(null);
    const deleteData=async ()=>{
      const res = await axios.delete(`http://localhost:7000/delete/${ref1.current.value}`);
      const {status}=res;
        setNum(status);
    }
    const delete_data=()=>{
        deleteData();
    }
    return(
        <>
 <input type="text" ref={ref1}></input> <br></br><br></br>
   <button onClick={delete_data}>DeleteRecord</button>
            {/* <p>{JSON.stringify(res)}</p> */}
            <h1>{num}</h1>
        </>
    )
}
export default DeleteEmployee;