import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      className,
    } = this.props;
    return (
      <section className={ className } id={ cardTrunfo ? 'super-trunfo' : '' }>
        <div className="name-container">{ cardName }</div>
        <div className="image-container">
          <img src={ cardImage } alt={ cardName } />
        </div>
        <div className="rarity-container">
          <div className="rarities" id={ cardRare }>{ cardRare }</div>
          {cardTrunfo && <div className="trunfo-container">Super Trunfo</div>}
        </div>
        <div className="discription-container">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          { cardDescription }
        </div>
        <div className="attributes-container">
          <div>
            Str:&nbsp;
            { cardAttr1 }
          </div>
          <div>
            Def:&nbsp;
            { cardAttr2 }
          </div>
          <div>
            Agg:&nbsp;
            { cardAttr3 }
          </div>
        </div>
        {/* {cardTrunfo ? <div data-testid="trunfo-card">Super Trunfo</div> : ''} */}

      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
