import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.css';
import Properties from '../../data/Properties';

const getInfoWindowString = Properties => `
    <div class="house-info-wrapper">      
      <img src=${Properties.image} height="150px" width="180px" />

      <div class="house-info">
         <strong class="priceColor"> ${Properties.price} </strong> <br /><br />
          ${Properties.bedrooms} <br />
          ${Properties.bathrooms} <br />
          ${Properties.size} <br />
          ${Properties.address}
      </div>
    </div>`;

const handleApiLoaded = (map, maps) => {
    const markers = [];

    Properties.forEach((properties, i) => {
        markers.push(new maps.Marker({
            position: {
              lat: properties.lat,
              lng: properties.lng,                  
            },
            map,
        }));

        const infowindow = new maps.InfoWindow({
            content: getInfoWindowString(properties),
        });

        markers[i].addListener('click', () => {
            infowindow.open(map, markers[i]);
        });
    });
};

class Map extends Component {
    static defaultProps = {
        center: {
          lat: 30.26,
          lng: -97.74
        },
        zoom: 15
      };
    
    render() {
        return (
            <div className="style-map" style={{ height: '100vh', width: '60%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyClRpIvL_pW0C4tyG6Az6efOrdrGfrFtqk' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                />
            </div>
        )
    }
}

export default Map;
