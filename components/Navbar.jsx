"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Sidebar from "./faqComponents/Sidebar";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { usePathname } from "next/navigation";

/**Materail ui imports */
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Link from "next/link";
import { generalTopics, subTopics } from "@/data";
/**Materail ui imports ends here */

const Navbar = () => {
  const [show, setShow] = React.useState(false);

  return (
    <nav className="w-full ">
      <div className="flex items-center justify-between p-4">
        <Link href={"/"}>
          <div className="flex  items-center gap-3 md:gap-6 ">
            <Image
              alt="vmodel logo"
              height={65}
              className="h-14 md:h-16"
              src={logo}
            />
            <h1 className="text-2xl md:text-3xl my-3 text-[#EDCEAB] font-semibold text-center md:text-left ">
              Help Center
            </h1>
          </div>
        </Link>
        {/* <span className="text-2xl font-bold">Help Center</span> */}
        <div className="flex ">
          <input
            type="search"
            placeholder="Search by keyword"
            className=" text-black px-3 py-2 bg-[#ffffff] rounded-[9px] mr-2 border border-3 border-white outline-none focus-visible:border-black hidden md:block"
          />
        </div>
        <div className="md:hidden">
          {/* <AiOutlineMenu size={32} onClick={() => setShow((init) => !init)} /> */}
          <MenuTwo />
        </div>

        {/* {show ? <Menu setShow={setShow} /> : null} */}
      </div>
    </nav>
  );
};

export default Navbar;

// const Menu = ({ setShow }) => {
//   const pathname = usePathname();
//   useEffect(() => {
//     // Set the overflow property to 'hidden' when the component mounts
//     document.body.style.overflow = "hidden";
//     // Clean up: Set the overflow property back to 'auto' when the component unmounts
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, []);
//   // useEffect(() => {
//   //   setShow(false);
//   // }, [pathname[0], pathname[1], pathname[2]]);
//   return (
//     <div
//       id="nav_menu"
//       className="h-screen w-screen top-0 left-0 bottom-2 overflow-x-auto fixed z-50 bg-[#00000067] "
//       onClick={(e) => e.target.id === "nav_menu" && setShow(false)}
//     >
//       <div className="relative">
//         <div className="absolute right-4 px-4  pt-4 top-16 bg-black  mb-2 rounded-[21px]">
//           <div className="flex justify-between ">
//             <h1 className="text-3xl my-3 text-[#EDCEAB] font-semibold text-center md:text-left ">
//               Help Centre
//             </h1>
//             <AiOutlineClose size={32} onClick={() => setShow(false)} />
//           </div>
//           <Sidebar show={"mobile"} />
//         </div>
//       </div>
//     </div>
//   );
// };

const MenuTwo = () => {
  const [state, setState] = useState(false);
  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    console.log("toggleDrawer");
    setState(!state);
  };

  // const list = (anchor) => (
  //   <Box
  //     sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
  //     role="presentation"
  //     onClick={toggleDrawer}
  //     onKeyDown={toggleDrawer}
  //   >
  //     <List>
  //       {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
  //         <ListItem key={text} disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <MailIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //     <Divider />
  //     <List>
  //       {["All mail", "Trash", "Spam"].map((text, index) => (
  //         <ListItem key={text} disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <MailIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );

  return (
    <div>
      <Button
        onClick={toggleDrawer(!state)}
        className="text-white rounded-full"
      >
        <div className="md:hidden">
          <AiOutlineMenu className="text-white" size={32} />
        </div>
      </Button>
      <Drawer anchor={"right"} open={state} onClose={toggleDrawer(!state)}>
        {/* {list(anchor)} */}
        <div className="bg-black  text-white pt-3">
          <div className="flex mb-4 justify-between px-3">
            <h1 className="text-2xl text-[#edceab] font-medium">Help Centre</h1>
            <AiOutlineClose
              size={32}
              onClick={toggleDrawer()}
              className="cursor-pointer"
            />
          </div>
          <MenuItems toggleDrawer={toggleDrawer} />
        </div>
      </Drawer>
    </div>
  );
};

const MenuItems = ({ toggleDrawer }) => {
  const hoverEffect = "hover:bg-[#edceaba6]";
  const pathname = usePathname();
  const currentroute = pathname.split("/")[1];
  const subCurrentRoute = pathname.split("/")[2];
  return (
    <div
      onClick={toggleDrawer}
      className={`flex-col min-w-[290px]  max-w-[290px]`}
    >
      <Link href={"/"}>
        <p
          className={`p-4 ${hoverEffect} rounded-[21px] cursor-pointer ${
            !currentroute ? "text-[#EDCEAB] font-medium" : "text-white"
          }`}
          key={"kjlk"}
        >
          {"Home"}
        </p>
      </Link>
      {generalTopics.map((topic, index) => {
        const subTopic = subTopics[topic.link];
        return (
          <React.Fragment key={index}>
            <Link href={"/" + topic.link} onClick={() => toggleDrawer()}>
              <p
                className={`p-4 ${hoverEffect} rounded-[21px] cursor-pointer  ${
                  topic.link === currentroute
                    ? "text-[#EDCEAB] font-medium "
                    : ""
                }`}
                key={index}
              >
                {topic.name}
              </p>
            </Link>
            {topic.link === currentroute ? (
              <div className=" ">
                {subTopic.map((topic, index) => {
                  return (
                    <Link
                      href={"/" + currentroute + "/" + topic.link}
                      key={index}
                    >
                      <div
                        className={`text-sm ml-7 rounded-[21px] ${
                          topic.link === subCurrentRoute
                            ? "text-[#EDCEAB]"
                            : " text-gray-300 "
                        }${hoverEffect} p-2 m-2  `}
                      >
                        <span>{topic.name}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : null}
          </React.Fragment>
        );
      })}
    </div>
  );
};
