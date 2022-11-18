import React from 'react'
import { Card } from "antd";
import { useState, useEffect } from 'react';
import "./UserCard2.css"
import { Modal } from 'antd';



import {
    HeartOutlined,
    FormOutlined,
    DeleteOutlined,
    EditOutlined,
    PhoneOutlined,
    MailOutlined,
    GlobalOutlined,
    HomeOutlined,
    HeartFilled
} from "@ant-design/icons";
import axios from 'axios';
const { Meta } = Card;

export default function Usercard1({ res3, index, setuserId, userId }) {
    const [avatar, setAvatar] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };





    useEffect(() => {
        axios.get(`https://avatars.dicebear.com/v2/avataaars/${res3?.name}.svg?options[mood][]=happy`).then((res) => {
            setAvatar(res?.data);
        });
    }, []);
    const [lovebutton, setLovebutton] = useState(false)


    return (


        <Card
            style={{
                width: "fit-content",
                flexBasis: "22%",
                margin: "11px",
                height: "fit-content",
                alignItems: "center",
                minWidth: "280px",

            }}
            cover={<img alt="example" style={{ height: "200px", backgroundColor: "#f5f5f5" }} src={`https://avatars.dicebear.com/v2/avataaars/${res3?.name}.svg?options[mood][]=happy`} />}
            actions={[
                lovebutton ? <HeartFilled style={{ color: "red" }} onClick={() => setLovebutton(!lovebutton)} /> : <HeartOutlined style={{ color: "red" }} onClick={() => setLovebutton(!lovebutton)} />,

                <EditOutlined onClick={showModal}
                />,
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <div style={{ display: "flex", flexDirection: "column", width:"fit-content" }}>
                        <p style={{width:"fit-content"}}>Name: <input type="text" defaultValue={res3.name} style={{
                            opacity: ".56", height: "30px", padding: " 4px 11px", borderRadius: "4px"
                        }} /></p>

                        <p style={{width:"fit-content"}}> Email: <input type="text" defaultValue={res3.email} style={{ opacity: ".56", width: "80%", height: "30px", padding: " 4px 11px", borderRadius: "4px" }} /></p>
                        <p style={{width:"fit-content"}}>Phone: <input type="text" defaultValue={res3.phone} style={{ opacity: ".56", width: "80%", height: "30px", padding: " 4px 11px", borderRadius: "4px" }} /></p>
                        <p style={{width:"60%"}}>Address: <input type="text" defaultValue={res3.address.street + "" + res3.address.city} style={{ opacity: ".56", width: "50%" , height: "30px", padding: " 4px 11px", borderRadius: "4px"}} /></p>
                        <p style={{width:"fit-content"}}>Website: <input type="text" defaultValue={res3.website} style={{ opacity: ".56", width: "80%" , height: "30px", padding: " 4px 11px", borderRadius: "4px"}} /></p>
                        <p style={{width:"fit-content"}}>Company Name: <input type="text" defaultValue={res3.company.name} style={{ opacity: ".56", width: "80%" , height: "30px", padding: " 4px 11px", borderRadius: "4px"}} /></p></div>
                </Modal>,
                <DeleteOutlined onClick={() => {
                    setuserId([...userId.slice(0, index), ...userId.slice(index + 1, userId?.length)])
                    console.log([...userId.slice(index + 1, userId?.length)]);
                    console.log(userId?.length);
                    console.log([...userId.slice(index, userId?.length)]);
                }} />,
            ]}
        >
            <Meta title={res3.name} />
            <Meta
                style={{ opacity: ".55" }}
                avatar={<MailOutlined />}
                description={res3.email}
            />

            <Meta
                style={{ opacity: ".55" }}
                avatar={<PhoneOutlined />}
                description={res3.phone}
            />
            <Meta
                style={{ opacity: ".55" }}
                avatar={<HomeOutlined />}
                description={(res3.address.street + " " + res3.address.city)?.length > 20 ? (res3.address.street + " " + res3.address.city).slice(0, 20) + "..." : (res3.address.street + " " + res3.address.city)}
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
