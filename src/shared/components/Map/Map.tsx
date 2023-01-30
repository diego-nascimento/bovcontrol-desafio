import React, { useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';
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
  setValue?: UseFormSetValue<any>;
  error?: boolean;
}

type positionTypes = {
  latitude: number;
  longitude: number;
};

export const Map = ({
  latitude,
  longitude,
  farmName,
  draggable = false,
  zoomable = false,
  edit = false,
  error,
  setValue,
}: Props) => {
  const [position, setPosition] = useState<positionTypes>({
    latitude,
    longitude,
  });
  function MyComponent() {
    const map = useMapEvents({
      click: (e) => {
        if (edit && setValue) {
          const { lat, lng } = e.latlng;
          setPosition({ latitude: lat, longitude: lng });
          setValue('latitude', lat);
          setValue('longitude', lng);
        }
      },
      locationfound(e) {
        !latitude && !longitude && map.flyTo(e.latlng, map.getZoom());
      },
    });
    map.locate();
    return null;
  }

  return (
    <SC.Wrapper>
      {error && <SC.Error>Um marcador é obrigatorio</SC.Error>}
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

        {position && (
          <Marker position={[position.latitude, position.longitude]}>
            {farmName && <Popup>{`Fazenda ${farmName}`}</Popup>}
          </Marker>
        )}
      </MapContainer>
    </SC.Wrapper>
  );
};
