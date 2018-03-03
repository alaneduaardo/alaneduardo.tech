import React, { Component } from 'react';

import './Section.scss';

export default class Section extends Component {
  renderHeader(title) {
    return title !== null && title !== '' ? (
      <header>
        <h4>{title}</h4>
      </header>
    ) : '';
  }

  renderImage(img, imgSide) {
    return img !== null && img !== '' && typeof img !== 'undefined' ? (
      <figure className={imgSide}>
        <img src={img} />
      </figure>
    ) : '';
  }

  render() {
    let { title, img, imgSide, children } = this.props;

    return (
      <section className="Section">
        { this.renderHeader(title) }
        { this.renderImage(img, imgSide) }
        { children }
      </section>
    );
  }
}
