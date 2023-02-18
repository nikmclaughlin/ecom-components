/**
 * TODO
 * Correct styling applied to toast - className appears but styles aren't applied?
 * Toast disappears after a set time
 */
type Props = {
	type: "info" | "success" | "warning" | "error" | "";
	message: string;
};

export default function Toast({ type, message }: Props) {
	// Default styling for empty type
	if (type === "") {
		return (
			<div className="alert">
				<div>
					<span>{message}</span>
				</div>
			</div>
		);
	}

	// Otherwise return the type-styled alert
	return (
		<div className={`alert alert-${type}`}>
			<div>
				<span>{message}</span>
			</div>
		</div>
	);
}
