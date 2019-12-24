import React, {Component} from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';
import Form from './form.js';

class App extends Component {
  state = {
    location: {
      lat: 51.505,
      lng: -0.09,  
    },
    zoom: 13,
  }
};
// eslint-disable-next-line
class UserLocation extends Component {
  state = {
    fields: {}
  }

  onSubmit = fields => {
    this.setState({ fields });
  };
    
    renderUserLocationn() {
      return(
        <div className="UserLocation">
          <Form  onSubmit={fields => this.onSubmit(fields)} />     
        </div> 
      )
    }	
  
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position)=> {
    this.setState( {
      location: {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
    }) 
    });
  }

 render() {
  const position = [this.state.location.lat, this.state.location.lng];
  return (
    <Map className="map" center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
  );
 }
}
export default App;
