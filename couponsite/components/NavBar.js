import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';


const NavBar = () => {

    const container = {
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%",
        backgroundColor: "orange",
        display: "flex",
        justifyContent:"center",
    };

    const buttonStyle = {
        color: "white",
        margin: "20px",
        fontSize:"1.2rem"
    }


    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })

    return(
        <>
        {isDesktopOrLaptop && <>
        <div style = {container}>   
            <Button style = {buttonStyle}>最新情報</Button>
            <Button style = {buttonStyle}>化粧品スキンケア</Button>
            <Button style = {buttonStyle}>ファッション</Button>
            <Button style = {buttonStyle}>インテリア</Button>
            <Button style = {buttonStyle}>食品</Button>
            <Button style = {buttonStyle}>電気製品</Button>
            <Button style = {buttonStyle}>メンズ</Button>
            <Button style = {buttonStyle}>健康・ダイエット</Button>
        </div>
        </>}
        </>
    )


}

export default NavBar;