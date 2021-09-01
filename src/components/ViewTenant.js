// import 'bootstrap/dist/js/popper.min.js';
import React,{useState,useEffect} from 'react'
import Table_View from './Table';



function ViewTenant() {
    
    const [client, setClient] = useState(0);
    const [user,setUser] = useState(0);

    

    const handleUserData=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setUser(value);
    }



    const handleClientData=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setClient(value);
        
    }

    return (
        <div>
            <div>
            <br/>
            <label htmlFor="user"><b>USERS</b></label>&nbsp;&nbsp;
            <input type="text" placeholder="Enter Number Of Users" name="user" id="user" onChange={handleUserData} required></input>&nbsp;&nbsp;&nbsp;&nbsp;
            
            <br/><br/>
            <label htmlFor="client"><b>CLIENTS</b></label>&nbsp;&nbsp;
            <input type="text" placeholder="Enter Number Of Clients" name="client" id="client" onChange={handleClientData} required></input>&nbsp;&nbsp;&nbsp;&nbsp;
            <br/><br/>
            <h5>"You have added {user} users and {client} clients"</h5>
            
            </div> 
            
            <br/><br/><br/> 
          
           <Table_View/>
            
        </div>
    )
}

export default ViewTenant


