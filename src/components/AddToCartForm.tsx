import { ComponentChildren, render } from "preact";
import { addCartItem, CartItemDisplayInfo } from "../cartStore";
import Toast from "./Toast";

type Props = {
	item: CartItemDisplayInfo;
	children: ComponentChildren;
};

//TODO: add toast for item added

export default function AddToCartForm({ item, children }: Props) {
	function addToCart(e: Event) {
		e.preventDefault();
		addCartItem(item);
		const notify = (
			<Toast type="success" message={`${item.title} is in your cart!`} />
		);
		render(notify, document.getElementById("toaster"));
	}
	return (
		<form onSubmit={addToCart} class="place-self-center">
			{children}
		</form>
	);
}
