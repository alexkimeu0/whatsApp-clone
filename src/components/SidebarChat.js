import React from "react";
import { Avatar } from "@material-ui/core";

import "./SidebarChat.css";
const SidebarChat = () => {
	return (
		<div className="sidebarChat">
			<Avatar />

			<div className="sidebarChat__info">
				<h2>Crushie</h2>
				<p>Hey, check this out...</p>
			</div>
		</div>
	);
};

export default SidebarChat;
