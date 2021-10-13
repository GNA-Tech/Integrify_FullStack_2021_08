/** @format */

import styled from "styled-components";

export const HeaderContainer = styled.div`
	width: 100vw;

	--shadow-strength: 5%;
	--shadow: 220 3% 2%;

	--shadow: 220 70% 15%;
	--shadow-strength: 1%;

	box-shadow: 0 -2px 5px 0 hsl(220 70% 15% / calc(1% + 5%)),
		0 1px 1px -2px hsl(220 70% 15% / calc(1% + 10%)),
		0 2px 2px -2px hsl(220 70% 15% / calc(1% + 12%)),
		0 5px 5px -2px hsl(220 70% 15% / calc(1% + 13%)),
		0 9px 9px -2px hsl(220 70% 15% / calc(1% + 14%)),
		0 16px 16px -2px hsl(220 70% 15% / calc(1% + 20%));
`;

export const ContainerInner = styled.div`
	position: relative;
	z-index: 2;
	box-shadow: none;
`;

export const Container = styled.div`
	position: relative;
	z-index: 1;
	height: 80px;
	background: rgb(255, 255, 255);
	transition: height 250ms ease-in-out 0s;
`;

export const ContRoot = styled.div`
	width: 100%;
	height: 100%;
	margin-left: auto;
	box-sizing: border-box;
	margin-right: auto;
	display: block;
	padding: 10px 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const DivInner = styled.div``;
