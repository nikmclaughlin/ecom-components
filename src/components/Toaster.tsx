import { render } from "preact";
import type { CartItem } from "../cartStore";
import Toast from "./Toast";

// Tried to use Preact's useID() here but it broke during bundling 😕 Hours lost: ~6, lol
let childId = Math.random().toString();

function removeToast() {
	document.getElementById(childId)?.remove();
	childId = Math.random().toString();
}

export function addToast(item: CartItem) {
	Promise.resolve().then(() =>
		render(
			<Toast
				type="success"
				toastId={childId}
				message={`Added ${item.title} to your cart!`}
			/>,
			document.getElementById("toaster")
		)
	);
	setTimeout(removeToast, 2000);
}

export default function Toaster() {
	return <ul id="toaster" className="toast toast-top toast-end mt-20"></ul>;
}
