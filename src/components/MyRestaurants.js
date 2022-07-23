import React from "react";

const MyRestaurants = ({ myRestaurant, onRemove }) => {
	return myRestaurant.map((r) => (
		<div key={r.id}>
			{r.category} {r.name}
			<button
				onClick={(e) => {
					e.stopPropagation();
					onRemove(r.id);
				}}
			>
				&times;
			</button>
		</div>
	));
};

export default MyRestaurants;
