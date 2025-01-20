import React from 'react';
import { YMaps, Map, Placemark} from '@pbe/react-yandex-maps';
import styles from './MapComponent.module.css';

interface MapComponentProps {
    coordinates: [number, number] | null;
}

export const MapComponent: React.FC<MapComponentProps> = ({ coordinates }) => {
    const mapContainerStyle = {
        width: '85vw',
        height: '75vh',
        borderRadius: '50px',
        overflow: 'hidden',
    };

    return (
        <div id="map" className={styles.map_container}>
            <YMaps>
                <Map
                    state={coordinates ? { center: coordinates, zoom: 16 } : { center: [55.7558, 37.6176], zoom: 12 }}
                    style={mapContainerStyle}
                    modules={['templateLayoutFactory', 'layout.ImageWithContent']}
                    options={{
                        suppressMapOpenBlock: true,
                        yandexMapDisablePoiInteractivity: true,
                        mapAutoFocus: false
                    }}
                >
                    {coordinates && (
                        <Placemark
                            geometry={coordinates}
                            options={{
                                iconLayout: 'default#image',
                                iconImageHref: '/mark.svg',
                                iconImageSize: [35, 35],
                                iconImageOffset: [-15, -15]
                            }}
                        />
                    )}
                </Map>
            </YMaps>
        </div>
    );
};


