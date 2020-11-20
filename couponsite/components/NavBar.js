import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';


const NavBar = () => {

    const container = {
        marginLeft: "auto",
        marginRight: "auto",
        height:"80px",
        width: "100%",
        backgroundColor:"orange",
        display: "flex",
        justifyContent:"center",
    };

    const buttonStyle = {
        color:"white",
        width:"250px",
        fontSize:"1.4rem",
        height:"80px"
    }


    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1000px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' })

    return(
        <>
        <div style = {container}>   
        {isDesktopOrLaptop && <>
            {/* <Button style = {buttonStyle}>最新情報</Button>
            <Button style = {buttonStyle}>最新情報</Button>
            <Button style = {buttonStyle}>最新情報</Button>
            <Button style = {buttonStyle}>最新情報</Button> */}
        </>}
        </div>
        </>
    )


}

export default NavBar;