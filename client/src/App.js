// Import React Stuff
import React, { Component } from "react";
import Header from './components/Header'
import Footer from './components/Footer'
// Import CSS
import "./App.css";

// Import Routes
import Routes from './Routes';


class App extends Component {
  render() {
    return (
			<div>
				<Header/>
				<Routes/>
				<Footer/>
      </div>
    )
  }
}

export default App;
