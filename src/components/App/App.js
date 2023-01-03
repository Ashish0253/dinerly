import React from "react";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import "./App.css";
const Yelp = require("../../util/Yelp").default;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      returnedBusinesses: [],
    };

    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    let temp = [];
    Yelp.search(term, location, sortBy).then((businesses) => {
      temp = businesses;
      console.log(temp);
      this.setState({
        returnedBusinesses: temp,
      });
      console.log(this.state.returnedBusinesses);
    });

    // const businesses = Yelp.search(term, location, sortBy);
    // console.log(businesses);

    // businesses.map(business => {
    //   this.setState({
    //     returnedBusinesses: business
    //   });
    //   console.log('chal rha h');
    //   console.log(this.state.returnedBusinesses);
    // });
  }

  render() {
    return (
      <div className="App">
        <h1>Dinerley</h1>
        {/* <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.returnedBusinesses} /> */}
      </div>
    );
  }
}

export default App;
