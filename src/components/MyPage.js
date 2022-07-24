import React from "react";
import MyRestaurants from "./MyRestaurants";

const MyPage = ({ myRestaurant, onRemove, onToggle }) => {
	return myRestaurant.map((r) => (
		<MyRestaurants
			key={r.id}
			id={r.id}
			name={r.name}
			category={r.category}
			checked={r.checked}
			onRemove={onRemove}
			onToggle={onToggle}
		/>
	));
};

export default MyPage;

// 투두 리스트 모양으로 나오게
