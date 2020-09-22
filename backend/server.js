import express from "express";
import mongoose from "mongoose";
import Pusher from "pusher";
import cors from "cors";
import Messages from "./dbMessages.js";

// App initialization
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Pusher for Real-time Database functionality
const pusher = new Pusher({
	appId: "1077210",
	key: "df95e1dde6c8b0766d3b",
	secret: "f6a6b358a1d0841529d7",
	cluster: "eu",
	encrypted: true,
});

// Database connection
const db = mongoose.connection;

const DB_URI =
	"mongodb+srv://admin:Soda3291!@cluster0.nzhbt.mongodb.net/whatsappdb?retryWrites=true&w=majority";

mongoose.connect(DB_URI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

db.once("open", () => {
	console.log("DB Connection Established!");
	const messageCollection = db.collection("messages");
	const changeStream = messageCollection.watch();

	changeStream.on("change", (change) => {
		if (change.operationType === "insert") {
			const messageDetails = change.fullDocument;
			pusher.trigger("messages", "inserted", {
				name: messageDetails.name,
				message: messageDetails.message,
				timestamp: messageDetails.timestamp,
				received: messageDetails.received,
			});
		} else {
			console.log("Error triggering pusher");
		}
	});
});

// Routes
app.get("/", (req, res) => {
	res.status(200).send("Hello World");
});

// Get all messages
app.get("/messages", (req, res) => {
	Messages.find((err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(data);
		}
	});
});

// Create new message
app.post("/messages/add", (req, res) => {
	const message = req.body;

	Messages.create(message, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(201).send(data);
		}
	});
});

// Listener
app.listen(PORT, () => console.log(`Server Listening on 127.0.0.1:${PORT}`));
