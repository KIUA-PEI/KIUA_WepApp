import {React, useEffect, useState}  from 'react'
import {InfoContainerRT, InfoWrapperRT} from './InfoElements'
import './style.css'
import { PieChart, Pie, Tooltip, Cell, BarChart, CartesianGrid, XAxis,YAxis,Legend,Bar} from 'recharts';


import socketIOClient from "socket.io-client";
const ENDPOINT = "https://peiwebapp.azurewebsites.net/";




const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#0088FE', '#00C49F', '#FFBB28', '#FF8042','#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const RealTime = ({lightBg,id}) => {



    const [parkings, setParkings] = useState("");
    const [routers, setRouters] = useState("");
    const [date, setData] = useState("");
    
    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        
        socket.on("Parking", data => {
            console.log(data);
            setParkings([
                {name: data.PARK[1].Nome, total: data.PARK[1].Capacidade, ocupado: data.PARK[1].Ocupado, livre: data.PARK[1].Livre},
                {name: data.PARK[2].Nome, total: data.PARK[2].Capacidade, ocupado: data.PARK[2].Ocupado, livre: data.PARK[2].Livre},
                {name: data.PARK[3].Nome, total: data.PARK[3].Capacidade, ocupado: data.PARK[3].Ocupado, livre: data.PARK[3].Livre},
                {name: data.PARK[4].Nome, total: data.PARK[4].Capacidade, ocupado: data.PARK[4].Ocupado, livre: data.PARK[4].Livre},
                {name: data.PARK[5].Nome, total: data.PARK[5].Capacidade, ocupado: data.PARK[5].Ocupado, livre: data.PARK[5].Livre},
                {name: data.PARK[6].Nome, total: data.PARK[6].Capacidade, ocupado: data.PARK[6].Ocupado, livre: data.PARK[6].Livre},
                {name: data.PARK[7].Nome, total: data.PARK[7].Capacidade, ocupado: data.PARK[7].Ocupado, livre: data.PARK[7].Livre},
                {name: data.PARK[8].Nome, total: data.PARK[8].Capacidade, ocupado: data.PARK[8].Ocupado, livre: data.PARK[8].Livre},
                {name: data.PARK[9].Nome, total: data.PARK[9].Capacidade, ocupado: data.PARK[9].Ocupado, livre: data.PARK[9].Livre},
                {name: data.PARK[10].Nome, total: data.PARK[10].Capacidade, ocupado: data.PARK[10].Ocupado, livre: data.PARK[10].Livre},
                
            ]);
        });

        socket.on("Hello", data => {
            console.log("Date");
            setData(data);
        });
        socket.on("Router", data => {
            console.log(data);
            setRouters({
              deti: data.WIFIUSR[1].deti,
              dbio: data.WIFIUSR[1].dbio, 
              it: data.WIFIUSR[1].it, 
              dmat: data.WIFIUSR[1].dmat,
              dfis: data.WIFIUSR[1].fis,
              cp: data.WIFIUSR[1].cpct,
              dgeit: data.WIFIUSR[1].degeit,
              biblioteca: data.WIFIUSR[1].biblioteca,
              essua: data.WIFIUSR[1].essua,
              isca: data.WIFIUSR[1].isca,
              aauav: data.WIFIUSR[1].aauav,
              dcivil: data.WIFIUSR[1].dcivil,
              dem: data.WIFIUSR[1].dem,
              dlc: data.WIFIUSR[1].dlc,
              ieeta: data.WIFIUSR[1].ieeta
            });
        });
    
        return () => socket.close();
    
      }, []);



    return (
        <>
            <InfoContainerRT lightBg={lightBg} id={id}>
                <InfoWrapperRT>
                    <h1>Wifi Users</h1>
                    <h5>Each card presents you the number of users connected to the access points per departament from the University of Aveiro</h5>
                    <h5>{date}</h5>
                    <br></br>
                    <div class="row">
                        <div class="column">
                            <div class="card">
                            <div class="title">
                                <h2>Deti</h2>
                                <h6>Departamento de Eletrónica Telecomunicações e Informática</h6>
                            </div>
                                <div class="bar">
                                    <div class="emptybar"></div>
                                    <div class="filledbar"></div>
                                </div>
                                <div class="circle">
                                    <h2>{routers.deti} Users</h2>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <div class="title">
                                    <h2>Dbio</h2>
                                    <h6>Departamento de Biologia</h6>
                                </div>
                                <div class="bar">
                                    <div class="emptybar"></div>
                                    <div class="filledbar"></div>
                                </div>
                                <div class="circle">
                                    <h2>{routers.dbio} Users</h2>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <div class="title">
                                    <h2><b>Dmat</b></h2>
                                    <h6>Departamento de Matemática</h6>
                                </div>
                                <div class="bar">
                                    <div class="emptybar"></div>
                                    <div class="filledbar"></div>
                                </div>
                                <div class="circle">
                                    <h2>{routers.dmat} Users</h2>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <div class="title">
                                    <h2>It</h2>
                                    <h6>Instituto de Telecomunicações</h6>
                                </div>
                                <div class="bar">
                                    <div class="emptybar"></div>
                                    <div class="filledbar"></div>
                                </div>
                                <div class="circle">
                                    <h2>{routers.it} Users</h2>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <div class="title">
                                    <h2>Dfis</h2>
                                    <h6>Departamento de Física</h6>
                                </div>
                                <div class="bar">
                                    <div class="emptybar"></div>
                                    <div class="filledbar"></div>
                                </div>
                                <div class="circle">
                                    <h2>{routers.dfis} Users</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="column">
                            <div class="card">
                                <div class="title">
                                    <h2>CP</h2>
                                    <h6>Complexo Pedagógico</h6>
                                </div>
                                <div class="bar">
                                    <div class="emptybar"></div>
                                    <div class="filledbar"></div>
                                </div>
                                <div class="circle">
                                    <h2>{routers.cp} Users</h2>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <div class="title">
                                    <h2>Dgeit</h2>
                                    <h6>Departamento de Economia, Gestão, Engenharia Industrial e Turismo</h6>
                                </div>
                                <div class="bar">
                                    <div class="emptybar"></div>
                                    <div class="filledbar"></div>
                                </div>
                                <div class="circle">
                                    <h2>{routers.dgeit} Users</h2>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                            <div class="title">
                                    <h2>Biblioteca</h2>
                                    <h6>Universidade</h6>
                                </div>
                                <div class="bar">
                                    <div class="emptybar"></div>
                                    <div class="filledbar"></div>
                                </div>
                                <div class="circle">
                                    <h2>{routers.biblioteca} Users</h2>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <div class="title">
                                    <h2>Essua</h2>
                                    <h6>Escola Superior de Saúde da Universidade de Aveiro</h6>
                                </div>
                                <div class="bar">
                                    <div class="emptybar"></div>
                                    <div class="filledbar"></div>
                                </div>
                                <div class="circle">
                                    <h2>{routers.essua} Users</h2>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <div class="title">
                                    <h2>ISCA</h2>
                                    <h6>Instituto Superior de Contabilidade e Administração</h6>
                                </div>
                                <div class="bar">
                                    <div class="emptybar"></div>
                                    <div class="filledbar"></div>
                                </div>
                                <div class="circle">
                                    <h2>{routers.isca} Users</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="column">
                            <div class="card">
                                <div class="title">
                                    <h2>AAUAv</h2>
                                    <h6>Associação Académica da Universidade de Aveiro</h6>
                                </div>
                                <div class="bar">
                                    <div class="emptybar"></div>
                                    <div class="filledbar"></div>
                                </div>
                                <div class="circle">
                                    <h2>{routers.aauav} Users</h2>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <div class="title">
                                    <h2>Dcivil</h2>
                                    <h6>Departamento de Engenharia Civil</h6>
                                </div>
                                <div class="bar">
                                    <div class="emptybar"></div>
                                    <div class="filledbar"></div>
                                </div>
                                <div class="circle">
                                    <h2>{routers.dcivil} Users</h2>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                            <div class="title">
                                    <h2>Dem</h2>
                                    <h6>Departamento de Engenharia Mecânica</h6>
                                </div>
                                <div class="bar">
                                    <div class="emptybar"></div>
                                    <div class="filledbar"></div>
                                </div>
                                <div class="circle">
                                    <h2>{routers.dem} Users</h2>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <div class="title">
                                    <h2>Dlc</h2>
                                    <h6>Departamento de Línguas e Culturas</h6>
                                </div>
                                <div class="bar">
                                    <div class="emptybar"></div>
                                    <div class="filledbar"></div>
                                </div>
                                <div class="circle">
                                    <h2>{routers.dlc} Users</h2>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <div class="title">
                                    <h2>IEETA</h2>
                                    <h6>Instituto de Engenharia Eletrónica e Telemática de Aveiro</h6>
                                </div>
                                <div class="bar">
                                    <div class="emptybar"></div>
                                    <div class="filledbar"></div>
                                </div>
                                <div class="circle">
                                    <h2>{routers.ieeta} Users</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </InfoWrapperRT>
            </InfoContainerRT>
            <InfoContainerRT lightBg={!lightBg} id="parking">
                <InfoWrapperRT>
                <h1>Estacionamentos</h1>
                <h5>Dados em tempo real relativamente aos estacionamentos da Universidade de Aveiro</h5>
                   <br></br><br></br> 
                    <div style={{textAlign: "center"}}>
                        <div  className="graph" class="container">
                            <div class="row">
                            <h4>Número total de lugares nos Estacionamentos</h4>
                                <div class>
                                    <PieChart width={1000} height={400} >
                                        <Pie
                                            dataKey="total"
                                            isAnimationActive={true}
                                            data={parkings}
                                            cx={540}
                                            cy={175}
                                            outerRadius={150}
                                            fill="#8884d8"
                                            label="Estacionamento"
                                        >
                                            {COLORS.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        
                                            </Pie>
                                        <Tooltip/>
                                        <Legend style={{textAlign: "center"}}/>
                                            </PieChart>
                                </div>

                                <div class="col-5 col-md-2" >
                                    <article id="idBarchart">
                                        <h4>Ocupação dos Estacionamentos</h4>
                                        <br></br>
                                        <BarChart
                                            isAnimationActive={true}
                                            width={1000}
                                            height={400}
                                            data={parkings}
                                            margin={{
                                                top: 5,
                                                right: 30,
                                                left: 10,
                                                bottom: 5,
                                            }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Bar dataKey="ocupado" fill="#8884d8" />
                                            <Bar dataKey="livre" fill="#82ca9d" />
                                        </BarChart>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </InfoWrapperRT>
            </InfoContainerRT>
        </>
    )
}

export default RealTime;