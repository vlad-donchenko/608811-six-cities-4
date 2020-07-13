import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import OfferDetails from "../offer-details/offer-details.jsx";
import {offersType, onTitleClickType, offerIdType, activeCityType} from "../../types";
import {ActionCreator} from "../../reducer";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {offers, onTitleClick, offerId} = this.props;

    if (offerId) {
      const currentOffer = offers.find((offer) => {
        return Number(offer.id) === Number(offerId);
      });
      return (
        <OfferDetails offer={currentOffer}/>
      );
    }

    return (<Main offers={offers} onTitleClick={onTitleClick}/>);
  }

  render() {
    const {offers} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/details">
            <OfferDetails offer={offers[0]}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.defaultProps = {
  offerId: null
};

App.propTypes = {
  activeCity: activeCityType,
  offers: offersType,
  offerId: offerIdType,
  onTitleClick: onTitleClickType
};

const mapSateToProps = (state) => ({
  offerId: state.offerId,
  activeCity: state.activeCity
});

const mapDispatchToProps = (dispatch) => ({
  onTitleClick: (id) => {
    dispatch(ActionCreator.changeOfferId(id));
  }
});

export {App};
export default connect(mapSateToProps, mapDispatchToProps)(App);
