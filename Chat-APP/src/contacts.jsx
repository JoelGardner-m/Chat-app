import Card from "./card";




function Contact(){
    const viewportHeight = window.innerHeight;
    
     
    return (
        <>

        <div style={ {display: 'flex', 'align-items': 'flex-start'}}>
            
            <div style={ {display: 'inline-block', backgroundColor:'#20ffff', width:'20%', height:viewportHeight } }>
                <div style={ {position:'relative', alignItems:'center', display: 'flex', justifyContent: 'center', alignItems: 'center'} }></div>
                <br />
                <Card backgroundColor="#ffffff" Color='#000000'></Card>
                

                </div>
        

            

            <div style={ { backgroundColor:'#707070', width:'80%', height:viewportHeight, textAlign:'center'} }>
                
                <div style={ {backgroundColor:'#ffffff', height:viewportHeight/2, width:'50%', marginLeft:'20%', marginRight:'25%'}}>bob</div>
                <div style={ {backgroundColor:'#ffffff', height:viewportHeight/2, width:'35%', marginLeft:'20%', marginRight:'25%'}}>bob</div>
                
                
            </div>
        </div>
        
        
        


            
        
        
        </>


    )




}


export default Contact