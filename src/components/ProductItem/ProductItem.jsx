import React from 'react';
import Button from "../Button/Button";
import './ProductItem.css';

const ProductItem = ({product, className, onAdd}) => {

      const onAddHandler = () => {
        onAdd(product);
    }

    return (
        <div className={'product ' + className}>
            <div className={'imag'} />
            <div className={'title'}>{product.title}</div>
            <div className={'description'}>{product.description}</div>
            <div className={'price'}>
                <span>Стоемомть: <p>{product.price}</p></span>
            </div>
            <Button className={'add-btn'} onClick={onAddHandler}>Добавить в корзину</Button>
        </div>
    );
};

export default ProductItem;