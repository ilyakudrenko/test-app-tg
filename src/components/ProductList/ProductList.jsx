import React from 'react';
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";

const products = [
    {id: '1', title: 'Кроссфит Курс 1', price: 5000, description: 'Хороший Кроссфит курс'},
    {id: '2', title: 'Кроссфит Курс 2', price: 1200, description: 'Оличный Кроссфит курс'},
    {id: '3', title: 'Кроссфит Курс 3', price: 112, description: 'Хороший Кроссфит курс'},
    {id: '4', title: 'Кроссфит Курс 4', price: 4000, description: 'Оличный Кроссфит курс'},
    {id: '5', title: 'Кроссфит Курс 5', price: 600, description: 'Хороший Кроссфит курс'},
    {id: '6', title: 'Кроссфит Курс 6', price: 900, description: 'Оличный Кроссфит курс'},
    {id: '7', title: 'Кроссфит Курс 7', price: 12000, description: 'Дорогой Кроссфит курс'},
    {id: '8', title: 'Кроссфит Курс 8', price: 50, description: 'Дешевый Кроссфит курс'},
]

const getTotalPrice = (items) => {
     return items.reduce((acc, item) => {
         return acc += item.price;
     }, 0 )
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg} = useTelegram();

    const onAdd = (product ) => {
        const aleadyAdded = addedItems.find(item => item.id === product.id);
        let newItms = [];

        if(aleadyAdded) {
            newItms = addedItems.filter(item => item.id !== product.id);
        }
        else{
            newItms = [...addedItems, product];
        }

        setAddedItems(newItms);

        if(newItms.length === 0) {
            tg.MainButton.hide();
        }
        else{
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItms)}`
            })
        }
    }

    return (
        <div className="list">
            {products.map(item => (
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default ProductList;



// import React from 'react';
//
// const ProductList = () => {
//     return (
//         <div>
//             ProductList
//         </div>
//     );
// };
//
// export default ProductList;