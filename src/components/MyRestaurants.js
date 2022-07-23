import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTrashCan,
	faSquareCheck,
	faSquare,
} from "@fortawesome/free-regular-svg-icons";

const MyRestaurants = ({ myRestaurant, onRemove, onToggle }) => {
	return myRestaurant.map((r) => (
		<>
			<div key={r.id} onClick={() => onToggle(r.id)}>
				{r.checked ? (
					<FontAwesomeIcon icon={faSquareCheck} size="xl" />
				) : (
					<FontAwesomeIcon icon={faSquare} size="xl" />
				)}
				{r.checked}
				{r.category} {r.name}
				<FontAwesomeIcon
					icon={faTrashCan}
					size="xl"
					onClick={(e) => {
						e.stopPropagation();
						onRemove(r.id);
					}}
				/>
			</div>
		</>
	));
};

export default MyRestaurants;
