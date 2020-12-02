import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';


const NavBar = () => {

    const container = {
        marginLeft: "auto",
        marginRight: "auto",
        height:"80px",
        backgroundColor:"orange",
        display: "flex",
        justifyContent:"center",
        minWidth: "800px",
    };

    const buttonStyle = {
        color:"white",
        width:"170px",
        fontSize:"1.1rem",
        height:"80px",
        borderRight:"solid 0.5px",
        borderLeft:"solid 1px"
    }


    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1000px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' })

    return(
        <>
        <div style = {container}>   
        {isDesktopOrLaptop && <>
            <Button style = {buttonStyle} href='/'>最新人気アイテム</Button>
            <Button style = {buttonStyle} href='/Beauty'>化粧品スキンケア</Button>
            <Button style = {buttonStyle} href='/Fashion'>ファッション</Button>
            <Button style = {buttonStyle} href='/Other'>その他</Button>
            <Button style = {buttonStyle} href='/Amazon'>Amazon</Button>
            <Button style = {buttonStyle}>お役立ちブログ</Button>
            <Button style = {buttonStyle} href='/Contact'>Contact</Button>
        </>}
        </div>
        </>
    )


}

export default NavBar;
