import React, { useState } from 'react'
import './Home.css'
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Box, Button, Divider, Drawer, Grid, Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, TextField, Typography } from '@mui/material';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ticket from './ticket.jpg'
import job from './jobes.jpg'
import perfume from './perfume.jpg'
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import axios from 'axios';

const Textarea = styled(BaseTextareaAutosize)(
    () => `
        box-sizing: border-box;
        font-family: sans-serif;
        line-height: 1.5;
        padding: 8px 12px;
        border-radius: 5px;
        font-size: 1rem;
    `,
);

export default function Home() {

    const [name, setname] = useState();
    const [mail, setmail] = useState();
    const [subject, setsubject] = useState();
    const [message, setmessage] = useState();

    function send() {
        axios.post('http://localhost:1300/portfolio/create', {
            Name: name,
            Mail: mail,
            Subject: subject,
            Message: message
        }).then(alert('sent'), window.location.reload())
            .catch(err => (console.log(err)))
    }

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} onClick={toggleDrawer(false)}>
            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemText><a className='sidebar' href="#about">About</a></ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemText><a className='sidebar' href="#skill">Skills</a></ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemText><a className='sidebar' href="#project">Projects</a></ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemText><a className='sidebar' href="#education">Education</a></ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemText><a className='sidebar' href="#contact">Contact</a></ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
    return (
        <div className='portfolio'>
            <div className='navbar'>
                <div className='logo'>
                    <PinterestIcon />
                    <h4>Portfolio</h4>
                </div>
                <div className='navsections'>
                    <a href="#about">About</a>
                    <a href="#skill">Skills</a>
                    <a href="#project">Projects</a>
                    <a href="#education">Education</a>
                    <a href="#contact">Contact</a>
                </div>
                <div>
                    <Button><Icon onClick={toggleDrawer(true)} className='menu'><MenuIcon /></Icon></Button>
                    <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
                        {DrawerList}
                    </Drawer>
                </div>
            </div>

            <div className='about' id='about'>
                <div className='myself'>
                    <h2>Hi, I'm</h2>
                    <h2 className='name'>Saran S</h2>
                </div>

                <div className='job'>
                    <h3>I am a</h3>
                    <h3 className='full'>Full Stack Developer</h3>
                </div>

                <div className="content">
                    <h4>A skilled Full Stack Developer with knowledge in both Frontend and Backend Technologies. Proficient in building responsive and user-friendly web applications using modern frameworks and tools. Always ready to learn new technologies and passionate about work.</h4>
                </div>

                <div className="resume">
                    <Button className='myresume' variant='contained'><a href="https://drive.google.com/file/d/1TTox_aAzBCsFjk3dBHAYbVxGGYFkmhMS/view?usp=drivesdk">Get resume</a></Button>
                </div>

            </div>


            <div className="skills" id='skill'>
                <div className='heading'>
                    <h2>Skills</h2>
                </div>
                <div className='aboutheading'>
                    <p>Here are some of my skills on which I have learnt</p>
                </div>
                <div>
                    <Grid container>
                        <Grid className='frontend' xs={12} sm={12} md={6}>
                            <div className='frontskills'>
                                <h2>Frontend</h2>
                                <div className='boxes'>
                                    <Box className='box'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                                        <polygon fill="#e7a42b" points="8,5 42,5 38,39 25,43 11,39"></polygon><polygon fill="#f2bf22" points="38.63,8 35.25,36.71 25,39.86 25,8"></polygon><polygon fill="#faf9f8" points="25,21 26,23 25,25 15.79,25 16.64,12 25,12 26,14 25,16 21.03,16 20.7,21"></polygon><polygon fill="#ebebeb" points="24.9,32.57 25,32.54 26,35 25,36.72 24.94,36.74 16.61,34.36 16.05,28 20.07,28 20.35,31.27"></polygon><polygon fill="#fff" points="34.07,21 32.5,34.42 25,36.72 25,32.54 28.83,31.36 29.57,25 25,25 25,21"></polygon><polygon fill="#fff" points="34.92,18 30.93,18 30.67,16 25,16 25,12 34.13,12 34.3,13.26"></polygon>
                                    </svg>HTML</Box>
                                    <Box className='box'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                                        <linearGradient id="TQDriqswrKwPOniLrPT12a_7gdY5qNXaKC0_gr1" x1="16.33" x2="32.293" y1="-2.748" y2="41.109" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#TQDriqswrKwPOniLrPT12a_7gdY5qNXaKC0_gr1)" d="M7.192,7.176l2.627,29.77c0.109,1.237,0.97,2.28,2.164,2.621l10.643,3.041	c0.898,0.257,1.849,0.257,2.747,0l10.643-3.041c1.194-0.341,2.055-1.383,2.164-2.621l2.627-29.77C40.911,6.006,39.99,5,38.816,5	H9.184C8.01,5,7.089,6.006,7.192,7.176z"></path><path fill="#35c1f1" d="M24,8v31.9l9.876-2.822c0.797-0.228,1.371-0.924,1.443-1.749l2.286-26.242	C37.656,8.502,37.196,8,36.609,8H24z"></path><path fill="#fff" d="M33.1,13H24v4h4.9l-0.3,4H24v4h4.4l-0.3,4.5L24,30.9v4.2l7.9-2.6L32.6,21l0,0L33.1,13z"></path><path fill="#d6e0e9" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4	L19.8,27z"></path><path d="M33.1,13l-0.5,8l-0.7,11.5L24,35.1l-7.9-2.6L15.8,27h4l0.1,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-4.4l-0.2-4H24h4.6l0.3-4H24 h-8.9l-0.3-4H24H33.1 M34.164,12H33.1H24h-9.2h-1.078l0.081,1.075l0.3,4L14.172,18H15.1H24h3.822l-0.15,2H24h-4.6h-1.051 l0.052,1.05l0.2,4L18.649,26H15.8h-1.056l0.058,1.054l0.3,5.5l0.037,0.682l0.649,0.214l7.9,2.6L24,36.153l0.313-0.103l7.9-2.6 l0.644-0.212l0.041-0.677l0.7-11.5l0.5-7.998L34.164,12L34.164,12z M20.761,26H24h3.331l-0.185,2.769L24,29.843l-3.128-1.068 l-0.073-1.815L20.761,26L20.761,26z" opacity=".05"></path><path d="M33.1,13l-0.5,8l-0.7,11.5L24,35.1l-7.9-2.6L15.8,27h4l0.1,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-4.4l-0.2-4H24h4.6l0.3-4H24 h-8.9l-0.3-4H24H33.1 M33.632,12.5H33.1H24h-9.2h-0.539l0.04,0.537l0.3,4l0.035,0.463H15.1H24h4.361l-0.225,3H24h-4.6h-0.526 l0.026,0.525l0.2,4l0.024,0.475H19.6H24h3.866l-0.242,3.634L24,30.372l-3.614-1.234L20.3,26.98L20.28,26.5H19.8h-4h-0.528 l0.029,0.527l0.3,5.5l0.019,0.341l0.324,0.107l7.9,2.6L24,35.626l0.156-0.051l7.9-2.6l0.322-0.106l0.021-0.339l0.7-11.5l0.5-7.999 L33.632,12.5L33.632,12.5z" opacity=".07"></path>
                                    </svg>CSS</Box>
                                    <Box className='box'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                                        <path fill="#6c19ff" d="M6.391,10.671c-0.085-2.448,1.822-4.706,4.401-4.706h26.42c2.578,0,4.486,2.258,4.401,4.706	c-0.082,2.352,0.024,5.398,0.791,7.882c0.769,2.492,2.066,4.067,4.19,4.269v2.295c-2.124,0.202-3.421,1.777-4.19,4.269	c-0.767,2.484-0.873,5.53-0.791,7.882c0.085,2.448-1.822,4.706-4.401,4.706h-26.42c-2.578,0-4.486-2.258-4.4-4.706	c0.082-2.352-0.025-5.398-0.791-7.882c-0.769-2.492-2.069-4.067-4.194-4.269v-2.295c2.124-0.202,3.425-1.777,4.194-4.269	C6.367,16.07,6.473,13.023,6.391,10.671z"></path><linearGradient id="Is-EGaxKcc0Cic9QMqyzGa_EzPCiQUqWWEa_gr1" x1="17.846" x2="27.078" y1="-147.541" y2="-163.153" gradientTransform="matrix(1 0 0 -1 0 -132)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"></stop><stop offset="1" stop-color="#f1e5fc"></stop></linearGradient><path fill="url(#Is-EGaxKcc0Cic9QMqyzGa_EzPCiQUqWWEa_gr1)" d="M25.042,34.016c4.366,0,6.997-2.138,6.997-5.664c0-2.665-1.877-4.595-4.665-4.9v-0.111	c2.048-0.333,3.655-2.235,3.655-4.359c0-3.026-2.389-4.997-6.03-4.997h-8.192v20.031H25.042z M19.994,16.525h4.238	c2.304,0,3.612,1.027,3.612,2.887c0,1.985-1.522,3.096-4.281,3.096h-3.57V16.525z M19.994,31.475v-6.594h4.21	c3.015,0,4.579,1.11,4.579,3.276c0,2.165-1.522,3.318-4.394,3.318H19.994z"></path>
                                    </svg>Bootstrap</Box>
                                    <Box className='box'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                                        <path d="M45.274,2.325C45.084,2.118,44.817,2,44.536,2H5.464C5.183,2,4.916,2.118,4.726,2.325S4.443,2.81,4.468,3.089l3.52,39.427 c0.037,0.412,0.324,0.759,0.722,0.873l16.01,4.573C24.809,47.987,24.902,48,24.994,48s0.185-0.013,0.274-0.038l16.024-4.573 c0.398-0.114,0.685-0.461,0.722-0.873l3.518-39.427C45.557,2.81,45.463,2.532,45.274,2.325z M12,29.004l7,1.942V11h4v26l-11-3.051 V29.004z M38.054,22L37,34.25L27,37v-4.601l6.75-1.855l0.25-3.75L27,28V11h12l-0.345,4H31v8L38.054,22z"></path>
                                    </svg>JavaScript</Box>
                                    <Box className='box'><svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" fill="#53C1DE"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" fill="#53C1DE"></path> </g></svg>React JS</Box>
                                    <Box className='box'><svg fill="#2e2bd4" width="20px" height="20px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" stroke="#2e2bd4"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Material-UI icon</title><path d="M0 2.475v10.39l3 1.733V7.67l6 3.465 6-3.465v3.465l-6 3.463v3.464l6 3.463 9-5.195V9.402l-3 1.733v3.463l-6 3.464-3-1.732 6-3.465V2.475L9 7.67 0 2.475zm24 0l-3 1.73V7.67l3-1.732V2.474Z"></path></g></svg>MUI</Box>
                                </div>

                            </div>
                        </Grid>
                        <Grid className='backend' xs={12} sm={12} md={6}>
                            <div className="backskills">
                                <h2>Backend</h2>
                                <div className="boxes">
                                    <Box className='box'><div class="icons8-nodejs"></div> Node JS</Box>
                                    <Box className='box'><div class="icons8-express-js"></div> Express</Box>
                                    <Box className='box'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                                        <polygon fill="#e7a42b" points="8,5 42,5 38,39 25,43 11,39"></polygon><polygon fill="#f2bf22" points="38.63,8 35.25,36.71 25,39.86 25,8"></polygon><polygon fill="#faf9f8" points="25,21 26,23 25,25 15.79,25 16.64,12 25,12 26,14 25,16 21.03,16 20.7,21"></polygon><polygon fill="#ebebeb" points="24.9,32.57 25,32.54 26,35 25,36.72 24.94,36.74 16.61,34.36 16.05,28 20.07,28 20.35,31.27"></polygon><polygon fill="#fff" points="34.07,21 32.5,34.42 25,36.72 25,32.54 28.83,31.36 29.57,25 25,25 25,21"></polygon><polygon fill="#fff" points="34.92,18 30.93,18 30.67,16 25,16 25,12 34.13,12 34.3,13.26"></polygon>
                                    </svg>MongoDB</Box>
                                </div>
                            </div>
                        </Grid>
                        <Grid className='backend' xs={12} sm={12} md={6}>
                            <div className="backskills">
                                <h2>Others</h2>
                                <div className="boxes">
                                    <Box className='box'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="darkorange" class="bi bi-git" viewBox="0 0 16 16">
                                        <path d="M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.03 1.03 0 0 0 0-1.457" />
                                    </svg> Git</Box>
                                    <Box className='box'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-github" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                    </svg>GitHub</Box>
                                    <Box className='box'><div class="icons8-vs-code"></div>Vs code</Box>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div >
            </div >
            <div className="projects" id='project'>
                <div className='heading'>
                    <h2>Projects</h2>
                </div>
                <div className='aboutheading'>
                    <p>Here are some of the projects I've created while learning web development.</p>
                </div>
                <div className='project'>

                    <div className="cards">
                        <div className="card">
                            <img src={perfume} alt="" />
                            <div className="projectskills1">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                            </div>
                            <Typography className='appname'>Fragrance - Perfume website</Typography>
                            <Typography sx={{ fontSize: 11, color: 'white', textAlign: 'justify', marginTop: 1, marginBottom: 2 }}>This is my first web development project, and I created entirely using HTML and CSS, featuring responsive design and a basic layout techniques.</Typography>
                            <div className='viewcode'>
                                <Button className='open1' sx={{ fontSize: 10 }} variant='contained'><a href="https://github.com/Saran2304/Fragrance">View code</a></Button>
                                <Button className='open' sx={{ fontSize: 10 }} variant='contained'><a href="">preview</a></Button>
                            </div>
                        </div>
                    </div>


                    <div className="cards">
                        <div className="card">
                            <img src={job} alt="" />
                            <div className="projectskills1">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>BOOTSTRAP</li>
                                    <li>JS</li>
                                    <li>REACT </li>
                                </ul>
                            </div>
                            <Typography className='appname'>JOBES - Jobs posting website</Typography>
                            <Typography sx={{ fontSize: 11, color: 'white', textAlign: 'justify', marginTop: 1, marginBottom: 2 }}>I've created a responsive page for posting jobs on platforms using frontend technologies like HTML, CSS, Bootstrap, JavaScript, and ReactJS.</Typography>
                            <div className='viewcode'>
                                <Button className='open1' sx={{ fontSize: 10 }} variant='contained'><a href="https://github.com/Saran2304/Jobes">View code</a></Button>
                                <Button className='open' sx={{ fontSize: 10 }} variant='contained'><a href="">preview</a></Button>
                            </div>
                        </div>
                    </div>


                    <div className="cards">
                        <div className="card">
                            <img src={ticket} alt="" />
                            <div className="projectskills">
                                <ul>
                                    <li>REACT JS</li>
                                    <li>JAVASCRIPT</li>
                                    <li>REST API</li>
                                    <li>AXIOS</li>
                                </ul>
                            </div>
                            <Typography className='appname'>Mov!es - Movie Ticket Booking</Typography>
                            <Typography sx={{ fontSize: 11, color: 'white', textAlign: 'justify', marginTop: 1, marginBottom: 2 }}>In this project, I have created a homepage using tools like HTML, CSS, Bootstrap, JavaScript, and ReactJS (Responsive, Rest API using Axios).</Typography>
                            <div className='viewcode'>
                                <Button className='open1' sx={{ fontSize: 10 }} variant='contained'><a href="https://github.com/Saran2304/Ticket-booking">View code</a></Button>
                                <Button className='open' sx={{ fontSize: 10 }} variant='contained'><a href="">preview</a></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="education" id='education'>
                <div className='heading'>
                    <h2>Education</h2>
                </div>
                <div className="educations">
                    <div className="college">
                        <Typography className='c' sx={{ fontSize: 18 }}>KIT - Kalaignar karunanidhi Instiute of Technology</Typography>
                        <Typography className='c1' sx={{ fontSize: 14 }}>BE - Electrical and Electronics Engineering</Typography>
                        <Typography className='c2' sx={{ fontSize: 12 }}>2019 - 2023</Typography>
                        <Typography className='c3' sx={{ fontSize: 15, marginTop: 1 }}>CGPA - 8.18</Typography>
                        <Typography className='c4' sx={{ fontSize: 13 }}>I have completed my undergraduate degree at KIT. My academic journey equipped me with critical thinking, problem-solving skills, and hands-on experience through various projects in the field of electronics.</Typography>
                    </div>
                    <div className="college">
                        <Typography className='c' sx={{ fontSize: 18 }}>Mercy Martic Higher Secondary School</Typography>
                        <Typography className='c1' sx={{ fontSize: 14 }}>HSC - XII(std) (CS-Maths)</Typography>
                        <Typography className='c2' sx={{ fontSize: 12 }}>2017 - 2019</Typography>
                        <Typography className='c3' sx={{ fontSize: 15, marginTop: 1 }}>Percentage - 59.4</Typography>
                        <Typography className='c4' sx={{ fontSize: 13 }}>In school, I developed a strong academic foundation and leadership skills, laying the groundwork for my future academic and professional success.</Typography>
                    </div>
                    <div className="college">
                        <Typography className='c' sx={{ fontSize: 18 }}>Subba Naidu Venkittamal Matric School</Typography>
                        <Typography className='c1' sx={{ fontSize: 14 }}>SSLC - X(std)</Typography>
                        <Typography className='c2' sx={{ fontSize: 12 }}>2016 - 2017</Typography>
                        <Typography className='c3' sx={{ fontSize: 15, marginTop: 1 }}>Percentage - 85.4</Typography>
                        <Typography className='c4' sx={{ fontSize: 13 }}>During my school days, I participated in extracurricular activities, earned several accolades and certificates. These experiences laid the groundwork for my future academic and professional success.</Typography>
                    </div>
                </div>
            </div>


            <div className="contact" id='contact'>
                <div className='heading'>
                    <h2>Contact</h2>
                </div>

                <div className="contactus">
                    <div className='contactme'>
                        <TextField className='contactname' sx={{ marginTop: 5 }} onChange={(e) => setname(e.target.value)} label="Name" size="small" />
                        <TextField className='contactname' sx={{ marginTop: 3 }} onChange={(e) => setmail(e.target.value)} label="Email" size="small" />
                        <TextField className='contactsub' sx={{ marginTop: 3 }} onChange={(e) => setsubject(e.target.value)} label="Subject" />
                        <Textarea className='contactsub1' sx={{ marginTop: 3, minHeight: '10px', backgroundColor: 'rgba(194, 186, 186, 0.466)' }} onChange={(e) => setmessage(e.target.value)} placeholder='Message' minRows={4} />
                        <Button className='send' sx={{ marginTop: 2, fontSize: 12 }} onClick={send} variant='contained'>Send</Button>
                        <div className="socialcontact">
                            <div className="social">
                                <a href="tel:7598492019"><Icon><PhoneIcon /></Icon></a>
                                <a href="mailto:sarans2304@gmail.com"><Icon><MailIcon /></Icon></a>
                                <a href="https://www.linkedin.com/in/saran-s-488671260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><Icon><LinkedInIcon /></Icon></a>
                                <a href="#"><Icon><InstagramIcon /></Icon></a>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div >
    )
}
