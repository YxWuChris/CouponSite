import mockData from '../Data/mockData.json'
import Item from './Item'

const ProductList = () => {

    const container = {
        marginlLeft:"auto",
        marginRight:"auto",
        width:"900px",
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