import React from "react"
import "../styles/Map.scss"

class Map extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      map: null
    }
  }

  componentDidMount(){
    const map = new window.google.maps.Map(
      document.getElementById("map"),
      {
        center: new window.google.maps.LatLng(35.466642, 139.622485),
        zoom: 15,
        mapTypeId: "roadmap"
      }
    )
    this.setState({"map":map})
    console.log("map is open")
  }

  render(){
    return(
      <div id="map" />
    )
  }
}


export default Map;