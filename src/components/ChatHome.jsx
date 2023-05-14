import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft
,AiOutlineSend ,
AiOutlineCamera,
AiOutlineVideoCamera,
AiOutlineUsergroupAdd,
AiTwotonePhone} from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import {GrAttachment} from "react-icons/gr";
import {CgClipboard} from "react-icons/cg"
import {TbMessageReport} from "react-icons/tb"

import OtherChat from "../components/OtherChat";
import SelfMessage from "../components/SelfMessage"


import group from "../images/group.webp";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";

const ChatHome = () => {

  
  const [chatData,setChatdata]=useState(
    {}
   );

   const [messaeData,setMessageData]=useState([]);
 
 const getData=async()=>{
 
    try {
       const responce=await fetch("http://3.111.128.67/assignment/chat?page=0");
       const data=await responce.json();
       setChatdata(data);
       setMessageData(data.chats);

       console.log(data);
       console.log(messaeData);
    } 
    catch (error) {

      alert("Network Error");
      console.log(error);
       
    }
 }
 
 useEffect(()=>{
    getData();
 },[])

  
  return (
    <>
      <div className="max-w-screen bg-[#FAF9F4] rounded-bl-[28px] rounded-br-[28px]">
        <div className="px-5 mt-4 flex justify-between items-center">
          <h1 className="text-[30px] font-semibold flex gap-3 items-center ">
            <span>
              <AiOutlineArrowLeft />
            </span>
                {chatData?.name}
          </h1>
          <BiEdit size={28} /> 
        </div>

        <div className="flex items-center justify-between mt-8">
          <div className="flex gap-3 items-center">
            <div className="w-16 h-16 rounded-full">
              <img
                className="w-16 h-16 rounded-full"
                src={group}
                alt="/group_image"
                loading="lazy"
              />
            </div>

            <div>
              <p className="text-gray-400 pl-2 text-xl font-semibold">
                From <span className="text-2xl font-bold text-black">{chatData?.from}</span>
              </p>
              <p className="text-gray-400 pl-2 text-xl font-semibold">
                To <span className="text-2xl font-bold text-black">{chatData?.to}</span>
              </p>
            </div>
          </div>

          <div>
            <Modall />
          </div>
        </div>

         <div className="flex justify-center items-center gap-2 mt-8">
              <div className="w-[116px] border-[#B7B7B7] bg-[#B7B7B7] h-0.5"></div>
               <p className="text-[#B7B7B7] text-[19px]">13 May, 2023</p>
               <div className="w-[116px] border-[#B7B7B7] bg-[#B7B7B7] h-0.5"></div>
         </div>
        
           {/* CHAT SECTION */}
         <div className="mt-6 max-w-screen max-h-[25vh] overflow-y-scroll px-3 bg-[#FAF9F4]">
              {

                messaeData?.map((item)=>(
                  
                  <div key={item?.id}  className={`flex ${item?.sender?.self ? 'justify-end' : 'justify-start'}`}>
                     {
                      item?.sender?.self ? (<SelfMessage msg={item?.message}/>) 

                      :(<OtherChat img={item?.sender?.image} msg={item?.message}/>)
                     }
                  </div>
                ))
              }  
              
         </div>

          <div className="w-[95%] mx-auto mt-10  mb-4 flex items-center">
             <input 
             className="w-full py-3 px-2 mb-4 rounded-[8px] outline-none border-none text-[#B7B7B7] text-[18px]"
             type="text" 
             placeholder="Reply to @Rohit Yadav" />
             
             <div className="flex gap-2 items-center -mt-3 -ml-[4.7rem] relative">
               <AiOutlineSend/>         
               <Send />        
             </div>
             
          </div>

          <div className="w-[135px] h-[5px] bg-[#000000] mx-auto mb-3">
             
          </div>

      </div>
    </>
  );
};

export default ChatHome;

const Modall = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div>
        <Button backgroundColor={"#FAF9F4"} onClick={onOpen}>
          <BsThreeDotsVertical/> 
        </Button>

        <Modal isOpen={isOpen} onClose={onClose} dispaly={"flex" } justify-content={"flex-end"}>
          
          <ModalContent 
           position="absolute"
           top="25%"
           left="50%"
          
           borderRadius={"3xl"}
           width={'fit-content'}>
            
            <ModalCloseButton  color={"white"}/>
            <ModalBody backgroundColor={"white"} paddingX={4}  borderRadius={"3xl"}>
            <div className="flex flex-col gap-3 font-medium my-7 bg-white">
                <p className="flex gap-4 items-center"><AiOutlineUsergroupAdd/>  Member</p>
                <p className="flex gap-4 items-center"> <AiTwotonePhone/>Share Number </p>
                <p className="flex gap-4 items-center"><TbMessageReport/>Report</p>
            </div>
              
            </ModalBody>

            
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};


const Send = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div>
        <Button backgroundColor={"white"} onClick={onOpen}>
          <GrAttachment/> 
        </Button>

        <Modal isOpen={isOpen} onClose={onClose} dispaly={"flex" } justify-content={"flex-end"}>
          
          <ModalContent 
           position="absolute"
           top="53%"
           left="52%"
          
           borderRadius={"3xl"}
           width={'fit-content'}>
            
            <ModalCloseButton  color={"white"}/>
            <ModalBody backgroundColor={"#008000"} paddingX={4}  borderRadius={"3xl"}>
            <div className="flex gap-3 text-white  my-7 bg-[#008000]">
               <p><AiOutlineCamera size={30}/></p>
                <p> <AiOutlineVideoCamera size={30}/></p>
                <p><CgClipboard size={30}/></p>
            </div>
              
            </ModalBody>

            
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};