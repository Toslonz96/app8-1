import React from "react";

export default function FormPost(){
    let [postedData, setPostedData] = React.useState("");
    const form = React.useRef();

    const OnSubmitForm = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const formEnt = Object.fromEntries(formData.entries());
        fetch('/api/form-post?',{
            method: 'POST',
            body: JSON.stringify(formEnt),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.text())
        .then(result => setPostedData(result))
        .catch(err => alert(err));
    }

    const inputStyle = {
        padding: "5px",
        margin: "5px 0",
    }

    return (
        <div style={{textAlign:"center",marginTop:"20px"}}>
            <form ref={form} onSubmit={OnSubmitForm}>
                <div>ติดต่อเรา</div>
                <input style={inputStyle} type="text" name="username" size="43" placeholder="ชื่อ"/><br/>
                <input style={inputStyle} type="email" name="email" size="43" placeholder="อีเมล"/><br/>
                <textarea style={inputStyle} name="message" cols="40" rows="4" placeholder="ข้อความ"></textarea><br/>
                <button>ตกลง</button>
            </form>
            <br/>
            <div dangerouslySetInnerHTML={{ __html: postedData }}></div>
        </div>
    )
}