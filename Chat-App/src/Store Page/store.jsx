import CardsPieces from "./Store Cards";

/*
background styles:
Vintage
Retro
Naturalism
Romanticism
Corporate Style
Modern Style
Minimalist Style
Flat Design Style


stickes:


*/
function Store(){
    const viewportHeight = window.innerHeight;

    return (
        <>
        <div style={{display:'flex', height:viewportHeight}}>
        
            <div id="filter" style={ { backgroundColor:'#ffffff', width:'20%', height:viewportHeight,boxShadow:'1px 00px 10px'} }>
                <br/>
                
                <ul style={{fontSize:15, listStyleType:'none', paddingLeft: 10 }}>
                    <li><a href="/">Background Under 1000</a></li>
                    <br/>
                    <li><a href="#">Background Under 900</a></li>
                    <br/>
                    <li><a href="#">Background Under 800</a></li>
                    <br/>
                    <li><a href="#">Background Under 700</a></li>
                    <br/>
                    <li><a href="#">Background Under 600</a></li>
                    <br/>
                    <li><a href="#">Background Under 500</a></li>
                    <br/>
                    <li><a href="#">Background Under 400</a></li>
                    <br/>
                    <li><a href="#">Background Under 300</a></li>
                    <br/>
                    <li><a href="#">Background Under 200</a></li>
                    <br/>
                    <li><a href="#">Background Under 100</a></li>
                    <br/>
                    <li><a href="#">Background Under 0</a></li>
                </ul>
            </div>

            
            <div style={{background:'#fff00f', width:'80%', overflow: 'auto'}}>
            
            <div id="Screchbutton" style={{textAlign:'center', marginTop:30}}>
                <form action="search" method="post">
                    <button >text</button>
                
                    <input type="text" />
                </form>

            </div>

            <div id="itemHolder" style={{ paddingTop:50, paddingBottom:50, height:`${viewportHeight}`, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gridGap: '10px',}}>
                
                <CardsPieces/>
                <CardsPieces/>
                <CardsPieces/>
                <CardsPieces/>
                <CardsPieces/>
                <CardsPieces/>
                <CardsPieces/>
                <CardsPieces/>
                <CardsPieces/>
                <CardsPieces/>
                <CardsPieces/>
                <CardsPieces/>
                <CardsPieces/>
                <CardsPieces/>
                <CardsPieces/>
                <CardsPieces/>
                <CardsPieces/>
                <CardsPieces/>
                <CardsPieces/>
                <CardsPieces/>
                <CardsPieces/>
                <CardsPieces/>
                <CardsPieces/>
                <CardsPieces/>
                

            </div>

            </div>
        
        

        </div>
        
        
        
        </>


    )


}

export default Store