import React from 'react';
import{ 
    Container,
    ProductPhotoArea,
    ProductInfoArea,
    ProductButtonArea,
    ProductPhoto,
    productName,
    productPrice,
    ProductIngredients,
    ProductButton 
} from './styled';

export default () => {
    return(
        <Container>
            <ProductPhotoArea>
                <ProductPhoto src={Data.image}/>

            </ProductPhotoArea>

            <ProductInfoArea>
                <productName>{data.name}</productName>
                <productPrice>{data.price}</productPrice>
                <ProductIngredients>{data.ingredients}</ProductIngredients>
            </ProductInfoArea>

            <ProductButtonArea>
                    <ProductButton src="/assets/next.png"/>
            </ProductButtonArea>

        </Container>
    
    );
}
   