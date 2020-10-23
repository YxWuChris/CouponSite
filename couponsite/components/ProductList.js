import mockData from '../Data/mockData.json'
import Item from './Item'

const ProductList = () => {

    const container = {
        backgroundColor:"#F5F5F5"
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