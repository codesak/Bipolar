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
    const [firstName, setfirstName] = useState(res3.name);

    let handleChange=(e)=>{
        
          setfirstName(e.target.value);
          
    }
    // console.log(firstName)

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
               
                <DeleteOutlined onClick={() => {
                    setuserId([...userId.slice(0, index), ...userId.slice(index + 1, userId?.length)])
                    console.log([...userId.slice(index + 1, userId?.length)]);
                    console.log(userId?.length);
                    console.log([...userId.slice(index, userId?.length)]);
                }} />,
            ]}
        >
             <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <div className='modal1'>
                        <form action="">
                            <table border="0" align="center">
                                <tbody>

                                    <tr>
                                        <td><labe><span style={{color:"red"}}>*</span>  Name: </labe></td>
                                        <td><input defaultValue={res3.name} onChange={handleChange} type="text" /></td>
                                    </tr>

                                    <tr>
                                        <td><label> <span style={{color:"red"}}>*</span> Email: </label></td>
                                        <td><input defaultValue={res3.email} type="text" /></td>
                                    </tr>

                                    <tr>
                                        <td><label> <span style={{color:"red"}}>*</span> Phone: </label></td>
                                        <td><input defaultValue={res3.phone} type="text" /></td>
                                    </tr>

                                    <tr>
                                        <td><label> <span style={{color:"red"}}>*</span> Address: </label></td>
                                        <td><input defaultValue={res3.address.city} type="text" /></td>
                                    </tr>

                                    <tr>
                                        <td><label> <span style={{color:"red"}}>*</span> Website: </label></td>
                                        <td><input defaultValue={res3.website} type="text" /></td>
                                    </tr>

                                    <tr>
                                        <td style={{width:'48% !important'}}><label> <span style={{color:"red"}}>*</span> Company:</label></td>
                                        <td><input defaultValue={res3.company.name} type="text" /></td>
                                    </tr>



                                </tbody>
                            </table>
                        </form>
                    </div>


                </Modal>
            <Meta title={firstName} />
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
