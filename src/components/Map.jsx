import React from "react"
import mapboxgl from "mapbox-gl"
import 'mapbox-gl/dist/mapbox-gl.css'

class Map extends React.Component{
  componentDidMount(){
    this.map = new mapboxgl.Map({
      container: this.container,
      style: 'mapbox://styles/mapbox/streets-v9',
      zoom:15,
    })
  }
  componentWillUnmount(){
    this.map.remove()
  }
  render(){
    const styles = {
      height: "100vh",
    }
    return <div className={'map'} ref={e => (this.container = e)} style={styles} />
  }
}
export default Map;