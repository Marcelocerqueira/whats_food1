import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import { 
    Container, 
    CategoryArea,
    CategoryLista,
    ProductArea,
    ProductList
} from './styled';

import api from '../../api';

import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';
import ProductItem from '../../components/ProductItem';
import CategoryLista from '../../components/CategoryItem';

export default () => {
    const history = useHistory();
    const [headerSearch, setHeaderSearch] = useState('');
    const [categories, setCategories] = useState([]);
    const [ProductList, setProducts] = useState([]);

    useEffect(()=>{
        const getCategories = async () => {
            const cat = await api.getCategories();
            if(cat.erro == ''){
                setCategories(cat.result);
            }
        };
        getCategories();
    })

    const [activeCategory, setActiveCategory] = useState(0);

    const getProducts = async () => {
        const prods = await api.getProducts();
    }

    const handleButtonClick = () => {
        history.push('/tela2/testador');
    }

    return (
        <Container>
            <Titulo>Whast_Foods</Titulo>

            <Header search={headerSearch} onSearch={setHeaderSearch} />
            {categories.length > 0 &&
             <CategoryArea>
                 Selecione uma Categoria 
                 <CategoryLista>
                     <CategoryItem title="" image="" />
                 </CategoryLista>

             </CategoryArea>
            }
        </Container>
    );
}