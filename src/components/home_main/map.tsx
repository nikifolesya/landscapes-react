import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useEffect, useState } from 'react';

export const YandexMap = ({ coordinates }: { coordinates: [number, number] }) => {
    const [mapState, setMapState] = useState({
        center: coordinates,
        zoom: 10,
    });

    useEffect(() => {
        setMapState({
            center: coordinates,
            zoom: 17,
        });
    }, [coordinates]);

    const mapContainerStyle = {
        width: '560px',
        height: '560px',
        borderRadius: '50px',
        overflow: 'hidden',
    };
    
    return (
        <YMaps query={{ apikey: '55560862-2dbf-47f8-9076-5dd76adc09a0' }}>
            <Map
                state={mapState}
                style={mapContainerStyle}
            >
                <Placemark
                    geometry={coordinates}
                    options={{
                        iconLayout: 'default#image',
                        iconImageHref: '/mark.svg',
                        iconImageSize: [35, 35], 
                        iconImageOffset: [-15, -15] 
                    }}
                />
            </Map>
        </YMaps>
    );
};
