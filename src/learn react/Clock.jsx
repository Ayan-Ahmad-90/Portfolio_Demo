import { useEffect, useState } from "react"; 

const Clock = (color) =>{
    const [Time , SetTime] = useState(0);

    useEffect(()=> {
        setInterval(()=> {
            SetTime(new Date().toLocaleTimeString());
        });

    }, []);
    return(
        <>
        <h3
        style={{
        border: "2px dotted gold",
        borderRadius: "50%",
        width: "150px",
        height: "150px",
        padding:"20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        fontSize: "24px",
        color:"color",
        backgroundColor: {color},
        }}
        >{Time}</h3>
        </>
    );
}

export default Clock;