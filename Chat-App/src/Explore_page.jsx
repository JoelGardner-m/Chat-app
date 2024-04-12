import { useState, useEffect } from "react"


async function matchuser(setdata){ 
    const serach = document.getElementById("searchUserBase").value
    
    let match
    
    const all_user = await fetch('/api/users')
            .then(res=> res.json())
            .then(data=> match = data)
                
    const Usermatch = serach != "" ? await match.All_user           
    .filter((user)=>{
    return user 
    .username
    .toLowerCase()
    .startsWith(serach
        .toLowerCase())

}) : [{username: "user not found"}]
    
    setdata(Usermatch.length != 0 ? Usermatch : [{username: "user not found"}] )
}

function ContactCard (props){
    const profileimage = props.profileimage
    const username = props.username
    const bio = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi rem odio nisi. Earum similique voluptas beatae, fuga aspernatur, dolorum facere harum quis quo, consectetur doloremque ratione nihil repudiandae atque consequatur!'
    

    return(
    <>
    <div style={{
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        height: '56px',
        width:'296px',
        border: '1px solid #ccc',
        borderRadius: '16px ',
        padding:'8px 16px 24px 16px',
        margin:'8px',
        backgroundColor:"white",
        flow:'auto'}}>
            <img src="https://via.placeholder.com/50x50" alt="" style={{borderRadius:'50px',width:50, height:50,  marginRight:'16px'}} />
            
            <p>
                <br/>
                <strong>{username}</strong>
                <br/>
                {bio.slice(0, 60)} ...
            </p>
           
           

    </div>
    
    
    </>


    )


}


function Explore_page(){
    const [data, setData] = useState([])
    const [click, setClick] = useState(0);
    
    const users = data.map((user, i) => <ContactCard 
                                            profileimage={user.profileimage}  
                                            username = {user.username}
                                            bio = {user.bio}
                                                            />)

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