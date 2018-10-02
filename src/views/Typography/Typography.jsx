import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

import { PanelHeader } from "components";

class Typography extends React.Component {
  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md={12}>
              <Card>
                <CardHeader>
                  <h3 className="title">Typography</h3>
                  <p className="category">
                    Created using Montserrat Font Family
                  </p>
                </CardHeader>
                <CardBody>
                  <div className="typography-line">
                    <h1>
                      <span>Header 1</span>{" "}
                    </h1>
                  </div>
                  <div className="typography-line">
                    <h2>
                      <span>Header 2</span>{" "}
                    </h2>
                  </div>
                  <div className="typography-line">
                    <h3>
                      <span>Header 3</span>{" "}
                    </h3>
                  </div>
                  <div className="typography-line">
                    <h4>
                      <span>Header 4</span>{" "}
                    </h4>
                  </div>
                  <div className="typography-line">
                    <h5>
                      <span>Header 5</span>{" "}
                    </h5>
                  </div>
                  <div className="typography-line">
                    <h6>
                      <span>Header 6</span>{" "}
                    </h6>
                  </div>
                  <div className="typography-line">
                    <p>
                      <span>Paragraph</span> {" "}
                      Oh, there's like a beep boop boop-a-doop on the side of it. Michael, have you ever just laid back and smoked a ton of mushrooms? Does rocks float on lava?
                    </p>
                  </div>
                  <div className="typography-line">
                    <span>Quote</span>
                    <blockquote>
                      <p className="blockquote blockquote-primary">
                       All right, I've created the Tower of Pimps. Everyone worship me. They're givin' me jib for crossin' my legs like a fem! That was like a Bulltrue with a Ghost except i had a shotgun and you had a Ghost. Space gravity is different to planet gravity.

                        <br />
                        <br />
                        <small>- Gavin</small>
                      </p>
                    </blockquote>
                  </div>

                  <div className="typography-line">
                    <span>Muted Text</span>
                    <p className="text-muted">
                     Oh, there's like a beep boop boop-a-doop on the side of it. Michael, have you ever just laid back and smoked a ton of mushrooms? Does rocks float on lava? 
                    </p>
                  </div>
                  <div className="typography-line">
                    <span>Primary Text</span>
                    <p className="text-primary">
                     Oh, there's like a beep boop boop-a-doop on the side of it. Michael, have you ever just laid back and smoked a ton of mushrooms? Does rocks float on lava? 
                    </p>
                  </div>
                  <div className="typography-line">
                    <span>Info Text</span>
                    <p className="text-info">
                     Oh, there's like a beep boop boop-a-doop on the side of it. Michael, have you ever just laid back and smoked a ton of mushrooms? Does rocks float on lava? {" "}
                    </p>
                  </div>
                  <div className="typography-line">
                    <span>Success Text</span>
                    <p className="text-success">
                     Oh, there's like a beep boop boop-a-doop on the side of it. Michael, have you ever just laid back and smoked a ton of mushrooms? Does rocks float on lava? {" "}
                    </p>
                  </div>
                  <div className="typography-line">
                    <span>Warning Text</span>
                    <p className="text-warning">
                     Oh, there's like a beep boop boop-a-doop on the side of it. Michael, have you ever just laid back and smoked a ton of mushrooms? Does rocks float on lava? 
                    </p>
                  </div>
                  <div className="typography-line">
                    <span>Danger Text</span>
                    <p className="text-danger">
                     Oh, there's like a beep boop boop-a-doop on the side of it. Michael, have you ever just laid back and smoked a ton of mushrooms? Does rocks float on lava? {" "}
                    </p>
                  </div>
                  <div className="typography-line">
                    <h2>
                      <span>Small Tag</span>
                      Header with small subtitle <br />
                      <small>Use "small" tag for the headers</small>
                    </h2>
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

export default Typography;
