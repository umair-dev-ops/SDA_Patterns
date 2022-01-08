import {useNavigate } from "react-router-dom";

const SelectView=()=>{
    const navigate = useNavigate();

    return(<>
                <h3>View Data</h3>

            
    <ul class="nav navbar flex-column">
           
            <li class="nav-item p-2">
                <button onClick={()=>{navigate('/viewstudent')}} class="btn  btn-outline-dark mt-5" aria-current="page" href="#">View Students</button>
            </li>
            <li class="nav-item p-2">
                <button onClick={()=>{navigate('/viewteacher')}} class="btn btn-outline-dark mt-3 " aria-current="page" href="#">View Teachers</button>
            </li>
            <li class="nav-item p-2">
                <button onClick={()=>{navigate('/viewstaff')}} class="btn btn-outline-dark mt-3" aria-current="page" href="#">View Staff</button>
            </li>
            
    </ul>
    
    </>)
}

export default SelectView