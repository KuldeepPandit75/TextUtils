import React from 'react'

export default function About(props) {

    return (
        <div className="container" id="aboutHead" style={{backgroundColor: props.mode==="dark"?(props.theme==="primary"?"#042743":props.theme==="success"?"rgb(0,40,0)":"rgb(55,55,0)"):"white",color: props.mode==="dark"?"white":"black"}}>
            <h2 className="my-3">About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={{backgroundColor: props.mode==="dark"?(props.theme==="primary"?"rgb(36,74,104)":props.theme==="success"?"#065306":"#6e6e07"):"white",color: props.mode==="dark"?"white":"black"}}>
                    <h2 className="accordion-header" style={{backgroundColor: props.mode==="dark"?"rgb(36,74,104)":"white",color: props.mode==="dark"?"white":"black"}}>
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: props.mode==="dark"?(props.theme==="primary"?"rgb(36,74,104)":props.theme==="success"?"#065306":"#6e6e07"):"white",color: props.mode==="dark"?"white":"black"}}>
                        <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or 
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{backgroundColor: props.mode==="dark"?(props.theme==="primary"?"rgb(36,74,104)":props.theme==="success"?"#065306":"#6e6e07"):"white",color: props.mode==="dark"?"white":"black"}}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: props.mode==="dark"?(props.theme==="primary"?"rgb(36,74,104)":props.theme==="success"?"#065306":"#6e6e07"):"white",color: props.mode==="dark"?"white":"black"}}>
                        <strong>Free to Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextUtils is a free character counter tool that provides instant character count and word count statistics for given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{backgroundColor: props.mode==="dark"?(props.theme==="primary"?"rgb(36,74,104)":props.theme==="success"?"#065306":"#6e6e07"):"white",color: props.mode==="dark"?"white":"black"}}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: props.mode==="dark"?(props.theme==="primary"?"rgb(36,74,104)":props.theme==="success"?"#065306":"#6e6e07"):"white",color: props.mode==="dark"?"white":"black"}}>
                        <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
