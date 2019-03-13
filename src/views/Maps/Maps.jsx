import React from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
// react plugin used to create mapbox maps urbica/react-map-gl - github
import MapGL from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { PanelHeader } from "components";

const InteractMapBox = {
  viewport: {
    latitude: -25.047944,
    longitude: 134.003347,
    zoom: 3
  }
};


class FullScreenMap extends React.Component {
  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <h3 className="title">Maps by Mapbox</h3>
                </CardHeader>
                <CardBody>
                  <div id="map" className="map" >
                      <MapGL
                        style={{ width: '100%', height: '100%' }}
                        mapStyle='mapbox://styles/mapbox/streets-v11'
                        accessToken={'pk.eyJ1IjoiYmx1cmNyZWF0aXZlIiwiYSI6ImNqcmQ2cDN0dzBiYzg0M3FmY3E4NnM0bm8ifQ.ItKKVhLrdHbtJ7zfAQeG1Q'}
                        latitude={InteractMapBox.viewport.latitude}
                        longitude={InteractMapBox.viewport.longitude}
                        zoom={InteractMapBox.viewport.zoom}
                        onViewportChange={InteractMapBox.viewport}
                  />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default FullScreenMap;
