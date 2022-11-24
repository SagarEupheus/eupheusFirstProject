// import React, { useState } from "react";
// import {
//   Drawer,
//   IconButton,
//   List,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// const pages = ["Products", "Services", "AboutUs", "ContactUs"];
// const DrawerComp = (props) => {
//   const [openDrawer, setOpenDrawer] = useState(props.state);

//   return (
//     <React.Fragment>
//       <Drawer
//         anchor="left"
//         open={false}
//         onClose={() => setOpenDrawer(false)}
//         // sx={{ width: "90%"} }
//       >
//         <List >
//           {pages.map((page, index) => (
//             <ListItemButton key={index}  >
//               <ListItemIcon className="hover:text-black" >
//                 <ListItemText >{page}</ListItemText>
//               </ListItemIcon>
//             </ListItemButton>
//           ))}
//         </List>
//       </Drawer>
//       <IconButton
//         sx={{ color: "white", marginLeft: "auto" }}
//         onClick={() => setOpenDrawer(!openDrawer)}
//       >
//         <MenuIcon color="white" />
//       </IconButton>
//     </React.Fragment>
//   );
// };

// export default DrawerComp;






// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// export default function TemporaryDrawer({sidebar}) {
  
//   console.log(sidebar +"this is sidebar drawer")
//   const [state, setState] = React.useState({
    
//     left: true,
    
//   });

  

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <Box
//       sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//       {['left'].map((anchor) => (
//         <React.Fragment key={anchor}>
//           {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
//           <Drawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//           >
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }

// import React, { useState } from "react";
// import {
//   Drawer,
//   IconButton,
//   List,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";
// import "../Components/drawer.css"
// import MenuIcon from "@mui/icons-material/Menu";
// const pages = ["Products", "Services", "ABoutUs", "ContactUs"];
// const DrawerComp = () => {
//   const [openDrawer, setOpenDrawer] = useState();

//   return (
//     <React.Fragment>
//       <Drawer
//         anchor="left"
//         open={openDrawer}
//         onClose={() => setOpenDrawer(false)}
//       >
//         <List>
//           {pages.map((page, index) => (
//             <ListItemButton key={index}>
//               <ListItemIcon>
//                 <ListItemText>{page}</ListItemText>
//               </ListItemIcon>
//             </ListItemButton>
//           ))}
//         </List>
//       </Drawer>
//       <IconButton
//         sx={{ color: "white", marginLeft: "auto" }}
//         onClick={() => setOpenDrawer(!openDrawer)}
//       >
//         <MenuIcon color="white"  className="ml-0 md:ml-0 sm:ml-0"/>
//       </IconButton>
//     </React.Fragment>
//   );
// };

// export default DrawerComp;


import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./drawer.css"
const pages = ["Products", "Services", "AboutUs", "ContactUs"];
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        sx={{width:"250px"}}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText>{page}
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;