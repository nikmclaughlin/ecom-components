/**
 * TODO
 * Correct styling applied to toast - className appears but alert styles aren't applied?
 */
type Props = {
	type: "info" | "success" | "warning" | "error" | "";
	toastId: string;
	message: string;
};

export default function Toast({ type, toastId, message }: Props) {
	// Default styling for empty type
	if (type === "") {
		return (
			<li key={message} id={toastId} className="alert">
				<div>
					<span>{message}</span>
				</div>
			</li>
		);
	}

	// Otherwise return the type-styled alert
	return (
		<li key={message} id={toastId} className={`alert alert-${type}`}>
			<div>
				<span>{message}</span>
			</div>
		</li>
	);
}
