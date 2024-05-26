'use client'
import StaticMap, {useControl, Marker, Popup} from "react-map-gl";
import {MapboxOverlay} from "@deck.gl/mapbox";
import {useRef, useState} from "react";
import "mapbox-gl/dist/mapbox-gl.css"
import Pin from '@/app/(protected)/devices/[device]/pin'
function DeckGLOverlay(props) {
    const overlay = useControl(() => new MapboxOverlay(props));
    overlay.setProps(props);
    return null;
}
export const HomeMap = ({token, devices}) => {
    const map = useRef();
    const [popupInfo, setPopupInfo] = useState(null);
    return (
        <StaticMap
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
            {
                devices.map((i, index) => {
                    return (
                        <Marker
                            key={`marker-${index}`}
                            longitude={i.longitude}
                            latitude={i.latitude}
                            anchor="bottom"
                            onClick={e => {
                                e.originalEvent.stopPropagation();
                                setPopupInfo(i);
                            }}
                        >
                            <Pin />
                        </Marker>
                    )
                })
            }

            {popupInfo && (
                <Popup
                    anchor="top"
                    longitude={Number(popupInfo.longitude)}
                    latitude={Number(popupInfo.latitude)}
                    onClose={() => setPopupInfo(null)}
                >
                    <div>
                        <a
                            target="_new"
                        >
                            这是一个优秀的空气设备
                        </a>
                    </div>
                </Popup>
            )}
            <DeckGLOverlay layers={[]}/>
        </StaticMap>
    )
}
