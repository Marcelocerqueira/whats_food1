import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import ReactTooltip from 'react-tooltip';

import { 
    Container, 
    CategoryArea,
    ProductArea,
    ProductList
} from './styled';

import api from '../../api';




export default () => {
    const history = useHistory();
    const [headerSearch, setHeaderSearch] = useState('');
    const [categories, setCategories] = useState([]);
    const [ProductList, setProducts] = useState([]);

    const [activeCategory, setActiveCategory] = useState(0);


   const getProducts = async () => {
        const prods = await api.getProducts();
            if(prods.erro == ''){
                setProducts(prods.result.data);
   }


    

    const getProducts = async () => {
        const prods = await api.getProducts();
    }

    const handleButtonClick = () => {
        history.push('/tela2/testador');
    }

    return (
        <Container>
           

           
            {categories.length > 0 &&

             <CategoryArea>
                
                

             </CategoryArea>
            }
        </Container>
    );
};
}
