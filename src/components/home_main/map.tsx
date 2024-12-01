import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
// import React from 'react';
// import ymaps from 'yandex-maps';

export const YandexMap = () => {
  // координаты центра карты
  const center = [55.7558, 37.6173];

  const mapContainerStyle = {
    width: '500px',
    height: '500px',
    borderRadius: '50px', // Добавьте скругление
};


  return (
    <YMaps query={{ apikey: '55560862-2dbf-47f8-9076-5dd76adc09a0' }}>
      <Map
        defaultState={{ center, zoom: 10 }}
        style={mapContainerStyle}
      >
        {/* Добавление маркера на центр карты */}
        <Placemark
                    geometry={center}
                    options={{
                        iconLayout: 'default#image',
                        iconImageHref: '/mark.svg', // Замените на URL вашего изображения
                        iconImageSize: [40, 40], // Размер изображения
                        iconImageOffset: [-15, -15] // Смещение изображения
                    }}
                />
      </Map>
    </YMaps>
  );
};