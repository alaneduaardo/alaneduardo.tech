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

  renderImage(img, side) {
    return img !== null && img !== '' && typeof img !== 'undefined' ? (
      <figure className={side}>
        <img src={img} />
      </figure>
    ) : '';
  }

  render() {
    let { title, img, side, children } = this.props;

    return (
      <section className="Section">
        { this.renderHeader(title) }
        { this.renderImage(img, side) }
        { children }
      </section>
    );
  }
}
