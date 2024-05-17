export default function Page() {
    console.log(process.env.MAPBOX_ACCESS_TOKEN)
    return (
        <div style={{width: '100%', height: '100%', position: 'relative'}}>
            {/*<MapPickUp token={process.env.MAPBOX_ACCESS_TOKEN} />*/}
        </div>
    );
}
