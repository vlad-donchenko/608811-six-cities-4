import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import OfferDetails from "../offer-details/offer-details.jsx";
import {offersType} from "../../types";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      siteId: null
    };

    this._handleTitleClick = this._handleTitleClick.bind(this);
  }

  _renderApp() {
    const {offers} = this.props;
    const {siteId} = this.state;

    if (siteId) {
      const currentOffer = offers.find((offer) => {
        return Number(offer.id) === Number(siteId);
      });
      return (
        <OfferDetails offer={currentOffer}/>
      );
    }

    return (<Main offers={offers} onTitleClick={this._handleTitleClick}/>);
  }

  render() {
    const {offers} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-component">
            <Main offers={offers} onTitleClick={this._handleTitleClick}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _handleTitleClick(id) {
    this.setState({
      siteId: id,
    });
  }
}

App.propTypes = {
  offers: offersType,
};

export default App;
