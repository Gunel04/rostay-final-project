import { createContext, useEffect, useState } from "react";
import { useCart } from "react-use-cart";

export const CartTotalContext = createContext();

export const CartTotalProvider = ({ children }) => {
    const { cartTotal } = useCart();
    const [total, setTotal] = useState(cartTotal);
    console.log(total);
    
    useEffect(() => {
        setTotal(cartTotal)
    }, [cartTotal])
    console.log(total);
    
    return (
        <CartTotalContext.Provider value={[total, setTotal]}>
            {children}
        </CartTotalContext.Provider>
    )
}