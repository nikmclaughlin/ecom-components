import type { ComponentChildren } from "preact";
import type { ShopItem } from "../components/productDB";
import { addCartItem, CartItem } from "../cartStore";
import { addToast } from "./Toaster";

type Props = {
	item: ShopItem;
	children: ComponentChildren;
};

function createCartItem(product: ShopItem): CartItem {
	return {
		slug: product.slug,
		title: product.title,
		price: product.price,
		imageSrc: product.imageSrc,
		quantity: 1,
	};
}

export default function AddToCartForm({ item, children }: Props) {
	function addToCart(e: Event) {
		e.preventDefault();
		const toCart = createCartItem(item);
		addCartItem(toCart);
		addToast(toCart);
	}
	return (
		<form onSubmit={addToCart} class="place-self-center">
			{children}
		</form>
	);
}
