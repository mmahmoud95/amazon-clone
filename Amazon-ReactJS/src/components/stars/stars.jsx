/* eslint-disable react/prop-types */
import React from "react";
import {IoMdStarOutline} from "react-icons/io";
import {IoMdStar} from "react-icons/io";
export const Stars = (props) => {
	return props.productRating === 1 ? (
		<div className='d-inline '>
			<IoMdStar
				style={{
					color: "#ff9900",
					fontSize: `${props.starSize}px`,
				}}
			/>
			<IoMdStarOutline
				style={{
					color: "#ff9900",
					fontSize: `${props.starSize}px`,
				}}
			/>
			<IoMdStarOutline
				style={{
					color: "#ff9900",
					fontSize: `${props.starSize}px`,
				}}
			/>
			<IoMdStarOutline
				style={{
					color: "#ff9900",
					fontSize: `${props.starSize}px`,
				}}
			/>
			<IoMdStarOutline
				style={{
					color: "#ff9900",
					fontSize: `${props.starSize}px`,
				}}
			/>
		</div>
	) : props.productRating === 2 ? (
		<div>
			<IoMdStar
				style={{
					color: "#ff9900",
					fontSize: `${props.starSize}px`,
				}}
			/>
			<IoMdStar
				style={{
					color: "#ff9900",
					fontSize: `${props.starSize}px`,
				}}
			/>
			<IoMdStarOutline
				style={{
					color: "#ff9900",
					fontSize: `${props.starSize}px`,
				}}
			/>
			<IoMdStarOutline
				style={{
					color: "#ff9900",
					fontSize: `${props.starSize}px`,
				}}
			/>
			<IoMdStarOutline
				style={{
					color: "#ff9900",
					fontSize: `${props.starSize}px`,
				}}
			/>
		</div>
	) : props.productRating === 3 ? (
		<div>
			<IoMdStar
				style={{
					color: "#ff9900",
					fontSize: `${props.starSize}px`,
				}}
			/>
			<IoMdStar
				style={{
					color: "#ff9900",
					fontSize: `${props.starSize}px`,
				}}
			/>
			<IoMdStar
				style={{
					color: "#ff9900",
					fontSize: `${props.starSize}px`,
				}}
			/>
			<IoMdStarOutline
				style={{
					color: "#ff9900",
					fontSize: `${props.starSize}px`,
				}}
			/>
			<IoMdStarOutline
				style={{
					color: "#ff9900",
					fontSize: `${props.starSize}px`,
				}}
			/>
		</div>
	) : props.productRating === 4 ? (
		<div>
			<IoMdStar
				style={{
					color: "#ff9900",
					fontSize: `${props.starSize}px`,
				}}
			/>
			<IoMdStar
				style={{
					color: "#ff9900",
					fontSize: `${props.starSize}px`,
				}}
			/>
			<IoMdStar
				style={{
					color: "#ff9900",
					fontSize: `${props.starSize}px`,
				}}
			/>
			<IoMdStar
				style={{
					color: "#ff9900",
					fontSize: `${props.starSize}px`,
				}}
			/>
			<IoMdStarOutline
				style={{
					color: "#ff9900",
					fontSize: `${props.starSize}px`,
				}}
			/>
		</div>
	) : props.productRating === 5 ? (
		<div>
			<IoMdStar
				style={{
					color: "#ff9900",
					fontSize: `${props.starSize}px`,
				}}
			/>
			<IoMdStar
				style={{
					color: "#ff9900",
					fontSize: `${props.starSize}px`,
				}}
			/>
			<IoMdStar
				style={{
					color: "#ff9900",
					fontSize: `${props.starSize}px`,
				}}
			/>
			<IoMdStar
				style={{
					color: "#ff9900",
					fontSize: `${props.starSize}px`,
				}}
			/>
			<IoMdStar
				style={{
					color: "#ff9900",
					fontSize: `${props.starSize}px`,
				}}
			/>
		</div>
	) : (
		<div>
			<IoMdStarOutline
				style={{
					color: "#ff9900",
					fontSize: `${props.starSize}px`,
				}}
			/>
			<IoMdStarOutline
				style={{
					color: "#ff9900",
					fontSize: `${props.starSize}px`,
				}}
			/>
			<IoMdStarOutline
				style={{
					color: "#ff9900",
					fontSize: `${props.starSize}px`,
				}}
			/>
			<IoMdStarOutline
				style={{
					color: "#ff9900",
					fontSize: `${props.starSize}px`,
				}}
			/>
			<IoMdStarOutline
				style={{
					color: "#ff9900",
					fontSize: `${props.starSize}px`,
				}}
			/>
		</div>
	);
};
