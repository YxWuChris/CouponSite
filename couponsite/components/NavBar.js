import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core';


const NavBar = () => {

    const container = {
        width: "100%",
        backgroundColor: "pink",
        display: "flex",
        justifyContent:"center",
    };

    const buttonStyle = {
        color: "white",
        margin: "20px"
    }

    return(
        <div style = {container}>   
            <Button style = {buttonStyle}>化粧品</Button>
            <Button style = {buttonStyle}>衣装</Button>
            <Button style = {buttonStyle}>Button</Button>
            <Button style = {buttonStyle}>Button</Button>
        </div>
    )


}

export default NavBar;