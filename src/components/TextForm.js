import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("Button Clicked");
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () =>{
        console.log("Button Clicked");
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleCaClick = () =>{
        console.log("Button Clicked");
        let textArr=text.split(" ");
        let newArr=[];
        for(let i=0;i<textArr.length;i++){
            newArr[i]=`${textArr[i][0].toUpperCase()}${textArr[i].slice(1)}`;
        }
        let newText=newArr.join(" ");
        setText(newText);
    }
    const handleOnChange = (e) =>{
        console.log("On Change");
        setText(e.target.value);
    }
    const handleReClick=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleCoClick=()=>{
        var text=document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleClearClick = ()=>{
        setText("");
    }

    const [text,setText] = useState("");
    return (
        <>
        <div className={`container text-${props.mode==="dark"?"light":"dark"}`}>
            <h2>Enter the text to analyze below</h2>
            <div className="mb-3">
                <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"grey":"white",color: props.mode==="dark"?"white":"black"}} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleCaClick} >Convert to Capitalized Case</button>
            <button className="btn btn-primary mx-2" onClick={handleReClick} >Remove Extra Spaces</button>
            <button className="btn btn-primary mx-2" onClick={handleCoClick} >Copy to Clipboard</button>
            <button className="btn btn-primary" onClick={handleClearClick} >Clear Text</button>
        </div>
        <div className={`container text-${props.mode==="dark"?"light":"dark"} my-3`}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter some text in above textbox to preview it here"}</p>
        </div>
        </>
    )
}
