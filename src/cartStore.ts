import { persistentMap } from "@nanostores/persistent";

// TODO: Persist cart across pages

export type CartItem = {
	slug: string;
	title: string;
	price: number;
	imageSrc: string;
	quantity: number;
}

export const cartItems = persistentMap<Record<string, CartItem>>('cartItems',{});

export function addCartItem({slug, title, price, imageSrc}: CartItem){
	const existingEntry = cartItems.get()[slug];
	// console.log(cartItems.get());
	if( existingEntry && existingEntry.quantity ){
		cartItems.setKey(slug, {
			...existingEntry,
			quantity: existingEntry.quantity + 1
		});
	} else {
		cartItems.setKey(
			slug,
			{slug, title, price, imageSrc, quantity: 1}
		);
	}
}

export function removeCartItem(slug: string){
	// TODO: confirm this is idiomatic for nanostores
	cartItems.setKey( slug, undefined );
 }