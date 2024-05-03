import React, { useState, useEffect } from 'react';
/*
  Account{
    C.A_ID:""
    email:""
    userName:""
    password:""
    profileConfig:{
        backgroundColor: ""
        profilePicture:""
        contacts:[]
        conversations: [
            conversationID #C.A_ID(person 1)#C.A_ID(person 2): {
                messages:[
                    messgae:{name messag,date:'9/20/2024',time:'12:30pm'e},

                ]
            
            }

        ] 
        }
    



  }


*/
async function validateCredial (username, password){
    // const username = document.getElementById(username)
    fetch('/api/checkCreditials', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: username, password: password})

    })

}


const profile_page =  ()=>{
    
    fetch("/profile").then((res)=>{
         if (!res.redirected) {
             // Redirect the user to the new page
             
           
             window.location.href = res.url;
         }
 
     }).catch((error)=>{
         console.error('Error', error)
 
 
     }) 
  }
  

function Login_page(props) {
    const SetUser = props.setuser
    
   
    
    
    return (
    <> 

      
        <h3 style={{textAlign:'center', marginBottom:50, marginTop:125}}>Let's get you sign in</h3>
        
        <br/>
        
        <div style={{position:'relative', alignItems:'center', display: 'flex', justifyContent: 'center', height:100, marginTop:100}}>
        
            <div style={{background:'#ffffff', borderRadius:10, width:180, padding:'5%', textAlign:'center'}}>
                    
            <form id="info" action='/api/checkCreditials' method='post'>
                        
                        

                        <input type="text" name="username" id="username" placeholder="username" />
                        <br/><br/>

                        <input type="text" name="password" id="password" placeholder="password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8}" />
                        <br/><br/>

                        <button type="submit"  style={{textAlign:'Center', width:100}}>Sign in</button>
                    </form>
                
                
                <a href=""> <p>forgot password?</p> </a>
                <a href=""> <p>need to make a new account?</p>  </a>

            </div>
        </div>
    </>
    )
  }
  
  export default Login_page
