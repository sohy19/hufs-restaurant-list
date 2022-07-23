import React from "react";
import MyRestaurants from "./MyRestaurants";

const MyPage = ({ myRestaurant, onRemove, onToggle }) => {
	return (
		<div>
			<MyRestaurants
				myRestaurant={myRestaurant}
				onRemove={onRemove}
				onToggle={onToggle}
			/>
		</div>
	);
};

export default MyPage;

// 투두 리스트 모양으로 나오게
