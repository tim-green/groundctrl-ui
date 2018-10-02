import React from "react";
import { Container } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

class Footer extends React.Component {
  render() {
    return (
      <footer
        className={"footer" + (this.props.default ? " footer-default" : "")}
      >
        <Container fluid={this.props.fluid ? true : false}>
          <nav>
            <ul>
              <li>
                <a href="#">Link #1</a>
              </li>
              <li>
                <a href="#">Link #2</a>
              </li>
              <li>
                <a href="#">Link #3</a>
              </li>
              <li>
                <a href="#">Link #4</a>
              </li>
            </ul>
          </nav>
          <div className="copyright">
            &copy; copyright {1900 + new Date().getYear()}.
          </div>
        </Container>
      </footer>
    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
};

export default Footer;
