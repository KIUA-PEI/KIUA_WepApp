// Kafka Code
const kafka = require("kafka-node")
//const brokers = ["13.69.49.187:9092"]
//const brokers = ["localhost:9092"]

//Creating the consumer
Consumer = kafka.Consumer,
client = new kafka.KafkaClient({kafkaHost: "13.69.49.187:9092"}),
consumer = new Consumer(
	client,
	[{ topic: 'parking', fromBeginning: true }, { topic: 'wifiusr', fromBeginning: true }],
	{ autoCommit: false }
);


//Consume messages handler
const consume = async () => {
	await consumer.connect()

	consumer.on('message', function (message) {
		const data = JSON.parse(new Buffer.from(message.value).toString());
		if(message.topic == 'parking'){
			console.log("PARKING");
			io.emit('Parking', data);
		} else {	
			console.log("ROUTERS");
			io.emit('Router', data);
		}
		console.log(data);
	});
}



/* Server Code */
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
var cors = require('cors');
const path = require('path');

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);
app.use(cors());

consume().catch((err) => {
  console.error("error in consumer: ", err)
})

const server = http.createServer(app);

/*app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../app', 'build', 'index.html'));
  });*/

//const io = socketIo(server);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});

let interval;

io.on("connection", (socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  //interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));