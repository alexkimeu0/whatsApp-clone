import React from "react";

import { Avatar, IconButton } from "@material-ui/core";

import "./Chat.css";
import { MoreVert, SearchOutlined, AttachFile } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

const Chat = () => {
	return (
		<div className="chat">
			<div className="chat__header">
				<Avatar />

				<div className="chat__headerInfo">
					<h3>Kit Kat</h3>
					<p>Last seen at...</p>
				</div>

				<div class="chat__headerRight">
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
				<p className="chat__message">
					{" "}
					<span className="chat__name">Kit Kat</span> Hey, check this out. I
					just got you a PS5 whole package-:)
					<span className="chat__timestamp">{new Date().toUTCString()}</span>
				</p>

				<p className="chat__message chat__received">
					{" "}
					<span className="chat__name"></span> What!!! Girl after mine own
					heart!-:)
					<span className="chat__timestamp">{new Date().toUTCString()}</span>
				</p>

				<p className="chat__message">
					{" "}
					<span className="chat__name">Kit Kat</span> Wanna come over & smash
					some games tonight?
					<span className="chat__timestamp">{new Date().toUTCString()}</span>
				</p>

				<p className="chat__message chat__received">
					{" "}
					<span className="chat__name"></span> Thought you'll never ask. Coming
					like 'The Flash'.
					<span className="chat__timestamp">{new Date().toUTCString()}</span>
				</p>
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
