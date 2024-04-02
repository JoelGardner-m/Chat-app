

function Login_page() {
  

    return (
    <> 

      
        <h3 style={{textAlign:'center', marginTop:125}}>Let's get you sign in</h3>
        
        <br/>
        
        <div style={{position:'relative', alignItems:'center', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        
            <div style={{background:'#ffffff', borderRadius:10, width:180, padding:'5%', textAlign:'center'}}>
                    
                    <form id="info"  action="" method="Post" >

                        <input type="text" name="Email" id="Email" placeholder="Email" required pattern="[A-Za-z]{3,}[@]{1}[A-Za-z]{3,}[.]{1}[A-Za-z]{3}" />
                        <br/><br/>

                        <input type="text" name="username" id="username" placeholder="username" />
                        <br/><br/>

                        <input type="text" name="password" id="password" placeholder="password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8}" />
                        <br/><br/>

                        <button type="submit" style={{textAlign:'Center', width:100}}>Sign in</button>
                    </form>
                
                
                <a href=""> <p>forgot password?</p> </a>
                <a href=""> <p>need to make a new account?</p>  </a>

            </div>
        </div>
    </>
    )
  }
  
  export default Login_page
