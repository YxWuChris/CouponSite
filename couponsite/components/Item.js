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
        fontFamily: 'Open Sans'
    }

    const titleImg = {
        margin: "10px",
        maxWidth: "90%",
    }

    const buyButton = {
        maxWidth: "30%",
        marginTop: "15%",
        background: "#FF7F50",
        marginRight:"auto",
        marginLeft:"auto",
    }

    const DescriptionStyle = {
        fontFamily: "Times New Roman",
        marginBottom: "5px"
    }

    const referenceStyle = {
        paddingRight:"10px",
        paddingTop:"10px"
    }

    const checkButtonStyle = {
        color:"#1E90FF",
        fontFamily: "Times New Roman",
        marginBottom: "5px"
    }

    const descriptions = item.infoList.split(";")


    return (
            <div style={container}>
                <div style={titleImgContainer}>
                    <img style={titleImg} src={item.titleImg} />
                    <Button style={buyButton} variant="contained" color="secondary" href={item.link}>Buy</Button>
                </div>

                <div>
                    <h2><a href={item.link}>{item.title}</a></h2>
                    <h2 style={subTitle}>{item.subtitle}</h2>
                    {descriptions.map(description => (
                        <li key={description} style = {DescriptionStyle}>{description}</li>
                    ))}
                    <li style = {checkButtonStyle}><a href={item.link}>Click this to check</a></li>
                    <SubItemList subItem = {item.itemList}/>
                </div>
                <div style={referenceStyle}>
                    <p>{item.reference}</p>
                </div>
            </div>
            
    )
}

export default Item;