/** @format */

import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
	return (
		<Paper
			component="form"
			sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 300 }}
		>
			<IconButton sx={{ p: "10px" }} aria-label="menu">
				<SearchIcon />
			</IconButton>
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder="Search Products here"
				inputProps={{ "aria-label": "search products" }}
			/>
		</Paper>
	);
}
