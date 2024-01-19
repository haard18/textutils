import React from 'react'

function Pallete(props) {
  const handlebutton=()=>{
    if(document.body.style.backgroundColor===props.color){
      document.body.style.backgroundColor=props.mode==='light'?'white':'black';
    }
    else{
    document.body.style.background=props.color;
    }
  }
  return (
    <button onClick={handlebutton} type="button" style={{ display: 'flex-block',margin:3, height: 25, width: 10, borderRadius: '50%', backgroundColor: props.color }} class="btn btn-secondary"></button>
  )
}

export default Pallete
