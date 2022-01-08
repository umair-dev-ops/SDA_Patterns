import {useNavigate } from "react-router-dom";

const SelectAdd=()=>{
    const navigate = useNavigate();

    return(<>
    <h3>Pure Fabrication</h3>

            
    <ul class="nav navbar flex-column">
           
            <li class="nav-item p-2">
                <button onClick={()=>{navigate('/addstudent')}} class="btn  btn-outline-dark mt-5" aria-current="page" href="#">Add Student</button>
            </li>
            <li class="nav-item p-2">
                <button onClick={()=>{navigate('/addteacher')}} class="btn btn-outline-dark mt-3 " aria-current="page" href="#">Add Teacher</button>
            </li>
            <li class="nav-item p-2">
                <button onClick={()=>{navigate('/addstaff')}} class="btn btn-outline-dark mt-3" aria-current="page" href="#">Add Staff</button>
            </li>
            
    </ul>
    
    </>)
}

export default SelectAdd