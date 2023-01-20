import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import React, { useState } from 'react'
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Button, Popover } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import NewspaperIcon from '@mui/icons-material/Newspaper';

import { Link } from 'react-router-dom';

export const Home = () => {

    const [home, setHome] = useState(false);
    const [noti, setNoti] = useState(false);
    const [book, setBook] = useState(false);
    const [article, setArticle] = useState(false);
    const [edit, setEdit] = useState(false);

    const handleIcon = (iconName) => {
        switch (iconName) {
            case "home":
                setHome(true)
                setNoti(false)
                setBook(false)
                setArticle(false)
                setEdit(false)
                break;
            case "noti":
                setHome(false)
                setNoti(true)
                setBook(false)
                setArticle(false)
                setEdit(false)
                break;
            case "book":
                setHome(false)
                setNoti(false)
                setBook(true)
                setArticle(false)
                setEdit(false)
                break;
            case "article":
                setHome(false)
                setNoti(false)
                setBook(false)
                setArticle(true)
                setEdit(false)
                break;
            case "edit":
                setHome(false)
                setNoti(false)
                setBook(false)
                setArticle(false)
                setEdit(true)
                break;

            default:
                break;
        }
    }
    const [anchor, setAnchor] = useState(null);
    const openPopover = (event) => {
        setAnchor(event.currentTarget);
        console.log("yash");
    }

    const handleLogout = () => {

    }

    return (
        <>
        <h1 style={{marginLeft:"100px"}}> welcome  Anil Kumar</h1>
        <div style={{ width: "5.6%", borderRight: "1px solid gainsboro", position: "fixed", backgroundColor: "white", height: "50rem" }}>
            <Link to="/">
                
                {/* <div style={{ padding: "20%", marginBottom: "7rem", marginTop: "2rem" }}>
                <svg viewBox="0 0 1043.63 592.71" className="kp hu" style={{ width: "80%" }}><g data-name="Layer 2"><g data-name="Layer 1">
                    <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 
                    147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.
                    76 111.9 51.76 249.94"></path></g></g></svg>
            </div> */}
            </Link>


            <div>
                <div style={{ marginBottom: "1.5rem" }}>
                    <Link to="/"> <button style={{ backgroundColor: "white", border: "none", marginLeft: "20px", cursor: "pointer" }} onClick={() => handleIcon("home")}>
                        {home ? <GridViewRoundedIcon /> : <GridViewRoundedIcon  />}
                    </button> </Link>
                </div>
                <div style={{ marginBottom: "1.5rem" }}>
                    <button style={{ backgroundColor: "white", border: "none", marginLeft: "20px", cursor: "pointer" }} onClick={() => handleIcon("noti")}>
                        {noti ? <PeopleAltRoundedIcon   /> : <PeopleAltRoundedIcon  />}
                    </button>
                </div>
                <div style={{ marginBottom: "1.5rem" }}>
                    <Link to="/bookmarks"><button style={{ backgroundColor: "white", border: "none", marginLeft: "20px", cursor: "pointer" }} onClick={() => handleIcon("book")}>
                        {book ? <CalendarMonthRoundedIcon /> : <CalendarMonthRoundedIcon />}
                    </button> </Link>

                </div>
                <div style={{ marginBottom: "1.5rem" }}>
                    <Link to="/stories"> <button style={{ backgroundColor: "white", border: "none", marginLeft: "20px", cursor: "pointer" }} onClick={() => handleIcon("article")}>
                        {article ? <CurrencyRupeeIcon /> : <CurrencyRupeeIcon />}
                    </button> </Link>
                </div>
                <div style={{ marginBottom: "1.5rem" }}>
                    <Link to="/create"><button style={{ backgroundColor: "white", border: "none", marginLeft: "20px", cursor: "pointer" }} onClick={() => handleIcon("edit")}>
                        {edit ? <NewspaperIcon /> : <NewspaperIcon />}
                    </button> </Link>

                </div>
                <div style={{ marginBottom: "1.5rem" }}>
                    <Link to="/create"><button style={{ backgroundColor: "white", border: "none", marginLeft: "20px", cursor: "pointer" }} onClick={() => handleIcon("edit")}>
                        {edit ? <SettingsIcon /> : <SettingsIcon />}
                    </button> </Link>
                </div>
            </div>

            <Popover
                open={Boolean(anchor)}
                anchorEl={anchor}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right"
                }}
                transformOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                }}
                >
                <Button variant='Danger' onClick={() => { setAnchor(null); handleLogout() }}>Sign out</Button>
            </Popover>
            <button style={{ backgroundColor: "white", border: "none" }} onClick={openPopover}>
                <div style={{ marginTop: "7rem" }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </div>
            </button>

        </div>

                </>
    )
}
