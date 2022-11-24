// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import { Drawer } from "@mui/material";
// import TemporaryDrawer from "./Drawer";
// import DrawerComp from "./Drawer";
// // import AdbIcon from '@mui/icons-material/Adb';

// const pages = ["Home", "Books", "Blog"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

// const Header = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);
//   // const isMatch = useMediaQuery(theme.breakpoints.down("md"));
//   const [sidebar, setSidebar] = React.useState(false);

//   // const toggleDrawer = () => {
//   //   return (
//   //     "left"
//   //   )
//   // }

//   const handleOpenNavMenu = (event) => {
//     console.log('working..');
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   //Scroll event

//   const [scroll, setScroll] = React.useState(false);

//   const headerTop = () => {
//     if (window.scrollY >= 60) {
//       setScroll(true);
//     } else {
//       setScroll(false);
//     }
//   };

//   React.useEffect(() => {
//     console.log("add");
//     window.addEventListener("scroll", headerTop);
//     return () => {
//       console.log("remove state");
//       window.removeEventListener("scroll", headerTop);
//     };
//   },[]);
//   // scroll end

//   // drawer toggle 
//   const [toggle,setToggle]=React.useState(false)
//   // const toggleDrawer=()=>{
//   //   setToggle(true)
//   // }
//   return (
//     <>
//       <AppBar
//         className
//         style={{
//           height: "60px",
//           backgroundImage: scroll
//             ? "linear-gradient(to right, #8360c3, #2ebf91)"
//             : "linear-gradient(to right, #00b4db, #0083b0)",
//         }}
//       >
//         <Container maxWidth="xl">
//           <Toolbar disableGutters>
//             {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
//             <img
//               className="logo md:visible hidden w-[80px] lg:w-[4px]"
//               src="https://www.eupheus.in/static/media/logo.f9fd97ff89ac44ae2b1f.png"
//               alt="img..."
//             />
//             <Typography
//               variant="h6"
//               noWrap
//               component="a"
//               href="/"
//               sx={{
//                 mr: 2,
//                 display: { xs: "none", md: "flex" },
//                 fontFamily: "monospace",
//                 fontWeight: 700,
//                 letterSpacing: ".3rem",
//                 color: "inherit",
//                 textDecoration: "none",
//               }}
//             ></Typography>
//             <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 // onClick={handleOpenNavMenu}
//                 onClick={() => setSidebar(true)}
//                 color="inherit"
//               >
//                 <MenuIcon  />
//               </IconButton >
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorElNav}
//                 anchorOrigin={{
//                   vertical: "bottom",
//                   horizontal: "left",
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "left",
//                 }}
//                 open={Boolean(anchorElNav)}
//                 onClose={handleCloseNavMenu}
//                 sx={{
//                   display: { xs: "block", md: "none" },
//                 }}
//               >
//                 {pages.map((page) => (
//                   <MenuItem key={page} onClick={handleCloseNavMenu}>
//                     <Typography  textAlign="center">{page}</Typography>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Box>
//             <img
//               className="sm:visible  w-[120px] lg:w-[155px] lg:mb-[10px] md:w-[150px] md:mb-[10px] sm:w-[140px]"
//               src="https://www.eupheus.in/static/media/logo.f9fd97ff89ac44ae2b1f.png"
//               alt="img..."
//             />
//             <Typography
//               variant="h5"
//               noWrap
//               component="a"
//               href=""
//               sx={{
//                 mr: 2,
//                 display: { xs: "flex", md: "none" },
//                 flexGrow: 1,
//                 fontFamily: "monospace",
//                 fontWeight: 700,
//                 letterSpacing: ".3rem",
//                 color: "inherit",
//                 textDecoration: "none",
//               }}
//             ></Typography>
//             <Box
//               sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
//               className="justify-end pr-6"
//             >
//               {pages.map((page) => (
//                 <Button
//                   key={page}
//                   onClick={handleCloseNavMenu}
//                   sx={{ my: 2, color: "white", display: "block" }}
//                 >
//                   {page}
//                 </Button>
//               ))}
//             </Box>
//             <Box sx={{ flexGrow: 0 }}>
//               <Tooltip title="Open settings">
//                 <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                   <Avatar
//                     alt="Remy Sharp"
//                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSalJrwFoCm2EPeJW9PbajkBYP6Bmigeh_oLg&usqp=CAU"
//                   />
//                 </IconButton>
//               </Tooltip>
//               <Menu
//                 sx={{ mt: "45px" }}
//                 id="menu-appbar"
//                 anchorEl={anchorElUser}
//                 anchorOrigin={{
//                   vertical: "top",
//                   horizontal: "right",
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "right",
//                 }}
//                 open={Boolean(anchorElUser)}
//                 onClose={handleCloseUserMenu}
//               >
//                 {settings.map((setting) => (
//                   <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                     <Typography textAlign="center">{setting}</Typography>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
//       <DrawerComp />
//       {/* {console.log(sidebar + "this is side bar")} */}
//     </>
//   );
// };
// export default Header;


import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";


// import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./Drawer";
const Header = () => {


  //  Scroll event

  const [scroll, setScroll] = React.useState(false);

  const headerTop = () => {
    if (window.scrollY >= 60) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  React.useEffect(() => {
    console.log("add");
    window.addEventListener("scroll", headerTop);
    return () => {
      console.log("remove state");
      window.removeEventListener("scroll", headerTop);
    };
  },[]);
  // scroll end

  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };

      const [anchorElUser, setAnchorElUser] = React.useState(null);
      const settings = ["Profile", "Account", "Dashboard", "Logout"];

      
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <React.Fragment>
      <AppBar  style={{
          height: "60px",
          backgroundImage: scroll
            ? "linear-gradient(to right, #8360c3, #2ebf91)"
            : "linear-gradient(to right, #00b4db, #0083b0)",
        }} >
        <Toolbar className="flex justify-between">
              
          {isMatch ? (<DrawerComp />) : null}
          <img src="https://www.eupheus.in/static/media/logo.f9fd97ff89ac44ae2b1f.png" className="w-[130px]" sx={{ transform: "scale(2)" }} />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "30%" }} className="pl-0">
                {/* <img src="https://www.eupheus.in/static/media/logo.f9fd97ff89ac44ae2b1f.png" className="w-[120px] " alt="" /> */}
                <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                 <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 , paddingLeft:"10px"}}>
                   <Avatar
                    className="pl-0 relative right-[25px]"
                     alt="Remy Sharp"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSalJrwFoCm2EPeJW9PbajkBYP6Bmigeh_oLg&usqp=CAU"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
              </Typography>
            </>
          ) : (
            <>
            
              {!isMatch ? (
                <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Products" />
                <Tab label="Services" />
                <Tab label="About Us" />
                <Tab label="Contact"  className="w-[100px]"/>
              </Tabs>
              ) : null}
              <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                 <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                   <Avatar
                   
                     alt="Remy Sharp"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSalJrwFoCm2EPeJW9PbajkBYP6Bmigeh_oLg&usqp=CAU"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;