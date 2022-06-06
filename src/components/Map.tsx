import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import "../utils/fix-map-icon";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { SimpleAdEntity } from "types";
import { SingleAd } from "./SingleAd";
import { API_URL } from "../config";
import { Footer } from "./Footer";

export const Map = () => {
  const { searchValue } = useSelector((store: RootState) => store.search);
  const [ads, setAds] = useState<SimpleAdEntity[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${API_URL}/ad/search/${searchValue}`);
      const data = await res.json();

      setAds(data.ads);
    })();
  }, [searchValue]);

  return (
    <MapWrapper>
      <MapContainer center={[51.9189046, 19.1343786]} zoom={7}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
        />
        {ads ? (
          ads.map((ad) => (
            <Marker key={ad.id} position={[ad.lat, ad.lon]}>
              <Popup>
                <SingleAd id={ad.id} />
              </Popup>
            </Marker>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </MapContainer>
      <Footer />
    </MapWrapper>
  );
};

const MapWrapper = styled.div`
  height: calc(100vh - 3rem);
  width: 100%;
  background-color: ${(props) => props.theme.colors.green};

  .leaflet-container {
    height: calc(100% - 1.6rem);
  }

  .leaflet-popup-content p {
    margin: 0.5rem 0;
  }
`;
