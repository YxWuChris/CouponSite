import Button from '@material-ui/core/Button'
import SubItemList from './SubItemList'

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
        marginLeft:"35px",
        marginTop:"5px"
    }

    const checkButtonStyle = {
        // color:"#1E90FF",
        // fontFamily: "Times New Roman",
        marginBottom: "5px",
        "&:hover": {
           color:"red"
        }
    }

    const checkInfo = {
        display:"inline",
        color:"#436FA8",
        textDecorationLine: "underline",
    }

    const contentContainer = {
        marginLeft:"30px",
        width:"500px"
    }

    const descriptions = item.infoList.split(";")


    return (
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
                <div style={referenceStyle} onClick={openInNewTab()}>
                    <p>{item.reference}</p>
                </div>
            </div>
            
    )
}

function openInNewTab( ) {
    // var win = window.open("https://www.google.com", '_blank');
    // win.focus();
  }

export default Item;