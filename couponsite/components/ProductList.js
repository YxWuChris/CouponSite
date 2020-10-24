import mockData from '../Data/mockData.json'
import Item from './Item'

const ProductList = () => {

    const container = {
        marginlLeft:"auto",
        marginRight:"auto",
        maxWidth:"800px"
    }

    return (
        <div style = {container}>
            {mockData.data.items.map(item => (
                <Item item={item}/>
            ))}
        </div>
    )


}

export default ProductList;