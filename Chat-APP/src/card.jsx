import logo from './assets/logo 1.png'
import { useState, useEffect } from 'react';

function Card(props){
  
  const backgroundColor = props.backgroundColor;
  const textColor = props.textColor;
  const latestTextMessage = props.latestTextMessage;
  const name = props.name;
  const [displaymessage, Setdisplaymessage]  = useState();
  
  useEffect(()=>{
    
    Setdisplaymessage(latestTextMessage.slice(0,  30)+ "   ...")
    
  }, [latestTextMessage])

  return (
      <>
        <div  className="card" style={ { backgroundColor:`${backgroundColor}`, color:`${textColor}`, borderRadius:10, marginLeft: 10, marginBottom:10, width:'90%', height:80} } >
          
          <p style={{color:'hsl(250, 0%, 70%)', textAlign:'right', paddingRight:10, paddingTop:5, fontSize:12, margin:0 }}>data and time</p>
         
          <div style={{display: 'flex', alignItems : 'flex-start'} } >
          
          
          <img src={logo} alt="bob" width={50} style={{borderRadius:50, marginBottom:0, marginLeft:10}} />
            <p style={{borderRadius:50, paddingLeft:5, paddingRight:3, fontSize:12.5,marginTop:8}} > 
              <b style={{fontSize:15}}>{name}:</b> 
              <br />
              <b>{displaymessage}</b>
            </p>
          
        
        </div>
        
        </div>
      </>
    )


}

export default Card