import React from "react";

import { Avatar, IconButton } from "@material-ui/core";

import "./Chat.css";
import { MoreVert, SearchOutlined, AttachFile } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

const Chat = ({ messages }) => {
	return (
		<div className="chat">
			<div className="chat__header">
				<Avatar />

				<div className="chat__headerInfo">
					<h3>Kit Kat</h3>
					<p>Last seen at...</p>
				</div>

				<div className="chat__headerRight">
					<IconButton>
						<SearchOutlined />
					</IconButton>
					<IconButton>
						<AttachFile />
					</IconButton>
					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
			</div>

			<div className="chat__body">
				{/* Differentiate group & one on one chat */}

				{messages.map((message) => (
					<p
						className={`chat__message ${message.received && "chat__received"}`}
					>
						{" "}
						<span className="chat__name">{message.name}</span> {message.message}
						<span className="chat__timestamp">{message.timestamp}</span>
					</p>
				))}
			</div>

			<div className="chat__footer">
				<InsertEmoticonIcon />
				<form>
					<input
						type="text"
						placeholder="Type a message"
						// onChange={(e) => setInput(e.target.value)}
					/>
					<button type="submit">Send a Message</button>
				</form>
				<MicIcon />
			</div>
		</div>
	);
};

export default Chat;
