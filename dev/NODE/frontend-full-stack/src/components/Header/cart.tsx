/** @format */

import * as React from "react";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
	"& .MuiBadge-badge": {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		backgroundColor: "#088413",
		padding: "0 4px",
	},
}));

export default function CustomizedBadges() {
	return (
		<IconButton aria-label="cart">
			<StyledBadge badgeContent={8} color="secondary">
				<ShoppingCartIcon style={{ width: "2.5rem", height: "2.5rem" }} />
			</StyledBadge>
		</IconButton>
	);
}
