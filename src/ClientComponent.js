import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "https://peiwebapp.azurewebsites.net/:4001";
//const ENDPOINT = "http://localhost:4001";

export default function ClientComponent() {
  const [parkings, setParkings] = useState("");
  const [routers, setRouters] = useState("");
  const [date, setData] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    socket.on("Hello", data => {
      console.log("Date");
      setData(data);
    });

    socket.on("Parking", data => {
      setParkings({Nome: data.PARK[1].Nome, Capacidade: data.PARK[1].Capacidade, Ocupado: data.PARK[1].Ocupado, Livre: data.PARK[1].Livre});
    });
    socket.on("Router", data => {
      setRouters({deti: data.WIFIUSR[1].deti, it: data.WIFIUSR[1].it, dmat: data.WIFIUSR[1].dmat});
    });


    return () => socket.close();

  }, []);

  return (
    <div>
      <h6>Data: {date}</h6>
      <h4>Estacionamento: {parkings.Nome} Capacidade: {parkings.Capacidade} Ocupados: {parkings.Ocupado} Livres: {parkings.Livre}</h4>
      
      <h4>Deti: {routers.deti} It: {routers.it} Dmat: {routers.dmat}</h4>
    </div>
  );
}