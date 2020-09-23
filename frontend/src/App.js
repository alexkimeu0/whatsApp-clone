import React, { useEffect, useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import Chat from "./components/Chat";
import Pusher from "pusher-js";
import axios from "./axios";

const App = () => {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		axios.get("/messages").then((response) => {
			setMessages(response.data);
		});
	}, []);

	useEffect(() => {
		const pusher = new Pusher("df95e1dde6c8b0766d3b", {
			cluster: "eu",
		});

		const channel = pusher.subscribe("messages");
		channel.bind("inserted", (newMessage) => {
			setMessages([...messages, newMessage]);
		});

		// Clean up function
		return () => {
			channel.unbind_all();
			channel.unsubscribe("messages");
		};
	}, [messages]);

	return (
		<div className="app">
			<div className="app__body">
				<SideBar />
				<Chat messages={messages} />
			</div>
		</div>
	);
};

export default App;
