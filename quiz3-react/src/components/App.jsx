import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import NavBar from "./NavBar";
import AuctionIndexPage from "./AuctionIndexPage";
import AuctionShowPage from "./AuctionShowPage";
// import CurrentDateTime from "./CurrentDateTime";
// import auctionIndexData from "../data/auction-index";
// import auctionShowData from "../data/auction-show";
import AuctionNewPage from "./AuctionNewPage";
import WelcomePage from "./WelcomePage"; 
import SignInPage from "./SignInPage";
import User from "../requests/user";
import Session from "../requests/session";

class App extends Component {
  constructor(props) {
    super(props);
     this.state = {
      loading: true,
      currentUser: undefined
    };

    this.getUser = this.getUser.bind(this);
    this.destroySession = this.destroySession.bind(this);
  }

  destroySession() {
    Session.destroy().then(() => {
      this.setState({ currentUser: undefined });
    });
  }
   getUser() {
    return User.current().then(data => {
      if (data.id) {
        this.setState({
          currentUser: data
        });
      }
    });
  }
   componentDidMount() {
    this.getUser().then(() => {
      this.setState({ loading: false });
    });
  }

  render() {
    const { currentUser, loading } = this.state;

     if (loading) {
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      );
    }

    return (
      <Router>
        <div>
        <NavBar onSignOut={this.destroySession} currentUser={currentUser} />
          <Switch>
              <Route path="/" exact component={WelcomePage} />
              <Route path="/auctions" exact component={AuctionIndexPage} />
              <AuthRoute isAuth={currentUser} path="/auctions/new" exact render={props => <AuctionNewPage {...props} />} />
              <Route path="/auctions/:id" component={AuctionShowPage} />
              <Route path="/sign_in" component={SignInPage} />
              )}
              />

          </Switch>
        </div>
      </Router>
    );
  }
}
 export default App;