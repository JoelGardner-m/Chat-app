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
function params (param){
    if (param == 'end'){
    const url = window.location.href;
    const parts = url.split('/');
    const lastParam = parts[parts.length - 1];
    const end = lastParam;

    return end
    }
    const url = window.location.href;
    const parts = url.split('/');
    const Param = parts[parts.length - param];
    const parm = Param;

    return parm 

  }
function ContactCard (props){
    const profileimage = props.profileimage
    const username = props.username
    const recieverID = props.recieverID
    
    const bio = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi rem odio nisi. Earum similique voluptas beatae, fuga aspernatur, dolorum facere harum quis quo, consectetur doloremque ratione nihil repudiandae atque consequatur!'
    function contactRequest(){
        
        fetch('/api/requestContact', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({senderID: params(2), recieverID:recieverID})

        })

    }
    
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
            <img src="https://via.placeholder.com/50x50" alt="profilepicture" style={{borderRadius:'50px',width:50, height:50,  marginRight:'16px'}} />
            
            <p>
                <br/>
                <strong>{username}</strong>
                <br/>
                {bio.slice(0, 60)} ...
            </p>
            <img src="https://via.placeholder.com/30x30" alt="add contact" onClick={()=>contactRequest()} className="add contact" style={{borderRadius:'10px', position:'relative', bottom:10}} />
           
           

    </div>
    
    
    </>


    )


}


function Explore_page(props){
    const [data, setData] = useState([])
    const [click, setClick] = useState(0);
    
    const users = data.map((user, i) =>  <ContactCard 
                                            key={i}
                                            profileimage={user.profileimage}  
                                            username = {user.username}
                                            recieverID = {user.userid}
                                            bio = {user.bio}
                                                            />)

    return (<>
    <div >
        <div style={{
            display: 'flex',
            justifyContent:'center',
            
        }}>
            <div style={{
                backgroundColor:"white",
                borderRadius:50,
                width:304, 
                height: 16,  
                padding: 8 ,
                marginTop:24,
                }}>
                <input type="text" name="search" id="searchUserBase" placeholder="find some new" style={{ border:'0px none black'}} />
                <input  type="submit" onClick={()=> matchuser(setData)} style={{border:"0px", backgroundColor:'white',position:'relative', left:50}}/>
            </div>

        </div>
        <br/>

       
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center', alignItems: 'center',
                }}>
            {users}


            </div>

       
    </div>
    
    
    </>)

}

export default Explore_page