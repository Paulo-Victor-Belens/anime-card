import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div
          className="footer__container"
        >
          Created By:
          {' '}
          <a
            href="https://www.linkedin.com/in/paulo-victor-780841247/"
            target="blank"
          >
            Paulo Victor Belens Moreira

          </a>
          {' '}
          in 08/04/2023

        </div>
      </footer>
    );
  }
}

export default Footer;
