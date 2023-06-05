import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = () => {
  const item = {
    name: "Location 1",
    location: {
      lat: 35.8278,
      lng: 10.6346,
    },
  };

  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 35.8278,
    lng: 10.6346,
  };

  return (
    <div className="aboutUsElement">
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter}>
          <Marker key={item.name} position={item.location} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapContainer;
