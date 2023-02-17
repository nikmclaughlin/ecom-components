import { useStore } from "@nanostores/preact";
import { cartItems } from "../cartStore";

/**
 * TODO
 * Button on dropdown menu item to remove that item from cart
 * Items persist in cart between pages
 * Qty field in dropdown is editable
 *
 */

export const Cart = () => {
	const $cartItems = useStore(cartItems);
	return (
		<>
			<div class="dropdown dropdown-end">
				<label tabindex="0" class="btn m-1 hover:scale-x-105 bg-secondary">
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
								<button>x</button>
							</li>
						))
					) : (
						<p class="text-base-content">Your cart is empty</p>
					)}
				</ul>
			</div>
		</>
	);
};
