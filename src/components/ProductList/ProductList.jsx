import React, { useState } from 'react'; // Add useState here
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import { useTelegram } from "../../hooks/useTelegram";

const products = [
    {id: '1', title: 'Кроссфит 1', price: 5000, description: 'Хороший Кроссфит курс'},
    {id: '2', title: 'Кроссфит 2', price: 1200, description: 'Оличный Кроссфит курс'},
    {id: '3', title: 'Кроссфит 3', price: 112, description: 'Хороший Кроссфит курс'},
    {id: '4', title: 'Кроссфит 4', price: 4000, description: 'Оличный Кроссфит курс'},
    {id: '5', title: 'Кроссфит 5', price: 600, description: 'Хороший Кроссфит курс'},
    {id: '6', title: 'Кроссфит 6', price: 900, description: 'Оличный Кроссфит курс'},
    {id: '7', title: 'Кроссфит 7', price: 12000, description: 'Дорогой Кроссфит курс'},
    {id: '8', title: 'Кроссфит 8', price: 50, description: 'Дешевый Кроссфит курс'},
    {id: '9', title: 'Кроссфит Бомба', price: 5000, description: 'Лучший курс'},
];

const getTotalPrice = (items) => {
    return items.reduce((acc, item) => acc + item.price, 0);
};

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const { tg } = useTelegram();

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id); // Fix the typo
        let newItems = [];

        if (alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems);

        if (newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            });
        }
    };

    return (
        <div className="list">
            {products.map(item => (
                <ProductItem
                    key={item.id}
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default ProductList;
