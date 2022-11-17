import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "antd";

import Usercard1 from "./Usercard1";


export default function UserCard() {
  const [userId, setuserId] = useState([]);

  let newarr = [];

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      setuserId(res.data);
    });
  }, []);

  console.log(newarr);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        marginLeft: "6em",
        marginTop: "2em",
      }}
    >
      {userId?.map((res3, index) => {
        return (
         <Usercard1 res3={res3}/>
        );
      })}
    </div>
  );
}
