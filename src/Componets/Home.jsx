import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import React, { useState } from 'react'
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Button, Popover } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

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
        <div style={{backgroundColor:"#203765", height:"200px"}}>

        <h1 style={{marginLeft:"100px" ,color:"white"}}> welcome  Anil Kumar</h1>
        </div>
        <div style={{ width: "5.6%", borderRight: "1px solid gainsboro", position: "fixed", backgroundColor: "#203765", height: "50rem" ,marginTop:"-10px"}}>
            <Link to="/">
                
                {/* <div style={{ padding: "20%", marginBottom: "7rem", marginTop: "2rem" }}>
                <svg viewBox="0 0 1043.63 592.71" className="kp hu" style={{ width: "80%" }}><g data-name="Layer 2"><g data-name="Layer 1">
                    <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 
                    147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.
                    76 111.9 51.76 249.94"></path></g></g></svg>
            </div> */}
            </Link>
              <br /><br /><br />

            <div>
                <div style={{ marginBottom: "1.5rem" }}>
                    <Link to="/"> <button style={{ backgroundColor: "white", border: "none", marginLeft: "20px", cursor: "pointer" }} onClick={() => handleIcon("home")}>
                        {home ? <GridViewRoundedIcon color='action' /> : <GridViewRoundedIcon color='action'  />}
                    </button> </Link>
                </div>
                <div style={{ marginBottom: "1.5rem" }}>
                    <button style={{ backgroundColor: "white", border: "none", marginLeft: "20px", cursor: "pointer" }} onClick={() => handleIcon("noti")}>
                        {noti ? <PeopleAltRoundedIcon color='action'   /> : <PeopleAltRoundedIcon color='action' />}
                    </button>
                </div>
                <div style={{ marginBottom: "1.5rem" }}>
                    <Link to="/bookmarks"><button style={{ backgroundColor: "white", border: "none", marginLeft: "20px", cursor: "pointer" }} onClick={() => handleIcon("book")}>
                        {book ? <CalendarMonthRoundedIcon color='action' /> : <CalendarMonthRoundedIcon color='action' />}
                    </button> </Link>

                </div>
                <div style={{ marginBottom: "1.5rem" }}>
                    <Link to="/stories"> <button style={{ backgroundColor: "white", border: "none", marginLeft: "20px", cursor: "pointer" }} onClick={() => handleIcon("article")}>
                        {article ? <CurrencyRupeeIcon color='action' /> : <CurrencyRupeeIcon color='action' />}
                    </button> </Link>
                </div>
                <div style={{ marginBottom: "1.5rem" }}>
                    <Link to="/create"><button style={{ backgroundColor: "white", border: "none", marginLeft: "20px", cursor: "pointer" }} onClick={() => handleIcon("edit")}>
                        {edit ? <NewspaperIcon color='action'/> : <NewspaperIcon  color='action'/>}
                    </button> </Link>

                </div>
                <div style={{ marginBottom: "1.5rem" }}>
                    <Link to="/create"><button style={{ backgroundColor: "white", border: "none", marginLeft: "20px", cursor: "pointer" }} onClick={() => handleIcon("edit")}>
                        {edit ? <SettingsIcon color='action' /> : <SettingsIcon  color='action'/>}
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
           
                <div style={{ marginTop: "7rem",marginLeft:"1rem" }}>
                <Avatar alt="Remy Sharp" src="data:image/jpeg;base64,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" />
                </div>
           

        </div>
        <div style={{ display:"flex", justifyContent:"space-around", width:"60%",margin:"auto" ,boxShadow:"rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",marginTop:"-30px",backgroundColor:"white"}}>
          <h1>
          <InsertDriveFileIcon color='primary'/>
          <span>total Earnings</span>   
            <p>₹4500</p> 
            </h1> 
            
            <select placeholder='select unit Name' style={{height:"50px" ,marginTop:"30px" }}>

<option value="prk">Unit</option>
<option value="prk">prk Hospital</option>

<option value="rkp">prk Hospital</option>
<option value="krp">prk Hospital</option>
</select>
<select placeholder='select unit Name' style={{height:"50px" ,marginTop:"30px" }} >

<option value="prk">Time duration</option>
<option value="prk">prk Hospital</option>

<option value="rkp">prk Hospital</option>
<option value="krp">prk Hospital</option>
</select>
        </div>
        <div style={{ display:"flex", justifyContent:"space-around", width:"60%",margin:"auto" ,boxShadow:"rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",marginTop:"-30px",backgroundColor:"#F0F6FE"}}>
         <p>Appoinments
            <span><h3>54</h3></span>
         </p>
         <p>EMR Finalised
         <span><h3>59</h3></span>
         </p>
         <p>Patient Registratins
         <span><h3>120</h3></span>
         </p>
         <p>KR4ALL
         <span><h3>30</h3></span>
         </p>
         <br />
       
       
        </div>
                </>
    )
}
