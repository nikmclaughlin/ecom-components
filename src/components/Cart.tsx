import { useStore } from "@nanostores/preact";
import { cartItems, removeCartItem } from "../cartStore";

/**
 * TODO
 * Add toast for item removed
 * Add cart quantity indicator badge
 * Items persist in cart between pages
 * Qty field in dropdown is editable
 *
 */

export const Cart = () => {
	const $cartItems = useStore(cartItems);

	const removeItem = (e: Event) => {
		// console.log(e.target.getAttribute("data-itemID"));
		e.preventDefault();
		// const removing = products e.target?.getAttribute("data-itemID")
		removeCartItem(e.target?.getAttribute("data-itemID"));
		// return <Toast type="info">Removed {removing.} from cart</Toast>
	};
	return (
		<>
			<div class="dropdown dropdown-end">
				<label
					tabindex="0"
					class="btn m-1 hover:scale-x-105 bg-secondary text-secondary-content"
				>
					Cart
				</label>
				<ul
					tabindex="0"
					class="menu dropdown-content p-2 shadow bg-secondary rounded-box w-max max-w-xl max-h-96"
				>
					{Object.values($cartItems).length ? (
						Object.values($cartItems).map((item) => (
							<li class="flex flex-row bg-base-100">
								<img class=" w-32" src={item.imageSrc}></img>
								<h3 class="text-base-content font-bold">{item.title}</h3>
								<p className="text-base-content">${item.price}</p>
								<p class="text-base-content">Qty {item.quantity}</p>
								<button data-itemID={item.id} onClick={removeItem}>
									x
								</button>
							</li>
						))
					) : (
						<p class="text-secondary-content">Your cart is empty</p>
					)}
				</ul>
			</div>
		</>
	);
};
