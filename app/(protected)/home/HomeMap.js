'use client'
import StaticMap, {useControl, Marker, Popup, Layer, Source} from "react-map-gl";
import {MapboxOverlay} from "@deck.gl/mapbox";
import {ScenegraphLayer} from "@deck.gl/mesh-layers";
import {useRef, useState} from "react";
import "mapbox-gl/dist/mapbox-gl.css"
import {trees} from "@/data/tree";
import {pointCollection} from "@/data/points";

function DeckGLOverlay(props) {
    const overlay = useControl(() => new MapboxOverlay(props));
    overlay.setProps(props);
    return null;
}
const skyLayer = {
    id: "sky",
    type: "sky",
    paint: {
        "sky-type": "atmosphere",
        "sky-atmosphere-sun": [0.0, 0.0],
        "sky-atmosphere-sun-intensity": 15,
    },
};

export const HomeMap = ({token, devices}) => {
    const map = useRef();
    const [popupInfo, setPopupInfo] = useState(null);

    const layers = [
        new ScenegraphLayer({
            id: "fields",
            data: [
                {
                    point: [121.94, 30.97],
                    heading: 1,
                },
            ],
            scenegraph: "https://mxzn-top.oss-cn-shanghai.aliyuncs.com/models/linGang/products/split_lin_gang_01.glb",
            sizeScale: 1,
            getPosition: (d) => d.point,
            // 位置 基于 3D 空间
            getTranslation: [-370, 130, -5],
            // 方向
            getOrientation: () => [0, 0, 90],
            // 环境
            _lighting: "pbr",
        }),
        new ScenegraphLayer({
            id: "tree",
            data: trees,
            scenegraph:
                "https://mxzn-top.oss-cn-shanghai.aliyuncs.com/models/linGang/others/tree1.glb",
            sizeScale: 1,
            getPosition: (d) => d.point,
            // 位置 基于 3D 空间
            getTranslation: [0, 0, -5],
            // 方向
            getOrientation: () => [0, 0, 90],
            // 环境
            _lighting: "pbr",
        }),
        new ScenegraphLayer({
            id: "shuifa",
            data: pointCollection,
            scenegraph:
                "https://mxzn-top.oss-cn-shanghai.aliyuncs.com/models/linGang/shui_fa.glb",
            sizeScale: 1,
            getPosition: (d) => d,
            // 位置 基于 3D 空间
            getTranslation: [0, 0, -5],
            // 方向
            getOrientation: () => [0, 90, 90],
            // 环境
            _lighting: "pbr",
            getColor: [255, 255, 255]
        }),
        new ScenegraphLayer({
            id: "fangwu",
            data: pointCollection,
            scenegraph:
                "https://mxzn-top.oss-cn-shanghai.aliyuncs.com/models/linGang/products/factory.glb",
            sizeScale: 1,
            getPosition:
                [
                    121.93543379518735,
                    30.982447310474456
                ],
            // 位置 基于 3D 空间
            getTranslation: [0, 0, 0],
            // 方向
            getOrientation: () => [0, 19, 90],
            // 环境
            _lighting: "pbr",
            getColor: [255, 255, 255]
        }),
        new ScenegraphLayer({
            id: "qi_xiang",
            data: [
                {point: [121.937454, 30.974914]},
                {point: [121.938162, 30.974974]},
                {point: [121.941002, 30.970843]},
                {point: [121.942504, 30.971008]},
                {point: [121.938760, 30.979095]},
                {point: [121.941460, 30.978305]},
            ],
            scenegraph:
                "https://mxzn-top.oss-cn-shanghai.aliyuncs.com/temp/qi_xiang.glb",
            sizeScale: 2,
            getPosition: d => d.point,
            // 位置 基于 3D 空间
            getTranslation: [0, 0, -6],
            // 方向
            getOrientation: () => [0, 19, 90],
            // 环境
            _lighting: "pbr",
            getColor: [255, 255, 255]
        }),
        new ScenegraphLayer({
            id: "yun_shang",
            data: [
                {point: [121.938162, 30.974974]},
                {point: [121.943049, 30.971849]},
                {point: [121.944534, 30.972056]},
                {point: [121.938181, 30.980210]},
                {point: [121.939733, 30.980261]},
            ],
            scenegraph:
                "https://mxzn-top.oss-cn-shanghai.aliyuncs.com/temp/yun_shang.glb",
            sizeScale: 2,
            getPosition: d => d.point,
            // 位置 基于 3D 空间
            getTranslation: [0, 0, -5],
            // 方向
            getOrientation: () => [0, 19, 90],
            // 环境
            _lighting: "pbr",
            getColor: [255, 255, 255]
        }),
        new ScenegraphLayer({
            id: "she_xiang_tou",
            data: [
                {point: [121.939572, 30.970748]},
                {point: [121.945654, 30.970748]},
                {point: [121.939572, 30.966286]},
                {point: [121.944394, 30.969990]},
                {point: [121.940112, 30.975787]},
                {point: [121.941979, 30.975834]},
            ],
            scenegraph:
                "https://mxzn-top.oss-cn-shanghai.aliyuncs.com/temp/she_xiang_tou.glb",
            sizeScale: 3,
            getPosition: d => d.point,
            // 位置 基于 3D 空间
            getTranslation: [0, 0, -5],
            // 方向
            getOrientation: () => [0, 19, 90],
            // 环境
            _lighting: "pbr",
            getColor: [255, 255, 255]
        }),
    ]

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
            <Source
                id="mapbox-dem"
                type="raster-dem"
                url="mapbox://mapbox.mapbox-terrain-dem-v1"
                tileSize={512}
                maxzoom={14}
            >
                <Layer {...skyLayer} />
            </Source>

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
                            s
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
            <DeckGLOverlay layers={layers}/>
        </StaticMap>
    )
}
