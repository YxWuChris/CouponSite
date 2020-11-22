import { useState, useEffect } from 'react';
import axios from 'axios';
import Title from '../../components/Title';
import Article from '../../components/Article';
import Navbar from '../../components/NavBar';

const Shipping1 = () =>{


    const [itemData, setItemData] = useState(null);

    useEffect(() => {

        async function fetchData() {
            const result = await axios('https://raw.githubusercontent.com/YxWuChris/CPArticle/master/shipping1.html');
            setItemData(result.data)
        }
        fetchData();
    }, []);

    return(
        <>
        <Title />
        <NavBar />
        {itemData? (
            <Article articleData={itemData} />
        ):(
            <div> </div>
        )
        }

        </>
    )

}

export default Shipping1;