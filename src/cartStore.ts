import { map } from "nanostores";

// TODO: Persist cart across pages

export type CartItem = {
	id: number;
	title: string;
	price: number;
	imageSrc: string;
	quantity: number;
}

export const cartItems = map<Record<number, CartItem>>({});

export function addCartItem({id, title, price, imageSrc}: CartItem){
	const existingEntry = cartItems.get()[id];
	// console.log(cartItems.get());
	if( existingEntry && existingEntry.quantity ){
		cartItems.setKey(id, {
			...existingEntry,
			quantity: existingEntry.quantity + 1
		});
	} else {
		cartItems.setKey(
			id,
			{id, title, price, imageSrc, quantity: 1}
		);
	}
}

export function removeCartItem(id: number){
	// TODO: check if this is idiomatic for nanostores
	cartItems.setKey( id, undefined );
 }