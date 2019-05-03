import React, { Component } from "react"
import ReactMapGL from "react-map-gl"
//import 'mapbox-gl/dist/mapbox-gl.css';
import "../styles/Map.scss"

const token = "pk.eyJ1IjoidGFrYW5vcmlmdWt1eWFtYSIsImEiOiJjanQybTAxc3UwamVrNDRsdm84OHVqdmxhIn0.jcgc3xIqdApUUed_5cexUw"


class Map extends Component {
  state = {
    viewport:{
      width: 400,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8,
    }
  }
  render(){
    return(
      <ReactMapGL
        className="map"
        {...this.state.viewport} 
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken={token}
      >

      </ReactMapGL>
    )
  }
}
export default Map;