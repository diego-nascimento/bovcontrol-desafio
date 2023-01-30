import React, { useState } from 'react';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet';
import * as SC from './style';

interface Props {
  latitude: number;
  longitude: number;
  farmName?: string;
  draggable?: boolean;
  zoomable?: boolean;
  edit?: boolean;
}

export const Map = ({
  latitude,
  longitude,
  farmName,
  draggable = false,
  zoomable = false,
  edit = false,
}: Props) => {
  const [position, setPosition] = useState({ latitude, longitude });
  function MyComponent() {
    useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        setPosition({ latitude: lat, longitude: lng });
      },
      locationfound(e) {
        const { lat, lng } = e.latlng;
        setPosition({ latitude: lat, longitude: lng });
      },
    });
    return null;
  }

  return (
    <SC.Wrapper>
      <MapContainer
        center={[latitude, longitude]}
        zoom={13}
        dragging={draggable}
        zoomControl={zoomable}
        touchZoom={zoomable}
        scrollWheelZoom={zoomable}
        doubleClickZoom={zoomable}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {edit && <MyComponent />}
        {
          <Marker position={[position.latitude, position.longitude]}>
            {farmName && <Popup>{`Fazenda ${farmName}`}</Popup>}
          </Marker>
        }
      </MapContainer>
    </SC.Wrapper>
  );
};
