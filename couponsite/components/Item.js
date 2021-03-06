import Button from '@material-ui/core/Button'
import SubItemList from './SubItemList'
import { useMediaQuery } from 'react-responsive'
import { useState, useEffect } from 'react'

const Item = ({ item }) => {

    const container = {
        maxWidth: "900px",
        display: "flex",
        backgroundColor: "white",
        marginBottom: "20px",
        borderRadius: "10px",
    };

    const titleImgContainer = {
        margin: "20px",
        display: "flex",
        flexDirection: "column"
    };

    const TitleStyle = {
        marginLeft: "15px",
    }

    const subTitle = {
        marginLeft: "15px",
        color: "#FF6347",
    }

    const mobileSubTitle = {
        color: "#FF6347",
    }

    const titleImg = {
        margin: "10px",
        width: "200px",
        height: "200px",
        marginLeft: "auto",
        marginRight: "auto"
    }

    const buyButton = {
        width: "120px",
        marginTop: "15%",
        background: "orangered",
        marginRight: "auto",
        marginLeft: "auto",
        borderRadius: "0px",
        fontSize:"1rem"
    }

    const DescriptionStyle = {
        marginBottom: "15px",
    }

    const referenceStyle = {
        float:"right",
        color: "gray"
    }

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })


    const checkButtonStyle = {
        marginBottom: "5px",
    }

    const checkInfo = {
        display: "inline",
        color: "#436FA8",
        textDecorationLine: "underline",
    }

    const contentContainer = {
        marginLeft: "30px",
        width: "580px",
        marginBottom: "20px",
    }

    const discountInfoConatiner = {
        borderBottom: "2px solid #C8C8C8",
        borderColor: "#C8C8C8",
    }

    const mobileContentContainer = {
        marginLeft: "30px",
        marginRight: "min(20px)",
        maxWidth: "570px",
        width: "480px",
        // borderBottom: "2px solid #C8C8C8",
        // borderColor: "#C8C8C8",
    }

    const descriptions = item.infoList.split(";")

    const mobileContainer = {
        marginLeft: "30px",
        width: "730px",
        minHeight: "300px",
        backgroundColor: "white",
        display: "flex",
        borderTop: "solid",
        borderColor: "#F5F5F5"
    }

    const mobileImgContainer = {
        height: "280px",
        width: "260px",
        marginLeft: "10px",
        marginTop: "auto",
        marginBottom: "auto",
        marginRight: "auto",
    }

    const mobileTitleImg = {
        width: "260px",
        height: "260px",
        marginTop: "auto",
        marginBottom: "auto",
        marginLeft: "auto",
        marginRight: "auto"
    }

    const mobileBuyButton = {
        width: "150px",
        background: "orangered",
        marginBottom: "10px",
        marginRight: "auto",
        marginTop: "80px",
        marginBottom: "20px",
        marginLeft: "250px",
        fontSize: "1.2rem"
    }


    return (
        <>
            {isDesktopOrLaptop && <>
                <div style={container}>
                    <div style={titleImgContainer}>
                        <img style={titleImg} src={item.titleImg} />
                        <Button style={buyButton} variant="contained" color="primary" href={item.link}><b>今すぐ購入</b></Button>
                    </div>

                    <div style={contentContainer}>
                        <div style={discountInfoConatiner}>
                            <h2 style={TitleStyle}><a href={item.link}>{item.title}</a></h2>
                            <h2 style={subTitle}>{item.subtitle}</h2>
                            <ul>
                                {descriptions.map(description => (
                                    <li key={description} style={DescriptionStyle}>{description}</li>
                                ))}
                                <li style={checkButtonStyle}><a href={item.link}><div style={checkInfo}>もっと見る</div></a></li>
                            </ul>
                            <SubItemList subItem={item.itemList} />
                        </div>
                        <div style={referenceStyle}>
                            <p>{item.reference}</p>
                        </div>
                    </div>
                </div>
            </>}
            {isTabletOrMobile && <>
                <div style={mobileContainer}>
                    <div style={mobileImgContainer}>
                        <img style={mobileTitleImg} src={item.titleImg} />
                        {/* <Button style={buyButton} variant="contained" color="secondary" href={item.link}>今すぐ購入</Button> */}
                    </div>
                    <div style={mobileContentContainer}>
                        <h2><a href={item.link}>{item.title}</a></h2>
                        <h2 style={mobileSubTitle}>{item.subtitle}</h2>
                        <h3>{descriptions[0]}</h3>
                        {/* <Button style={mobileBuyButton} variant="contained" color="secondary" href={item.link}><b>購入</b></Button> */}
                    </div>
                </div>
            </>}
        </>

    )
}

// function useWindowSize() {
//     // Initialize state with undefined width/height so server and client renders match
//     // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
//     const [windowSize, setWindowSize] = useState({
//         width: undefined,
//         height: undefined,
//     });

//     useEffect(() => {
//         // only execute all the code below in client side
//         if (typeof window !== 'undefined') {
//             // Handler to call on window resize
//             function handleResize() {
//                 // Set window width/height to state
//                 setWindowSize({
//                     width: window.innerWidth,
//                     height: window.innerHeight,
//                 });
//             }

//             // Add event listener
//             window.addEventListener("resize", handleResize);

//             // Call handler right away so state gets updated with initial window size
//             handleResize();

//             // Remove event listener on cleanup
//             return () => window.removeEventListener("resize", handleResize);
//         }
//     }, []); // Empty array ensures that effect is only run on mount
//     return windowSize;
// }


export default Item;