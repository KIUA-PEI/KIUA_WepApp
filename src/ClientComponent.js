import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
//const ENDPOINT = "http://peiwebapp.azurewebsites.net/:8080";
const ENDPOINT = process.env.PORT || 8080;

export default function ClientComponent() {
  const [parkings, setParkings] = useState("");
  const [routers, setRouters] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    socket.on("Parking", data => {
      setParkings({Nome: data[1].Nome, Capacidade: data[1].Capacidade, Ocupado: data[1].Ocupado, Livre: data[1].Livre});
      console.log("PARKING");
    });
    socket.on("Router", data => {
      setRouters({deti: data[0].deti, it: data[0].it, dmat: data[0].dmat});
      console.log("ROUTERS");
    });

    return () => socket.close();

  }, []);

  return (
    <div>
      <h4>Estacionamento: {parkings.Nome} Capacidade: {parkings.Capacidade} Ocupados: {parkings.Ocupado} Livres: {parkings.Livre}</h4>
      
      <h4>Deti: {routers.deti} It: {routers.it} Dmat: {routers.dmat}</h4>
    </div>
  );
}