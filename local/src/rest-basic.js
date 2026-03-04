import React from "react";

export default function RestBasic(){
    let [serverTime, setServerTime] = React.useState("");
    let [footballResults, setFootballResults] = React.useState("");

    const OnClickShowTime = () => {
        fetch('/api/server-time')
        .then(res => res.json())
        .then(result=>{
            let r = <>{result.hours}:{result.minutes}:{result.seconds}</>
            setServerTime(r);
        })

        .catch(err => alert(err));
    }
        
    const OnClickShowFootballResults = () => {
        fetch('/api/football-results')
        .then(res => res.text())
        .then(result=>{
            setFootballResults(result);
        })
        .catch(err => alert(err));
    }

    return (
        <div style={{textAlign:"center",marginTop:"20px"}}>
            <button onClick={OnClickShowTime}>Show Server Time</button>
            <p>{serverTime}</p>
            <button onClick={OnClickShowFootballResults}>Show Football Results</button>
            <div dangerouslySetInnerHTML={{__html: footballResults}}></div>
        </div>
    )
}

