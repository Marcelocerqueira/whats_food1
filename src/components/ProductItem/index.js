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

export default (data) => {
    return(
        <Container>
            <ProductPhotoArea>
                <ProductPhoto src={data.image}/>

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
   