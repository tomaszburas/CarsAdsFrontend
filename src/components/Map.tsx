import {MapContainer, Marker, TileLayer, Popup} from "react-leaflet"
import styled from "styled-components"
import 'leaflet/dist/leaflet.css';
import '../utils/fix-map-icon'

export const Map = () => {
    return <MapWrapper>
        <MapContainer center={[50.8540189,20.5454305]} zoom={18}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
                        />
            <Marker position={[50.8540189,20.5454305]}>
                <Popup>
                    <h2>CK</h2>
                    <p>siema</p>
                </Popup>
            </Marker>
        </MapContainer>
    </MapWrapper>
}

const MapWrapper = styled.div`
  height: calc(100vh - 3rem);
  width: 100%;
  background-color: ${props => props.theme.colors.green};

  .leaflet-container {
    height: 100%;
  }
`
