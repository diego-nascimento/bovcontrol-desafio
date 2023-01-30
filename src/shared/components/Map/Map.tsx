import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import * as SC from './style';

interface Props {
  latitude: number;
  longitude: number;
  farmName: string;
}

export const Map = ({ latitude, longitude, farmName }: Props) => {
  return (
    <SC.Wrapper>
      <MapContainer
        center={[latitude, longitude]}
        zoom={13}
        dragging={false}
        zoomControl={false}
        touchZoom={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
          <Popup>{`Fazenda ${farmName}`}</Popup>
        </Marker>
      </MapContainer>
    </SC.Wrapper>
  );
};
