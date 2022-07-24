import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTrashCan,
	faSquareCheck,
	faSquare,
} from "@fortawesome/free-regular-svg-icons";

const MyRestaurants = ({ id, name, category, checked, onRemove, onToggle }) => {
	return (
		<div onClick={() => onToggle(id)}>
			{checked ? (
				<FontAwesomeIcon icon={faSquareCheck} size="xl" />
			) : (
				<FontAwesomeIcon icon={faSquare} size="xl" />
			)}
			{checked}
			{category} {name}
			<FontAwesomeIcon
				icon={faTrashCan}
				size="xl"
				onClick={(e) => {
					e.stopPropagation();
					onRemove(id);
				}}
			/>
		</div>
	);
};

export default MyRestaurants;
