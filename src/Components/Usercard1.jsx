import React from 'react'
import { Card } from "antd";
import { useState, useEffect } from 'react';


import {
    HeartOutlined,
    FormOutlined,
    DeleteOutlined,
    EditOutlined,
    PhoneOutlined,
    MailOutlined,
    GlobalOutlined,
    HomeOutlined,
} from "@ant-design/icons";
import axios from 'axios';
const { Meta } = Card;

export default function Usercard1({ res3 }) {
    const [avatar, setAvatar] = useState([]);




    useEffect(() => {
        axios.get(`https://avatars.dicebear.com/v2/avataaars/${res3?.name}.svg?options[mood][]=happy`).then((res) => {
            setAvatar(res?.data);
        });
    });
    return (


        <Card
            style={{
                width: "25%",
                flexBasis: "22%",
                // margin:"11px"
                // height:"21vw"
            }}
            cover={<img alt="example" style={{ height:"200px",backgroundColor: "#f5f5f5" }} src={`https://avatars.dicebear.com/v2/avataaars/${res3?.name}.svg?options[mood][]=happy`}/>}
            actions={[
                    <HeartOutlined style={{ color: "red" }} />,
                    <EditOutlined />,
                    <DeleteOutlined />,
                ]}
            >
                <Meta title={res3.name} />
                <Meta
                    style={{ opacity: ".55" }}
                    avatar={<MailOutlined />}
                    description={res3.email}
                />
                <img src={avatar} alt="" />
                <Meta
                    style={{ opacity: ".55" }}
                    avatar={<PhoneOutlined/>}
                    description={res3.phone}
                />
                <Meta
                    style={{ opacity: ".55" }}
                    avatar={<HomeOutlined />}
                    description={res3.address.street + " " + res3.address.city}
                />
                <Meta
                    style={{ opacity: ".55" }}
                    avatar={<FormOutlined />}
                    description={res3.website}
                />
                <Meta
                    style={{ opacity: ".55" }}
                    avatar={<GlobalOutlined />}
                    description={res3.company.name}
                />
            </Card> 
            
  )
}
