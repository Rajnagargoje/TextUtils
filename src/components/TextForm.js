import React,{useState} from "react";

export default function Textform(props){

     function changetext(event){
        setText(event.target.value)

     }
    const handleUp = () =>{
        const upper = text.toUpperCase();
        setText(upper);
       props.showAlert('Converted to uppercase','success');

     }
      function handleLo(){
        const lower = text.toLowerCase();
        setText(lower);
        props.showAlert('Converted to lowercase','success')
      }

      function cleartext(){
        const clear = ' ';
        setText(clear);
        props.showAlert('Cleared text','success')
      }
      const handleCopy = () =>{
        var text = document.getElementById("myBox");
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert(' Coppied to clipboard ','success')

      }

      function removeSpaces (){
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert('Extra spaces removed ','success')
      }

      
     const [text , setText] = useState('');
    
     

     
    return(
        <div style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="my-4">
              <textarea id = "myBox"className="form-control" value={text} onChange={changetext} style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'#042743'}} rows="8"></textarea>
            </div>
            <div className="my-3">
             
              <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUp}>Convert to Uppercase</button>
              <button disabled={text.length === 0}className="btn btn-primary mx-2 my-2" onClick={handleLo}>Convert to Lowercase</button>
              <button disabled={text.length === 0}className="btn btn-primary mx-2 my-2" onClick={cleartext}>Clear Text</button>
              <button disabled={text.length === 0}className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
              <button disabled={text.length === 0}className="btn btn-primary mx-2 my-2" onClick={removeSpaces}>Remove Extra Space</button>


            </div>
            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charecters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview"}</p>
            </div>
            </div>
    )
}
