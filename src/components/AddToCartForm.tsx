import type { ComponentChildren } from "preact";
import { addCartItem, CartItemDisplayInfo } from "../cartStore";

type Props = {
	item: CartItemDisplayInfo;
	children: ComponentChildren;
};

export default function AddToCartForm({ item, children }: Props) {
	function addToCart(e: Event) {
		e.preventDefault();
		addCartItem(item);
	}
	return (
		<form onSubmit={addToCart} class="place-self-center">
			{children}
		</form>
	);
}
