import { useMediaQuery } from 'react-responsive'
import { useState, useEffect } from 'react'
import {AmazonCircleFilled,FireFilled,ShoppingOutlined,ExperimentFilled, MailOutlined,InstagramFilled,ReadOutlined,RestFilled} from '@ant-design/icons'

const IconBar = () => {

    const mobileWidth = useWindowSize().width
    const mobileHeight = useWindowSize().height


    const mobileContainer = {
        width:mobileWidth,
        minWidth:"500px",
        height:"400px",
        marginBottom:"20px"
    }

    const rowContainer = {
        width:mobileWidth,
        height:"200px",
        display:"flex"
    }

    const IconContainer = {
        marginTop:"auto",
        marginBottom:"auto",
        marginLeft:"auto",
        marginRight:"auto",
        height:"150px",
        width:mobileWidth/5,
        fontSize:"5.5rem",
    }

    const wordConatiner = {
        fontSize:"1.6rem",
        color:"gray",
        textAlign:"center"
        
    }

    const IconStyle = {
        marginLeft:"40px",
        marginRight:"auto"
    }

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 800px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })

    return(
        <>
            {isTabletOrMobile && <>
                <div style={mobileContainer}>
                    <div style={rowContainer}>
                        <div style={IconContainer}><a href={"/"}><FireFilled style={{marginLeft:"20px"}}/><div style={wordConatiner}>最新情報</div></a></div>
                        <div style={IconContainer}><a href={"/Fashion"}><ShoppingOutlined style={IconStyle}/><div style={wordConatiner}>ファッション</div></a></div>
                        <div style={IconContainer}><a href={"/Beauty"}><ExperimentFilled style={IconStyle}/><div style={wordConatiner}>化粧品</div></a></div>
                        <div style={IconContainer}><a href={"/Amazon"}><AmazonCircleFilled style={IconStyle}/><div style={wordConatiner}>アマゾン</div></a></div>
                    </div>
                        <div style={rowContainer}>
                        <div style={IconContainer}><a href={"https://www.instagram.com/cocopons.jp/"}><InstagramFilled style={{marginLeft:"20px"}}/><div style={wordConatiner}>Instagram</div></a></div>
                        <div style={IconContainer}><ReadOutlined style={IconStyle}/><div style={wordConatiner}>お役立ちブログ</div></div>
                        <div style={IconContainer}><a href={"/Other"}><RestFilled style={IconStyle}/><div style={wordConatiner}>その他</div></a></div>
                        <div style={IconContainer}><a href={"/Contact"}><MailOutlined style={IconStyle}/><div style={wordConatiner}>連絡先</div></a></div>
                    </div>
                </div>
            </>}

            {isDesktopOrLaptop && <>
                <div></div>
                </>
            }
        </>
    )

    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });
    
        useEffect(() => {
            if (typeof window !== 'undefined') {
                function handleResize() {
                    setWindowSize({
                        width: window.innerWidth,
                        height: window.innerHeight,
                    });
                }
    
                window.addEventListener("resize", handleResize);
                handleResize();
                return () => window.removeEventListener("resize", handleResize);
            }
        }, []); 
        return windowSize;
    }

}

export default IconBar;