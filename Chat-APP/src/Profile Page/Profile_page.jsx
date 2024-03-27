import ContactsWidget from "./contactsWidget"
import image from "../assets/logo 1.png"


function Profile(){
    const viewportHeight = window.innerHeight;
    
    
    return (
        <>
            <div style={ {display: 'flex', alignItems : 'flex-start', height:viewportHeight }}>
                
                    <ContactsWidget ></ContactsWidget>
                

                
                <div style={ {  display: 'flex', alignItems : 'flex-start', backgroundColor:'#707070', width:'80%', height:viewportHeight, textAlign:'center' } }>
                      <div  >
                        <div name='settings'style={ { backgroundColor:'#ffff00', height:60, width:60,marginLeft:20, marginTop:20, borderRadius:10 } }></div>
                        <div name='store'style={ { backgroundColor:'#ffffff', height:60, width:60,marginLeft:20, marginTop:20   } }></div>
                    
                        </div>  
                        
                    <div style={{width: '40%'}}>

                        <div name='profile picture' style={ { backgroundColor:'#ffffff', height:viewportHeight/2, width:'150%', marginLeft:'25%', marginRight:'25%' } }>
                            <img src={image} alt="" width={200} style={{borderRadius:100, marginTop:'30px'}}/>

                        </div>
                        <div name='profile bio'style={ { backgroundColor:'#ffffff', height:viewportHeight/2, width:'135%', marginLeft:'33%', marginRight:'25%' } }>bio</div>
                    </div>
                </div>

            </div>
        </>



    )


}


export default Profile