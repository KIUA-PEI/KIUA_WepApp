// Kafka Code
const kafka = require("kafka-node")
//const brokers = ["13.69.49.187:9092"]
//const brokers = ["localhost:9092"]

let parkData;
let wifiData;

//Creating the consumer
Consumer = kafka.Consumer,
client = new kafka.KafkaClient({kafkaHost: "13.69.49.187:9092"}),
consumer = new Consumer(
	client,
	[{ topic: 'parking', fromBeginning: true }, { topic: 'wifiusr', fromBeginning: true }],
	{ autoCommit: false },
  { connectionTimeout: 20000000},
);


//Consume messages handler
const consume = async () => {
	await consumer.connect()

	consumer.on('message', function (message) {
		const data = JSON.parse(new Buffer.from(message.value).toString());
		if(message.topic == 'parking'){
			console.log("PARKING");
      parkData = data;
			io.emit('Parking', data);
		} else {	
			console.log("ROUTERS");
      wifiData = data;
			io.emit('Router', data);
		}
		//console.log(data);
	});
}



consume().catch((err) => {
  console.error("error in consumer: ", err);
})


/* Server Code */
const PORT = process.env.PORT || 4001;
var cors = require('cors');
const express = require('express');
const APPINDEX = 'build/index.html';

const server = express()
  .use(cors())
  .use(express.static('build'))
  .get('/', (req, res) => res.sendFile(APPINDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});

let interval = 1000000;

io.on("connection", (socket) => {
  console.log("New client connected");
  io.emit("Hello", "Hello from server!");

  if(typeof parkData != "undefined"){
    io.emit('Parking', parkData);
  }
  if(typeof wifiData != "undefined"){
    io.emit('Router', wifiData);
  }

  if (interval) {
    clearInterval(interval);
  }

  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

function intervalFunc() {
  var d = new Date();
  let date = ("0" + d.getDate()).slice(-2);
  let month = ("0" + (d.getMonth() + 1)).slice(-2);
  let year = d.getFullYear();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();
  io.emit("Hello", year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds); 
}

setInterval(intervalFunc, 1000);
/*process.on('uncaughtException', function (err) {
  console.log("ERROR");
});*/
