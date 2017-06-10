import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        // Google Maps .Map() takes a reference to an HTML node
        // where we want to render this map to. 
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }
    
    render() {
        // this.refs.map in this component will reference this element
        // this is how we make third party libraries work with React/Redux
        // that have no idea about the ecosystem.
        return <div ref="map" />;
    }
}

export default GoogleMap;