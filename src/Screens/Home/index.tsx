import React, { useEffect, useState } from 'react';
import Input from '../../Components/Input';
import { Container, Form } from './styles';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { LatLngExpression, LeafletMouseEvent } from 'leaflet';
import useGetLocation from '../../Hooks/useGetLocation';

export default function Home() {

    const { coords } = useGetLocation();



    const [event, setEvent] = useState({
        nome: "",
        local: "",
        data: "",
        coords: [0, 0]
    })

    if (!coords) {
        return <h2>Carregando...</h2>
    }



    return (
        <Container>
            <Form onSubmit={(e) => {
                e.preventDefault();
                console.log(event)
            }}>
                <h2>Cadastro de eventos</h2>

                <Input
                    label="Digite seu nome"
                    type="text"
                    name="nome"
                    value={event.nome}
                    onChange={setEvent}

                />

                <Input
                    label="Digit o local"
                    type="text"
                    name="local"
                    value={event.local}
                    onChange={setEvent}
                />

                <Input
                    label="Data do evento"
                    type="date"
                    name="data"
                    value={event.data}
                    onChange={setEvent}
                />
                <section style={{ width: '90%' }}>
                    <MapContainer
                        style={{ height: 300 }}
                        center={{ lat: coords[0], lng: coords[1] } as LatLngExpression}
                        zoom={17}
                        whenCreated={(map) => {
                            map.addEventListener('click', (ev: LeafletMouseEvent) => {
                                setEvent(prev => ({
                                    ...prev,
                                    coords: [ev.latlng.lat, ev.latlng.lng]
                                }))
                            })
                        }}
                    >
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[(event.coords[0] === 0) ? coords[0] : event.coords[0], (event.coords[1] === 0) ? coords[1] : event.coords[1]] as LatLngExpression}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>

                    </MapContainer>
                </section>
                <button type="submit"> Salvar </button>
            </Form>



        </Container>
    );
}


