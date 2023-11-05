
import {useDispatch, useSelector, type TypedUseSelectorHook} from 'react-redux';
import {type AppDispatch, type RootState} from '.';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppCartItem= () => useAppSelector(state => state.cart.cartItem);
export const useAppShopItem= () => useAppSelector(state => state.shop.shopItems);


