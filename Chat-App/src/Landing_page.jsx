import React, { useState, useEffect } from 'react';

import logo  from './assets/logo 1.png'

function fetchSignup(){
    fetch('/signup')
    .then(res=> window.location.href = res.url)

}
function fetchLogin(){
    fetch('/login')
    .then(res=> window.location.href = res.url)

}


function Landing_page(props) {
    const Locations = props.Locations
    const pageChange = props.SwitchPage
    
    

    return (
    <>
        <div style={{ display: 'flex', textAlign:'center'}}>
        
        <img id="logo" src={logo} alt="chat app" style={{position:'fixed', width:80}} /> 
        
        <h1 style={{display: 'inline', position:'relative', left:'45%', width:125}}> Chat App  </h1>
        
        <div style={{marginLeft:'70%'}}>
            
            <button name='Signup' style={{display: 'inline', backgroundColor:'#1FEDA8', color: '#05001F', borderRadius: 5, padding:10, paddingLeft:20, paddingRight:20, marginTop:20 }} onClick={()=>{fetchLogin()} }> <b>login</b></button>
            <button name='Signup' style={{display: 'inline', backgroundColor:'#1FEDA8', color: '#05001F', borderRadius: 5, padding:10, paddingLeft:20, paddingRight:20, marginTop:20 }} onClick={()=>{fetchSignup()} }> <b>Sign up</b></button>
            
            <button name = 'picture' style={{display: 'inline', backgroundColor:'#1FEDA8', color: '#05001F', borderRadius: 5, padding:10, paddingLeft:20, paddingRight:20}}> <b>features</b></button>

        </div>
        </div>

            <div style={{ textAlign :'center', marginTop: '8%', fontSize:'205%-width', textShadow: '5px 5px 10px hsl(90, 100%, 0%)'}}>
            
            <h2>
            Fostering Friendships, 
            Fueling Businesses: 
            <br/>a place Where Trust Thrives and Collaborations Soar.
            </h2>
        
            <button style={{backgroundColor:'#1FEDA8', color: '#05001F', borderRadius:20, marginLeft: '0', marginTop: 20 , padding:10, paddingLeft:100, paddingRight:100}} onClick={()=>{fetchSignup()} } > <b>Sign up</b></button>

        </div>
    
    
    </>
        

    )


}

export default Landing_page