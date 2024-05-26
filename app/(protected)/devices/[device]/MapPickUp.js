'use client'
import {useRef} from "react";
import StaticMap, {useControl, Marker} from 'react-map-gl';
import {MapboxOverlay} from "@deck.gl/mapbox";
import {Typography} from "antd";

import "mapbox-gl/dist/mapbox-gl.css"
import Pin from './pin'
import {useGps} from "@/app/(protected)/devices/[device]/Filter";

function DeckGLOverlay(props) {
    const overlay = useControl(() => new MapboxOverlay(props));
    overlay.setProps(props);
    return null;
}

const {Paragraph} = Typography;

export const MapPickUp = ({}) => {
    const map = useRef();
    const [token, gps, setGps] = useGps();

    const handleClick = (e) => {
        setGps(() => [e.lngLat.lng, e.lngLat.lat])
    }

    return (
        <>
            <div style={{
                position: 'absolute',
                right: 0,
                zIndex: 999,
                background: 'rgba(154, 153, 153, .7)',
                color: 'black'
            }}>
                <Paragraph copyable style={{margin: 0, padding: '0 2px'}}>
                    {gps[0]}{gps[1]}
                </Paragraph>
            </div>
            <StaticMap
                onClick={handleClick}
                ref={map}
                initialViewState={{
                    longitude: 121.9405871,
                    latitude: 30.9655215,
                    zoom: 15,
                    pitch: 0,
                    bearing: 0
                }}
                maxPitch={85}
                mapStyle="mapbox://styles/mapbox/dark-v9"
                mapboxAccessToken={token}
            >
                <Marker
                    longitude={gps[0] || 0}
                    latitude={gps[1] || 0}
                    anchor="bottom"
                >
                    <Pin size={20}/>
                </Marker>
                <DeckGLOverlay layers={[]}/>
            </StaticMap>
        </>
    )
}
