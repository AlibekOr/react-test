import React, { useReducer } from 'react';

const initialCartState = {
    items: [],
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const existingItemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );

            if (existingItemIndex !== -1) {
                const updatedItems = [...state.items];
                updatedItems[existingItemIndex].quantity += action.payload.quantity;
                return { ...state, items: updatedItems };
            } else {
                return { ...state, items: [...state.items, action.payload] };
            }

        case 'REMOVE_ITEM':
            const filteredItems = state.items.filter(
                (item) => item.id !== action.payload
            );
            return { ...state, items: filteredItems };

        case 'CHANGE_QUANTITY':
            const updatedItems = state.items.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, quantity: action.payload.quantity };
                }
                return item;
            });
            return { ...state, items: updatedItems };

        default:
            return state;
    }
};

const Reduse3 = () => {
    const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

    const addItemToCart = (item) => {
        dispatch({ type: 'ADD_ITEM', payload: item });
    };

    const removeItemFromCart = (itemId) => {
        dispatch({ type: 'REMOVE_ITEM', payload: itemId });
    };

    const changeItemQuantity = (itemId, quantity) => {
        dispatch({ type: 'CHANGE_QUANTITY', payload: { id: itemId, quantity } });
    };

    return (
        <div>
            <h2>Корзина покупок</h2>

            <ul>
                {cartState.items.map((item) => (
                    <li key={item.id}>
                        {item.name} - Количество: {item.quantity}
                        <button onClick={() => changeItemQuantity(item.id, item.quantity - 1)}>-</button>
                        <button onClick={() => changeItemQuantity(item.id, item.quantity + 1)}>+</button>
                        <button onClick={() => removeItemFromCart(item.id)}>Удалить</button>
                    </li>
                ))}
            </ul>
            {/* Здесь вы можете добавить компоненты для добавления товаров в корзину */}
        </div>
    );
};

export default Reduse3;