import type { ComponentChildren } from "preact";
import { addCartItem, CartItemDisplayInfo } from "../cartStore";
import { addToast } from "./Toaster";

type Props = {
	item: CartItemDisplayInfo;
	children: ComponentChildren;
};

//TODO: add toast for item added

export default function AddToCartForm({ item, children }: Props) {
	function addToCart(e: Event) {
		e.preventDefault();
		addCartItem(item);
		addToast(item);
	}
	return (
		<form onSubmit={addToCart} class="place-self-center">
			{children}
		</form>
	);
}
