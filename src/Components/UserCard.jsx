import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {  Card } from "antd";
import { HeartOutlined,FormOutlined, DeleteOutlined, EditOutlined ,PhoneOutlined, MailOutlined,GlobalOutlined,HomeOutlined} from "@ant-design/icons";
const { Meta } = Card;

export default function UserCard() {
  const [userId, setuserId] = useState([]);
  
  let newarr=[];

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const res1 = res.data;
      console.log(res1)
      setuserId( res1);
      
      
    });
  }, []);

  useEffect(()=>{
    const fetchData = async()=>{
      const response = await api.get('https://jsonplaceholder.typicode.com/users');
      const details = await Promise.all(response.data.results.map((res1) => {
        return axios.get(`https://avatars.dicebear.com/v2/avataaars/${res1.name}>}.svg?options[mood][]=happy`)
      }));

    }
  })


  
  

console.log(newarr);

  return (
    <div style={{display:"flex" ,flexWrap:"wrap",gap:"20px",marginLeft:"6em",marginTop:"2em"}}>
      {userId.map((res3, avatar) => {
       return(<Card
        style={{
          width: "21vw",
          flexBasis:"22%"
          
        }}
        cover={<img alt="example" src={avatar.data} />}
        actions={[<HeartOutlined style={{color:'red'}} />, <EditOutlined />, <DeleteOutlined />]}
      >
        <Meta style={{fontSize:"10em"}}
          title =  {res3.name}
        />
        <Meta style={{opacity:".65"}}
        avatar={<MailOutlined />}
        description = {res3.email} 
        />
        <Meta style={{opacity:".65"}}
        avatar={<PhoneOutlined />}
        description={res3.phone}
        />
        <Meta style={{opacity:".65"}}
        avatar={<HomeOutlined />}
        description={res3.address.street + " " + res3.address.suite + " " + res3.address.city}
        />
        <Meta style={{opacity:".65"}}
        avatar={<FormOutlined />}
        description={res3.website}
        />
        <Meta style={{opacity:".65"}}
        avatar={<GlobalOutlined />}
        description={res3.company.name}
        />

      </Card>);
      })}
      
    </div>
  );
}
