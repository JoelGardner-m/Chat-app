import logo  from './assets/logo 1.png'


function Landing_page() {
    
    const login_page = async ()=>{
       const nextPage =  await fetch("/login")
        
        

        return nextPage.data
    }


    return (
    <>
        <img id="logo" src={logo} alt="chat app" width={75}/> 

        <div style={{ display: 'inline', marginLeft:'70%'}}>

        <button style={{display: 'inline', 'background-color':'#1FEDA8', color: '#05001F', borderRadius: 5, padding:10, paddingLeft:30, paddingRight:30 }}> <b>Log in</b></button>
        <button style={{display: 'inline', 'background-color':'#1FEDA8', color: '#05001F', borderRadius: 5, padding:10, paddingLeft:30, paddingRight:30, marginLeft:10}}> <b>features</b></button>

        </div>

            <div style={{ 'text-align' :'center', 'margin-top': '5%', fontSize:'125%-width', 'text-shadow': '5px 5px 10px hsl(90, 100%, 0%)'}}>
            <h1> Chat App 
            <br/>Fostering Friendships, 
            <br/>Fueling Businesses: 
            <br/>a place Where Trust Thrives and Collaborations Soar.
            </h1>
        
            <button style={{backgroundColor:'#1FEDA8', color: '#05001F', borderRadius:20, marginLeft: '0', marginTop: 20 , padding:10, paddingLeft:100, paddingRight:100}}> <b>Log in</b></button>

        </div>
    
    
    </>
        

    )


}

export default Landing_page