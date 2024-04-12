import { useState, useEffect } from "react"


async function matchuser(setdata){ 
    const serach = document.getElementById("searchUserBase").value
    let match
    const all_user = await fetch('/api/users')
            .then(res=> res.json())
            .then(data=> match = data)
                
    const Usermatch = await match.All_user           
    .filter((user)=>{
    return user
    .username
    .toLowerCase()
    .startsWith(serach
        .toLowerCase())

})
    setdata(Usermatch)
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