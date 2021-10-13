/** @format */

import * as React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../icons/cart";
import * as style from "./cart-button.module.css";

interface CartButtonProps {
	quantity: number;
}
export function CartButton({ quantity }: CartButtonProps) {
	return (
		<Link
			aria-label={`Shopping Cart with ${quantity} items`}
			to="/cart"
			className={style.cartButton}
		>
			<CartIcon />
			{quantity > 0 && <div className={style.badge}>{quantity}</div>}
		</Link>
	);
}

export default CartButton;
