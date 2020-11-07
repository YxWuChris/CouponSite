import Button from '@material-ui/core/Button'
import SubItemList from './SubItemList'
import { useMediaQuery } from 'react-responsive'
import {useState,useEffect} from 'react'

const Item = ({ item }) => {

    const container = {
        maxWidth:"900px",
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

    const subTitle = {
        color: "#FF6347",
    }

    const titleImg = {
        margin: "10px",
        width: "150px",
        marginLeft:"auto",
        marginRight:"auto"
    }

    const buyButton = {
        width: "120px",
        marginTop: "15%",
        background: "#FF7F50",
        marginRight:"auto",
        marginLeft:"auto",
    }

    const DescriptionStyle = {
        marginBottom: "5px"
    }

    const referenceStyle = {
        marginLeft:"25px",
        marginTop:"5px"
    }

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    const [size,setSize] = useState(useWindowSize())

    console.log(size)

    const checkButtonStyle = {
        marginBottom: "5px",
    }

    const checkInfo = {
        display:"inline",
        color:"#436FA8",
        textDecorationLine: "underline",
    }

    const contentContainer = {
        marginLeft:"30px",
        width:"570px"
    }

    const descriptions = item.infoList.split(";")

    const mobileContainer = {
        width:"600px",
        height:"200px",
        backgroundColor:"red"
    }


    return (
        <>
        {isDesktopOrLaptop && <>
            <div style={container}>
                <div style={titleImgContainer}>
                    <img style={titleImg} src={item.titleImg} />
                    <Button style={buyButton} variant="contained" color="secondary" href={item.link}>今すぐ購入</Button>
                </div>

                <div style={contentContainer}>
                    <h2><a href={item.link}>{item.title}</a></h2>
                    <h2 style={subTitle}>{item.subtitle}</h2>
                    {descriptions.map(description => (
                        <li key={description} style = {DescriptionStyle}>{description}</li>
                    ))}
                    <li style = {checkButtonStyle}><a href={item.link}><div style={checkInfo}>もっと見る</div></a></li>
                    <SubItemList subItem = {item.itemList}/>
                </div>
                    <div style={referenceStyle}>
                    <p>{item.reference}</p>
                    </div>
            </div>
            </>}
        {isTabletOrMobile && <>
            <div style={mobileContainer}>

           
            </div>
            

        </>}
        </>
            
    )
}

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== 'undefined') {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
      
        // Add event listener
        window.addEventListener("resize", handleResize);
       
        // Call handler right away so state gets updated with initial window size
        handleResize();
      
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }
  

export default Item;