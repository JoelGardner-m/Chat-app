import { useState, useEffect } from "react"




function Explore_page(){
    const [data, setData] = useState([])

    useEffect(async ()=>{
        fetch("/api/users")
        .then(res=> res.json())
        .then(data=> setData(data))


    })

    const users = data.map((user, i) => <p key={i}>{user.username}</p>)

    return (<>
    <div>
        <form action="/Explore/page" method="post">
            <input type="text" name="search" id="searchUserBase" />
            <input type="submit" value="" />
        </form>

    </div>
    <div>
    {users}


    </div>
    
    </>)

}

export default Explore_page