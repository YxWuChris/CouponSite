import Item from './Item'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { itemApi } from '../Data/Api.js'
import mockData from '../Data/mockData.json'


const ProductList = () => {

    const [itemData, setItemData] = useState(null);

    useEffect(() => {

        async function fetchData() {
            const result = await axios(itemApi);
            setItemData(result.data)
        }
        fetchData();
    }, []);

    



    const container = {
        marginlLeft: "auto",
        marginRight: "auto",
        width: "900px",
    }

    if (itemData == null) {
        return (
            <></>
        )
    } else {

        return (
            <>
            <div style={container}>
                {itemData.map(item => (
                    <Item key={item.title} item={item} />
                ))}
            </div>
            </>
        )
    }


}

export default ProductList;