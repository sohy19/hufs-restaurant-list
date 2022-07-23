import React from "react";

const Restaurant = ({ id, name, category, onCreate }) => {
	return (
		<div onClick={() => onCreate(id, name, category)}>
			{category}, {name}
		</div>
	);
};

export default Restaurant;
