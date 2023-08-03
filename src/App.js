/* eslint-disable max-lines */
/* eslint-disable react/jsx-max-depth */
import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './index.css';
import Input from './components/Input';
import Footer from './components/Footer';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    saveCards: [],
    cardFilter: '',
    selectFilter: '',
    superTrunfoFilter: false,
  };

  componentDidMount() {
    const savedDeck = localStorage.getItem('deck');
    if (savedDeck) {
      const deck = JSON.parse(savedDeck);
      const hasTrunfo = deck.some((card) => card.cardTrunfo);
      this.setState({ saveCards: deck, hasTrunfo });
    }
  }

  onInputChange = ({ target: { name, value, type, checked } }) => {
    const value2 = type === 'checkbox' ? checked : value;
    this.setState(
      {
        [name]: value2,
      },
      this.validationInputs,
    );
  };

  validationInputs = () => {
    const {
      cardName, cardDescription,
      cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare,
    } = this.state;

    const maxLimitValue = 210;
    const maxValue = 90;

    const inputName = (
      cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardRare.length > 0);

    const attr1Number = +(cardAttr1);
    const attr2Number = +(cardAttr2);
    const attr3Number = +(cardAttr3);

    const sumAttr = (attr1Number + attr2Number + attr3Number);

    const totalAtributs = sumAttr <= maxLimitValue;

    const verifyTotalAtributs = (
      attr1Number <= maxValue
      && attr2Number <= maxValue
      && attr3Number <= maxValue);

    const verifyAttrNegatives = (
      attr1Number >= 0
      && attr2Number >= 0
      && attr3Number >= 0);

    this.setState({
      isSaveButtonDisabled: !(
        inputName
        && totalAtributs
        && verifyTotalAtributs
        && verifyAttrNegatives),
    });
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      saveCards,
      hasTrunfo,
    } = this.state;

    let newCardTrunfo = false;

    if (cardTrunfo && !hasTrunfo) {
      newCardTrunfo = true;
      this.setState({ hasTrunfo: true });
    }

    const obj = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo: newCardTrunfo,
    };
    this.setState({ saveCards: [...saveCards, obj] }, () => {
      this.saveDeck();
    });

    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
    }, this.validationInputs);
  };

  saveDeck() {
    const { saveCards } = this.state;
    localStorage.setItem('deck', JSON.stringify(saveCards));
  }

  removeCard(cardIndex) {
    const { saveCards } = this.state;
    if (saveCards[cardIndex].cardTrunfo) {
      this.setState({ hasTrunfo: false });
    } else {
      this.setState({ hasTrunfo: true });
    }
    const updatedCards = saveCards.filter((_card, index) => index !== cardIndex);
    this.setState({ saveCards: updatedCards });
    localStorage.setItem('deck', JSON.stringify(updatedCards));
  }

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
      saveCards,
      cardFilter,
      selectFilter,
      superTrunfoFilter,
    } = this.state;

    const haveCards = (saveCards.length > 0);
    const cardNameVerify = cardName.length > 0;
    const cardDescriptionVerify = cardDescription.length > 0;
    const cardAttr1Verify = cardAttr1.length > 0;
    const cardAttr2Verify = cardAttr2.length > 0;
    const cardAttr3Verify = cardAttr3.length > 0;
    const cardImageVerify = cardImage.length > 0;
    const cardRareVerify = cardRare.length > 0;
    return (
      <main>
        <section className="card__criation">
          <div className="form__card__criation">
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </div>
          <div className="card__previwe__criation">
            <Card
              className="preview"
              cardName={ cardNameVerify ? cardName : 'Rimuru Tempest' }
              cardDescription={ cardDescriptionVerify ? cardDescription : `Rimuru Tempest 
            é o principal protagonista da série,
          fundador e Rei do país dos monstros Tempest da Grande Floresta de Jura.` }
              cardAttr1={ cardAttr1Verify ? cardAttr1 : '70' }
              cardAttr2={ cardAttr2Verify ? cardAttr2 : '70' }
              cardAttr3={ cardAttr3Verify ? cardAttr3 : '70' }
              cardImage={ cardImageVerify ? cardImage : 'https://i.pinimg.com/originals/50/14/11/501411c3528cf06ddb623b60289efe09.gif' }
              cardRare={ cardRareVerify ? cardRare : 'Normal' }
              cardTrunfo={ cardTrunfo }
            />
          </div>
        </section>

        <section className="filter__container">

          <div className="name__filter__container">
            <label htmlFor="input-filter">
              Qual Carta Você quer?
              <Input
                name="cardFilter"
                id="input-filter"
                test="name-filter"
                onChange={ this.onInputChange }
                disabled={ superTrunfoFilter }
              />
            </label>
          </div>

          <div className="rarity__filter__container">
            <label htmlFor="select-filter">
              Filtre por Raridade
              <select
                name="selectFilter"
                data-testid="rare-filter"
                id="select-filter"
                onChange={ this.onInputChange }
                disabled={ superTrunfoFilter }
              >
                <option value="">todas</option>
                <option value="Normal">Normal</option>
                <option value="Raro">Raro</option>
                <option value="Épica">Épica</option>
              </select>
            </label>
          </div>

          <div className="superTrunfo__filter__container">
            <label htmlFor="checkbox-filter">
              Super Trunfo
              <Input
                type="checkbox"
                id="checkbox-filter"
                name="superTrunfoFilter"
                test="trunfo-filter"
                onChange={ this.onInputChange }
              />
            </label>
          </div>

        </section>

        <section className="cards__container">
          {haveCards && (
            !superTrunfoFilter ? (
              <section className="cards__container">
                {saveCards
                  .filter((card) => {
                    const cardNameToLowerCase = card.cardName.toLowerCase();
                    const cardFilterToLowerCase = cardFilter.toLowerCase();
                    return cardNameToLowerCase.includes(cardFilterToLowerCase);
                  })
                  .filter((card) => (card.cardRare === selectFilter
                    || selectFilter === ''))
                  .map((card, index) => {
                    const cards = (
                      <div>
                        <Card
                          key={ card.cardName }
                          cardName={ card.cardName }
                          cardDescription={ card.cardDescription }
                          cardAttr1={ card.cardAttr1 }
                          cardAttr2={ card.cardAttr2 }
                          cardAttr3={ card.cardAttr3 }
                          cardImage={ card.cardImage }
                          cardRare={ card.cardRare }
                          cardTrunfo={ card.cardTrunfo }
                          className={ card.cardRare }
                        />
                        <button
                          type="button"
                          data-testid="delete-button"
                          onClick={ () => this.removeCard(index) }
                          className="card__remove"
                        >
                          Excluir
                        </button>
                      </div>);
                    return cards;
                  })}
              </section>
            ) : (
              <section className="cards__container">
                {saveCards
                  .filter((card) => card.cardTrunfo === superTrunfoFilter)
                  .map((card, index) => {
                    const cards = (
                      <div>
                        <Card
                          key={ card.cardName }
                          cardName={ card.cardName }
                          cardDescription={ card.cardDescription }
                          cardAttr1={ card.cardAttr1 }
                          cardAttr2={ card.cardAttr2 }
                          cardAttr3={ card.cardAttr3 }
                          cardImage={ card.cardImage }
                          cardRare={ card.cardRare }
                          cardTrunfo={ card.cardTrunfo }
                          className={ card.cardRare }
                        />
                        <button
                          type="button"
                          data-testid="delete-button"
                          onClick={ () => this.removeCard(index) }
                        >
                          Excluir
                        </button>
                      </div>);
                    return cards;
                  })}
              </section>
            ))}
        </section>
        <Footer />
      </main>
    );
  }
}

export default App;
