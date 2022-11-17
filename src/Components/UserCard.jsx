import React from "react";
import { useEffect, useState } from "react";
import axios from "axios"
import Usercard1 from "./Usercard1";
import "./UserCard2.css"



export default function UserCard({setLoading}) {
  const [userId, setuserId] = useState([]);
  

  let newarr = [];

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      setuserId(res.data);
      setLoading(false)
    });
  },[]);

  console.log(newarr);

  

  return (

    <div style={{
      display:"flex",
      flexWrap:"wrap",
      gap: "15px",
      justifyContent:"space-evenly",
    
      margin: "2em"
    }}>
      {userId?.map((res3, index) => {
        return (
         <Usercard1 res3={res3} index={index} setuserId={setuserId} userId={userId}/>
        );
      })}
    </div>
  );
}
