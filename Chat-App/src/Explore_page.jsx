import { useState, useEffect } from "react"




function Explore_page(){
    const [data, setData] = useState([])
    const [click, setClick] = useState(0);
    
    function changeClick(){
        setClick(pre => pre+1)
        
    }

    useEffect(()=>{
        async ()=>{
        await fetch('/api/users')
        .then(res=> res.json())
        .then(data=> setData(data))
        
        }
        console.log(data)
    },[click])

    const users = data.map((user, i) => <p key={i}>{user.username}</p>)

    return (<>
    <div>
        <input type="text" name="search" id="searchUserBase" />
        <input type="submit" onClick={()=> changeClick()}/>
        

    </div>
    <div>
    {users}


    </div>
    
    </>)

}

export default Explore_page