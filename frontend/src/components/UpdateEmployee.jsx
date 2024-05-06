import axios from "axios";
import {useRef,useState} from "react";
const UpdateEmployee=()=>{
    const [res,setRes]=useState({});
    const ref1=useRef(null);
    const ref2=useRef(null);
    const ref3=useRef(null);
    const ref4=useRef(null);
    const put_data=()=>{
        putEx();
    }
    const putEx=async ()=>{
        const res=await axios.put("http://localhost:7000/update/${ref1.current.value}",{"empName":ref2.current.value,
        "designation":ref3.current.value,
        "salary":ref4.current.value,
    });
        const {data}=res;
        setRes(data);
    }
    return(
        <>
            EmployeeID:<input type="text" ref={ref1}></input> <br></br><br></br>
            EmployeeName<input type="text" ref={ref2}></input> <br></br><br></br>
            EmployeeDesignation<input type="text" ref={ref3}></input> <br></br><br></br>
            EmployeeSalary<input type="text" ref={ref4}></input> <br></br><br></br>
            <button onClick={put_data}>Post</button>
            <p>{JSON.stringify(res)}</p>
        </>
    )
}
export default UpdateEmployee;