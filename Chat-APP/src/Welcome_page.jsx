

function Welcom_page(){


    return  (

        <div style={{position:'relative', alignItems:'center', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{textAlign:'center'}}>
                
                <h1 style={{marginTop:'20%', fontSize:'40px'}}>Welcome username to chat app </h1>
                <br/>
                <h1>what brings you to our app?</h1>
                <br/><br/>
                <button style={{display: 'inline', 'background-color':'#1FEDA8', color: '#05001F', borderRadius: 5, padding:10, paddingLeft:30, paddingRight:30 }}><b>Social</b></button> 
                <button style={{display: 'inline', 'background-color':'#1FEDA8', color: '#05001F', borderRadius: 5, padding:10, paddingLeft:25, paddingRight:25 }}><b>Business</b></button> 
                <button style={{display: 'inline', 'background-color':'#1FEDA8', color: '#05001F', borderRadius: 5, padding:10, paddingLeft:30, paddingRight:30 }}><b>Other</b></button>
                <br/><br/><br/><br/>
                <a><p>skip</p></a>
            </div>


        </div>

    )


}


export default Welcom_page