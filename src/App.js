import React from "react";
import HomePage from "./pages/home-page/home-page";
import ShopPage from "./pages/shop-page/shop-page";
import SignInSignUpPage from "./pages/sign-in-sign-up-page/sign-in-sign-up-page";
import Header from "./components/header/header";
import { Switch, Route } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((userSnapshot) => {
          const { displayName, email } = userSnapshot.data();
          this.setState({
            currentUser: {
              id: userSnapshot.id,
              displayName,
              email,
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
