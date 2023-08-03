/* eslint-disable react/jsx-max-depth */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Input from './Input';

class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <fieldset>
        <legend>Card GAME</legend>
        <section className="container-inputs">
          <label htmlFor="name">
            Name:&nbsp;
            <Input
              type="text"
              test="name-input"
              name="cardName"
              id="name"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <div>Description</div>

          <label htmlFor="description">
            <textarea
              id="description"
              name="cardDescription"
              cols="30"
              rows="10"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
              maxLength={ 150 }
            />
          </label>
          <div className="inputs__attributs__container">
            <label htmlFor="attr1">
              Strength:&nbsp;
              <Input
                type="number"
                id="attr1"
                name="cardAttr1"
                test="attr1-input"
                value={ cardAttr1 }
                onChange={ onInputChange }
              />
            </label>

            <label htmlFor="attr2">
              Defense:&nbsp;
              <Input
                type="number"
                test="attr2-input"
                name="cardAttr2"
                id="attr2"
                value={ cardAttr2 }
                onChange={ onInputChange }
              />
            </label>

            <label htmlFor="attr3">
              Agility:&nbsp;
              <Input
                type="number"
                id="attr3"
                test="attr3-input"
                name="cardAttr3"
                value={ cardAttr3 }
                onChange={ onInputChange }
              />
            </label>

            <label htmlFor="image">
              Imagem:&nbsp;
              <Input
                type="text"
                id="image"
                test="image-input"
                value={ cardImage }
                name="cardImage"
                onChange={ onInputChange }
              />
            </label>
          </div>
          <div className="inputs__rarity__container">
            <label htmlFor="rarity">
              Rarity:
              <select
                id="rarity"
                data-testid="rare-input"
                name="cardRare"
                value={ cardRare }
                onChange={ onInputChange }
              >
                <option value="Normal">Normal</option>
                <option value="Raro">Raro</option>
                <option value="Épica">Épica</option>
              </select>
            </label>

            {hasTrunfo ? <div>Você já tem um Super Trunfo em seu baralho</div> : (
              <label htmlFor="super-trunfo">
                <Input
                  type="checkbox"
                  hasTrunfo={ hasTrunfo }
                  test="trunfo-input"
                  id="superTrunfo"
                  name="cardTrunfo"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
                Super Asset
              </label>
            ) }
          </div>
          <button
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </section>
      </fieldset>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;

// .filter((card) => {
//   if (superTrunfoFilter === false) return true;
//   return card.cardTrunfo === true;
// })
