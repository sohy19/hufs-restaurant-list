import React from "react";
import styled, { css } from "styled-components";

const CategoriesBlock = styled.div`
	display: flex;
	padding: 1rem;
	width: 768px;
	margin: 0 auto;
	@media screen and (max-width: 768px) {
		width: 100%;
		overflow-x: auto;
	}
`;

const Category = styled.div`
	font-size: 1.125rem;
	cursor: pointer;
	white-space: pre;
	text-decoration: none;
	color: inherit;
	padding-bottom: 0.25rem;

	&:hover {
		color: #495057;
	}
	& + & {
		margin-left: 1rem;
	}
	${(props) =>
		props.active &&
		css`
			font-weight: 600;
			border-bottom: 2px solid #22b8cf;
			color: #22b8cf;
			&:hover {
				color: #3bc9db;
			}
		`}

	& + & {
		margin-left: 1rem;
	}
`;

const categories = [
	{
		text: "전체",
	},
	{
		text: "한식",
	},
	{
		text: "중식",
	},
	{
		text: "일식",
	},
	{
		text: "양식",
	},
	{
		text: "카페",
	},
	{
		text: "마이페이지",
	},
];

const Categories = ({ category, onSelect }) => {
	return (
		<CategoriesBlock>
			{categories.map((c, idx) => (
				<Category
					key={idx}
					active={category === c.text}
					onClick={() => onSelect(c.text)}
				>
					{c.text}
				</Category>
			))}
		</CategoriesBlock>
	);
};

export default Categories;
