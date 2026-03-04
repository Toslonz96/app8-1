import React from 'react';

export default function FormGet(){
    let [searchResult, setSearchResult] = React.useState("");
    const form = React.useRef();

    const OnSubmitForm = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        const params = new URLSearchParams(formData);
        let url = '/api/form-get?' + params;
        fetch(url)
        .then(res => res.json())
        .then(result => {
            let r = (
            <>
                ค้นหา {result.target} ที่ตรงกับ: ${result.kw} <br/>
                พบข้อมูลทั้งหมด: {result.results} รายการ
            </>
            )
            setSearchResult(r);
        })

        .catch(err => alert(err));
    }

    return (
        <div style={{textAlign:"center",marginTop:"20px"}}>
            <form ref={form} onSubmit={OnSubmitForm}>
                <label>ค้นหา: </label>&nbsp;
                <select name="target" id ="target">
                    <option value="เว็บ">เว็บ</option>
                    <option value="รูปภาพ">รูปภาพ</option>
                    <option value="วิดีโอ">วิดีโอ</option>
                </select>&nbsp;
                <input type="text" name="kw" id="kw"/>&nbsp;
                <button>ตกลง</button>
            </form>
            <br/>
            <div>{searchResult}</div>
        </div>
    )
}