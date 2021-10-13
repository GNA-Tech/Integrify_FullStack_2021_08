/** @format */

import styled from "styled-components";

export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    flex: 1 1 0;
}
`;

export const SerachDivInner = styled.div`
	position: relative;
	flex: 1 1 0;
	max-width: 670px;
	margin-left: auto;
	margin-right: auto;
`;

export const SearchInner = styled.div`
	display: inline-flex;
	flex-direction: column;
	position: relative;
	min-width: 0;
	padding: 0;
	margin: 0;
	border: 0;
	vertical-align: top;
	width: 100%;
`;

export const SearchInput = styled.input`
	width: 70%;
	padding: 10px 45px;
	font-family: system-ui;
	font-size: 16px;
	letter-spacing: inherit;
	color: currentColor;
	border: 1px solid #7d879c;
	border-radius: 25px;
	box-sizing: content-box;
	height: 1.4375em;
	margin: 0;
	display: block;
	min-width: 0;
	width: 100%;
	animation-name: mui-auto-fill-cancel;
	animation-duration: 10ms;

	&:focus {
		outline: none;
	}
`;

export const SearchButton = styled.button`
	position: absolute;
	right: -90px;
	z-index: 3;
	top: 0;
	height: 100%;
	border-top: none;
	border-bottom: none;
	border-right: none;
	border-left: 1px solid #7d879c;
	padding: 0 10px 0 10px;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;
