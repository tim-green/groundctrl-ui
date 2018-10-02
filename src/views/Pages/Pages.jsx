import React, { Component } from "react";
import {
  Table,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardTitle
} from "reactstrap";

import { Button, PanelHeader } from "components";

class TemplatePages extends Component {
  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col>
              <Card>
               <CardHeader>
                  <h3 className="title">Page Title</h3>
                  <p className="category">
                    <h4>How up is space? </h4>
                  </p>
                </CardHeader>
                <CardBody>
                 <h4>Don't be a pleb!</h4>
                   <p>Ray, look at you tucked up in bed, you little bloody Ray! Michael's a douche pot! CHA CHA CHA CHA! Ray, look at you tucked up in bed, you little bloody Ray! OOOOOOOOOOOOOOHHHHHHHHH EHHHHHHHH!!!! Screw you Michael, you pissy little piss pot!</p>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th />
                        <th className="text-center">Free</th>
                        <th className="text-center">Free Free</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>The sky is bigger than the ground.</td>
                        <td className="text-center">16</td>
                        <td className="text-center">160</td>
                      </tr>
                      <tr>
                        <td>The sky is bigger than the ground.</td>
                        <td className="text-center">5</td>
                        <td className="text-center">13</td>
                      </tr>
                      <tr>
                        <td>The sky is bigger than the ground.</td>
                        <td className="text-center">7</td>
                        <td className="text-center">27</td>
                      </tr>
                      <tr>
                        <td>The sky is bigger than the ground.</td>
                        <td className="text-center">
                          <i className="fa fa-check text-success" />
                        </td>
                        <td className="text-center">
                          <i className="fa fa-check text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td>The sky is bigger than the ground.</td>
                        <td className="text-center">
                          <i className="fa fa-check text-success" />
                        </td>
                        <td className="text-center">
                          <i className="fa fa-check text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td>The sky is bigger than the ground.</td>
                        <td className="text-center">
                          <i className="fa fa-times text-danger" />
                        </td>
                        <td className="text-center">
                          <i className="fa fa-check text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td>The sky is bigger than the ground.</td>
                        <td className="text-center">
                          <i className="fa fa-times text-danger" />
                        </td>
                        <td className="text-center">
                          <i className="fa fa-check text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td />
                        <td className="text-center">Free</td>
                        <td className="text-center">Free Free</td>
                      </tr>
                      <tr>
                        <td />
                        <td className="text-center">
                          <Button
                            href="#"
                            round
                            fill
                            disabled
                            bsStyle="default"
                          >
                            Incorrect Version
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default TemplatePages;