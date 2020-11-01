const Title = () => {

    const titleStyle = {
        display:"flex"
    }

    const logoStyle = {
        marginLeft:"10%"
    }

    const titleInfo = {
        marginLeft: "auto",
        marginRight:"10%"
    }

    return(
        <div style={titleStyle}>
            <div style = {logoStyle}>
                <h1>COCOPONS</h1>
            </div>
            <div style = {titleInfo}>
                <h2>最新・人気商品のクーポン情報サイト!</h2>
            </div>
         </div>   
    )


}

export default Title;