import { useState, useEffect } from "react"


function matchuser(setdata){ 
    const serach = document.getElementById("searchUserBase").value
    console.log(serach)
    const all_user = fetch('/api/users')
            .then(res=> res.json())
            .then(data=> data)
        
    const match = all_user.filter((user)=>{
        user.username.toLowerCase().startsWith(serach.toLowerCase())

    })
    setdata(match)
}

function Explore_page(){
    const [data, setData] = useState([])
    const [click, setClick] = useState(0);
    
    const users = data.map((user, i) => <p key={i}>{user.username}</p>)

    return (<>
    <div>
        <input type="text" name="search" id="searchUserBase" />
        <input type="submit" onClick={()=> matchuser(setData)}/>
        

    </div>
    <div>
    {users}


    </div>
    
    </>)

}

export default Explore_page