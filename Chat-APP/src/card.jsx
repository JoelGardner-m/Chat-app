import logo from './assets/logo 1.png'


function Card(props){
  
  const backgroundColor = props.backgroundColor;
  const textColor = props.textColor;
  

  return (
      <>
        <div className="card" style={ { backgroundColor:`${backgroundColor}`, color:`${textColor}`, borderRadius:10, marginLeft: 10, width:'90%'} } >
        <p style={{color:'hsl(250, 0%, 70%)', textAlign:'right', paddingRight:10, paddingTop:5, fontSize:15, }}>data and time</p>
        <div style={{display: 'flex', 'align-items': 'flex-start',  } } >
        <img src={logo} alt="bob" width={50} />
        <p>text</p>
        </div>

        </div>
      </>
    )


}

export default Card